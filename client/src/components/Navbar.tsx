import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';

const NavLink: React.FC<{ href: string; label: string }> = ({ href, label }) => {
  return (
    <a 
      href={href} 
      className="relative font-medium text-white hover:text-[#64FFDA] transition-colors duration-300 nav-link"
    >
      {label}
      <span className="absolute bottom-[-5px] left-0 w-0 h-0.5 bg-[#64FFDA] transition-all duration-300 group-hover:w-full"></span>
    </a>
  );
};

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.nav 
      className={`fixed w-full z-50 backdrop-blur-md transition-all duration-300 ${
        isScrolled ? 'bg-primary bg-opacity-95 shadow-lg' : 'bg-primary bg-opacity-80'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div 
          className="flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-2xl font-bold font-[Playfair_Display] text-[#64FFDA] transition-all duration-300">
            <span className="text-white">Royal</span><span className="text-[#4ECDC4]">Rides</span>
          </h1>
        </motion.div>
        
        <div className="hidden md:flex space-x-8">
          {['Home', 'Our Fleet', 'Services', 'Destinations', 'Contact'].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1) }}
              className="group"
            >
              <NavLink 
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                label={item} 
              />
            </motion.div>
          ))}
        </div>
        
        <motion.button 
          className="block md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
        </motion.button>
      </div>
      
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="bg-primary bg-opacity-95 backdrop-blur-md w-full"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
              {['home', 'cars', 'services', 'destinations', 'contact'].map((item, index) => (
                <motion.a 
                  key={item}
                  href={`#${item}`} 
                  className="py-2 block text-white hover:text-[#64FFDA] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * (index + 1) }}
                >
                  {item === 'home' ? 'Home' : 
                   item === 'cars' ? 'Our Fleet' : 
                   item === 'services' ? 'Services' : 
                   item === 'destinations' ? 'Destinations' : 'Contact'}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
