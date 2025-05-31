'use client';

import Link from 'next/link';

export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-gradient-start flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl font-bold text-foreground mb-4">Join the Waitlist</h1>
      <p className="text-xl text-foreground opacity-90 mb-8">Thank you for your interest in PaxSonora! Sign up to be the first to know when we launch.</p>
      {/* Placeholder for a form or more info */}
      <div className="bg-card p-8 rounded-lg shadow-pax max-w-md w-full">
        <h2 className="text-2xl font-semibold text-primary mb-6">Coming Soon!</h2>
        <p className="text-foreground mb-6">
          Our waitlist form will be available here shortly. Please check back soon!
        </p>
        <Link 
          href="/" 
          className="text-primary hover:underline font-semibold inline-block transition-all duration-300 hover:-translate-y-0.5"
        >
          &larr; Go back to Homepage
        </Link>
      </div>
    </div>
  );
}
