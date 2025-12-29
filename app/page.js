import Hero from '@/components/Hero';
import { Home as HomeIcon, Heart, DollarSign } from 'lucide-react';

export default function Home() {
  const pillars = [
    {
      icon: HomeIcon,
      title: 'Stop Making Monthly Payments',
      description: 'Imagine not having to budget for your mortgage every month. A reverse mortgage converts your home equity into available funds—and you never make another monthly mortgage payment as long as you live in your home.',
    },
    {
      icon: Heart,
      title: 'Pay for Care & Stay Home',
      description: "Whether it's hiring help around the house, covering medical expenses, or making modifications so you can age in place safely, your home equity can fund the care you need without depleting your savings.",
    },
    {
      icon: DollarSign,
      title: 'Access Funds When You Need Them',
      description: "Use your equity to supplement Social Security, help family members, handle unexpected expenses, or simply enjoy retirement. You've earned this security—now you can access it.",
    },
  ];

  return (
    <div>
      <Hero />
      
      {/* Trust Element */}
      <div className="text-center py-8 px-4 bg-gray-50/50">
        <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ lineHeight: '1.7', fontSize: '18px' }}>
          Reverse mortgages have helped over 1 million homeowners nationwide. 
          Let us show you if it's right for your situation—with no pressure, just answers.
        </p>
      </div>

      {/* Who This Helps Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-gray-600 mb-6 text-center" style={{ lineHeight: '1.7', fontSize: '20px' }}>
            A reverse mortgage might be right for you if you're 62+ and want to...
          </p>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            <div className="flex items-start gap-3">
              <span className="text-teal-600 text-xl mt-1" aria-hidden="true">✓</span>
              <p className="text-gray-700" style={{ lineHeight: '1.7', fontSize: '18px' }}>Eliminate your monthly mortgage payment</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-teal-600 text-xl mt-1" aria-hidden="true">✓</span>
              <p className="text-gray-700" style={{ lineHeight: '1.7', fontSize: '18px' }}>Stay in your home as you age</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-teal-600 text-xl mt-1" aria-hidden="true">✓</span>
              <p className="text-gray-700" style={{ lineHeight: '1.7', fontSize: '18px' }}>Access funds without selling or taking on debt</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-teal-600 text-xl mt-1" aria-hidden="true">✓</span>
              <p className="text-gray-700" style={{ lineHeight: '1.7', fontSize: '18px' }}>Preserve other retirement assets</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Three Pillars Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-soft-gray" aria-label="Benefits of reverse mortgages">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-teal text-center mb-4">
            Three Ways Your Home Equity Can Work for You
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-2xl mx-auto" style={{ lineHeight: '1.7', fontSize: '18px' }}>
            See how homeowners like you are using reverse mortgages to improve their retirement
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
                  <p className="text-base text-gray-700 text-center" style={{ lineHeight: '1.7', fontSize: '17px' }}>
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

