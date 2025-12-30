'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-soft-gray to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-teal mb-4 leading-tight">
          How Reverse Mortgages Help Homeowners 62+ Eliminate Mortgage Payments
        </h1>
        <p className="text-xl sm:text-2xl text-gray-700 mb-10 leading-relaxed max-w-3xl mx-auto" style={{ lineHeight: '1.7' }}>
          See exactly how much tax-free cash you could access from your home—with a personalized analysis from Texana Bank.
        </p>
        
        {/* Primary CTA */}
        <div className="mb-8">
          <Link 
            href="/calculate" 
            className="inline-flex items-center justify-center gap-2 bg-teal text-white px-8 py-4 rounded-lg font-semibold text-xl hover:bg-teal-light transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-teal focus:ring-opacity-50 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            aria-label="Get Your Free Analysis Report"
            style={{ minHeight: '56px' }}
          >
            Get Your Free Analysis Report
            <ArrowRight className="h-6 w-6" aria-hidden="true" />
          </Link>
        </div>
        
        {/* Secondary CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/guides" 
            className="text-teal hover:text-teal-light font-medium text-lg underline underline-offset-4 transition-colors"
            aria-label="See How It Works"
          >
            See How It Works
          </Link>
          <span className="hidden sm:inline text-gray-400">•</span>
          <a
            href="https://reversemortgageseminar.net/justin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal hover:text-teal-light font-medium text-lg underline underline-offset-4 transition-colors inline-flex items-center gap-1"
            aria-label="Watch Our Free Educational Video"
          >
            Watch Educational Video
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

