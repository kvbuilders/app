import { useState, useEffect } from 'react';
import { Mail, Phone, Calendar, Tag, MessageSquare, RefreshCw, Lock } from 'lucide-react';
import { toast } from 'sonner';

const AdminDashboard = () => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState('all'); // all, new, contacted, closed

  const handleLogin = (e) => {
    e.preventDefault();
    if (password) {
      setIsAuthenticated(true);
      fetchInquiries(password);
    }
  };

  const fetchInquiries = async (pwd) => {
    setLoading(true);
    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL || '';
      const response = await fetch(`${backendUrl}/api/admin/inquiries`, {
        headers: {
          'Authorization': 'Basic ' + btoa(`admin:${pwd}`)
        }
      });

      if (response.status === 401) {
        toast.error('Incorrect password');
        setIsAuthenticated(false);
        return;
      }

      if (!response.ok) {
        throw new Error('Failed to fetch inquiries');
      }

      const data = await response.json();
      setInquiries(data);
    } catch (error) {
      console.error('Error fetching inquiries:', error);
      toast.error('Failed to load inquiries');
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (inquiryId, newStatus) => {
    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL || '';
      const response = await fetch(`${backendUrl}/api/admin/inquiries/${inquiryId}?status=${newStatus}`, {
        method: 'PATCH',
        headers: {
          'Authorization': 'Basic ' + btoa(`admin:${password}`)
        }
      });

      if (!response.ok) {
        throw new Error('Failed to update status');
      }

      toast.success('Status updated successfully');
      fetchInquiries(password);
    } catch (error) {
      console.error('Error updating status:', error);
      toast.error('Failed to update status');
    }
  };

  const filteredInquiries = filter === 'all' 
    ? inquiries 
    : inquiries.filter(inq => inq.status === filter);

  const getStatusColor = (status) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'contacted': return 'bg-yellow-100 text-yellow-800';
      case 'closed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #FAF8F5 0%, #FFFFFF 100%)' }}>
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full mx-4" style={{ border: '1px solid rgba(212, 165, 116, 0.2)' }}>
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ background: 'linear-gradient(135deg, #D4A574 0%, #B8936F 100%)' }}>
              <Lock className="text-white" size={32} />
            </div>
            <h2 className="text-3xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: '#2C5F4E' }}>
              Admin Login
            </h2>
            <p className="text-gray-600 mt-2">Enter password to access inquiries</p>
          </div>
          
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              className="w-full px-4 py-3 rounded-lg border-2 mb-4 focus:outline-none"
              style={{ borderColor: 'rgba(212, 165, 116, 0.3)' }}
              required
            />
            <button
              type="submit"
              className="w-full py-3 rounded-full font-semibold text-white"
              style={{ background: 'linear-gradient(135deg, #D4A574 0%, #B8936F 100%)' }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4" style={{ background: 'linear-gradient(135deg, #FAF8F5 0%, #FFFFFF 100%)' }}>
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="bg-white p-6 rounded-2xl shadow-lg mb-6" style={{ border: '1px solid rgba(212, 165, 116, 0.2)' }}>
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: '#2C5F4E' }}>
                Customer Inquiries
              </h1>
              <p className="text-gray-600 mt-1">Total: {inquiries.length} inquiries</p>
            </div>
            <button
              onClick={() => fetchInquiries(password)}
              className="flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-white"
              style={{ background: 'linear-gradient(135deg, #D4A574 0%, #B8936F 100%)' }}
              disabled={loading}
            >
              <RefreshCw size={18} className={loading ? 'animate-spin' : ''} />
              Refresh
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-4 mb-6 flex-wrap">
          {['all', 'new', 'contacted', 'closed'].map((filterOption) => (
            <button
              key={filterOption}
              onClick={() => setFilter(filterOption)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                filter === filterOption
                  ? 'text-white'
                  : 'bg-white text-gray-700'
              }`}
              style={{
                background: filter === filterOption
                  ? 'linear-gradient(135deg, #D4A574 0%, #B8936F 100%)'
                  : 'white',
                border: `2px solid ${filter === filterOption ? 'transparent' : 'rgba(212, 165, 116, 0.3)'}`
              }}
            >
              {filterOption.charAt(0).toUpperCase() + filterOption.slice(1)}
              {filterOption === 'all' && ` (${inquiries.length})`}
              {filterOption === 'new' && ` (${inquiries.filter(i => i.status === 'new').length})`}
              {filterOption === 'contacted' && ` (${inquiries.filter(i => i.status === 'contacted').length})`}
              {filterOption === 'closed' && ` (${inquiries.filter(i => i.status === 'closed').length})`}
            </button>
          ))}
        </div>

        {/* Inquiries List */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-amber-700 border-t-transparent"></div>
            <p className="text-gray-600 mt-4">Loading inquiries...</p>
          </div>
        ) : filteredInquiries.length === 0 ? (
          <div className="bg-white p-12 rounded-2xl shadow-lg text-center">
            <p className="text-gray-600 text-lg">No inquiries found</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {filteredInquiries.map((inquiry) => (
              <div
                key={inquiry.id}
                className="bg-white p-6 rounded-2xl shadow-lg"
                style={{ border: '1px solid rgba(212, 165, 116, 0.2)' }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: '#2C5F4E' }}>
                      {inquiry.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(inquiry.status)}`}>
                        {inquiry.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {inquiry.status !== 'contacted' && (
                      <button
                        onClick={() => updateStatus(inquiry.id, 'contacted')}
                        className="px-4 py-2 rounded-lg bg-yellow-500 text-white hover:bg-yellow-600 transition-colors text-sm"
                      >
                        Mark Contacted
                      </button>
                    )}
                    {inquiry.status !== 'closed' && (
                      <button
                        onClick={() => updateStatus(inquiry.id, 'closed')}
                        className="px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors text-sm"
                      >
                        Mark Closed
                      </button>
                    )}
                    {inquiry.status !== 'new' && (
                      <button
                        onClick={() => updateStatus(inquiry.id, 'new')}
                        className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors text-sm"
                      >
                        Mark New
                      </button>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-amber-700" />
                    <a href={`mailto:${inquiry.email}`} className="text-gray-700 hover:text-amber-700">
                      {inquiry.email}
                    </a>
                  </div>
                  {inquiry.phone && (
                    <div className="flex items-center gap-3">
                      <Phone size={18} className="text-amber-700" />
                      <a href={`tel:${inquiry.phone}`} className="text-gray-700 hover:text-amber-700">
                        {inquiry.phone}
                      </a>
                    </div>
                  )}
                  <div className="flex items-center gap-3">
                    <Tag size={18} className="text-amber-700" />
                    <span className="text-gray-700">{inquiry.service}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar size={18} className="text-amber-700" />
                    <span className="text-gray-700">{formatDate(inquiry.timestamp)}</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <MessageSquare size={18} className="text-amber-700 mt-1" />
                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-1">Message:</p>
                      <p className="text-gray-600">{inquiry.message}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
