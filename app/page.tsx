'use client';

import { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import WaveDivider from '@/components/WaveDivider';
import WhySection from '@/components/WhySection';
import Footer from '@/components/Footer';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { LazyMotion, domAnimation } from 'framer-motion';

// Define SVG path data for the waves - simpler paths for better performance
const topWavePath = "M0,64 C320,32 640,96 960,64 C1280,32 1440,64 1440,64 L1440,108 L0,108 Z";
const bottomWavePath = "M0,32 C320,96 640,32 960,64 C1280,96 1440,64 1440,64 L1440,108 L0,108 Z";

export default function HomePage() {
  // Disable transitions on page load to prevent flash of unstyled content
  useEffect(() => {
    // Add the no-transitions class to the body on mount
    document.body.classList.add('no-transitions');
    
    // Remove it after a short delay to allow the initial render to complete
    const timer = setTimeout(() => {
      document.body.classList.remove('no-transitions');
      // Add theme transition class to body for smooth theme changes
      document.body.classList.add('theme-transition');
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <main className="flex flex-col min-h-screen bg-background overflow-hidden"> 
        {/* Theme switcher with improved positioning and styling */}
        <div className="fixed top-4 right-4 z-50">
          <div className="glass p-1.5 rounded-full shadow-pax">
            <ThemeSwitcher />
          </div>
        </div>
        
        {/* Hero Section */}
        <HeroSection />
        
        {/* Wave Divider Section with improved layering */}
        <div className="relative w-full h-24 md:h-32 mt-[-1px]">
          {/* Top wave */}
          <WaveDivider 
            pathData={topWavePath} 
            color="fill-gradient-start/80 dark:fill-gradient-start/80" 
            className="absolute top-0 left-0 w-full"
            animate={false}
          />
          
          {/* Bottom wave */}
          <WaveDivider 
            pathData={bottomWavePath} 
            color="fill-gradient-end dark:fill-gradient-end" 
            className="absolute top-0 left-0 w-full"
            animate={false}
          /> 
        </div>
        
        {/* Why Section */}
        <WhySection />
        
        {/* Footer */}
        <Footer />
      </main>
    </LazyMotion>
  );
}
