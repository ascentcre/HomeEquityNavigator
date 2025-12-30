'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-soft-gray to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Trust Signal Badge */}
        <div className="mb-6">
          <span className="inline-block bg-teal/10 text-teal px-4 py-2 rounded-full text-sm font-semibold border border-teal/20">
            Free Educational Resources • No-Pressure Education
          </span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-teal mb-4 leading-tight">
          How Reverse Mortgages Help Homeowners 62+ Eliminate Mortgage Payments
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed max-w-3xl mx-auto font-medium">
          A free educational resource from Texana Bank to help you understand if a reverse mortgage fits your retirement plan
        </p>
        <p className="text-xl sm:text-2xl text-gray-700 mb-10 leading-relaxed max-w-3xl mx-auto" style={{ lineHeight: '1.7' }}>
          Discover how thousands of homeowners 62+ are using their home equity to eliminate mortgage payments, afford quality care, and enjoy retirement on their terms.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/guides" 
            className="btn-secondary inline-flex items-center gap-2"
            aria-label="See How It Works"
          >
            See How It Works
          </Link>
          <Link 
            href="/calculate" 
            className="btn-secondary inline-flex items-center gap-2"
            aria-label="Get Your Free Analysis"
          >
            Get Your Free Analysis
          </Link>
          <a
            href="https://reversemortgageseminar.net/justin"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
            aria-label="Watch Our Free Educational Video"
          >
            Watch Our Free Educational Video
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

