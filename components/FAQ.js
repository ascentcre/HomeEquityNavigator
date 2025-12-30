'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    id: 1,
    question: "Does the bank own your home with a reverse mortgage?",
    answer: "You retain full ownership and title to your home. A reverse mortgage is a loan secured by your home, but you remain the homeowner. The loan only becomes due when you permanently move out, sell the home, or pass away."
  },
  {
    id: 2,
    question: "Can you be forced out of your home with a reverse mortgage?",
    answer: "As long as you live in the home, maintain it, and pay property taxes and insurance, you cannot be forced to move. The loan terms protect your right to stay in your home for life."
  },
  {
    id: 3,
    question: "Do your heirs inherit debt with a reverse mortgage?",
    answer: "Reverse mortgages are non-recourse loans. This means your heirs will never owe more than the home is worth. They can choose to repay the loan and keep the home, or sell it and keep any remaining equity."
  },
  {
    id: 4,
    question: "Are reverse mortgages only for desperate people?",
    answer: "Many financially savvy seniors use reverse mortgages as a strategic retirement planning tool to optimize cash flow, eliminate monthly mortgage payments, and preserve other investments while staying in their homes."
  },
  {
    id: 5,
    question: "Will you lose your home if you outlive the reverse mortgage loan?",
    answer: "This is impossible with a reverse mortgage. The loan continues as long as you live in the home and meet the basic obligations. There's no set term, and the loan doesn't come due simply because of your age."
  },
  {
    id: 6,
    question: "How does a reverse mortgage affect Social Security?",
    answer: "Reverse mortgage proceeds do not count as income and do not affect your Social Security benefits. However, if you receive means-tested benefits like Supplemental Security Income (SSI) or Medicaid, you may need to spend the funds within the month you receive them to avoid affecting eligibility. It's important to consult with a financial advisor about your specific situation."
  },
  {
    id: 7,
    question: "Do you need to own your home free and clear to get a reverse mortgage?",
    answer: "No, you do not need to own your home outright. Many people use reverse mortgages to pay off existing mortgages, which eliminates their monthly mortgage payments. If you have an existing mortgage, the reverse mortgage proceeds must first pay off that loan, and you receive the remaining funds."
  },
  {
    id: 8,
    question: "What are the eligibility requirements for a reverse mortgage?",
    answer: "To qualify for a reverse mortgage, you must be 62 years or older, own your home (or have significant equity), use it as your primary residence, and be able to pay property taxes, homeowner's insurance, and maintain the property. You must also complete HUD-approved counseling before obtaining a reverse mortgage."
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggleItem = (id) => {
    setOpenId(openId === id ? null : id);
  };

  // Generate JSON-LD schema for FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" aria-label="Frequently Asked Questions about reverse mortgages">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-teal text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-2xl mx-auto">
            Get answers to common questions about reverse mortgages
          </p>
          
          <div className="space-y-4">
            {faqData.map((item) => (
              <div 
                key={item.id} 
                className="border-2 border-soft-gray-dark rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-4 bg-soft-gray hover:bg-soft-gray-dark transition-colors duration-200 flex justify-between items-center text-left focus:outline-none focus:ring-4 focus:ring-teal focus:ring-opacity-50"
                  aria-expanded={openId === item.id}
                  aria-controls={`faq-content-${item.id}`}
                >
                  <span className="text-lg font-semibold text-teal pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-6 w-6 text-teal flex-shrink-0 transition-transform duration-200 ${
                      openId === item.id ? 'transform rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
                
                <AnimatePresence>
                  {openId === item.id && (
                    <motion.div
                      id={`faq-content-${item.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-5 bg-white">
                        <p className="text-base text-gray-700 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

