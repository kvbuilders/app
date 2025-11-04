import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            data-testid="logo"
            className="flex items-center gap-2 md:gap-3"
          >
            <div 
              className="p-2 rounded-lg"
              style={{
                backgroundColor: isScrolled ? '#2C5F4E' : 'rgba(255, 255, 255, 0.95)',
                transition: 'background-color 0.3s ease',
                boxShadow: isScrolled ? 'none' : '0 2px 8px rgba(0, 0, 0, 0.1)'
              }}
            >
              <img 
                src="/kv-logo.png" 
                alt="KV Builders Logo" 
                className="h-6 md:h-8 w-auto object-contain"
                style={{
                  filter: 'none',
                  transition: 'filter 0.3s ease'
                }}
              />
            </div>
            <span
              className="text-2xl md:text-3xl font-bold"
              style={{
                color: isScrolled ? '#2C5F4E' : '#ffffff',
                fontFamily: 'Playfair Display, serif',
                transition: 'color 0.3s ease'
              }}
            >
              KV Builders
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {['Home', 'About', 'Services', 'Projects', 'Process', 'Contact'].map((item) => (
              <button
                key={item}
                data-testid={`nav-${item.toLowerCase()}`}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="relative group"
                style={{
                  color: isScrolled ? '#1F2937' : '#ffffff',
                  fontWeight: '500',
                  fontSize: '0.95rem',
                  transition: 'color 0.3s ease'
                }}
              >
                {item}
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all duration-300"
                ></span>
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <button
            data-testid="nav-cta-button"
            onClick={() => scrollToSection('contact')}
            className="hidden lg:block px-6 py-2.5 rounded-full font-semibold transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #D4A574 0%, #B8936F 100%)',
              color: '#ffffff',
              boxShadow: '0 4px 15px rgba(212, 165, 116, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(212, 165, 116, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(212, 165, 116, 0.3)';
            }}
          >
            Get a Quote
          </button>

          {/* Mobile Menu Button */}
          <button
            data-testid="mobile-menu-toggle"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ color: isScrolled ? '#2C5F4E' : '#ffffff' }}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            data-testid="mobile-menu"
            className="lg:hidden mt-6 pb-6 animate-slide-up"
          >
            <div className="flex flex-col gap-4">
              {['Home', 'About', 'Services', 'Projects', 'Process', 'Contact'].map((item) => (
                <button
                  key={item}
                  data-testid={`mobile-nav-${item.toLowerCase()}`}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-left py-2 px-4 rounded-lg transition-all duration-300"
                  style={{
                    color: isScrolled ? '#1F2937' : '#ffffff',
                    fontWeight: '500',
                    backgroundColor: 'rgba(212, 165, 116, 0.1)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'rgba(212, 165, 116, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'rgba(212, 165, 116, 0.1)';
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;