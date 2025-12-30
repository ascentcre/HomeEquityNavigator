import Hero from '@/components/Hero';
import FAQ from '@/components/FAQ';
import WhoThisIsFor from '@/components/WhoThisIsFor';
import TrustIndicators from '@/components/TrustIndicators';
import { Home as HomeIcon, Heart, DollarSign } from 'lucide-react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const pillars = [
    {
      icon: HomeIcon,
      title: 'Stop Making Monthly Payments',
      description: 'Imagine not having to budget for your mortgage every month. A reverse mortgage converts your home equity into available funds—and you never make another monthly mortgage payment as long as you live in your home.',
      bgColor: 'bg-soft-blue/20',
    },
    {
      icon: Heart,
      title: 'Pay for Care & Stay Home',
      description: "Whether it's hiring help around the house, covering medical expenses, or making modifications so you can age in place safely, your home equity can fund the care you need without depleting your savings.",
      bgColor: 'bg-green/10',
    },
    {
      icon: DollarSign,
      title: 'Access Funds When You Need Them',
      description: "Use your equity to supplement Social Security, help family members, handle unexpected expenses, or simply enjoy retirement. You've built this wealth over decades—now put it to work for you.",
      bgColor: 'bg-soft-gray',
    },
  ];

  return (
    <div>
      <Hero />
      
      {/* Value Proposition Callout */}
      <div className="bg-gradient-to-r from-teal/5 to-green/5 border-l-4 border-teal py-8 px-4 sm:px-6 lg:px-8 my-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 border border-teal/20">
            <p className="text-xl sm:text-2xl font-semibold text-teal mb-4 text-center">
              Reverse mortgages have helped over 1 million homeowners nationwide.
            </p>
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto" style={{ lineHeight: '1.7', fontSize: '18px' }}>
              Let us show you exactly how the numbers work for your specific situation.
            </p>
          </div>
        </div>
      </div>

      {/* Who This Is For Section */}
      <WhoThisIsFor />

      {/* Trust Indicators Section */}
      <TrustIndicators />
      
      {/* Three Pillars Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-soft-gray" aria-label="Benefits of reverse mortgages">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-teal text-center mb-4">
            Three Ways Your Home Equity Can Work for You
          </h2>
          <p className="text-lg text-gray-700 text-center mb-4 max-w-2xl mx-auto" style={{ lineHeight: '1.7', fontSize: '18px' }}>
            Choose the Option That Matches Your Goals
          </p>
          <p className="text-base text-gray-600 text-center mb-12 max-w-2xl mx-auto" style={{ lineHeight: '1.7', fontSize: '17px' }}>
            Most homeowners use one primary strategy—which fits your retirement plan?
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {pillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-lg p-8 lg:p-10 shadow-md hover:shadow-xl transition-all duration-200 border-2 border-soft-gray-dark ${pillar.bgColor} hover:-translate-y-1`}
                >
                  <div className="flex justify-center mb-8">
                    <div className="bg-white p-5 rounded-full shadow-sm">
                      <IconComponent className="h-12 w-12 text-teal" aria-hidden="true" />
                    </div>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-serif font-bold text-teal mb-6 text-center">
                    {pillar.title}
                  </h3>
                  <p className="text-base text-gray-700 text-center leading-relaxed" style={{ lineHeight: '1.8', fontSize: '17px' }}>
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      <FAQ />
      
      {/* Final CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-soft-gray" aria-label="Ready to see your personal numbers">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-teal mb-4">
            Ready to See Your Personal Numbers?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto" style={{ lineHeight: '1.7', fontSize: '18px' }}>
            Get a detailed analysis based on your specific situation.
          </p>
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
      </section>
    </div>
  );
}

