import { useEffect, useRef, useState } from 'react';
import { MapPin } from 'lucide-react';

const Projects = () => {
  const sectionRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('All');

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

  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914',
      category: 'Residential',
      title: 'Luxury Villa Project',
      location: 'Coimbatore',
      description: 'Modern luxury villa with contemporary design and premium finishes'
    },
    {
      image: 'https://images.unsplash.com/photo-1647025980693-04e6b24a6d78',
      category: 'Residential',
      title: 'Modern Residential Complex',
      location: 'Tatabad',
      description: 'Contemporary residential building with spacious apartments'
    },
    {
      image: 'https://images.unsplash.com/photo-1615406020658-6c4b805f1f30',
      category: 'Commercial',
      title: 'Commercial Complex',
      location: 'Coimbatore',
      description: 'State-of-the-art commercial building with modern amenities'
    },
    {
      image: 'https://images.unsplash.com/photo-1574848296471-28f79a036f79',
      category: 'Commercial',
      title: 'High-Rise Development',
      location: 'Coimbatore',
      description: 'Modern commercial high-rise with premium specifications'
    },
    {
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716',
      category: 'Commercial',
      title: 'Contemporary Architecture',
      location: 'Coimbatore',
      description: 'Geometric modern building with innovative design'
    },
    {
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7',
      category: 'Interior',
      title: 'Premium Interior Design',
      location: 'Coimbatore',
      description: 'Luxurious interior design with attention to detail'
    }
  ];

  const filters = ['All', 'Residential', 'Commercial', 'Interior'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section
      id="projects"
      data-testid="projects-section"
      ref={sectionRef}
      className="py-12 sm:py-16 lg:py-32"
      style={{ background: '#FAF8F5' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 reveal">
          <div
            className="inline-block px-3 sm:px-4 py-2 rounded-full mb-3 sm:mb-4"
            style={{
              background: 'linear-gradient(135deg, rgba(212, 165, 116, 0.1) 0%, rgba(184, 147, 111, 0.1) 100%)',
              border: '1px solid rgba(212, 165, 116, 0.3)'
            }}
          >
            <span className="text-amber-700 font-semibold text-xs sm:text-sm">PORTFOLIO</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4"
            style={{
              fontFamily: 'Playfair Display, serif',
              color: '#2C5F4E'
            }}
          >
            Our Projects
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Showcasing Excellence in Every Build
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 reveal px-4">
          {filters.map((filter) => (
            <button
              key={filter}
              data-testid={`filter-${filter.toLowerCase()}`}
              onClick={() => setActiveFilter(filter)}
              className="px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base"
              style={{
                background: activeFilter === filter
                  ? 'linear-gradient(135deg, #D4A574 0%, #B8936F 100%)'
                  : 'white',
                color: activeFilter === filter ? 'white' : '#2C5F4E',
                border: `2px solid ${activeFilter === filter ? 'transparent' : 'rgba(212, 165, 116, 0.3)'}`,
                boxShadow: activeFilter === filter ? '0 4px 15px rgba(212, 165, 116, 0.3)' : 'none'
              }}
              onMouseEnter={(e) => {
                if (activeFilter !== filter) {
                  e.currentTarget.style.borderColor = 'rgba(212, 165, 116, 0.6)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeFilter !== filter) {
                  e.currentTarget.style.borderColor = 'rgba(212, 165, 116, 0.3)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              data-testid={`project-card-${index}`}
              className="reveal card-hover group"
              style={{
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
                animation: `slideUp 0.8s ease-out ${index * 0.1}s forwards`
              }}
            >
              <div
                className="bg-white rounded-2xl overflow-hidden shadow-lg"
                style={{ border: '1px solid rgba(212, 165, 116, 0.2)' }}
              >
                {/* Image */}
                <div className="relative h-56 sm:h-64 lg:h-72 overflow-hidden img-hover">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)'
                    }}
                  ></div>
                  
                  {/* Category Badge */}
                  <div
                    className="absolute top-3 sm:top-4 left-3 sm:left-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur-md text-white font-semibold text-xs sm:text-sm"
                    style={{
                      background: 'rgba(212, 165, 116, 0.9)'
                    }}
                  >
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  <h3
                    className="text-xl sm:text-2xl font-bold mb-2"
                    style={{
                      fontFamily: 'Playfair Display, serif',
                      color: '#2C5F4E'
                    }}
                  >
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-3 text-gray-600">
                    <MapPin size={16} />
                    <span className="text-xs sm:text-sm">{project.location}</span>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;