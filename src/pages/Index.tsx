import React from 'react';
import Header from '@/components/Header';
import ServicesSection from '@/components/ServicesSection';
import MapSection from '@/components/MapSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-tele2-black text-white">
      <Header />
      
      <main>
        <MapSection />
        <ServicesSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
