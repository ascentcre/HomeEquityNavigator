'use client';

import { Home, Heart, FileCheck, Shield } from 'lucide-react';

export default function WhoThisIsFor() {
  const scenarios = [
    {
      icon: Home,
      title: 'Monthly Budget Relief',
      description: 'Your mortgage payment is straining your retirement income and you want to eliminate it permanently',
    },
    {
      icon: Heart,
      title: 'Healthcare Planning',
      description: 'You want funds available for future medical expenses, in-home care, or aging-in-place modifications',
    },
    {
      icon: FileCheck,
      title: 'Debt Freedom',
      description: "You're carrying high-interest debt like credit cards or personal loans that's impacting your retirement lifestyle",
    },
    {
      icon: Shield,
      title: 'Financial Flexibility',
      description: 'You need a financial safety net for unexpected expenses while preserving other retirement assets',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-soft-gray" aria-label="Is a reverse mortgage right for your situation">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-teal text-center mb-12">
          Is a Reverse Mortgage Right for Your Situation?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {scenarios.map((scenario, index) => {
            const IconComponent = scenario.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow duration-200 border border-soft-gray-dark"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-teal/10 p-3 rounded-lg">
                      <IconComponent className="h-8 w-8 text-teal" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-serif font-bold text-teal mb-3">
                      {scenario.title}
                    </h3>
                    <p className="text-base text-gray-700 leading-relaxed" style={{ fontSize: '17px', lineHeight: '1.7' }}>
                      {scenario.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

