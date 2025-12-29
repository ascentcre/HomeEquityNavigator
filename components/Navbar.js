'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/texana-bank-fdic-logo.png"
              alt="FDIC Insured - Texana Bank"
              width={248}
              height={45}
              className="h-[65px] w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-teal font-medium text-lg transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/guides" 
              className="text-gray-700 hover:text-teal font-medium text-lg transition-colors"
            >
              Learn
            </Link>
            <Link 
              href="/calculate" 
              className="text-gray-700 hover:text-teal font-medium text-lg transition-colors"
            >
              Get Your Report
            </Link>
            <a 
              href="https://calendly.com/justin-castro-texanabank/reverse-mortgage-discussion" 
              className="btn-primary"
              aria-label="Talk to an expert"
              target="_blank"
              rel="noopener noreferrer"
            >
              Talk to an Expert
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-soft-gray focus:outline-none focus:ring-2 focus:ring-teal"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link
              href="/"
              className="block px-4 py-3 text-gray-700 hover:bg-soft-gray rounded-lg font-medium text-lg"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/guides"
              className="block px-4 py-3 text-gray-700 hover:bg-soft-gray rounded-lg font-medium text-lg"
              onClick={() => setIsOpen(false)}
            >
              Learn
            </Link>
            <Link
              href="/calculate"
              className="block px-4 py-3 text-gray-700 hover:bg-soft-gray rounded-lg font-medium text-lg"
              onClick={() => setIsOpen(false)}
            >
              Calculate Benefits
            </Link>
            <a
              href="https://calendly.com/justin-castro-texanabank/reverse-mortgage-discussion"
              className="block btn-primary text-center mt-4"
              onClick={() => setIsOpen(false)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Talk to an Expert
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

