'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface WaveDividerProps {
  pathData: string;
  color?: string;
  direction?: 'up' | 'down';
  className?: string;
  animate?: boolean;
}

const WaveDivider: React.FC<WaveDividerProps> = ({
  pathData,
  color = 'fill-accent/30',
  direction = 'down',
  className = '',
  animate = false,
}) => {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <svg 
        viewBox="0 0 1440 108" 
        preserveAspectRatio="none"
        className={`block w-full h-full ${color}`}
        style={{
          transform: direction === 'up' 
            ? 'scaleY(-1)' 
            : 'none',
        }}
      >
        {animate ? (
          <motion.path 
            d={pathData} 
            initial={{ opacity: 0.7 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        ) : (
          <path d={pathData} />
        )}
      </svg>
    </div>
  );
};

export default WaveDivider;
