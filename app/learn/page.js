'use client';

import Link from 'next/link';
import { BookOpen, ArrowRight } from 'lucide-react';

const articles = [
  {
    id: 'social-security',
    title: 'How Does a Reverse Mortgage Affect Social Security?',
    description: 'Understanding how reverse mortgage proceeds interact with Social Security benefits, SSI, and other government assistance programs.',
    slug: 'social-security',
    readTime: '8 min read',
    category: 'Benefits & Eligibility'
  },
  {
    id: 'medicaid',
    title: 'Reverse Mortgages and Medicaid Eligibility: What You Need to Know',
    description: 'Learn how reverse mortgage funds can impact Medicaid eligibility and strategies to protect your benefits.',
    slug: 'medicaid',
    readTime: '10 min read',
    category: 'Benefits & Eligibility'
  },
  {
    id: 'heirs',
    title: 'What Happens to a Reverse Mortgage When You Die? A Guide for Heirs',
    description: 'A comprehensive guide explaining the options available to heirs when a reverse mortgage borrower passes away.',
    slug: 'heirs',
    readTime: '12 min read',
    category: 'Estate Planning'
  }
];

export default function LearnPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-soft-gray to-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-teal mb-6 leading-tight">
            Learn About Reverse Mortgages
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-4">
            Comprehensive guides answering your questions about reverse mortgages, eligibility, and financial planning
          </p>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Explore detailed articles covering common questions and long-tail topics to help you make informed decisions
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article
                key={article.id}
                className="bg-white border-2 border-soft-gray-dark rounded-lg p-6 hover:shadow-lg transition-shadow duration-200 flex flex-col"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-teal bg-soft-gray px-3 py-1 rounded">
                    {article.category}
                  </span>
                  <span className="text-sm text-gray-500">{article.readTime}</span>
                </div>
                <h2 className="text-2xl font-serif font-bold text-teal mb-3">
                  {article.title}
                </h2>
                <p className="text-base text-gray-700 leading-relaxed mb-4 flex-grow">
                  {article.description}
                </p>
                <Link
                  href={`/learn/${article.slug}`}
                  className="inline-flex items-center text-teal font-semibold hover:text-teal-light transition-colors group"
                >
                  Read Article
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Link to Main Guides */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-soft-gray">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold text-teal mb-4">
            Comprehensive Reverse Mortgage Guide
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Looking for a complete overview? Explore our comprehensive guide covering everything from myths and facts to real-world examples.
          </p>
          <Link
            href="/guides"
            className="btn-primary inline-flex items-center gap-2"
          >
            <BookOpen className="h-5 w-5" />
            View Complete Guide
          </Link>
        </div>
      </section>
    </div>
  );
}

