'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // Orb animation variants
  const orbVariants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.8, 0.95, 0.8],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="hero-gradient min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 py-16 relative overflow-hidden"
    >
      {/* Enhanced Orb with animation */}
      <motion.div 
        className="absolute top-24 md:top-32 w-36 h-36 md:w-52 md:h-52 rounded-full" 
        animate="animate"
        variants={orbVariants}
      >
        {/* Inner glow */}
        <div className="absolute inset-0 rounded-full bg-orb-inner-end dark:bg-orb-inner-start blur-2xl opacity-90" />
        
        {/* Core orb with gradient */}
        <div className="absolute inset-4 md:inset-6 rounded-full bg-gradient-to-br from-orb-inner-start to-orb-inner-end blur-md" />
        
        {/* Outer glow effect */}
        <div className="absolute -inset-4 md:-inset-6 rounded-full bg-orb-outer opacity-30 dark:opacity-20 blur-3xl" />
      </motion.div>
      
      {/* Content */}
      <motion.div 
        className="relative z-10 flex flex-col items-center max-w-2xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-serif font-medium text-foreground mb-6 leading-tight"
          variants={itemVariants}
        >
          <span className="block">Feel better,</span>
          <span className="block">one breath at a time</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl font-sans text-foreground opacity-90 mb-10 max-w-lg px-4"
          variants={itemVariants}
        >
          AI-powered talks and meditations for mindful breaks
        </motion.p>

        <motion.div variants={itemVariants}>
          <Link 
            href="/waitlist" 
            className="inline-block bg-primary text-primary-foreground font-sans font-semibold py-3 px-8 sm:py-4 sm:px-10 rounded-xlarge text-lg transition-all duration-300 shadow-pax hover:shadow-pax-lg hover:bg-primary/90 hover:-translate-y-1"
          >
            Join the waitlist
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
