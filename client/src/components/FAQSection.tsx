import React from 'react';
import { motion } from 'framer-motion';
import { faqs } from '@/lib/data';
import AccordionCustom from '@/components/ui/accordion-custom';

const FAQSection: React.FC = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-[Playfair_Display] mb-4 text-white">
            Frequently Asked <span className="text-[#4ECDC4]">Questions</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 opacity-80">
            Common questions about our luxury car rental services.
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div 
              key={faq.question} 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AccordionCustom 
                question={faq.question}
                answer={faq.answer}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
