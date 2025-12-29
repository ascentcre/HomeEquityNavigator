'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const myths = [
  {
    id: 1,
    myth: "The bank owns your home",
    reality: "You retain full ownership and title to your home. A reverse mortgage is a loan secured by your home, but you remain the homeowner. The loan only becomes due when you permanently move out, sell the home, or pass away."
  },
  {
    id: 2,
    myth: "You can be forced out of your home",
    reality: "As long as you live in the home, maintain it, and pay property taxes and insurance, you cannot be forced to move. The loan terms protect your right to stay in your home for life."
  },
  {
    id: 3,
    myth: "Your heirs inherit debt",
    reality: "Reverse mortgages are non-recourse loans. This means your heirs will never owe more than the home is worth. They can choose to repay the loan and keep the home, or sell it and keep any remaining equity."
  },
  {
    id: 4,
    myth: "Only desperate people use reverse mortgages",
    reality: "Many financially savvy seniors use reverse mortgages as a strategic retirement planning tool to optimize cash flow, eliminate monthly mortgage payments, and preserve other investments while staying in their homes."
  },
  {
    id: 5,
    myth: "You'll lose your home if you outlive the loan",
    reality: "This is impossible with a reverse mortgage. The loan continues as long as you live in the home and meet the basic obligations. There's no set term, and the loan doesn't come due simply because of your age."
  }
];

export default function MythAccordion() {
  const [openId, setOpenId] = useState(null);

  const toggleItem = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" aria-label="Myths vs Reality about reverse mortgages">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-teal text-center mb-4">
          Myths vs. Reality
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-2xl mx-auto">
          Separate fact from fiction about reverse mortgages
        </p>
        
        <div className="space-y-4">
          {myths.map((item) => (
            <div 
              key={item.id} 
              className="border-2 border-soft-gray-dark rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-4 bg-soft-gray hover:bg-soft-gray-dark transition-colors duration-200 flex justify-between items-center text-left focus:outline-none focus:ring-4 focus:ring-teal focus:ring-opacity-50"
                aria-expanded={openId === item.id}
                aria-controls={`myth-content-${item.id}`}
              >
                <span className="text-lg font-semibold text-teal pr-4">
                  <span className="text-red-600 font-bold">Myth:</span> {item.myth}
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
                    id={`myth-content-${item.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-5 bg-white">
                      <p className="text-base text-gray-700 leading-relaxed">
                        <span className="text-bright-green font-bold">Reality:</span> {item.reality}
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
  );
}

