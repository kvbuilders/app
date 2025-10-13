import { useEffect, useRef } from 'react';
import { Hammer, Palette, Home } from 'lucide-react';

const Services = () => {
  const sectionRef = useRef(null);

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

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Hammer size={40} />,
      title: 'Construction',
      description: 'From foundation to finishing, we deliver quality construction services',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5',
      color: '#2C5F4E'
    },
    {
      icon: <Palette size={40} />,
      title: 'Interior Works',
      description: 'Creating beautiful, functional spaces with premium interior solutions',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6',
      color: '#D4A574'
    },
    {
      icon: <Home size={40} />,
      title: 'Real Estate',
      description: 'Helping you find or develop the perfect property for your needs',
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716',
      color: '#C95D3F'
    }
  ];

  return (
    <section
      id="services"
      data-testid="services-section"
      ref={sectionRef}
      className="py-20 lg:py-32"
      style={{ background: '#FAF8F5' }}
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
            <span className="text-amber-700 font-semibold text-sm">OUR SERVICES</span>
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{
              fontFamily: 'Playfair Display, serif',
              color: '#2C5F4E'
            }}
          >
            What We Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions for all your construction and real estate needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-testid={`service-card-${index}`}
              className="reveal card-hover group"
              style={{
                animationDelay: `${index * 0.15}s`,
                opacity: 0,
                animation: `slideUp 0.8s ease-out ${index * 0.15}s forwards`
              }}
            >
              <div
                className="bg-white rounded-2xl overflow-hidden shadow-lg"
                style={{
                  border: '1px solid rgba(212, 165, 116, 0.2)'
                }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden img-hover">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)'
                    }}
                  ></div>
                  
                  {/* Icon */}
                  <div
                    className="absolute top-6 right-6 p-4 rounded-xl backdrop-blur-md transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: 'rgba(255, 255, 255, 0.2)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      color: '#ffffff'
                    }}
                  >
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3
                    className="text-2xl font-bold mb-3"
                    style={{
                      fontFamily: 'Playfair Display, serif',
                      color: service.color
                    }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Learn More Link */}
                  <button
                    className="mt-6 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                    style={{ color: service.color }}
                  >
                    Learn More
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path
                        d="M5 10h10M10 5l5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;