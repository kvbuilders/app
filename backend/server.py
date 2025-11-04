from fastapi import FastAPI, APIRouter, HTTPException, Depends, Request
from fastapi.security import HTTPBasic, HTTPBasicCredentials
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone, timedelta
import secrets
from email_service import send_inquiry_notification, send_customer_confirmation
import redis.asyncio as aioredis
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection with connection pooling
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(
    mongo_url,
    maxPoolSize=50,
    minPoolSize=10,
    maxIdleTimeMS=45000,
    connectTimeoutMS=10000,
    serverSelectionTimeoutMS=10000
)
db = client[os.environ['DB_NAME']]

# Redis connection for caching and rate limiting
redis_client = None

# Rate limiter
limiter = Limiter(key_func=get_remote_address)

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Security
security = HTTPBasic()


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class ContactInquiry(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: Optional[str] = None
    service: str
    message: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    status: str = "new"  # new, contacted, closed

class ContactInquiryCreate(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    service: str
    message: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

# Admin authentication
def verify_admin(credentials: HTTPBasicCredentials = Depends(security)):
    correct_password = os.environ['ADMIN_PASSWORD']
    is_correct = secrets.compare_digest(credentials.password, correct_password)
    
    if not is_correct:
        raise HTTPException(
            status_code=401,
            detail="Incorrect password",
            headers={"WWW-Authenticate": "Basic"},
        )
    return credentials

# Contact Form Endpoints
@api_router.post("/contact", response_model=ContactInquiry)
async def submit_contact_form(input: ContactInquiryCreate):
    """Handle contact form submission"""
    try:
        # Create inquiry object
        inquiry_obj = ContactInquiry(**input.model_dump())
        
        # Convert to dict and serialize datetime
        doc = inquiry_obj.model_dump()
        doc['timestamp'] = doc['timestamp'].isoformat()
        
        # Save to database
        await db.contact_inquiries.insert_one(doc)
        
        # Prepare data for email
        email_data = {
            'name': inquiry_obj.name,
            'email': inquiry_obj.email,
            'phone': inquiry_obj.phone or 'Not provided',
            'service': inquiry_obj.service,
            'message': inquiry_obj.message,
            'timestamp': inquiry_obj.timestamp.strftime('%Y-%m-%d %H:%M:%S UTC')
        }
        
        # Send emails (don't wait for them to complete)
        import asyncio
        asyncio.create_task(send_inquiry_notification(email_data))
        asyncio.create_task(send_customer_confirmation(inquiry_obj.email, inquiry_obj.name))
        
        return inquiry_obj
    except Exception as e:
        logger.error(f"Error processing contact form: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to process inquiry")

@api_router.get("/admin/inquiries", response_model=List[ContactInquiry])
async def get_all_inquiries(credentials: HTTPBasicCredentials = Depends(verify_admin)):
    """Get all contact inquiries (admin only)"""
    try:
        inquiries = await db.contact_inquiries.find({}, {"_id": 0}).sort("timestamp", -1).to_list(1000)
        
        # Convert ISO string timestamps back to datetime objects
        for inquiry in inquiries:
            if isinstance(inquiry['timestamp'], str):
                inquiry['timestamp'] = datetime.fromisoformat(inquiry['timestamp'])
        
        return inquiries
    except Exception as e:
        logger.error(f"Error fetching inquiries: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch inquiries")

@api_router.patch("/admin/inquiries/{inquiry_id}")
async def update_inquiry_status(
    inquiry_id: str, 
    status: str,
    credentials: HTTPBasicCredentials = Depends(verify_admin)
):
    """Update inquiry status (admin only)"""
    try:
        result = await db.contact_inquiries.update_one(
            {"id": inquiry_id},
            {"$set": {"status": status}}
        )
        
        if result.modified_count == 0:
            raise HTTPException(status_code=404, detail="Inquiry not found")
        
        return {"message": "Status updated successfully"}
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error updating inquiry status: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to update status")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()