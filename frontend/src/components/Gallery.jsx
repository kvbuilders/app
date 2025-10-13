import { useEffect, useRef } from 'react';

const Gallery = () => {
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

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5',
      title: 'Our Team',
      caption: 'Dedicated professionals at work'
    },
    {
      url: 'https://images.unsplash.com/photo-1694521787162-5373b598945c',
      title: 'Professional Work',
      caption: 'Quality craftsmanship in action'
    },
    {
      url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e',
      title: 'Client Meeting',
      caption: 'Building lasting relationships'
    }
  ];

  return (
    <section
      id="gallery"
      data-testid="gallery-section"
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
            <span className="text-amber-700 font-semibold text-sm">GALLERY</span>
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{
              fontFamily: 'Playfair Display, serif',
              color: '#2C5F4E'
            }}
          >
            Our Work Culture
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A glimpse into our commitment to excellence and teamwork
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              data-testid={`gallery-item-${index}`}
              className="reveal card-hover group"
              style={{
                animationDelay: `${index * 0.15}s`,
                opacity: 0,
                animation: `slideUp 0.8s ease-out ${index * 0.15}s forwards`
              }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg img-hover" style={{ height: '400px' }}>
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(to top, rgba(44, 95, 78, 0.9) 0%, rgba(44, 95, 78, 0.5) 100%)'
                  }}
                >
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3
                      className="text-2xl font-bold mb-2"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {image.title}
                    </h3>
                    <p className="text-gray-200">{image.caption}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;