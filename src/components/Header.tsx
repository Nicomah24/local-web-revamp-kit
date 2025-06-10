
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center space-x-2">
            <h1 className={`font-display text-2xl lg:text-3xl font-bold transition-colors ${
              isScrolled ? 'text-restaurant-brown' : 'text-white'
            }`}>
              Bella Vista
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['home', 'menu', 'about', 'reservations', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`font-medium capitalize transition-colors hover:text-restaurant-gold ${
                  isScrolled ? 'text-foreground' : 'text-white'
                }`}
              >
                {item}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('reservations')}
              className="bg-restaurant-gold hover:bg-restaurant-gold/90 text-white"
            >
              Book Table
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className={`w-6 h-6 flex flex-col justify-center items-center ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}>
              <span className={`block w-5 h-0.5 bg-current transform transition-transform ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}></span>
              <span className={`block w-5 h-0.5 bg-current mt-1 transition-opacity ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`block w-5 h-0.5 bg-current mt-1 transform transition-transform ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-b">
            <nav className="px-4 py-6 space-y-4">
              {['home', 'menu', 'about', 'reservations', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left font-medium capitalize text-foreground hover:text-restaurant-gold"
                >
                  {item}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('reservations')}
                className="w-full bg-restaurant-gold hover:bg-restaurant-gold/90 text-white"
              >
                Book Table
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
