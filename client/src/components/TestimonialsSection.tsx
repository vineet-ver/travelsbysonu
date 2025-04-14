import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '@/lib/data';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
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
            What Our <span className="text-[#4ECDC4]">Clients Say</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 opacity-80">
            Read testimonials from our satisfied customers who experienced our luxury service.
          </p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.name}
                className="bg-gray-900 bg-opacity-50 rounded-xl p-6 shadow-[0_0_15px_rgba(100,255,218,0.3)] hover:shadow-[0_0_25px_rgba(100,255,218,0.6)] transition-all duration-300 hover:-translate-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-yellow-400 flex mb-4">
                  {Array(5).fill(0).map((_, i) => (
                    <i key={i} className={`fas fa-${i < testimonial.rating ? 'star' : i + 0.5 === testimonial.rating ? 'star-half-alt' : 'star'}`}></i>
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#4ECDC4] bg-opacity-20 flex items-center justify-center">
                      <span className="text-[#4ECDC4] font-bold">{testimonial.initials}</span>
                    </div>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-white font-medium">{testimonial.name}</h4>
                    <p className="text-[#4ECDC4] text-sm">{testimonial.event}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
