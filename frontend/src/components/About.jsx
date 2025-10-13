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
      className="py-20 lg:py-32 bg-white"
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
            <span className="text-amber-700 font-semibold text-sm">ABOUT US</span>
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{
              fontFamily: 'Playfair Display, serif',
              color: '#2C5F4E'
            }}
          >
            About KV Builders & Realtors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building Excellence Since Years
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <div className="reveal-left">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              KV Builders & Realtors is a leading construction and real estate company based in Coimbatore, 
              committed to delivering exceptional quality in every project we undertake. Under the visionary 
              leadership of <strong>K. Kumaravel M.Sc.</strong>, we have established ourselves as a trusted 
              name in the industry.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              We specialize in comprehensive construction services, premium interior works, and real estate 
              development. Our team of experienced professionals brings together technical expertise and 
              creative innovation to transform your vision into reality.
            </p>

            {/* Value Props */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-amber-50">
                <div
                  className="p-3 rounded-lg"
                  style={{ background: 'linear-gradient(135deg, #D4A574 0%, #B8936F 100%)' }}
                >
                  <Award className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1" style={{ color: '#2C5F4E' }}>Quality Assurance</h4>
                  <p className="text-gray-600">Uncompromising standards in every project we deliver</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-amber-50">
                <div
                  className="p-3 rounded-lg"
                  style={{ background: 'linear-gradient(135deg, #D4A574 0%, #B8936F 100%)' }}
                >
                  <Users className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1" style={{ color: '#2C5F4E' }}>Expert Team</h4>
                  <p className="text-gray-600">Skilled professionals with decades of combined experience</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-amber-50">
                <div
                  className="p-3 rounded-lg"
                  style={{ background: 'linear-gradient(135deg, #D4A574 0%, #B8936F 100%)' }}
                >
                  <Target className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1" style={{ color: '#2C5F4E' }}>Client Focus</h4>
                  <p className="text-gray-600">Your vision and satisfaction drive everything we do</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="reveal-right">
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl img-hover"
              style={{ height: '600px' }}
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
                className="absolute bottom-8 left-8 p-6 rounded-xl backdrop-blur-md"
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
                }}
              >
                <p className="text-sm text-gray-600 mb-1">Leadership</p>
                <h4 className="text-xl font-bold" style={{ color: '#2C5F4E', fontFamily: 'Playfair Display, serif' }}>
                  K. Kumaravel M.Sc.
                </h4>
                <p className="text-sm" style={{ color: '#D4A574' }}>Founder & Director</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;