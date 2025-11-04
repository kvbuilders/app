import { useEffect, useState } from 'react';
import '@/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Projects from '@/components/Projects';
import Process from '@/components/Process';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import AdminDashboard from '@/components/AdminDashboard';
import SEO from '@/components/SEO';

const Home = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="KV Builders - Expert Construction Services in Coimbatore | Residential & Commercial"
        description="KV Builders offers professional construction services in Coimbatore including residential, commercial, and industrial projects. Expert builders with quality craftsmanship and timely delivery. Contact us today!"
        keywords="construction company coimbatore, builders coimbatore, residential construction, commercial construction, industrial construction, KV Builders, building contractors coimbatore, construction services tamil nadu"
      />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Projects />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </BrowserRouter>
      </div>
    </HelmetProvider>
  );
}

export default App;