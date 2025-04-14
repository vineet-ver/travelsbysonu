import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedBlobProps {
  color: string;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  size: number;
  duration?: number;
}

const AnimatedBlob: React.FC<AnimatedBlobProps> = ({ 
  color, 
  position,
  size, 
  duration = 10 
}) => {
  return (
    <motion.div
      className="absolute rounded-full blur-[80px] opacity-70"
      style={{
        ...position,
        backgroundColor: color,
        width: size,
        height: size,
      }}
      animate={{
        scale: [1, 1.2, 1],
        x: [0, 30, -30, 0],
        y: [0, -30, 30, 0],
      }}
      transition={{
        duration,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
  );
};

export default AnimatedBlob;
