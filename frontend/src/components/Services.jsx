import { useEffect, useRef, useState } from 'react';
import { Hammer, Palette, Home, CheckCircle, ArrowRight, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

const Services = () => {
  const sectionRef = useRef(null);
  const [selectedService, setSelectedService] = useState(null);

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
      icon: <Hammer size={32} />,
      title: 'Construction',
      description: 'From foundation to finishing, we deliver quality construction services',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5',
      color: '#2C5F4E',
      details: {
        intro: 'KV Builders brings decades of construction excellence to every project, from residential homes to commercial complexes. Our comprehensive construction services cover every phase of your building journey.',
        features: [
          'Residential Construction - Custom homes, villas, and apartment complexes',
          'Commercial Construction - Office buildings, retail spaces, and industrial facilities',
          'Renovation & Remodeling - Transform existing spaces with modern upgrades',
          'Structural Engineering - Expert foundation and structural design',
          'Project Management - End-to-end coordination and quality control',
          'Safety Compliance - Adherence to all building codes and safety standards'
        ],
        process: 'Our construction process begins with detailed planning and site analysis, followed by precision execution using modern techniques and quality materials. We maintain transparent communication throughout, ensuring your vision becomes reality on time and within budget.',
        whyChoose: [
          'Experienced team with 15+ years in the industry',
          'Use of premium, sustainable building materials',
          'Advanced construction methodologies',
          'Strict quality control at every stage',
          'On-time project delivery guarantee',
          'Post-construction support and warranty'
        ]
      }
    },
    {
      icon: <Palette size={32} />,
      title: 'Interior Works',
      description: 'Creating beautiful, functional spaces with premium interior solutions',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6',
      color: '#D4A574',
      details: {
        intro: 'Transform your spaces into stunning, functional environments with our expert interior design and execution services. We blend aesthetics with practicality to create interiors that reflect your personality and meet your lifestyle needs.',
        features: [
          'Complete Interior Design - Conceptualization to execution',
          'Modular Kitchens - Custom-designed, space-optimized kitchen solutions',
          'Bedroom & Living Spaces - Elegant, comfortable living environments',
          'False Ceiling & Lighting - Architectural lighting and ceiling designs',
          'Flooring Solutions - Marble, tiles, wooden, and designer flooring',
          'Custom Furniture - Bespoke furniture design and manufacturing',
          'Wall Treatments - Textures, wallpapers, and decorative finishes'
        ],
        process: 'We start with understanding your taste, lifestyle, and budget. Our designers create 3D visualizations for your approval before execution. Every element is carefully selected and installed by skilled craftsmen to ensure perfection.',
        whyChoose: [
          'Award-winning interior designers',
          'Premium materials and finishes',
          '3D visualization before execution',
          'Customized solutions for every budget',
          'In-house manufacturing for custom furniture',
          'Complete turnkey interior solutions'
        ]
      }
    },
    {
      icon: <Home size={32} />,
      title: 'Real Estate',
      description: 'Helping you find or develop the perfect property for your needs',
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716',
      color: '#C95D3F',
      details: {
        intro: 'Navigate the real estate market with confidence through our comprehensive property services. Whether you\'re buying, selling, or developing, we provide expert guidance and end-to-end support.',
        features: [
          'Property Development - Land acquisition to project completion',
          'Buy & Sell Services - Residential and commercial property transactions',
          'Property Consultation - Expert market analysis and investment advice',
          'Legal Assistance - Documentation and legal compliance support',
          'Property Management - Maintenance and tenant management services',
          'Investment Opportunities - Curated portfolio of premium properties'
        ],
        process: 'Our real estate experts analyze market trends, evaluate properties, handle negotiations, and manage all legal formalities. We ensure transparent dealings and provide comprehensive support throughout your property journey.',
        whyChoose: [
          'Extensive market knowledge in Coimbatore',
          'Verified property listings',
          'Expert negotiation skills',
          'Complete legal support',
          'Transparent fee structure',
          'Post-sale support and assistance'
        ]
      }
    }
  ];

  return (
    <section
      id="services"
      data-testid="services-section"
      ref={sectionRef}
      className="py-12 sm:py-16 lg:py-32"
      style={{ background: '#FAF8F5' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 reveal">
          <div
            className="inline-block px-3 sm:px-4 py-2 rounded-full mb-3 sm:mb-4"
            style={{
              background: 'linear-gradient(135deg, rgba(212, 165, 116, 0.1) 0%, rgba(184, 147, 111, 0.1) 100%)',
              border: '1px solid rgba(212, 165, 116, 0.3)'
            }}
          >
            <span className="text-amber-700 font-semibold text-xs sm:text-sm">OUR SERVICES</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4"
            style={{
              fontFamily: 'Playfair Display, serif',
              color: '#2C5F4E'
            }}
          >
            What We Offer
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Comprehensive solutions for all your construction and real estate needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
                <div className="relative h-56 sm:h-64 overflow-hidden img-hover">
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
                    className="absolute top-4 sm:top-6 right-4 sm:right-6 p-3 sm:p-4 rounded-xl backdrop-blur-md transition-transform duration-300 group-hover:scale-110"
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
                <div className="p-6 sm:p-8">
                  <h3
                    className="text-xl sm:text-2xl font-bold mb-3"
                    style={{
                      fontFamily: 'Playfair Display, serif',
                      color: service.color
                    }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Learn More Link */}
                  <button
                    className="mt-4 sm:mt-6 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300 text-sm sm:text-base"
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