'use client';

import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background py-8 text-center border-t border-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Logo */}
        <div className="mb-6">
          <div className="inline-flex items-center justify-center">
            <span className="text-xl font-serif font-medium text-primary">Pax</span>
            <span className="text-xl font-serif text-foreground">Sonora</span>
          </div>
        </div>
        
        {/* Navigation Links */}
        <div className="flex flex-row justify-center items-center space-x-6 sm:space-x-10 mb-6">
          <Link 
            href="/privacy-policy" 
            className="font-sans text-sm text-foreground hover:text-primary transition-colors duration-300"
          >
            Privacy Policy
          </Link>
          <Link 
            href="/contact" 
            className="font-sans text-sm text-foreground hover:text-primary transition-colors duration-300"
          >
            Contact
          </Link>
        </div>
        
        {/* Copyright */}
        <p className="font-sans text-xs text-foreground opacity-70">
          &copy; {currentYear} PaxSonora. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
