import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import FleetSection from '@/components/FleetSection';
import DestinationsSection from '@/components/DestinationsSection';
import BookingSection from '@/components/BookingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <motion.div 
      className="min-h-screen bg-primary overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        backgroundImage: `
          radial-gradient(circle at 10% 20%, rgba(77, 210, 207, 0.05) 0%, transparent 20%),
          radial-gradient(circle at 90% 80%, rgba(125, 86, 244, 0.05) 0%, transparent 20%)
        `,
      }}
    >
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <FleetSection />
      <DestinationsSection />
      <BookingSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </motion.div>
  );
};

export default Home;
