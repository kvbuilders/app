import React from 'react';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Our Projects - KV Builders Portfolio | Completed Construction Projects in Coimbatore"
        description="View our portfolio of successfully completed residential, commercial, and industrial construction projects in Coimbatore. Quality construction with attention to detail and timely delivery."
        keywords="construction projects coimbatore, completed buildings, residential projects, commercial projects portfolio, construction company portfolio, building projects coimbatore"
        type="website"
      />
      <Navbar />
      <Projects />
      <Gallery />
      <Footer />
    </div>
  );
};

export default ProjectsPage;
