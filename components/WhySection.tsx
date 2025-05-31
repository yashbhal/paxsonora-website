'use client';

import React from 'react';
import { motion } from 'framer-motion';

const WhySection: React.FC = () => {
  return (
    <section className="bg-gradient-end dark:bg-gradient-end py-16 px-4 sm:px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-serif font-medium text-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Why I built PaxSonora
        </motion.h2>
        
        <motion.div
          className="font-sans text-foreground opacity-90 text-base sm:text-lg leading-relaxed space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p>
            In a world that often feels overwhelming, finding moments of peace can be a challenge.
            PaxSonora was born from a personal journey of seeking calm and clarity amidst the noise.
            I envisioned a space where technology could be a gentle guide, offering solace and support
            without adding to the digital clutter.
          </p>
          
          <p>
            Our AI-powered talks and meditations are designed to be short, accessible, and deeply personal,
            helping you reconnect with yourself, one breath at a time. This is more than just an app;
            it's a companion for your well-being, crafted with care and a deep understanding of the need for mindful breaks.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhySection;
