import React from 'react';
import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Construction Services - KV Builders Coimbatore | Residential, Commercial & Industrial"
        description="Explore our comprehensive construction services including residential building, commercial projects, industrial construction, renovation, interior design, and project management in Coimbatore."
        keywords="residential construction coimbatore, commercial construction services, industrial building coimbatore, renovation services, interior design coimbatore, project management construction, building contractors"
        type="website"
      />
      <Navbar />
      <Services />
      <Footer />
    </div>
  );
};

export default ServicesPage;
