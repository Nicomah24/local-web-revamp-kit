
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Local Food Blogger",
    rating: 5,
    text: "Absolutely stunning! The truffle risotto was perfection, and the atmosphere transported me straight to Italy. This is now our go-to spot for special occasions.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Regular Customer",
    rating: 5,
    text: "I've been coming here for 5 years and the quality never disappoints. The staff knows my order by heart, and every meal feels like a warm embrace from family.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    location: "Anniversary Dinner",
    rating: 5,
    text: "Celebrated our 10th anniversary here last month. The service was impeccable, the food was divine, and they made our evening truly magical with special touches.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 4,
    name: "David Thompson",
    location: "Business Client",
    rating: 5,
    text: "Perfect for business dinners. The ambiance is sophisticated yet comfortable, and the wine selection is outstanding. My clients are always impressed.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span 
        key={index} 
        className={`text-lg ${index < rating ? 'text-restaurant-gold' : 'text-gray-300'}`}
      >
        ⭐
      </span>
    ));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-restaurant-brown mb-4">
            What Our Guests Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued customers have to say about their experience at Bella Vista.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="border-none shadow-lg bg-restaurant-cream/30">
                    <CardContent className="p-8 text-center">
                      <div className="mb-6">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                        />
                        <h3 className="font-semibold text-restaurant-brown text-lg">
                          {testimonial.name}
                        </h3>
                        <p className="text-muted-foreground">
                          {testimonial.location}
                        </p>
                      </div>
                      
                      <div className="flex justify-center mb-6">
                        {renderStars(testimonial.rating)}
                      </div>
                      
                      <blockquote className="text-lg text-muted-foreground italic leading-relaxed">
                        "{testimonial.text}"
                      </blockquote>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full border-restaurant-brown text-restaurant-brown hover:bg-restaurant-brown hover:text-white"
          >
            ←
          </Button>
          <Button
            variant="outline"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full border-restaurant-brown text-restaurant-brown hover:bg-restaurant-brown hover:text-white"
          >
            →
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-restaurant-gold' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
