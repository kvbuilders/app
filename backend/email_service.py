import aiosmtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
import logging

logger = logging.getLogger(__name__)


async def send_email(to_email: str, subject: str, html_content: str):
    """Send email using Gmail SMTP"""
    try:
        message = MIMEMultipart("alternative")
        message["From"] = os.environ['FROM_EMAIL']
        message["To"] = to_email
        message["Subject"] = subject
        
        html_part = MIMEText(html_content, "html")
        message.attach(html_part)
        
        await aiosmtplib.send(
            message,
            hostname=os.environ['SMTP_HOST'],
            port=int(os.environ['SMTP_PORT']),
            username=os.environ['SMTP_USER'],
            password=os.environ['SMTP_PASSWORD'],
            start_tls=True,
        )
        logger.info(f"Email sent successfully to {to_email}")
        return True
    except Exception as e:
        logger.error(f"Failed to send email to {to_email}: {str(e)}")
        return False


async def send_inquiry_notification(inquiry_data: dict):
    """Send notification email to business owner about new inquiry"""
    html_content = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
            .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
            .header {{ background: linear-gradient(135deg, #2C5F4E 0%, #1A3A2E 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }}
            .content {{ background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }}
            .field {{ margin-bottom: 15px; }}
            .field-label {{ font-weight: bold; color: #2C5F4E; }}
            .field-value {{ color: #555; margin-left: 10px; }}
            .footer {{ text-align: center; margin-top: 20px; color: #888; font-size: 12px; }}
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>🏠 New Inquiry Received!</h1>
            </div>
            <div class="content">
                <p>You have received a new inquiry from your website:</p>
                
                <div class="field">
                    <span class="field-label">Name:</span>
                    <span class="field-value">{inquiry_data['name']}</span>
                </div>
                
                <div class="field">
                    <span class="field-label">Email:</span>
                    <span class="field-value">{inquiry_data['email']}</span>
                </div>
                
                <div class="field">
                    <span class="field-label">Phone:</span>
                    <span class="field-value">{inquiry_data.get('phone', 'Not provided')}</span>
                </div>
                
                <div class="field">
                    <span class="field-label">Service:</span>
                    <span class="field-value">{inquiry_data['service']}</span>
                </div>
                
                <div class="field">
                    <span class="field-label">Message:</span>
                    <div style="background: white; padding: 15px; border-radius: 5px; margin-top: 10px;">
                        {inquiry_data['message']}
                    </div>
                </div>
                
                <div class="field">
                    <span class="field-label">Received:</span>
                    <span class="field-value">{inquiry_data['timestamp']}</span>
                </div>
            </div>
            <div class="footer">
                <p>This is an automated message from KV Builders website.</p>
            </div>
        </div>
    </body>
    </html>
    """
    
    return await send_email(
        to_email=os.environ['FROM_EMAIL'],
        subject=f"New Inquiry from {inquiry_data['name']} - {inquiry_data['service']}",
        html_content=html_content
    )


async def send_customer_confirmation(customer_email: str, customer_name: str):
    """Send confirmation email to customer"""
    html_content = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
            .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
            .header {{ background: linear-gradient(135deg, #D4A574 0%, #B8936F 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }}
            .content {{ background: #FAF8F5; padding: 30px; border-radius: 0 0 10px 10px; }}
            .logo {{ font-size: 24px; font-weight: bold; margin-bottom: 10px; }}
            .contact-info {{ background: white; padding: 20px; border-radius: 5px; margin-top: 20px; }}
            .contact-item {{ margin: 10px 0; }}
            .footer {{ text-align: center; margin-top: 20px; color: #888; font-size: 12px; }}
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <div class="logo">🏠 KV Builders</div>
                <h2>Thank You for Contacting Us!</h2>
            </div>
            <div class="content">
                <p>Dear {customer_name},</p>
                
                <p>Thank you for your interest in KV Builders. We have received your inquiry and our team will review it shortly.</p>
                
                <p>We typically respond to inquiries within 24 hours during business days. One of our representatives will contact you soon to discuss your project requirements.</p>
                
                <div class="contact-info">
                    <h3 style="color: #2C5F4E; margin-top: 0;">Our Contact Information:</h3>
                    <div class="contact-item">📞 Phone: 98430 72490</div>
                    <div class="contact-item">✉️ Email: kvbuilders23@gmail.com</div>
                    <div class="contact-item">📍 Address: No. 36, 1st Floor, S.N.D Lay-out, Street No.4, Tatabad, Coimbatore - 641 012</div>
                </div>
                
                <p style="margin-top: 20px;">We look forward to working with you!</p>
                
                <p style="color: #2C5F4E; font-weight: bold;">Best regards,<br>KV Builders Team</p>
            </div>
            <div class="footer">
                <p>This is an automated confirmation message. Please do not reply to this email.</p>
            </div>
        </div>
    </body>
    </html>
    """
    
    return await send_email(
        to_email=customer_email,
        subject="Thank You for Your Inquiry - KV Builders",
        html_content=html_content
    )
