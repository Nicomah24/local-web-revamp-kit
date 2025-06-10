
import React from 'react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-restaurant-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="md:col-span-2">
            <h3 className="font-display text-2xl font-bold mb-4 text-restaurant-gold">
              Bella Vista
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Experience authentic Italian cuisine in the heart of downtown. 
              Our family recipes and warm hospitality create unforgettable dining experiences.
            </p>
            <div className="space-y-2 text-gray-300">
              <p>📍 123 Main Street, Downtown District</p>
              <p>📞 (555) 123-4567</p>
              <p>✉️ info@bellavista.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Menu', 'About', 'Reservations', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-300 hover:text-restaurant-gold transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Hours</h4>
            <div className="space-y-2 text-gray-300 text-sm">
              <div>
                <div className="font-medium">Mon - Thu</div>
                <div>5:00 PM - 10:00 PM</div>
              </div>
              <div>
                <div className="font-medium">Fri - Sat</div>
                <div>5:00 PM - 11:00 PM</div>
              </div>
              <div>
                <div className="font-medium">Sunday</div>
                <div>4:00 PM - 9:00 PM</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Bella Vista Restaurant. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-restaurant-gold transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-restaurant-gold transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-restaurant-gold transition-colors text-sm">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
