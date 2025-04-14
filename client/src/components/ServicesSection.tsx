import React from 'react';
import { motion } from 'framer-motion';
import { services } from '@/lib/data';

const ServicesSection: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="services" className="py-20 relative overflow-hidden">
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
            Luxury Transportation for Every <span className="text-[#4ECDC4]">Occasion</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 opacity-80">
            We provide premium car rental services for weddings, corporate events, parties, and VIP travel across India.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              className="bg-gray-900 bg-opacity-50 rounded-xl p-8 shadow-[0_0_15px_rgba(100,255,218,0.3)] hover:shadow-[0_0_25px_rgba(100,255,218,0.6)] transition-all duration-300 hover:-translate-y-2"
              variants={item}
            >
              <div className="w-16 h-16 bg-[#4ECDC4] bg-opacity-10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className={`${service.icon} text-[#4ECDC4] text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold font-[Playfair_Display] mb-4 text-center text-white">{service.title}</h3>
              <p className="text-center text-gray-300 opacity-80">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
