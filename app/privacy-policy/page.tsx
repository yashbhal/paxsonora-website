'use client';

import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-start flex flex-col items-center justify-center p-6">
      <div className="bg-card p-8 sm:p-12 rounded-lg shadow-pax max-w-2xl w-full text-left">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 sm:mb-8 text-center">Privacy Policy</h1>
        <div className="prose prose-lg text-foreground max-w-none dark:prose-invert">
          <p>Welcome to PaxSonora. Your privacy is critically important to us.</p>
          <h2 className="text-xl font-semibold text-primary mt-6 mb-3">Information We Collect</h2>
          <p>We are not collecting any personal information at this stage as the app is currently under development and this is a placeholder page.</p>
          <p>When we launch, we will update this policy to reflect the data we collect, such as:</p>
          <ul>
            <li>Information you provide when you sign up for the waitlist (e.g., email address).</li>
            <li>Usage data and analytics to improve our services.</li>
          </ul>
          <h2 className="text-xl font-semibold text-primary mt-6 mb-3">How We Use Information</h2>
          <p>Any information collected in the future will be used to:</p>
          <ul>
            <li>Notify you about the launch and updates.</li>
            <li>Improve and personalize your experience with PaxSonora.</li>
            <li>Communicate with you about our services.</li>
          </ul>
          <h2 className="text-xl font-semibold text-primary mt-6 mb-3">Data Security</h2>
          <p>We will take reasonable measures to protect your information once collected.</p>
          <h2 className="text-xl font-semibold text-primary mt-6 mb-3">Changes to This Policy</h2>
          <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.</p>
          <h2 className="text-xl font-semibold text-primary mt-6 mb-3">Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us (a contact method will be provided here).</p>
        </div>
        <div className="mt-8 text-center">
          <Link 
            href="/" 
            className="text-primary hover:underline font-semibold inline-block transition-all duration-300 hover:-translate-y-0.5"
          >
            &larr; Go back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
