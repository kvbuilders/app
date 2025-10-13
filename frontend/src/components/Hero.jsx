import { ArrowRight, Phone } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1519662978799-2f05096d3636)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(44, 95, 78, 0.85) 0%, rgba(31, 41, 55, 0.7) 100%)'
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Animated Badge */}
          <div
            data-testid="hero-badge"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 animate-fade-in"
            style={{
              background: 'rgba(212, 165, 116, 0.2)',
              border: '1px solid rgba(212, 165, 116, 0.5)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span className="text-white text-sm font-medium">Excellence in Construction & Real Estate</span>
          </div>

          {/* Main Heading */}
          <h1
            data-testid="hero-heading"
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slide-up"
            style={{
              fontFamily: 'Playfair Display, serif',
              lineHeight: '1.2',
              textShadow: '2px 4px 10px rgba(0, 0, 0, 0.3)'
            }}
          >
            Building Dreams
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #D4A574 0%, #F4D19B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Into Reality
            </span>
          </h1>

          {/* Subheading */}
          <p
            data-testid="hero-subheading"
            className="text-xl md:text-2xl text-gray-200 mb-12 animate-slide-up"
            style={{
              animationDelay: '0.2s',
              opacity: 0,
              animation: 'slideUp 0.8s ease-out 0.2s forwards'
            }}
          >
            Excellence in Construction | Interior Works | Real Estate
          </p>

          {/* CTA Buttons */}
          <div
            data-testid="hero-cta-buttons"
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up"
            style={{
              animationDelay: '0.4s',
              opacity: 0,
              animation: 'slideUp 0.8s ease-out 0.4s forwards'
            }}
          >
            <button
              data-testid="view-projects-btn"
              onClick={() => scrollToSection('projects')}
              className="group px-8 py-4 rounded-full font-semibold text-white flex items-center gap-2 transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #D4A574 0%, #B8936F 100%)',
                boxShadow: '0 8px 20px rgba(212, 165, 116, 0.4)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(212, 165, 116, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(212, 165, 116, 0.4)';
              }}
            >
              View Our Projects
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </button>

            <button
              data-testid="get-quote-btn"
              onClick={() => scrollToSection('contact')}
              className="group px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all duration-300"
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                color: '#ffffff'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              }}
            >
              <Phone size={20} />
              Get a Quote
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        data-testid="scroll-indicator"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;