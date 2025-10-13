import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      data-testid="footer"
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #2C5F4E 0%, #1A3A2E 100%)',
        color: '#ffffff'
      }}
    >
      {/* Decorative Elements */}
      <div
        className="absolute top-0 left-0 w-96 h-96 rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{ background: 'rgba(212, 165, 116, 0.05)' }}
      ></div>
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full translate-x-1/2 translate-y-1/2"
        style={{ background: 'rgba(212, 165, 116, 0.05)' }}
      ></div>

      <div className="relative container mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3
              className="text-3xl font-bold mb-4"
              style={{ fontFamily: 'Playfair Display, serif', color: '#D4A574' }}
            >
              KV Builders
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading construction and real estate company committed to delivering excellence in every project.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                data-testid="social-facebook"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                style={{ background: 'rgba(212, 165, 116, 0.2)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#D4A574';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(212, 165, 116, 0.2)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                data-testid="social-twitter"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                style={{ background: 'rgba(212, 165, 116, 0.2)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#D4A574';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(212, 165, 116, 0.2)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                data-testid="social-instagram"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                style={{ background: 'rgba(212, 165, 116, 0.2)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#D4A574';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(212, 165, 116, 0.2)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                data-testid="social-linkedin"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                style={{ background: 'rgba(212, 165, 116, 0.2)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#D4A574';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(212, 165, 116, 0.2)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4" style={{ color: '#D4A574' }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Projects', 'Process', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-300"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-4" style={{ color: '#D4A574' }}>
              Our Services
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li>Construction Services</li>
              <li>Interior Design</li>
              <li>Real Estate Development</li>
              <li>Project Consultation</li>
              <li>Property Management</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4" style={{ color: '#D4A574' }}>
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-1" style={{ color: '#D4A574' }} />
                <a href="tel:9843072490" className="text-gray-300 hover:text-amber-400 transition-colors">
                  98430 72490
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-1" style={{ color: '#D4A574' }} />
                <a
                  href="mailto:kvbuilders04@gmail.com"
                  className="text-gray-300 hover:text-amber-400 transition-colors break-all"
                >
                  kvbuilders04@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" style={{ color: '#D4A574' }} />
                <span className="text-gray-300">
                  No. 36, 1st Floor, S.N.D Lay-out, Street No.4, Tatabad, Coimbatore - 641 012
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8 mt-8 text-center"
          style={{ borderTop: '1px solid rgba(212, 165, 116, 0.2)' }}
        >
          <p className="text-gray-400">
            © {new Date().getFullYear()} KV Builders & Realtors. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Led by <span style={{ color: '#D4A574' }}>K. Kumaravel M.Sc.</span> - Founder & Director
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;