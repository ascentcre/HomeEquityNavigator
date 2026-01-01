'use client';

import { Shield, Scale, Eye, Users } from 'lucide-react';

export default function TrustIndicators() {
  const indicators = [
    {
      icon: Shield,
      title: 'FDIC Insured Institution',
      description: 'Texana Bank is FDIC insured, providing security and peace of mind for your financial decisions',
    },
    {
      icon: Scale,
      title: 'Regulated Product',
      description: 'FHA-insured reverse mortgages are overseen by HUD, ensuring consumer protections and regulatory compliance',
    },
    {
      icon: Eye,
      title: 'Transparent Process',
      description: 'Required HUD-approved counseling ensures you understand all terms and have access to independent guidance',
    },
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Experienced professionals provide personalized service and dedicated support for homeowners nationwide',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white" aria-label="The security of a bank-backed reverse mortgage">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-teal text-center mb-12">
          The Security of a Bank-Backed Reverse Mortgage
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {indicators.map((indicator, index) => {
            const IconComponent = indicator.icon;
            return (
              <div
                key={index}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-teal/10 p-4 rounded-full">
                    <IconComponent className="h-8 w-8 text-teal" aria-hidden="true" />
                  </div>
                </div>
                <h3 className="text-lg font-serif font-bold text-teal mb-3">
                  {indicator.title}
                </h3>
                <p className="text-base text-gray-700 leading-relaxed" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                  {indicator.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

