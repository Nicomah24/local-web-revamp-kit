
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: "📍",
      title: "Address",
      details: ["123 Main Street", "Downtown District", "City, State 12345"]
    },
    {
      icon: "📞",
      title: "Phone",
      details: ["(555) 123-4567", "Available during business hours"]
    },
    {
      icon: "✉️",
      title: "Email",
      details: ["info@bellavista.com", "reservations@bellavista.com"]
    },
    {
      icon: "🕐",
      title: "Hours",
      details: ["Mon-Thu: 5:00 PM - 10:00 PM", "Fri-Sat: 5:00 PM - 11:00 PM", "Sun: 4:00 PM - 9:00 PM"]
    }
  ];

  const socialLinks = [
    { name: "Facebook", url: "#", icon: "📘" },
    { name: "Instagram", url: "#", icon: "📷" },
    { name: "Twitter", url: "#", icon: "🐦" },
    { name: "Yelp", url: "#", icon: "⭐" }
  ];

  return (
    <section id="contact" className="py-20 bg-restaurant-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-restaurant-brown mb-4">
            Visit Us Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We'd love to welcome you to Bella Vista. Find us in the heart of downtown, 
            where authentic Italian flavors meet warm hospitality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-none shadow-lg bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl mb-3">{info.icon}</div>
                    <h3 className="font-semibold text-restaurant-brown mb-3">
                      {info.title}
                    </h3>
                    <div className="space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Media Links */}
            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-6">
                <h3 className="font-semibold text-restaurant-brown mb-4 text-center">
                  Follow Us
                </h3>
                <div className="flex justify-center space-x-4">
                  {socialLinks.map((social) => (
                    <Button
                      key={social.name}
                      variant="outline"
                      size="sm"
                      className="border-restaurant-brown text-restaurant-brown hover:bg-restaurant-brown hover:text-white"
                    >
                      <span className="mr-2">{social.icon}</span>
                      {social.name}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Special Offers */}
            <Card className="border-none shadow-lg bg-restaurant-gold text-white">
              <CardContent className="p-6 text-center">
                <h3 className="font-display text-xl font-semibold mb-3">
                  Join Our Newsletter
                </h3>
                <p className="mb-4 opacity-90">
                  Get exclusive offers, new menu updates, and special event invitations.
                </p>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-restaurant-gold"
                >
                  Subscribe Now
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <div className="relative">
            <Card className="border-none shadow-lg overflow-hidden h-full min-h-[500px]">
              <CardContent className="p-0 h-full">
                <div className="relative h-full bg-gray-200 flex items-center justify-center">
                  {/* Placeholder for Google Map */}
                  <div className="text-center p-8">
                    <div className="text-4xl mb-4">🗺️</div>
                    <h3 className="font-semibold text-restaurant-brown mb-2">
                      Interactive Map
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Replace this placeholder with an actual Google Maps embed for your restaurant location.
                    </p>
                    <Button 
                      variant="outline"
                      className="border-restaurant-brown text-restaurant-brown hover:bg-restaurant-brown hover:text-white"
                    >
                      Get Directions
                    </Button>
                  </div>
                  
                  {/* Overlay with restaurant info */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <Card className="bg-white/95 backdrop-blur-sm">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-restaurant-brown mb-1">
                          Bella Vista Restaurant
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          123 Main Street, Downtown District
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Free parking available on weekends
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
