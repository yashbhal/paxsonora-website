'use client';

import Link from 'next/link';

export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center p-4 max-w-3xl mx-auto w-full">
        <div className="text-center space-y-6 w-full">
          <h1 className="text-4xl font-bold text-foreground">
            Join the Waitlist
          </h1>
          <p className="text-lg text-muted-foreground">
            Be the first to know when we launch. Limited spots available.
          </p>
          
          {/* Waitlist Form */}
          <div className="mt-8 w-full">
            <div 
              className="waitlister-form mx-auto" 
              data-waitlist-key="x1SLl52Dxqg5" 
              data-height="197px"
            ></div>
          </div>

          <div className="mt-8">
            <Link
              href="/"
              className="text-primary hover:underline font-semibold inline-block transition-all duration-300 hover:-translate-y-0.5"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
