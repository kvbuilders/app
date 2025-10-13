import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Construction',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Thank you! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'Construction',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      ref={sectionRef}
      className="py-20 lg:py-32 relative"
      style={{
        background: 'linear-gradient(135deg, #FAF8F5 0%, #FFFFFF 100%)'
      }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <div
            className="inline-block px-4 py-2 rounded-full mb-4"
            style={{
              background: 'linear-gradient(135deg, rgba(212, 165, 116, 0.1) 0%, rgba(184, 147, 111, 0.1) 100%)',
              border: '1px solid rgba(212, 165, 116, 0.3)'
            }}
          >
            <span className="text-amber-700 font-semibold text-sm">GET IN TOUCH</span>
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{
              fontFamily: 'Playfair Display, serif',
              color: '#2C5F4E'
            }}
          >
            Let's Discuss Your Project
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to turn your vision into reality? Get in touch with us today
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="reveal-left">
            <div className="space-y-8">
              {/* Contact Card */}
              <div
                className="bg-white p-8 rounded-2xl shadow-lg card-hover"
                style={{ border: '1px solid rgba(212, 165, 116, 0.2)' }}
              >
                <h3
                  className="text-3xl font-bold mb-6"
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    color: '#2C5F4E'
                  }}
                >
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="p-3 rounded-lg"
                      style={{ background: 'linear-gradient(135deg, #D4A574 0%, #B8936F 100%)' }}
                    >
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Phone</p>
                      <a
                        href="tel:9843072490"
                        className="text-lg font-semibold hover:text-amber-700 transition-colors"
                        style={{ color: '#2C5F4E' }}
                      >
                        98430 72490
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="p-3 rounded-lg"
                      style={{ background: 'linear-gradient(135deg, #D4A574 0%, #B8936F 100%)' }}
                    >
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Email</p>
                      <a
                        href="mailto:kvbuilders04@gmail.com"
                        className="text-lg font-semibold hover:text-amber-700 transition-colors"
                        style={{ color: '#2C5F4E' }}
                      >
                        kvbuilders04@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="p-3 rounded-lg"
                      style={{ background: 'linear-gradient(135deg, #D4A574 0%, #B8936F 100%)' }}
                    >
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Address</p>
                      <p className="text-lg font-semibold" style={{ color: '#2C5F4E' }}>
                        No. 36, 1st Floor, S.N.D Lay-out,<br />
                        Street No.4, Tatabad,<br />
                        Coimbatore - 641 012
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Leadership Card */}
              <div
                className="p-8 rounded-2xl text-white relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #2C5F4E 0%, #1A3A2E 100%)',
                  boxShadow: '0 10px 30px rgba(44, 95, 78, 0.3)'
                }}
              >
                <div className="relative z-10">
                  <h4
                    className="text-2xl font-bold mb-2"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    K. Kumaravel M.Sc.
                  </h4>
                  <p className="text-amber-300 mb-4">Founder & Director</p>
                  <p className="text-gray-300 leading-relaxed">
                    Leading KV Builders & Realtors with a vision for excellence and innovation in construction.
                  </p>
                </div>
                <div
                  className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full"
                  style={{ background: 'rgba(212, 165, 116, 0.1)' }}
                ></div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="reveal-right">
            <form
              data-testid="contact-form"
              onSubmit={handleSubmit}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-lg"
              style={{ border: '1px solid rgba(212, 165, 116, 0.2)' }}
            >
              <h3
                className="text-3xl font-bold mb-6"
                style={{
                  fontFamily: 'Playfair Display, serif',
                  color: '#2C5F4E'
                }}
              >
                Send Us a Message
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#2C5F4E' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    data-testid="contact-name-input"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none"
                    style={{
                      borderColor: 'rgba(212, 165, 116, 0.3)',
                      color: '#1F2937'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#D4A574';
                      e.target.style.boxShadow = '0 0 0 3px rgba(212, 165, 116, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(212, 165, 116, 0.3)';
                      e.target.style.boxShadow = 'none';
                    }}
                    placeholder="Enter your name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#2C5F4E' }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      data-testid="contact-email-input"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none"
                      style={{
                        borderColor: 'rgba(212, 165, 116, 0.3)',
                        color: '#1F2937'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#D4A574';
                        e.target.style.boxShadow = '0 0 0 3px rgba(212, 165, 116, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(212, 165, 116, 0.3)';
                        e.target.style.boxShadow = 'none';
                      }}
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#2C5F4E' }}>
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      data-testid="contact-phone-input"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none"
                      style={{
                        borderColor: 'rgba(212, 165, 116, 0.3)',
                        color: '#1F2937'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#D4A574';
                        e.target.style.boxShadow = '0 0 0 3px rgba(212, 165, 116, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(212, 165, 116, 0.3)';
                        e.target.style.boxShadow = 'none';
                      }}
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#2C5F4E' }}>
                    Select Service *
                  </label>
                  <select
                    name="service"
                    data-testid="contact-service-select"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none"
                    style={{
                      borderColor: 'rgba(212, 165, 116, 0.3)',
                      color: '#1F2937'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#D4A574';
                      e.target.style.boxShadow = '0 0 0 3px rgba(212, 165, 116, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(212, 165, 116, 0.3)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <option>Construction</option>
                    <option>Interior Works</option>
                    <option>Real Estate</option>
                    <option>Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#2C5F4E' }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    data-testid="contact-message-textarea"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none resize-none"
                    style={{
                      borderColor: 'rgba(212, 165, 116, 0.3)',
                      color: '#1F2937'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#D4A574';
                      e.target.style.boxShadow = '0 0 0 3px rgba(212, 165, 116, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(212, 165, 116, 0.3)';
                      e.target.style.boxShadow = 'none';
                    }}
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  data-testid="contact-submit-btn"
                  className="w-full py-4 rounded-full font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #D4A574 0%, #B8936F 100%)',
                    boxShadow: '0 8px 20px rgba(212, 165, 116, 0.4)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(212, 165, 116, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(212, 165, 116, 0.4)';
                  }}
                >
                  <Send size={20} />
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;