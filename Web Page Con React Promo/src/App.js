import React from 'react';
import HeroBanner from './components/HeroBanner';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsGallery from './components/ProjectsGallery';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="font-sans antialiased text-gray-900">
      <HeroBanner />
      <AboutSection />
      <ServicesSection />
      <ProjectsGallery />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;

// DONE