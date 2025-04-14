import { Variants } from 'framer-motion';

// Fade-in animation variants
export const fadeIn = (delay: number = 0): Variants => ({
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: 'tween',
      duration: 0.6,
      delay
    }
  }
});

// Stagger children animation variants
export const staggerContainer = (staggerChildren: number = 0.1, delayChildren: number = 0): Variants => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren
    }
  }
});

// Scale animation variants
export const scale = (delay: number = 0): Variants => ({
  hidden: { opacity: 0, scale: 0.8 },
  show: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      delay
    }
  }
});

// Slide-in animation variants
export const slideIn = (direction: 'left' | 'right' | 'up' | 'down', delay: number = 0): Variants => {
  const x = direction === 'left' ? '-100%' : direction === 'right' ? '100%' : '0';
  const y = direction === 'up' ? '-100%' : direction === 'down' ? '100%' : '0';
  
  return {
    hidden: { 
      opacity: 0, 
      x, 
      y 
    },
    show: { 
      opacity: 1, 
      x: 0, 
      y: 0,
      transition: {
        type: 'tween',
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75],
        delay
      }
    }
  };
};

// Pulse animation variants
export const pulse = (delay: number = 0): Variants => ({
  hidden: { opacity: 0, scale: 1 },
  show: { 
    opacity: 1, 
    scale: [1, 1.05, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: 'reverse',
      delay
    }
  }
});

// Glow animation variants
export const glow = (delay: number = 0): Variants => ({
  hidden: { opacity: 0, textShadow: '0 0 0px rgba(100, 255, 218, 0)' },
  show: { 
    opacity: 1, 
    textShadow: ['0 0 0px rgba(100, 255, 218, 0)', '0 0 10px rgba(100, 255, 218, 0.5)', '0 0 0px rgba(100, 255, 218, 0)'],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: 'reverse',
      delay
    }
  }
});
