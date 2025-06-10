
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const features = [
    {
      title: "Fresh Ingredients",
      description: "We source our ingredients daily from local farmers and import specialty items directly from Italy.",
      icon: "🌿"
    },
    {
      title: "Traditional Recipes",
      description: "Our recipes have been passed down through three generations of Italian chefs.",
      icon: "👨‍🍳"
    },
    {
      title: "Warm Atmosphere",
      description: "Enjoy authentic Italian hospitality in our cozy, family-friendly restaurant.",
      icon: "🏡"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Restaurant interior"
                className="rounded-lg shadow-lg hover-lift"
              />
              <img 
                src="https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Chef cooking"
                className="rounded-lg shadow-lg hover-lift mt-8"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2 animate-fade-in-up">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-restaurant-brown mb-6">
              Our Story
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Founded in 1985 by the Rossi family, Bella Vista has been serving authentic Italian 
              cuisine to our community for over three decades. What started as a small family 
              restaurant has grown into a beloved local institution, but we've never forgotten 
              our roots.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Every dish is prepared with love, using traditional techniques and the finest 
              ingredients. From our handmade pasta to our wood-fired pizzas, we bring the 
              taste of Italy to your table.
            </p>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <Card key={index} className="border-none shadow-sm bg-restaurant-cream/50">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <span className="text-2xl">{feature.icon}</span>
                      <div>
                        <h3 className="font-semibold text-restaurant-brown mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
