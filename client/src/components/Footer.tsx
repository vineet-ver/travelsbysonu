import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold font-[Playfair_Display] text-white mb-6">
              <span className="text-white">SS</span><span className="text-[#4ECDC4]">Travels</span>
            </h3>
            <p className="text-gray-300 mb-6">
              Luxury car rental services for weddings, corporate events, and special occasions across India.
            </p>
            <p className="text-sm text-gray-300">
              CEO: Mr. Brajesh<br />
              Contact: Mr. Sonu
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Our Fleet', 'Services', 'Destinations', 'Contact'].map((item, index) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-gray-300 hover:text-[#4ECDC4] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {['Wedding Cars', 'Corporate Events', 'Airport Transfers', 'Intercity Travel', 'Film & Photo Shoots'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-gray-300 hover:text-[#4ECDC4] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold text-white mb-6">We Accept</h4>
            <div className="flex flex-wrap gap-3 mb-6">
              {['cc-visa', 'cc-mastercard', 'cc-amex', 'wallet'].map((icon, index) => (
                <div key={icon} className="w-12 h-8 bg-white rounded-md flex items-center justify-center">
                  <i className={`fa${icon.startsWith('cc') ? 'b' : 's'} fa-${icon} ${
                    icon === 'cc-visa' ? 'text-blue-800' : 
                    icon === 'cc-mastercard' ? 'text-red-500' : 
                    icon === 'cc-amex' ? 'text-blue-500' : 
                    'text-green-600'
                  } text-xl`}></i>
                </div>
              ))}
            </div>
            
            <h4 className="text-lg font-bold text-white mb-3">Download Our App</h4>
            <div className="flex space-x-3">
              <a href="#" className="block">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-10" />
              </a>
              <a href="#" className="block">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" className="h-10" />
              </a>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-12 pt-8 border-t border-[#4ECDC4] border-opacity-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} SS Travels India. All rights reserved.
            </p>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-[#4ECDC4] text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-[#4ECDC4] text-sm">Terms of Service</a>
              <a href="#" className="text-gray-300 hover:text-[#4ECDC4] text-sm">Refund Policy</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
