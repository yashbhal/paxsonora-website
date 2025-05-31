'use client';

import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-start flex flex-col items-center justify-center p-6">
      <div className="bg-card p-8 sm:p-12 rounded-lg shadow-pax max-w-lg w-full text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 sm:mb-8">Contact Us</h1>
        <p className="text-lg text-foreground opacity-90 mb-6">
          We'd love to hear from you! For any inquiries, feedback, or support, please reach out.
        </p>
        <div className="text-left space-y-4 mb-8">
          <p className="text-foreground">
            Currently, the best way to contact us is via a placeholder email. This will be updated upon launch.
          </p>
          <p className="text-foreground">
            <strong>Email:</strong> <a href="mailto:hello@paxsonora.com" className="text-primary hover:underline transition-colors duration-300">hello@paxsonora.com</a> (Placeholder)
          </p>
        </div>
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
