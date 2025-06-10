
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Menu from '@/components/Menu';
import About from '@/components/About';
import Reservations from '@/components/Reservations';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Menu />
      <About />
      <Reservations />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
