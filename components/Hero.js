'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-soft-gray to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-teal mb-4 leading-tight">
          Turn Your Home Equity into Cash Flow
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-teal mb-6">
          And Stay in the Home You Love.
        </h2>
        <p className="text-xl sm:text-2xl text-gray-700 mb-10 leading-relaxed max-w-3xl mx-auto">
          Discover how a reverse mortgage can eliminate monthly mortgage payments, 
          fund home care, and provide strategic cash flow for your retirement years.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/guides" 
            className="btn-secondary inline-flex items-center gap-2"
            aria-label="Learn about Reverse Mortgages"
          >
            Learn about Reverse Mortgages
          </Link>
          <Link 
            href="/calculate" 
            className="btn-secondary inline-flex items-center gap-2"
            aria-label="See what you qualify for"
          >
            See What You Qualify For
          </Link>
          <a
            href="https://reversemortgageseminar.net/justin"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
            aria-label="Watch free reverse mortgage webinar with Michael Pankow"
          >
            Watch Free Webinar
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

