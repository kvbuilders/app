import { useEffect, useRef } from 'react';
import { Award, Users, Target } from 'lucide-react';

const About = () => {
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

    const elements = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      data-testid="about-section"
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
            <span className="text-amber-700 font-semibold text-xs sm:text-sm">ABOUT US</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4"
            style={{
              fontFamily: 'Playfair Display, serif',
              color: '#2C5F4E'
            }}
          >
            About KV Builders
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Building Excellence Since Years
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-20">
          {/* Left Content */}
          <div className="reveal-left">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
              KV Builders is a leading construction and real estate company based in Coimbatore, 
              committed to delivering exceptional quality in every project we undertake. Under the visionary 
              leadership of <strong>K. Kumaravel M.Sc.</strong>, we have established ourselves as a trusted 
              name in the industry.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
              We specialize in comprehensive construction services, premium interior works, and real estate 
              development. Our team of experienced professionals brings together technical expertise and 
              creative innovation to transform your vision into reality.
            </p>

            {/* Value Props */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl transition-all duration-300 hover:bg-amber-50">
                <div
                  className="p-2 sm:p-3 rounded-lg flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #D4A574 0%, #B8936F 100%)' }}
                >
                  <Award className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-base sm:text-lg mb-1" style={{ color: '#2C5F4E' }}>Quality Assurance</h4>
                  <p className="text-sm sm:text-base text-gray-600">Uncompromising standards in every project we deliver</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl transition-all duration-300 hover:bg-amber-50">
                <div
                  className="p-2 sm:p-3 rounded-lg flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #D4A574 0%, #B8936F 100%)' }}
                >
                  <Users className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-base sm:text-lg mb-1" style={{ color: '#2C5F4E' }}>Expert Team</h4>
                  <p className="text-sm sm:text-base text-gray-600">Skilled professionals with decades of combined experience</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl transition-all duration-300 hover:bg-amber-50">
                <div
                  className="p-2 sm:p-3 rounded-lg flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #D4A574 0%, #B8936F 100%)' }}
                >
                  <Target className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-base sm:text-lg mb-1" style={{ color: '#2C5F4E' }}>Client Focus</h4>
                  <p className="text-sm sm:text-base text-gray-600">Your vision and satisfaction drive everything we do</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="reveal-right">
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl img-hover"
              style={{ height: '400px', maxHeight: '600px' }}
            >
              <img
                src="https://images.unsplash.com/photo-1694521787162-5373b598945c"
                alt="KV Builders Team"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(44, 95, 78, 0.3) 0%, transparent 50%)'
                }}
              ></div>
              
              {/* Floating Badge */}
              <div
                className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 p-4 sm:p-6 rounded-xl backdrop-blur-md"
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
                }}
              >
                <p className="text-xs sm:text-sm text-gray-600 mb-1">Leadership</p>
                <h4 className="text-lg sm:text-xl font-bold" style={{ color: '#2C5F4E', fontFamily: 'Playfair Display, serif' }}>
                  K. Kumaravel M.Sc.
                </h4>
                <p className="text-xs sm:text-sm" style={{ color: '#D4A574' }}>Founder & Director</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;