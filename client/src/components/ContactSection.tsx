import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { insertContactSchema } from '@shared/schema';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

const ContactFormSchema = insertContactSchema.extend({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number' }).max(15),
  subject: z.string().min(2, { message: 'Subject must be at least 2 characters' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });
  
  const onSubmit = async (data: z.infer<typeof ContactFormSchema>) => {
    try {
      const response = await apiRequest('POST', '/api/contact', data);
      const result = await response.json();
      
      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "We'll get back to you soon.",
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
      console.error('Contact error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    }
  };

  const isSubmitting = form.formState.isSubmitting;

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-gray-900"></div>
      
      {/* Jellyfish-inspired background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(100,255,218,0.03)_0%,transparent_40%)] animate-[rotate_30s_linear_infinite]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-[Playfair_Display] mb-4 text-white">
            Get In <span className="text-[#4ECDC4]">Touch</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 opacity-80">
            Have questions or ready to book? Contact our team for personalized assistance.
          </p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gray-900 bg-opacity-50 rounded-xl p-8 shadow-[0_0_15px_rgba(100,255,218,0.3)] h-full">
              <div className="flex flex-col space-y-6">
                <div>
                  <h3 className="text-xl font-bold font-[Playfair_Display] mb-4 text-white">Contact Information</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <i className="fas fa-phone-alt text-[#4ECDC4] mt-1 w-6"></i>
                      <div className="ml-3">
                        <p className="text-white">+91 8882586447</p>
                        <p className="text-sm text-gray-300 opacity-70">Mon-Sun 9:00 AM - 9:00 PM</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-envelope text-[#4ECDC4] mt-1 w-6"></i>
                      <div className="ml-3">
                        <p className="text-white">shuklamrsk682@gmail.com</p>
                        <p className="text-sm text-gray-300 opacity-70">For bookings & inquiries</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-map-marker-alt text-[#4ECDC4] mt-1 w-6"></i>
                      <div className="ml-3">
                        <p className="text-white">C/59A Block C, Ashok Vihar,</p>
                        <p className="text-white">Phase III Extension, Gurugram 122001</p>
                        <p className="text-sm text-gray-300 opacity-70">Haryana, India</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold font-[Playfair_Display] mb-4 text-white">Operating Hours</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-gray-300">Monday - Friday:</span>
                      <span className="text-white">9:00 AM - 9:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-300">Saturday - Sunday:</span>
                      <span className="text-white">9:00 AM - 9:00 PM</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold font-[Playfair_Display] mb-4 text-white">Follow Us</h3>
                  <div className="flex space-x-4">
                    {['facebook-f', 'instagram', 'whatsapp', 'youtube'].map((icon, index) => (
                      <motion.a 
                        key={icon}
                        href="#" 
                        className="w-10 h-10 rounded-full bg-[#4ECDC4] bg-opacity-10 flex items-center justify-center hover:bg-[#4ECDC4] hover:bg-opacity-20 transition-all"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <i className={`fab fa-${icon} text-[#4ECDC4]`}></i>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gray-900 bg-opacity-50 rounded-xl p-8 shadow-[0_0_15px_rgba(100,255,218,0.3)]">
              <h3 className="text-xl font-bold font-[Playfair_Display] mb-6 text-white">Send a Message</h3>
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
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-300">Subject *</FormLabel>
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
                      name="message"
                      render={({ field }) => (
                        <FormItem className="md:col-span-2">
                          <FormLabel className="text-gray-300">Message *</FormLabel>
                          <FormControl>
                            <Textarea 
                              {...field} 
                              rows={5} 
                              className="bg-primary bg-opacity-50 border border-[#4ECDC4] rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] focus:border-transparent text-white resize-none"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="mt-6">
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="bg-[#4ECDC4] hover:bg-opacity-90 text-primary font-bold py-3 px-8 rounded-lg transform transition hover:scale-105"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
