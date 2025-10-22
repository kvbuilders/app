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
  const [fullscreenImage, setFullscreenImage] = useState(null);

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
      image: '/construction.jpg',
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
      image: '/interior.jpg',
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
      image: '/realestate.jpg',
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
                <div 
                  className="relative h-56 sm:h-64 overflow-hidden img-hover cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setFullscreenImage(service.image);
                  }}
                >
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
                    onClick={() => setSelectedService(service)}
                    data-testid={`learn-more-${index}`}
                    className="mt-4 sm:mt-6 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300 text-sm sm:text-base"
                    style={{ color: service.color }}
                  >
                    Learn More
                    <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fullscreen Image Viewer */}
        <Dialog open={!!fullscreenImage} onOpenChange={() => setFullscreenImage(null)}>
          <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-0 bg-black/95">
            <div className="relative w-full h-full flex items-center justify-center">
              <button
                onClick={() => setFullscreenImage(null)}
                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X size={24} />
              </button>
              {fullscreenImage && (
                <img
                  src={fullscreenImage}
                  alt="Fullscreen view"
                  className="max-w-full max-h-[90vh] object-contain"
                />
              )}
            </div>
          </DialogContent>
        </Dialog>

        {/* Service Details Modal */}
        <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
          <DialogContent 
            className="max-w-3xl max-h-[90vh] overflow-y-auto bg-white"
            style={{ 
              border: `2px solid ${selectedService?.color || '#D4A574'}`,
            }}
          >
            {selectedService && (
              <>
                <DialogHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="p-4 rounded-xl"
                      style={{
                        background: `linear-gradient(135deg, ${selectedService.color} 0%, ${selectedService.color}dd 100%)`
                      }}
                    >
                      <span className="text-white">{selectedService.icon}</span>
                    </div>
                    <div>
                      <DialogTitle 
                        className="text-3xl sm:text-4xl font-bold"
                        style={{ 
                          fontFamily: 'Playfair Display, serif',
                          color: selectedService.color 
                        }}
                      >
                        {selectedService.title}
                      </DialogTitle>
                      <DialogDescription className="text-base text-gray-600 mt-1">
                        {selectedService.description}
                      </DialogDescription>
                    </div>
                  </div>
                </DialogHeader>

                <div className="space-y-6 py-4">
                  {/* Introduction */}
                  <div>
                    <p className="text-base text-gray-700 leading-relaxed">
                      {selectedService.details.intro}
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 
                      className="text-xl font-bold mb-4"
                      style={{ 
                        color: selectedService.color,
                        fontFamily: 'Playfair Display, serif'
                      }}
                    >
                      Our Services Include:
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {selectedService.details.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle 
                            size={20} 
                            className="flex-shrink-0 mt-0.5"
                            style={{ color: selectedService.color }}
                          />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Process */}
                  <div 
                    className="p-6 rounded-xl"
                    style={{ background: `${selectedService.color}15` }}
                  >
                    <h4 
                      className="text-lg font-bold mb-3"
                      style={{ 
                        color: selectedService.color,
                        fontFamily: 'Playfair Display, serif'
                      }}
                    >
                      Our Process
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {selectedService.details.process}
                    </p>
                  </div>

                  {/* Why Choose Us */}
                  <div>
                    <h4 
                      className="text-xl font-bold mb-4"
                      style={{ 
                        color: selectedService.color,
                        fontFamily: 'Playfair Display, serif'
                      }}
                    >
                      Why Choose Us?
                    </h4>
                    <div className="space-y-2">
                      {selectedService.details.whyChoose.map((reason, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div 
                            className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                            style={{ background: selectedService.color }}
                          ></div>
                          <span className="text-sm text-gray-700">{reason}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setSelectedService(null);
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full py-4 rounded-full font-semibold text-white transition-all duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${selectedService.color} 0%, ${selectedService.color}dd 100%)`,
                        boxShadow: `0 8px 20px ${selectedService.color}40`
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = `0 12px 30px ${selectedService.color}60`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = `0 8px 20px ${selectedService.color}40`;
                      }}
                    >
                      Get Started - Contact Us Today
                    </button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Services;