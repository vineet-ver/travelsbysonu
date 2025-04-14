import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { insertBookingSchema } from '@shared/schema';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { cars, eventTypes, durations, destinations } from '@/lib/data';

const BookingFormSchema = insertBookingSchema.extend({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number' }).max(15),
  eventType: z.string().min(1, { message: 'Please select an event type' }),
  eventDate: z.string().min(1, { message: 'Please select a date' }),
  duration: z.string().min(1, { message: 'Please select a duration' }),
  destination: z.string().min(1, { message: 'Please select a destination' }),
  carType: z.string().optional(),
  message: z.string().optional(),
});

const BookingSection: React.FC = () => {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof BookingFormSchema>>({
    resolver: zodResolver(BookingFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      eventType: '',
      eventDate: '',
      duration: '',
      carType: '',
      destination: '',
      message: '',
    },
  });
  
  const onSubmit = async (data: z.infer<typeof BookingFormSchema>) => {
    try {
      const response = await apiRequest('POST', '/api/bookings', data);
      const result = await response.json();
      
      if (result.success) {
        toast({
          title: "Booking Request Sent!",
          description: "We'll get back to you within 2 hours during business hours.",
          variant: "default",
        });
        form.reset();
      } else {
        toast({
          title: "Error",
          description: result.message || "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Booking error:', error);
      toast({
        title: "Error",
        description: "Failed to submit booking request. Please try again later.",
        variant: "destructive",
      });
    }
  };

  const isSubmitting = form.formState.isSubmitting;

  return (
    <section id="booking" className="py-20 bg-primary">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-[Playfair_Display] mb-4 text-white">
              Book Your <span className="text-[#4ECDC4]">Luxury Experience</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-300 opacity-80">
              Fill out the form below to request a booking or inquiry. Our team will get back to you within 2 hours.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-gray-900 bg-opacity-50 rounded-xl p-8 md:p-10 shadow-[0_0_15px_rgba(100,255,218,0.3)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Your Name *</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="bg-primary bg-opacity-50 border border-[#4ECDC4] rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] focus:border-transparent text-white"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Phone Number *</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="tel" 
                            className="bg-primary bg-opacity-50 border border-[#4ECDC4] rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] focus:border-transparent text-white"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Email Address *</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="email" 
                            className="bg-primary bg-opacity-50 border border-[#4ECDC4] rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] focus:border-transparent text-white"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="eventType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Event Type *</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-primary bg-opacity-50 border border-[#4ECDC4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] focus:border-transparent text-gray-300">
                              <SelectValue placeholder="Select Event Type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-gray-900 border border-[#4ECDC4]">
                            {eventTypes.map(type => (
                              <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="eventDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Event Date *</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="date" 
                            className="bg-primary bg-opacity-50 border border-[#4ECDC4] rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] focus:border-transparent text-white"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="duration"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Rental Duration *</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-primary bg-opacity-50 border border-[#4ECDC4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] focus:border-transparent text-gray-300">
                              <SelectValue placeholder="Select Duration" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-gray-900 border border-[#4ECDC4]">
                            {durations.map(duration => (
                              <SelectItem key={duration.value} value={duration.value}>{duration.label}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="carType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Preferred Car (Optional)</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-primary bg-opacity-50 border border-[#4ECDC4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] focus:border-transparent text-gray-300">
                              <SelectValue placeholder="Select Car" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-gray-900 border border-[#4ECDC4]">
                            {cars.map(car => (
                              <SelectItem key={car.id} value={car.id}>{car.name}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="destination"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Destination City *</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-primary bg-opacity-50 border border-[#4ECDC4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] focus:border-transparent text-gray-300">
                              <SelectValue placeholder="Select Destination" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-gray-900 border border-[#4ECDC4]">
                            {destinations.map(destination => (
                              <SelectItem key={destination.id} value={destination.id}>{destination.name}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="md:col-span-2">
                        <FormLabel className="text-gray-300">Additional Requirements</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            rows={4} 
                            className="bg-primary bg-opacity-50 border border-[#4ECDC4] rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] focus:border-transparent text-white resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="mt-8 text-center">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-[#4ECDC4] hover:bg-opacity-90 text-primary font-bold py-3 px-10 rounded-lg transform transition hover:scale-105 animate-pulse-slow"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Booking Request"}
                  </Button>
                  <p className="text-gray-300 text-sm mt-4 opacity-80">
                    * We'll respond to your inquiry within 2 hours during business hours.
                  </p>
                </div>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
