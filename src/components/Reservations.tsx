
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Reservations = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    specialRequests: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Reservation Confirmed!",
      description: "We'll send you a confirmation email shortly. Thank you for choosing Bella Vista!",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '',
      specialRequests: ''
    });

    setIsSubmitting(false);
  };

  const timeSlots = [
    '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', 
    '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM'
  ];

  const guestOptions = ['1 Guest', '2 Guests', '3 Guests', '4 Guests', '5 Guests', '6 Guests', '7+ Guests'];

  return (
    <section id="reservations" className="py-20 bg-restaurant-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-restaurant-brown mb-4">
            Make a Reservation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Book your table and experience unforgettable Italian dining. 
            We recommend making reservations in advance, especially for weekend dining.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Reservation Form */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="font-display text-2xl text-restaurant-brown">
                Reservation Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="date">Date *</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleInputChange('date', e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="time">Time *</Label>
                    <Select value={formData.time} onValueChange={(value) => handleInputChange('time', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="guests">Party Size *</Label>
                    <Select value={formData.guests} onValueChange={(value) => handleInputChange('guests', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select guests" />
                      </SelectTrigger>
                      <SelectContent>
                        {guestOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="requests">Special Requests</Label>
                  <Textarea
                    id="requests"
                    value={formData.specialRequests}
                    onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                    placeholder="Dietary restrictions, special occasions, seating preferences..."
                    className="mt-1"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-restaurant-gold hover:bg-restaurant-gold/90 text-white py-3 text-lg"
                >
                  {isSubmitting ? 'Booking...' : 'Reserve Table'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Restaurant Info */}
          <div className="space-y-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-display text-xl font-semibold text-restaurant-brown mb-4">
                  Restaurant Hours
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Thursday</span>
                    <span>5:00 PM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Friday - Saturday</span>
                    <span>5:00 PM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>4:00 PM - 9:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-display text-xl font-semibold text-restaurant-brown mb-4">
                  Reservation Policy
                </h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Reservations are held for 15 minutes past the reserved time</li>
                  <li>• Large parties (8+) may require a deposit</li>
                  <li>• Cancellations must be made 2 hours in advance</li>
                  <li>• Special dietary requirements can be accommodated with advance notice</li>
                  <li>• Private dining rooms available for special events</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-display text-xl font-semibold text-restaurant-brown mb-4">
                  Contact Information
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>📍 123 Main Street, Downtown</p>
                  <p>📞 (555) 123-4567</p>
                  <p>✉️ reservations@bellavista.com</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservations;
