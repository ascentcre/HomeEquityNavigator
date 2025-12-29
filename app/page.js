import Hero from '@/components/Hero';
import { Home as HomeIcon, Heart, DollarSign } from 'lucide-react';

export default function Home() {
  const pillars = [
    {
      icon: HomeIcon,
      title: 'Eliminate Payments',
      description: 'Say goodbye to monthly mortgage payments. A reverse mortgage allows you to convert your home equity into tax-free cash flow while eliminating the burden of monthly mortgage payments.',
    },
    {
      icon: Heart,
      title: 'Fund Home Care',
      description: 'Access funds to pay for in-home care, medical expenses, or home modifications. Stay in your home comfortably while maintaining your independence and quality of life.',
    },
    {
      icon: DollarSign,
      title: 'Strategic Cash Flow',
      description: 'Optimize your retirement finances by accessing your home equity strategically. Supplement your income, preserve other investments, and create a more flexible retirement plan.',
    },
  ];

  return (
    <div>
      <Hero />
      
      {/* Three Pillars Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-soft-gray" aria-label="Benefits of reverse mortgages">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-teal text-center mb-4">
            Three Pillars of Financial Freedom
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-2xl mx-auto">
            Discover how a reverse mortgage can transform your retirement strategy
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-200 border border-soft-blue"
                >
                  <div className="flex justify-center mb-6">
                    <div className="bg-soft-blue bg-opacity-30 p-4 rounded-full">
                      <IconComponent className="h-8 w-8 text-bright-green" aria-hidden="true" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-teal mb-4 text-center">
                    {pillar.title}
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed text-center">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

