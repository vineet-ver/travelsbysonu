import React from 'react';
import { motion } from 'framer-motion';
import { destinations } from '@/lib/data';

const DestinationsSection: React.FC = () => {
  return (
    <section id="destinations" className="py-20 relative overflow-hidden">
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
            Popular <span className="text-[#4ECDC4]">Destinations</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 opacity-80">
            Explore India's most breathtaking locations in style and comfort with our luxury fleet.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <motion.div 
              key={destination.name}
              className="rounded-xl overflow-hidden shadow-[0_0_15px_rgba(100,255,218,0.3)] hover:shadow-[0_0_25px_rgba(100,255,218,0.6)] transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative">
                <img 
                  src={destination.image} 
                  alt={destination.name} 
                  className="w-full h-72 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold font-[Playfair_Display] text-white mb-1">{destination.name}</h3>
                  <p className="text-[#4ECDC4]">Starting at ₹{destination.price.toLocaleString()}/day</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
