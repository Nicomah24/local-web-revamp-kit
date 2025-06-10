
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80)'
        }}
      />
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up">
          Bella Vista
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl mb-8 animate-fade-in-up font-light" style={{ animationDelay: '0.2s' }}>
          Authentic Italian Cuisine in the Heart of Downtown
        </p>
        <p className="text-lg md:text-xl mb-10 opacity-90 animate-fade-in-up max-w-2xl mx-auto" style={{ animationDelay: '0.4s' }}>
          Experience the perfect blend of traditional recipes and modern culinary artistry. 
          Fresh ingredients, warm hospitality, and unforgettable flavors await you.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Button 
            onClick={() => scrollToSection('menu')}
            size="lg"
            className="bg-restaurant-gold hover:bg-restaurant-gold/90 text-white px-8 py-4 text-lg font-semibold"
          >
            View Our Menu
          </Button>
          <Button 
            onClick={() => scrollToSection('reservations')}
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-restaurant-brown px-8 py-4 text-lg font-semibold"
          >
            Make Reservation
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
