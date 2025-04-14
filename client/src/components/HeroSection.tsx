import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import AnimatedBlob from '@/components/ui/animated-blob';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="home" 
      className="h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-primary bg-opacity-80"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary to-primary opacity-90"></div>
      
      {/* Jellyfish-inspired animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatedBlob 
          color="rgba(100, 255, 218, 0.05)" 
          position={{ top: '10%', left: '20%' }} 
          size={300}
          duration={20}
        />
        <AnimatedBlob 
          color="rgba(125, 86, 244, 0.05)" 
          position={{ bottom: '15%', right: '10%' }} 
          size={250}
          duration={15}
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-[Playfair_Display] mb-6 text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              textShadow: ['0 0 0px rgba(100, 255, 218, 0)', '0 0 10px rgba(100, 255, 218, 0.5)', '0 0 0px rgba(100, 255, 218, 0)'],
            }}
            transition={{ 
              duration: 0.8,
              textShadow: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
          >
            Luxury Rides for <br />
            <span className="text-[#4ECDC4]">Unforgettable</span> Moments
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl max-w-2xl mb-10 leading-relaxed text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Experience the epitome of luxury travel for your special occasions across India's most beautiful destinations.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button 
              asChild
              className="bg-[#4ECDC4] hover:bg-opacity-90 text-primary font-bold py-3 px-8 rounded-lg shadow-[0_0_15px_rgba(100,255,218,0.3)] hover:shadow-[0_0_25px_rgba(100,255,218,0.6)] transform transition duration-300 hover:scale-105"
            >
              <a href="#cars">View Our Fleet</a>
            </Button>
            
            <Button 
              asChild
              variant="outline" 
              className="border-2 border-[#4ECDC4] text-[#4ECDC4] hover:bg-[#4ECDC4] hover:bg-opacity-10 font-bold py-3 px-8 rounded-lg transform transition duration-300 hover:scale-105"
            >
              <a href="#booking">Book Now</a>
            </Button>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ 
          y: [0, 10, 0],
        }}
        transition={{ 
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop"
        }}
      >
        <a href="#services" className="text-white opacity-70 hover:opacity-100 transition-opacity">
          <i className="fas fa-chevron-down text-2xl"></i>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
