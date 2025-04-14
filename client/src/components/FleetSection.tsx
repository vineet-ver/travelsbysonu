import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cars, carTypes } from '@/lib/data';

const FleetSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredCars, setFilteredCars] = useState(cars);

  const filterCars = (category: string) => {
    setActiveFilter(category);
    
    if (category === 'all') {
      setFilteredCars(cars);
    } else {
      const filtered = cars.filter(car => car.category === category);
      setFilteredCars(filtered);
    }
  };

  return (
    <section id="cars" className="py-20 bg-primary">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-[Playfair_Display] mb-4 text-white">
            Our <span className="text-[#4ECDC4]">Premium</span> Fleet
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 opacity-80">
            Choose from our collection of meticulously maintained luxury vehicles for your special occasion.
          </p>
        </motion.div>
        
        {/* Filter Controls */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Button
            onClick={() => filterCars('all')}
            className={`btn-hover-effect ${
              activeFilter === 'all' 
                ? 'bg-[#4ECDC4] bg-opacity-10 text-[#4ECDC4] border border-[#4ECDC4]' 
                : 'bg-transparent hover:bg-[#4ECDC4] hover:bg-opacity-10 text-gray-300 border border-transparent hover:border-[#4ECDC4]'
            } font-medium py-2 px-6 rounded-full`}
            variant="ghost"
          >
            All Cars
          </Button>
          
          {carTypes.map(type => (
            <Button
              key={type.value}
              onClick={() => filterCars(type.value)}
              className={`btn-hover-effect ${
                activeFilter === type.value 
                  ? 'bg-[#4ECDC4] bg-opacity-10 text-[#4ECDC4] border border-[#4ECDC4]' 
                  : 'bg-transparent hover:bg-[#4ECDC4] hover:bg-opacity-10 text-gray-300 border border-transparent hover:border-[#4ECDC4]'
              } font-medium py-2 px-6 rounded-full`}
              variant="ghost"
            >
              {type.label}
            </Button>
          ))}
        </motion.div>
        
        {/* Car Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredCars.map((car, index) => (
              <motion.div
                key={car.id}
                className="bg-gray-900 bg-opacity-50 rounded-xl overflow-hidden shadow-[0_0_15px_rgba(100,255,218,0.3)] hover:shadow-[0_0_25px_rgba(100,255,218,0.6)] transition-all duration-300 hover:-translate-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative aspect-w-16 aspect-h-9 overflow-hidden">
                  <img 
                    src={car.image} 
                    alt={car.name} 
                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className={`absolute top-4 right-4 ${
                    car.category === 'wedding' ? 'bg-[#7D56F4] text-white' : 
                    car.category === 'vintage' ? 'bg-[#64FFDA] text-primary' : 
                    'bg-[#4ECDC4] text-primary'
                  } text-sm font-bold py-1 px-3 rounded-full`}>
                    {car.badge}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold font-[Playfair_Display] mb-2 text-white">{car.name}</h3>
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 flex">
                      {Array(5).fill(0).map((_, i) => (
                        <i key={i} className={`fas fa-${i < car.rating ? 'star' : i + 0.5 === car.rating ? 'star-half-alt' : 'star'}`}></i>
                      ))}
                    </div>
                    <span className="text-gray-300 text-sm ml-2">({car.bookings} bookings)</span>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    {car.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <i className={`${feature.icon} text-[#4ECDC4] w-6`}></i>
                        <span className="text-gray-300">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center mt-6">
                    <div>
                      <span className="text-sm text-gray-300 opacity-80">Starting from</span>
                      <p className="text-xl font-bold text-white">₹{car.price.toLocaleString()}<span className="text-sm font-normal">/day</span></p>
                    </div>
                    
                    <Button 
                      asChild
                      className="bg-[#4ECDC4] hover:bg-opacity-90 text-primary text-sm font-bold py-2 px-4 rounded-lg transition-all hover:shadow-lg"
                    >
                      <a href="#booking">Book Now</a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button 
            asChild
            variant="outline"
            className="border-2 border-[#4ECDC4] text-[#4ECDC4] hover:bg-[#4ECDC4] hover:bg-opacity-10 font-bold py-3 px-8 rounded-lg transform transition hover:scale-105"
          >
            <a href="#booking">View All Vehicles</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FleetSection;
