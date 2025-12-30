'use client';

import Link from 'next/link';
import { ArrowLeft, Clock, ArrowRight } from 'lucide-react';
import { SocialSecurityContent, MedicaidContent, HeirsContent } from './ArticleContent';

const articles = {
  'social-security': {
    title: 'How Does a Reverse Mortgage Affect Social Security?',
    category: 'Benefits & Eligibility',
    readTime: '8 min read',
    date: '2025-01-15',
    Content: SocialSecurityContent
  },
  'medicaid': {
    title: 'Reverse Mortgages and Medicaid Eligibility: What You Need to Know',
    category: 'Benefits & Eligibility',
    readTime: '10 min read',
    date: '2025-01-15',
    Content: MedicaidContent
  },
  'heirs': {
    title: 'What Happens to a Reverse Mortgage When You Die? A Guide for Heirs',
    category: 'Estate Planning',
    readTime: '12 min read',
    date: '2025-01-15',
    Content: HeirsContent
  }
};

export default function ArticlePage({ params }) {
  const { slug } = params;
  const article = articles[slug];

  if (!article) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-teal mb-4">Article Not Found</h1>
          <p className="text-lg text-gray-700 mb-6">The article you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/learn" className="btn-primary inline-flex items-center gap-2">
            <ArrowLeft className="h-5 w-5" />
            Back to Learn
          </Link>
        </div>
      </div>
    );
  }

  const ArticleContent = article.Content;

  return (
    <div className="bg-white min-h-screen">
      {/* Article Header */}
      <section className="bg-gradient-to-b from-soft-gray to-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/learn"
            className="inline-flex items-center text-teal hover:text-teal-light mb-6 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Learn
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm font-semibold text-teal bg-soft-gray px-3 py-1 rounded">
              {article.category}
            </span>
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="h-4 w-4 mr-1" />
              {article.readTime}
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-teal mb-4 leading-tight">
            {article.title}
          </h1>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ArticleContent />
      </article>

      {/* Related Articles / CTA */}
      <section className="bg-soft-gray py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold text-teal mb-4">
            Ready to Explore Your Options?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Get a personalized estimate of your reverse mortgage benefits or schedule a consultation with our experts.
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
    </div>
  );
}
