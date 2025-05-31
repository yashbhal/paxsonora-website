'use client';

import Link from 'next/link';

export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center">
      <div className="w-full max-w-3xl mx-auto px-4 py-12">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Join the Waitlist
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Be the first to know when we launch. Limited spots available.
            </p>
          </div>
          
          {/* Waitlist Form */}
          <div className="w-full max-w-xl mx-auto bg-card rounded-lg p-6 shadow-sm">
            <div 
              className="waitlister-form" 
              data-waitlist-key="x1SLl52Dxqg5" 
              data-height="197px"
            ></div>
          </div>

          <div className="mt-12">
            <Link
              href="/"
              className="text-primary hover:underline font-semibold inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
            >
              <span className="text-lg">←</span>
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
