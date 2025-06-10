
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  isVegetarian?: boolean;
  isGlutenFree?: boolean;
  image: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Margherita Pizza",
    description: "Fresh mozzarella, San Marzano tomatoes, fresh basil, extra virgin olive oil",
    price: 18,
    category: "pizza",
    isVegetarian: true,
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Truffle Risotto",
    description: "Arborio rice with black truffle, parmigiano reggiano, white wine",
    price: 28,
    category: "pasta",
    isVegetarian: true,
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Osso Buco",
    description: "Braised veal shanks with saffron risotto and gremolata",
    price: 36,
    category: "main",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Burrata Caprese",
    description: "Creamy burrata with heirloom tomatoes, basil oil, aged balsamic",
    price: 16,
    category: "appetizer",
    isVegetarian: true,
    image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "Tiramisu",
    description: "Classic Italian dessert with espresso-soaked ladyfingers and mascarpone",
    price: 12,
    category: "dessert",
    isVegetarian: true,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    name: "Linguine alle Vongole",
    description: "Fresh clams, white wine, garlic, parsley, and a touch of chili",
    price: 24,
    category: "pasta",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const categories = [
  { id: 'all', name: 'All Items' },
  { id: 'appetizer', name: 'Appetizers' },
  { id: 'pasta', name: 'Pasta & Risotto' },
  { id: 'pizza', name: 'Pizza' },
  { id: 'main', name: 'Main Courses' },
  { id: 'dessert', name: 'Desserts' }
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showVegetarianOnly, setShowVegetarianOnly] = useState(false);

  const filteredItems = menuItems.filter(item => {
    const categoryMatch = activeCategory === 'all' || item.category === activeCategory;
    const vegetarianMatch = !showVegetarianOnly || item.isVegetarian;
    return categoryMatch && vegetarianMatch;
  });

  return (
    <section id="menu" className="py-20 bg-restaurant-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-restaurant-brown mb-4">
            Our Menu
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully crafted dishes made with the finest Italian ingredients 
            and traditional cooking techniques passed down through generations.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`${
                activeCategory === category.id 
                  ? 'bg-restaurant-brown hover:bg-restaurant-brown/90' 
                  : 'border-restaurant-brown text-restaurant-brown hover:bg-restaurant-brown hover:text-white'
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Vegetarian Filter */}
        <div className="flex justify-center mb-12">
          <Button
            variant={showVegetarianOnly ? "default" : "outline"}
            onClick={() => setShowVegetarianOnly(!showVegetarianOnly)}
            className={`${
              showVegetarianOnly 
                ? 'bg-green-600 hover:bg-green-700' 
                : 'border-green-600 text-green-600 hover:bg-green-600 hover:text-white'
            }`}
          >
            🌱 Vegetarian Only
          </Button>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card 
              key={item.id} 
              className="overflow-hidden hover-lift animate-scale-in bg-white border-none shadow-lg"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display text-xl font-semibold text-restaurant-brown">
                    {item.name}
                  </h3>
                  <span className="text-xl font-bold text-restaurant-gold">
                    ${item.price}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex gap-2">
                  {item.isVegetarian && (
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                      🌱 Vegetarian
                    </span>
                  )}
                  {item.isGlutenFree && (
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                      Gluten Free
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No items match your current filters. Try adjusting your selection.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;
