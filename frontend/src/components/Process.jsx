import { useEffect, useRef, useState } from 'react';
import { Lightbulb, Hammer, CheckCircle, Key, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';

const Process = () => {
  const sectionRef = useRef(null);
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

  const steps = [
    {
      number: '01',
      icon: <Lightbulb size={28} />,
      title: 'Planning & Design',
      description: 'We start with understanding your vision and creating detailed blueprints',
      image: 'https://images.unsplash.com/photo-1542621334-a254cf47733d'
    },
    {
      number: '02',
      icon: <Hammer size={28} />,
      title: 'Construction',
      description: 'Our skilled team brings your project to life with quality workmanship',
      image: '/construction-process.jpg'
    },
    {
      number: '03',
      icon: <CheckCircle size={28} />,
      title: 'Quality Inspection',
      description: 'Rigorous quality checks ensure every detail meets our high standards',
      image: '/quality-inspection.jpg'
    },
    {
      number: '04',
      icon: <Key size={28} />,
      title: 'Handover',
      description: 'We deliver your completed project on time and within budget',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e'
    }
  ];

  return (
    <section
      id="process"
      data-testid="process-section"
      ref={sectionRef}
      className="py-12 sm:py-16 lg:py-32 bg-white"
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
            <span className="text-amber-700 font-semibold text-xs sm:text-sm">OUR PROCESS</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4"
            style={{
              fontFamily: 'Playfair Display, serif',
              color: '#2C5F4E'
            }}
          >
            How We Work
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Our Proven Process for Success
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {steps.map((step, index) => (
            <div
              key={index}
              data-testid={`process-step-${index}`}
              className={`reveal grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center`}
              style={{
                animationDelay: `${index * 0.2}s`,
                opacity: 0,
                animation: `slideUp 0.8s ease-out ${index * 0.2}s forwards`
              }}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-2' : 'order-1'}>
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div
                    className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-xl"
                    style={{
                      background: 'linear-gradient(135deg, #D4A574 0%, #B8936F 100%)',
                      color: 'white'
                    }}
                  >
                    {step.icon}
                  </div>
                  <span
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold"
                    style={{
                      fontFamily: 'Playfair Display, serif',
                      color: 'rgba(212, 165, 116, 0.2)'
                    }}
                  >
                    {step.number}
                  </span>
                </div>
                <h3
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4"
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    color: '#2C5F4E'
                  }}
                >
                  {step.title}
                </h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                  {step.description}
                </p>
                
                {/* Progress Line (except last) */}
                {index < steps.length - 1 && (
                  <div className="mt-6 sm:mt-8">
                    <div
                      className="h-1 w-16 sm:w-20 rounded-full"
                      style={{
                        background: 'linear-gradient(to right, #D4A574 0%, #B8936F 100%)'
                      }}
                    ></div>
                  </div>
                )}
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : 'order-2'}`}>
                <div 
                  className="relative rounded-2xl overflow-hidden shadow-2xl img-hover group cursor-pointer"
                  onClick={() => setFullscreenImage(step.image)}
                >
                  <div style={{ paddingTop: '75%', position: 'relative' }}>
                    <img
                      src={step.image}
                      alt={step.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: 'linear-gradient(135deg, rgba(212, 165, 116, 0.3) 0%, rgba(44, 95, 78, 0.3) 100%)'
                      }}
                    ></div>
                  </div>
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
      </div>
    </section>
  );
};

export default Process;