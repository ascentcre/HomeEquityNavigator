'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { BookOpen, CheckCircle, Shield, FileText, Calculator, Users, Home, TrendingUp } from 'lucide-react';

export default function GuidesPage() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const tableOfContents = [
    { id: 'myths', label: 'Are Reverse Mortgages Bad? Common Myths' },
    { id: 'what-is', label: 'What is a Reverse Mortgage?' },
    { id: 'game-changer', label: 'Why Reverse Mortgages Can Be Game-Changers' },
    { id: 'eligibility', label: 'Who Is Eligible?' },
    { id: 'protections', label: 'Consumer Protections for Seniors and Heirs' },
    { id: 'heloc-comparison', label: 'HELOC vs. Reverse Mortgage Comparison' },
    { id: 'examples', label: 'Real-World Examples' },
    { id: 'bottom-line', label: 'The Bottom Line' },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-soft-gray to-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-teal mb-6 leading-tight">
            Understanding Reverse Mortgages: Myths, Facts & Peace of Mind
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-4">
            Home equity is one of the most valuable assets for American seniors. With over <strong>$12 trillion</strong> in home equity held by seniors in the U.S., yet less than <strong>2% of eligible homeowners</strong> utilizing reverse mortgage programs, there&apos;s significant untapped potential for enhancing retirement security.
          </p>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
            This comprehensive guide will help you understand reverse mortgages, dispel common myths, and explore how this financial tool might fit into your retirement planning.
          </p>
          <p className="text-sm text-gray-500 italic">
            Powered by Texana Bank | FDIC Insured
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Table of Contents Sidebar */}
          <aside className="lg:w-64 lg:flex-shrink-0">
            <div className="lg:sticky lg:top-24">
              <div className="bg-soft-gray rounded-lg p-6 mb-6 lg:mb-0">
                <h2 className="text-xl font-serif font-bold text-teal mb-4 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  On This Page
                </h2>
                <nav className="space-y-2" aria-label="Table of contents">
                  {tableOfContents.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`block w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                        activeSection === item.id
                          ? 'bg-teal text-white font-semibold'
                          : 'text-gray-700 hover:bg-soft-gray-dark hover:text-teal'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 max-w-4xl">
            <article className="prose prose-lg max-w-none">
              {/* Myth-Busting Section */}
              <section id="myths" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-serif font-bold text-teal mb-6 flex items-center">
                  <Shield className="h-8 w-8 mr-3" />
                  Are Reverse Mortgages Bad? Addressing Common Myths
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Before diving into the details, let&apos;s address the most common misconceptions about reverse mortgages:
                </p>

                <div className="space-y-8">
                  <div className="bg-soft-gray rounded-lg p-6">
                    <h3 className="text-2xl font-serif font-bold text-teal mb-3">Myth 1: Reverse Mortgages Are Too Expensive</h3>
                    <p className="text-base text-gray-700 leading-relaxed">
                      <strong className="text-teal">Reality:</strong> While reverse mortgages do have upfront costs (including FHA mortgage insurance and origination fees), these costs are often comparable to other mortgage products. The key difference is that most fees can be financed into the loan, and you can access your home equity without monthly mortgage payments. When you compare the cost to the benefit of eliminating monthly mortgage payments and accessing tax-free cash, many borrowers find significant value.
                    </p>
                  </div>

                  <div className="bg-soft-gray rounded-lg p-6">
                    <h3 className="text-2xl font-serif font-bold text-teal mb-3">Myth 2: You Don&apos;t Retain Title to Your Home</h3>
                    <p className="text-base text-gray-700 leading-relaxed">
                      <strong className="text-teal">Reality:</strong> This is completely false. With a reverse mortgage, you retain full ownership and title to your home, just as you would with a traditional mortgage. You can sell your home at any time, and you&apos;re responsible for property taxes, homeowner&apos;s insurance, and home maintenance—just like any homeowner.
                    </p>
                  </div>

                  <div className="bg-soft-gray rounded-lg p-6">
                    <h3 className="text-2xl font-serif font-bold text-teal mb-3">Myth 3: Your Spouse Will Be Left Homeless</h3>
                    <p className="text-base text-gray-700 leading-relaxed">
                      <strong className="text-teal">Reality:</strong> Federal regulations include strong protections for &quot;Eligible Non-Borrowing Spouses.&quot; If your spouse qualifies as an eligible non-borrowing spouse, they may remain in the home for life as long as all loan terms are met (paying property taxes, insurance, and maintaining the home). This protection was specifically designed to prevent surviving spouses from losing their homes.
                    </p>
                  </div>

                  <div className="bg-soft-gray rounded-lg p-6">
                    <h3 className="text-2xl font-serif font-bold text-teal mb-3">Myth 4: Your Kids Will Lose the House to the Bank</h3>
                    <p className="text-base text-gray-700 leading-relaxed">
                      <strong className="text-teal">Reality:</strong> Your heirs inherit the home and have several options:
                    </p>
                    <ul className="list-disc list-inside mt-4 space-y-2 text-base text-gray-700">
                      <li>Sell the home and retain any equity after paying off the reverse mortgage (just like any other mortgage)</li>
                      <li>Keep the home by paying off the loan balance (either through refinancing or paying cash)</li>
                      <li>Buy the home for 95% of the appraised value or the amount due, whichever is less</li>
                      <li>Deed the home to the lender if the home value is less than the loan balance (the &quot;non-recourse&quot; feature means neither you nor your heirs will owe more than the home&apos;s value)</li>
                    </ul>
                  </div>

                  <div className="bg-soft-gray rounded-lg p-6">
                    <h3 className="text-2xl font-serif font-bold text-teal mb-3">Myth 5: You Must Own Your Home Free-and-Clear</h3>
                    <p className="text-base text-gray-700 leading-relaxed">
                      <strong className="text-teal">Reality:</strong> You do NOT need to own your home outright. Many people use reverse mortgages to pay off existing mortgages, which eliminates their monthly mortgage payments. If you have an existing mortgage, the reverse mortgage proceeds must first pay off that loan, and you receive the remaining funds as a lump sum, line of credit, or monthly payments.
                    </p>
                    <p className="text-base text-gray-700 leading-relaxed mt-3">
                      The key is having sufficient equity in your home—generally, you need to be 62 or older and have significant equity built up.
                    </p>
                  </div>
                </div>
              </section>

              {/* What Is a Reverse Mortgage Section */}
              <section id="what-is" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-serif font-bold text-teal mb-6 flex items-center">
                  <Home className="h-8 w-8 mr-3" />
                  What Is a Reverse Mortgage?
                </h2>

                <div className="bg-teal text-white rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-serif font-bold mb-3">I.J.A.M. (It&apos;s Just Another Mortgage!)</h3>
                  <p className="text-lg leading-relaxed">
                    At its core, a reverse mortgage is simply another type of mortgage loan—but with unique features designed specifically for homeowners aged 62 and older.
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-teal mb-4">Home Equity Conversion Mortgage (HECM)</h3>
                    <p className="text-base text-gray-700 leading-relaxed mb-4">
                      The most common type of reverse mortgage is the Home Equity Conversion Mortgage (HECM), which is:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-base text-gray-700 mb-6">
                      <li><strong>Federally insured</strong> by the Federal Housing Administration (FHA)</li>
                      <li>Available to homeowners aged <strong>62 and older</strong></li>
                      <li>Designed to convert home equity into accessible cash</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-serif font-bold text-teal mb-4">How It Works: Traditional vs. Reverse Mortgage</h3>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-soft-gray rounded-lg p-6">
                        <h4 className="text-xl font-bold text-teal mb-3">Traditional Mortgage:</h4>
                        <p className="text-base text-gray-700 leading-relaxed">
                          You borrow money from a lender to purchase a home, then make monthly payments (principal + interest) back to the lender over time. Your equity increases as you pay down the loan.
                        </p>
                      </div>
                      <div className="bg-soft-gray rounded-lg p-6">
                        <h4 className="text-xl font-bold text-teal mb-3">Reverse Mortgage:</h4>
                        <p className="text-base text-gray-700 leading-relaxed">
                          The lender makes payments to you (or establishes available credit) based on your home equity. You make no required monthly mortgage payments. Interest accrues on the loan balance over time. Your loan balance increases while your equity decreases, but you never owe more than the home&apos;s value.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-serif font-bold text-teal mb-4">Key Features</h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-bright-green pl-4">
                        <h4 className="text-xl font-bold text-teal mb-2">1. Converts Home Equity into Tax-Free Cash</h4>
                        <p className="text-base text-gray-700 leading-relaxed mb-2">
                          The funds you receive from a reverse mortgage are generally not considered taxable income. You can receive funds as:
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-base text-gray-700 ml-4">
                          <li>Lump sum payment</li>
                          <li>Monthly payments (term or tenure)</li>
                          <li>Line of credit</li>
                          <li>Combination of the above</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-bright-green pl-4">
                        <h4 className="text-xl font-bold text-teal mb-2">2. No Monthly Mortgage Payments Required</h4>
                        <p className="text-base text-gray-700 leading-relaxed mb-2">
                          Unlike traditional mortgages or home equity loans, you are not required to make monthly mortgage payments. You remain responsible for:
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-base text-gray-700 ml-4">
                          <li>Property taxes</li>
                          <li>Homeowner&apos;s insurance</li>
                          <li>HOA dues (if applicable)</li>
                          <li>Home maintenance and repairs</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-bright-green pl-4">
                        <h4 className="text-xl font-bold text-teal mb-2">3. You Retain Ownership and Live in Your Home</h4>
                        <p className="text-base text-gray-700 leading-relaxed">
                          You maintain full ownership of your home and can live in it as long as you:
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-base text-gray-700 ml-4 mt-2">
                          <li>Occupy it as your primary residence</li>
                          <li>Keep up with property taxes and insurance</li>
                          <li>Maintain the property in good condition</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Game-Changer Section */}
              <section id="game-changer" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-serif font-bold text-teal mb-6 flex items-center">
                  <TrendingUp className="h-8 w-8 mr-3" />
                  The Reverse Mortgage Can Be a Game-Changer
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Reverse mortgages serve as a financial tool that can support long-term health care needs and enhance your retirement lifestyle. The benefits can be organized into three essential pillars:
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <div className="bg-teal text-white rounded-lg p-6 text-center">
                    <CheckCircle className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">NEED</h3>
                  </div>
                  <div className="bg-green text-white rounded-lg p-6 text-center">
                    <CheckCircle className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">LIFESTYLE</h3>
                  </div>
                  <div className="bg-bright-green text-white rounded-lg p-6 text-center">
                    <CheckCircle className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">PLAN</h3>
                  </div>
                </div>

                <div className="space-y-12">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-teal mb-4">✓ NEED: &quot;Meet Your Immediate Financial Goals (Without Selling Your Home!)&quot;</h3>
                    <p className="text-base text-gray-700 leading-relaxed mb-4">
                      Many retirees face pressing financial needs but don&apos;t want to sell their homes. A reverse mortgage can help you:
                    </p>
                    <div className="space-y-4">
                      <div className="bg-soft-gray rounded-lg p-5">
                        <h4 className="text-xl font-bold text-teal mb-2">Eliminate Monthly Mortgage Payments</h4>
                        <p className="text-base text-gray-700 leading-relaxed mb-2">
                          If you currently have a mortgage payment, a reverse mortgage can pay off that existing loan, eliminating your monthly mortgage payment. This can free up hundreds or thousands of dollars per month for other expenses.
                        </p>
                        <p className="text-sm text-gray-600 italic">
                          Example: If your current mortgage payment is $1,800/month, eliminating it frees up $21,600 per year in cash flow.
                        </p>
                      </div>

                      <div className="bg-soft-gray rounded-lg p-5">
                        <h4 className="text-xl font-bold text-teal mb-2">Avoid Forced Downsizing</h4>
                        <p className="text-base text-gray-700 leading-relaxed">
                          Rather than being forced to sell your home and move to a smaller, less expensive property, you can tap into your home equity while staying in the home you love, in the community you know, near family and friends.
                        </p>
                      </div>

                      <div className="bg-soft-gray rounded-lg p-5">
                        <h4 className="text-xl font-bold text-teal mb-2">Create an Emergency Safety Net</h4>
                        <p className="text-base text-gray-700 leading-relaxed">
                          Unexpected expenses happen—major home repairs, medical bills, or other emergencies. A reverse mortgage line of credit can serve as a safety net, giving you access to funds when you need them most.
                        </p>
                      </div>

                      <div className="bg-soft-gray rounded-lg p-5">
                        <h4 className="text-xl font-bold text-teal mb-2">Pay for Medical Costs, Care, or Home Modifications</h4>
                        <p className="text-base text-gray-700 leading-relaxed mb-2">
                          Healthcare costs are one of the largest expenses in retirement. A reverse mortgage can help pay for:
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-base text-gray-700 ml-4">
                          <li>In-home care or assisted living services</li>
                          <li>Medical procedures not covered by insurance</li>
                          <li>Home modifications to age in place (wheelchair ramps, walk-in showers, stairlifts, wider doorways)</li>
                          <li>Long-term care expenses</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-serif font-bold text-teal mb-4">✓ LIFESTYLE: &quot;Support the Lifestyle You&apos;ve Earned While Staying in the Home You Love&quot;</h3>
                    <p className="text-base text-gray-700 leading-relaxed mb-4">
                      Retirement should be enjoyable. A reverse mortgage can enhance your quality of life by providing financial flexibility.
                    </p>
                    <div className="space-y-4">
                      <div className="bg-soft-gray rounded-lg p-5">
                        <h4 className="text-xl font-bold text-teal mb-2">Stop Stressing & Start Living!</h4>
                        <p className="text-base text-gray-700 leading-relaxed">
                          Constant worry about money can diminish your retirement years. By accessing your home equity, you can reduce financial stress and focus on enjoying life.
                        </p>
                      </div>

                      <div className="bg-soft-gray rounded-lg p-5">
                        <h4 className="text-xl font-bold text-teal mb-2">Fund Travel, Hobbies, and Experiences</h4>
                        <p className="text-base text-gray-700 leading-relaxed mb-2">
                          You&apos;ve worked hard your entire life. Now is the time to:
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-base text-gray-700 ml-4">
                          <li>Take that dream vacation</li>
                          <li>Pursue hobbies you&apos;re passionate about</li>
                          <li>Create meaningful experiences with family and friends</li>
                          <li>Check items off your bucket list</li>
                        </ul>
                      </div>

                      <div className="bg-soft-gray rounded-lg p-5">
                        <h4 className="text-xl font-bold text-teal mb-2">Gifting with &quot;Warm Hands&quot; vs. &quot;Cold Hands&quot;</h4>
                        <p className="text-base text-gray-700 leading-relaxed">
                          Many people want to help their children or grandchildren while they&apos;re still alive—with a down payment on a home, education expenses, or starting a business. A reverse mortgage allows you to give financial gifts with &quot;warm hands&quot; (while you&apos;re alive to see the impact) rather than &quot;cold hands&quot; (through inheritance).
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-serif font-bold text-teal mb-4">✓ PLAN: &quot;Secure a Stronger Future with Proactive Financial Planning&quot;</h3>
                    <p className="text-base text-gray-700 leading-relaxed mb-4">
                      Financial advisors increasingly recognize reverse mortgages as a strategic planning tool for sophisticated retirement planning.
                    </p>
                    <div className="space-y-4">
                      <div className="bg-soft-gray rounded-lg p-5">
                        <h4 className="text-xl font-bold text-teal mb-2">Delay Accessing Social Security Until Full Retirement Age (FRA)</h4>
                        <p className="text-base text-gray-700 leading-relaxed mb-2">
                          By using reverse mortgage funds to supplement income in your early retirement years, you can delay claiming Social Security benefits until age 70, which increases your monthly Social Security payment by approximately 8% per year of delay beyond Full Retirement Age.
                        </p>
                        <p className="text-sm text-gray-600 italic">
                          Example: Delaying from age 62 to age 70 can increase your monthly benefit by up to 76%.
                        </p>
                      </div>

                      <div className="bg-soft-gray rounded-lg p-5">
                        <h4 className="text-xl font-bold text-teal mb-2">Use Line of Credit During Market Downturns to Preserve Assets</h4>
                        <p className="text-base text-gray-700 leading-relaxed">
                          Rather than selling investments during a market downturn (locking in losses), you can draw from your reverse mortgage line of credit to cover expenses while your portfolio recovers. This strategy can significantly improve long-term portfolio performance.
                        </p>
                      </div>

                      <div className="bg-soft-gray rounded-lg p-5">
                        <h4 className="text-xl font-bold text-teal mb-2">Use Line of Credit for Home Modifications to Age in Place</h4>
                        <p className="text-base text-gray-700 leading-relaxed mb-2">
                          Most seniors want to age in place—staying in their homes as they grow older. A reverse mortgage can fund modifications that make this possible:
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-base text-gray-700 ml-4">
                          <li>Install grab bars and non-slip flooring</li>
                          <li>Widen doorways for wheelchair access</li>
                          <li>Add a first-floor bedroom or bathroom</li>
                          <li>Install a stairlift or home elevator</li>
                        </ul>
                      </div>

                      <div className="bg-soft-gray rounded-lg p-5">
                        <h4 className="text-xl font-bold text-teal mb-2">Improve Monthly Cash Flow, Mitigating Longevity Risk</h4>
                        <p className="text-base text-gray-700 leading-relaxed mb-2">
                          Longevity risk—the risk of outliving your savings—is one of the biggest threats to retirement security. A reverse mortgage can:
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-base text-gray-700 ml-4">
                          <li>Provide guaranteed monthly income for life (tenure payment option)</li>
                          <li>Supplement other income sources</li>
                          <li>Reduce the rate at which you draw down other retirement assets</li>
                          <li>Provide a cushion if you live longer than expected</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Eligibility Section */}
              <section id="eligibility" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-serif font-bold text-teal mb-6 flex items-center">
                  <Users className="h-8 w-8 mr-3" />
                  Who Is Eligible?
                </h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-teal mb-4">Borrower Requirements</h3>
                    <p className="text-base text-gray-700 leading-relaxed mb-4">
                      To qualify for a reverse mortgage, you must meet the following requirements:
                    </p>
                    <div className="space-y-4">
                      <div className="bg-soft-gray rounded-lg p-5">
                        <h4 className="text-xl font-bold text-teal mb-2 flex items-center">
                          <CheckCircle className="h-6 w-6 mr-2 text-bright-green" />
                          Age 62 or Older
                        </h4>
                        <p className="text-base text-gray-700 leading-relaxed">
                          At least one borrower (or non-borrowing spouse) must be age 62 or older. If there are multiple borrowers, the age of the youngest borrower is used to calculate the loan amount.
                        </p>
                      </div>

                      <div className="bg-soft-gray rounded-lg p-5">
                        <h4 className="text-xl font-bold text-teal mb-2 flex items-center">
                          <CheckCircle className="h-6 w-6 mr-2 text-bright-green" />
                          Occupy Home as Primary Residence
                        </h4>
                        <p className="text-base text-gray-700 leading-relaxed">
                          The home must be your primary residence. You must live in the home for the majority of the year. Second homes and investment properties do not qualify.
                        </p>
                      </div>

                      <div className="bg-soft-gray rounded-lg p-5">
                        <h4 className="text-xl font-bold text-teal mb-2 flex items-center">
                          <CheckCircle className="h-6 w-6 mr-2 text-bright-green" />
                          Attend HUD-Approved Counseling
                        </h4>
                        <p className="text-base text-gray-700 leading-relaxed mb-2">
                          All borrowers are required to complete an independent counseling session with a HUD-approved counseling agency. This ensures you fully understand:
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-base text-gray-700 ml-4">
                          <li>How reverse mortgages work</li>
                          <li>Your obligations as a borrower</li>
                          <li>Alternatives to reverse mortgages</li>
                          <li>The impact on you and your heirs</li>
                        </ul>
                        <p className="text-base text-gray-700 leading-relaxed mt-2">
                          This is a consumer protection designed to ensure you make an informed decision.
                        </p>
                      </div>

                      <div className="bg-soft-gray rounded-lg p-5">
                        <h4 className="text-xl font-bold text-teal mb-2 flex items-center">
                          <CheckCircle className="h-6 w-6 mr-2 text-bright-green" />
                          Pass Financial Assessment
                        </h4>
                        <p className="text-base text-gray-700 leading-relaxed mb-2">
                          You must demonstrate that you have adequate income and/or assets to cover:
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-base text-gray-700 ml-4">
                          <li>Property taxes</li>
                          <li>Homeowner&apos;s insurance</li>
                          <li>HOA dues (if applicable)</li>
                          <li>Current debts and living expenses</li>
                        </ul>
                        <p className="text-base text-gray-700 leading-relaxed mt-2">
                          This assessment is not as strict as traditional mortgage underwriting, but it ensures you can afford to maintain the home and meet ongoing obligations. If you don&apos;t pass the standard financial assessment, you may still qualify with a set-aside for property taxes and insurance.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-serif font-bold text-teal mb-4">Property Requirements</h3>
                    <p className="text-base text-gray-700 leading-relaxed mb-4">
                      Your home must meet certain criteria:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-soft-gray rounded-lg p-4">
                        <h4 className="font-bold text-teal mb-2 flex items-center">
                          <CheckCircle className="h-5 w-5 mr-2 text-bright-green" />
                          Single-Family Home
                        </h4>
                        <p className="text-sm text-gray-700">Single-family detached homes are eligible.</p>
                      </div>
                      <div className="bg-soft-gray rounded-lg p-4">
                        <h4 className="font-bold text-teal mb-2 flex items-center">
                          <CheckCircle className="h-5 w-5 mr-2 text-bright-green" />
                          2-4 Unit Property
                        </h4>
                        <p className="text-sm text-gray-700">Multi-unit properties (2-4 units) qualify if you live in one unit as your primary residence.</p>
                      </div>
                      <div className="bg-soft-gray rounded-lg p-4">
                        <h4 className="font-bold text-teal mb-2 flex items-center">
                          <CheckCircle className="h-5 w-5 mr-2 text-bright-green" />
                          FHA-Approved Condominium
                        </h4>
                        <p className="text-sm text-gray-700">The condominium project must be on the FHA-approved condominium list.</p>
                      </div>
                      <div className="bg-soft-gray rounded-lg p-4">
                        <h4 className="font-bold text-teal mb-2 flex items-center">
                          <CheckCircle className="h-5 w-5 mr-2 text-bright-green" />
                          Townhomes
                        </h4>
                        <p className="text-sm text-gray-700">Townhomes are eligible as long as they meet FHA requirements.</p>
                      </div>
                      <div className="bg-soft-gray rounded-lg p-4">
                        <h4 className="font-bold text-teal mb-2 flex items-center">
                          <CheckCircle className="h-5 w-5 mr-2 text-bright-green" />
                          Manufactured Homes
                        </h4>
                        <p className="text-sm text-gray-700">Manufactured homes built on or after June 15, 1976, that meet HUD standards and are permanently affixed to a foundation may qualify.</p>
                      </div>
                      <div className="bg-soft-gray rounded-lg p-4">
                        <h4 className="font-bold text-teal mb-2 flex items-center">
                          <CheckCircle className="h-5 w-5 mr-2 text-bright-green" />
                          In Good Condition
                        </h4>
                        <p className="text-sm text-gray-700">The home must pass an FHA appraisal, which verifies structural soundness, working major systems, and no health or safety hazards.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Consumer Protections Section */}
              <section id="protections" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-serif font-bold text-teal mb-6 flex items-center">
                  <Shield className="h-8 w-8 mr-3" />
                  Consumer Protections for Seniors and Heirs
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Reverse mortgages are highly regulated, with numerous safeguards designed to protect borrowers, spouses, and heirs.
                </p>

                <div className="space-y-8">
                  <div className="bg-soft-gray rounded-lg p-6">
                    <h3 className="text-2xl font-serif font-bold text-teal mb-4">Highly Regulated: Protections for Your Home, Heirs, Eligible Non-Borrowing Spouses, and Senior Borrowers</h3>
                    <p className="text-base text-gray-700 leading-relaxed mb-4">
                      The reverse mortgage industry is overseen by:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-base text-gray-700 ml-4">
                      <li><strong>HUD (U.S. Department of Housing and Urban Development)</strong></li>
                      <li><strong>FHA (Federal Housing Administration)</strong></li>
                      <li><strong>CFPB (Consumer Financial Protection Bureau)</strong></li>
                      <li><strong>State regulators</strong></li>
                    </ul>
                    <p className="text-base text-gray-700 leading-relaxed mt-4">
                      These agencies enforce strict rules to protect consumers.
                    </p>
                  </div>

                  <div className="bg-soft-gray rounded-lg p-6">
                    <h3 className="text-2xl font-serif font-bold text-teal mb-4">FHA Insurance Guarantee</h3>
                    <h4 className="text-xl font-bold text-teal mb-3">FHA Insures Every HECM Reverse Mortgage</h4>
                    <p className="text-base text-gray-700 leading-relaxed mb-4">
                      One of the most important protections is FHA insurance, which provides:
                    </p>
                    <div className="bg-teal text-white rounded-lg p-5 mb-4">
                      <h5 className="text-xl font-bold mb-2">You and Your Heirs Will Never Owe More Than the Value of Your Home</h5>
                      <p className="leading-relaxed mb-2">
                        This is called the &quot;non-recourse&quot; feature. Even if your loan balance grows larger than your home&apos;s value (due to accruing interest and/or declining home values), neither you nor your heirs will owe more than the home is worth when the loan comes due.
                      </p>
                      <p className="text-sm italic mt-2">
                        Example: If your home is worth $300,000 when the loan comes due, but the loan balance has grown to $350,000, your estate will only owe $300,000. The FHA insurance covers the difference.
                      </p>
                    </div>
                    <p className="text-base text-gray-700 leading-relaxed">
                      This protection ensures you can never be forced to sell other assets to pay off the loan, your heirs will never inherit debt related to the reverse mortgage, and other assets in your estate are fully protected.
                    </p>
                  </div>

                  <div className="bg-soft-gray rounded-lg p-6">
                    <h3 className="text-2xl font-serif font-bold text-teal mb-4">Spouse Protections</h3>
                    <h4 className="text-xl font-bold text-teal mb-3">An &quot;Eligible Non-Borrowing Spouse&quot; May Remain in the Home for Life</h4>
                    <p className="text-base text-gray-700 leading-relaxed mb-4">
                      If you have a spouse who does not qualify for the reverse mortgage (typically because they are under age 62), they can still be protected as an &quot;Eligible Non-Borrowing Spouse.&quot;
                    </p>
                    <p className="text-base text-gray-700 leading-relaxed mb-2">
                      <strong>Requirements for eligible non-borrowing spouse protection:</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-base text-gray-700 ml-4">
                      <li>The spouse was married to the borrower at the time of closing</li>
                      <li>The spouse is listed on the loan documents as a non-borrowing spouse</li>
                      <li>The spouse continues to occupy the home as their primary residence</li>
                      <li>The spouse continues to pay property taxes, insurance, and maintain the home</li>
                    </ul>
                    <p className="text-base text-gray-700 leading-relaxed mt-4">
                      As long as these conditions are met, the eligible non-borrowing spouse can remain in the home for life, even after the borrowing spouse passes away, without having to repay the loan.
                    </p>
                  </div>

                  <div className="bg-soft-gray rounded-lg p-6">
                    <h3 className="text-2xl font-serif font-bold text-teal mb-4">HUD Counseling</h3>
                    <h4 className="text-xl font-bold text-teal mb-3">Borrowers Are Required to Attend an Independent Counseling Session from a HUD-Approved Agency</h4>
                    <p className="text-base text-gray-700 leading-relaxed mb-4">
                      Before you can proceed with a reverse mortgage, you must complete a counseling session with a HUD-approved housing counselor who is independent of the lender.
                    </p>
                    <p className="text-base text-gray-700 leading-relaxed mb-2">
                      <strong>The counseling session covers:</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-base text-gray-700 ml-4 mb-4">
                      <li>How reverse mortgages work</li>
                      <li>Costs and fees</li>
                      <li>Alternatives (such as downsizing, home equity loans, or government assistance programs)</li>
                      <li>Your rights and responsibilities</li>
                      <li>Impact on you and your heirs</li>
                      <li>Warning signs of scams</li>
                    </ul>
                    <p className="text-base text-gray-700 leading-relaxed mb-2">
                      <strong>This is a critical consumer protection</strong> that ensures you fully understand the product before committing.
                    </p>
                    <p className="text-base text-gray-700 leading-relaxed">
                      Counseling can be completed by phone, in person, or via video conference. You&apos;ll receive a certificate of completion, which is required to proceed with the loan application.
                    </p>
                  </div>

                  <div className="bg-soft-gray rounded-lg p-6">
                    <h3 className="text-2xl font-serif font-bold text-teal mb-4">Clear Loan Disclosures</h3>
                    <h4 className="text-xl font-bold text-teal mb-3">FHA Requires Transparent and Upfront Disclosures of Fees and Terms</h4>
                    <p className="text-base text-gray-700 leading-relaxed mb-4">
                      You have the right to clear, comprehensive information about your loan. You will receive:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-base text-gray-700 ml-4">
                      <li><strong>Loan Comparison Disclosure</strong> - Compares different payment options (lump sum, line of credit, monthly payments) so you can make an informed choice.</li>
                      <li><strong>Amortization Schedule</strong> - Shows how your loan balance will grow over time based on projected interest rates.</li>
                      <li><strong>Counseling Information</strong> - Details about HUD-approved counseling agencies.</li>
                      <li><strong>Total Annual Loan Cost (TALC) Disclosure</strong> - Projects the total cost of the loan as an annual percentage rate based on different scenarios (how long you live in the home).</li>
                    </ul>
                    <p className="text-base text-gray-700 leading-relaxed mt-4">
                      <strong>These disclosures ensure full transparency.</strong> There are no hidden fees or surprise costs.
                    </p>
                  </div>

                  <div className="bg-soft-gray rounded-lg p-6">
                    <h3 className="text-2xl font-serif font-bold text-teal mb-4">Right of Rescission</h3>
                    <h4 className="text-xl font-bold text-teal mb-3">3-Business Day Period to Cancel Without Penalty</h4>
                    <p className="text-base text-gray-700 leading-relaxed mb-4">
                      After you sign your reverse mortgage documents, you have a <strong>3-business day &quot;cooling off&quot; period</strong> during which you can cancel the loan for any reason without penalty.
                    </p>
                    <p className="text-base text-gray-700 leading-relaxed mb-4">
                      <strong>&quot;Right of Rescission&quot; Allows Time for Reflection and Last-Minute Questions</strong>
                    </p>
                    <p className="text-base text-gray-700 leading-relaxed mb-2">
                      This period gives you time to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-base text-gray-700 ml-4">
                      <li>Review all documents carefully</li>
                      <li>Ask additional questions</li>
                      <li>Consult with family members or advisors</li>
                      <li>Change your mind if you have any doubts</li>
                    </ul>
                    <p className="text-base text-gray-700 leading-relaxed mt-4">
                      If you cancel within the 3-day period, the transaction is voided, and you owe nothing.
                    </p>
                  </div>

                  <div className="bg-soft-gray rounded-lg p-6">
                    <h3 className="text-2xl font-serif font-bold text-teal mb-4">Heirs Inherit the Home - Options</h3>
                    <p className="text-base text-gray-700 leading-relaxed mb-4">
                      Your heirs have complete flexibility in how they handle the home after you pass away or move out permanently.
                    </p>
                    <div className="space-y-4">
                      <div className="border-l-4 border-bright-green pl-4">
                        <h4 className="text-xl font-bold text-teal mb-2">Option 1: Sell the Home and Retain Equity</h4>
                        <p className="text-base text-gray-700 leading-relaxed">
                          Your heirs can sell the home and keep any remaining equity after paying off the reverse mortgage balance—just like any other mortgage.
                        </p>
                        <p className="text-sm text-gray-600 italic mt-1">
                          Example: Home sells for $400,000, loan balance is $250,000, heirs receive $150,000.
                        </p>
                      </div>

                      <div className="border-l-4 border-bright-green pl-4">
                        <h4 className="text-xl font-bold text-teal mb-2">Option 2: Refinance the Home (If Already on Title)</h4>
                        <p className="text-base text-gray-700 leading-relaxed">
                          If your heirs are on the title, they can refinance the reverse mortgage balance into a traditional mortgage and keep the home (subject to qualifying for the new loan).
                        </p>
                      </div>

                      <div className="border-l-4 border-bright-green pl-4">
                        <h4 className="text-xl font-bold text-teal mb-2">Option 3: Buy the Home for 95% of Appraised Value or Amount Due (Whichever is Less)</h4>
                        <p className="text-base text-gray-700 leading-relaxed">
                          Even if your heirs are not on title, they can purchase the home by paying the lesser of:
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-base text-gray-700 ml-4 mt-2">
                          <li>The outstanding loan balance</li>
                          <li>95% of the home&apos;s appraised value</li>
                        </ul>
                        <p className="text-sm text-gray-600 italic mt-2">
                          Example: If the loan balance is $300,000 but the home appraises for $280,000, heirs can keep the home by paying $266,000 (95% of $280,000).
                        </p>
                      </div>

                      <div className="border-l-4 border-bright-green pl-4">
                        <h4 className="text-xl font-bold text-teal mb-2">Option 4: Deed in Lieu</h4>
                        <p className="text-base text-gray-700 leading-relaxed">
                          If the home value is less than the loan balance and your heirs do not want to keep the home, they can simply deed the property back to the lender. The FHA insurance covers any shortage, and the heirs owe nothing.
                        </p>
                      </div>
                    </div>
                    <p className="text-base text-gray-700 leading-relaxed mt-4 font-semibold">
                      Your heirs are never personally liable for any shortfall.
                    </p>
                  </div>
                </div>
              </section>

              {/* HELOC Comparison Section */}
              <section id="heloc-comparison" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-serif font-bold text-teal mb-6 flex items-center">
                  <Calculator className="h-8 w-8 mr-3" />
                  HELOC vs. Reverse Mortgage: Understanding the Differences
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Many people compare reverse mortgages to Home Equity Lines of Credit (HELOCs). While both allow you to access home equity, they have significant differences.
                </p>

                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
                    <thead>
                      <tr className="bg-teal text-white">
                        <th className="border border-teal-light px-4 py-3 text-left font-bold">Feature</th>
                        <th className="border border-teal-light px-4 py-3 text-left font-bold">HELOC</th>
                        <th className="border border-teal-light px-4 py-3 text-left font-bold">Reverse Mortgage</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-soft-gray">
                        <td className="border border-gray-300 px-4 py-3 font-semibold">Monthly Payments</td>
                        <td className="border border-gray-300 px-4 py-3">Required</td>
                        <td className="border border-gray-300 px-4 py-3">None Required</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 font-semibold">When Due</td>
                        <td className="border border-gray-300 px-4 py-3">Immediately (10-year draw + 10-15 year repayment)</td>
                        <td className="border border-gray-300 px-4 py-3">When you sell, move, or pass away</td>
                      </tr>
                      <tr className="bg-soft-gray">
                        <td className="border border-gray-300 px-4 py-3 font-semibold">Credit Score Impact</td>
                        <td className="border border-gray-300 px-4 py-3">High - affects rate and availability</td>
                        <td className="border border-gray-300 px-4 py-3">Minimal</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 font-semibold">Income Qualification</td>
                        <td className="border border-gray-300 px-4 py-3">Strict DTI and income requirements</td>
                        <td className="border border-gray-300 px-4 py-3">Residual income test only</td>
                      </tr>
                      <tr className="bg-soft-gray">
                        <td className="border border-gray-300 px-4 py-3 font-semibold">Line of Credit Growth</td>
                        <td className="border border-gray-300 px-4 py-3">No growth</td>
                        <td className="border border-gray-300 px-4 py-3">Yes - grows at loan interest rate</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 font-semibold">Non-Recourse Protection</td>
                        <td className="border border-gray-300 px-4 py-3">No</td>
                        <td className="border border-gray-300 px-4 py-3">Yes - never owe more than home value</td>
                      </tr>
                      <tr className="bg-soft-gray">
                        <td className="border border-gray-300 px-4 py-3 font-semibold">Foreclosure Risk</td>
                        <td className="border border-gray-300 px-4 py-3">High if payments missed</td>
                        <td className="border border-gray-300 px-4 py-3">Low - no required payments</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="space-y-6">
                  <div className="bg-soft-gray rounded-lg p-6">
                    <h3 className="text-2xl font-serif font-bold text-teal mb-4">Line of Credit Growth Over Time</h3>
                    <p className="text-base text-gray-700 leading-relaxed mb-4">
                      <strong>HELOC:</strong> No growth. Your credit line remains fixed. If you borrow $50,000 and pay back $20,000, your available credit returns to $70,000, but it never grows beyond your original credit limit.
                    </p>
                    <p className="text-base text-gray-700 leading-relaxed">
                      <strong>Reverse Mortgage:</strong> Yes, the unused line of credit grows over time at the same rate as the loan interest rate. This is a unique and powerful feature.
                    </p>
                    <p className="text-sm text-gray-600 italic mt-3">
                      Example: If you have a $100,000 line of credit with a 5% interest rate and don&apos;t use it for 10 years, your available credit line grows to approximately $163,000—even if your home value doesn&apos;t change. The growth of your credit line is not tied to your home&apos;s value.
                    </p>
                    <p className="text-base text-gray-700 leading-relaxed mt-4">
                      This guaranteed growth feature makes the reverse mortgage line of credit an excellent long-term planning tool.
                    </p>
                  </div>
                </div>
              </section>

              {/* Real-World Examples Section */}
              <section id="examples" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-serif font-bold text-teal mb-6 flex items-center">
                  <FileText className="h-8 w-8 mr-3" />
                  Real-World Examples
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  To help illustrate how reverse mortgages work in practice, here are several real-world scenarios based on current market conditions.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
                  <p className="text-sm text-gray-700">
                    <strong>Important Note:</strong> These examples are for illustrative purposes using sample data. Actual loan amounts, interest rates, and terms will vary based on individual circumstances, current market conditions, and the specific lender. Always consult with a licensed reverse mortgage specialist for personalized calculations.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="bg-soft-gray rounded-lg p-6">
                    <h3 className="text-2xl font-serif font-bold text-teal mb-4">Example 1: FHA HECM Refinance</h3>
                    <div className="space-y-3 mb-4">
                      <p className="text-base text-gray-700"><strong>Scenario:</strong></p>
                      <ul className="list-disc list-inside space-y-1 text-base text-gray-700 ml-4">
                        <li><strong>Youngest Borrower Age:</strong> 70 years old</li>
                        <li><strong>Estimated Home Value:</strong> $450,000</li>
                        <li><strong>Existing Mortgage Balance:</strong> $40,000</li>
                        <li><strong>Lender Margin:</strong> 2%</li>
                        <li><strong>Expected Interest Rate:</strong> 6.020%</li>
                        <li><strong>Principal Limit Factor:</strong> 41.5%</li>
                        <li><strong>Principal Limit:</strong> $186,750</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-5 mb-4">
                      <h4 className="text-xl font-bold text-teal mb-3">How It Works:</h4>
                      <p className="text-base text-gray-700 leading-relaxed mb-2">
                        The reverse mortgage would:
                      </p>
                      <ol className="list-decimal list-inside space-y-2 text-base text-gray-700 ml-4">
                        <li>Pay off the existing $40,000 mortgage (eliminating the monthly mortgage payment)</li>
                        <li>Cover closing costs (approximately $15,000-$17,000)</li>
                        <li>Provide the remaining funds as a <strong>Line of Credit: $131,750</strong></li>
                      </ol>
                      <p className="text-base text-gray-700 leading-relaxed mt-4">
                        <strong>First Year Access:</strong> Due to HUD regulations, in the first year, the borrower can access the greater of:
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-base text-gray-700 ml-4 mt-2">
                        <li>60% of the principal limit, OR</li>
                        <li>The amount needed to pay off existing liens plus 10% of the principal limit</li>
                      </ul>
                      <p className="text-base text-gray-700 leading-relaxed mt-4">
                        In this case: <strong>Access to Line of Credit (1st Year): $57,050</strong>
                      </p>
                      <p className="text-base text-gray-700 leading-relaxed mt-4">
                        After the first year, the full remaining line of credit becomes available, and it continues to grow at the loan interest rate (6.020% in this example).
                      </p>
                    </div>
                    <div className="bg-bright-green bg-opacity-10 rounded-lg p-4">
                      <p className="text-base text-gray-700 leading-relaxed">
                        <strong>Benefits:</strong> Eliminated monthly mortgage payment (potentially saving $300-$500/month or more), created a growing line of credit for future needs, retained ownership of the home, no monthly mortgage payments required.
                      </p>
                    </div>
                  </div>

                  <div className="bg-soft-gray rounded-lg p-6">
                    <h3 className="text-2xl font-serif font-bold text-teal mb-4">Example 2: FHA HECM Purchase - $750,000 Home</h3>
                    <div className="space-y-3 mb-4">
                      <p className="text-base text-gray-700"><strong>Scenario:</strong></p>
                      <ul className="list-disc list-inside space-y-1 text-base text-gray-700 ml-4">
                        <li><strong>Sales Price of New Home:</strong> $750,000</li>
                        <li><strong>Net Proceeds from Sale of Current Home:</strong> $650,000</li>
                        <li><strong>Youngest Borrower Age:</strong> 70 years old</li>
                        <li><strong>Lender Margin:</strong> 2%</li>
                        <li><strong>Expected Interest Rate:</strong> 6.230%</li>
                        <li><strong>Principal Limit:</strong> $302,250</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-5 mb-4">
                      <h4 className="text-xl font-bold text-teal mb-3">How It Works:</h4>
                      <p className="text-base text-gray-700 leading-relaxed mb-2">
                        To purchase the $750,000 home with a reverse mortgage:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-base text-gray-700 ml-4">
                        <li><strong>Required Down Payment:</strong> $459,000 (this is the difference between the purchase price and the principal limit, plus closing costs)</li>
                        <li><strong>Reverse Mortgage Covers:</strong> $302,250 (the principal limit)</li>
                        <li><strong>No Monthly Mortgage Payments Required</strong></li>
                      </ul>
                    </div>
                    <div className="bg-bright-green bg-opacity-10 rounded-lg p-4">
                      <p className="text-base text-gray-700 leading-relaxed mb-2">
                        <strong>Benefits:</strong>
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-base text-gray-700 ml-4">
                        <li>Purchase a new home with no monthly mortgage payments</li>
                        <li>Use $459,000 from sale proceeds for down payment</li>
                        <li>Retain approximately $191,000 in liquid assets ($650,000 - $459,000)</li>
                        <li>Can use retained funds for other retirement needs, investments, or emergency reserves</li>
                      </ul>
                      <p className="text-base text-gray-700 leading-relaxed mt-3">
                        This is an excellent option for retirees who want to downsize or rightsize to a new home, relocate to be near family, move to a retirement-friendly community, or preserve liquid assets while eliminating mortgage payments.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Bottom Line Section */}
              <section id="bottom-line" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-serif font-bold text-teal mb-6">The Bottom Line: Reverse Mortgages</h2>

                <div className="bg-teal text-white rounded-lg p-8 mb-8">
                  <h3 className="text-2xl font-serif font-bold mb-4">Untapped Potential: Home Equity & Retirement</h3>
                  <p className="text-lg leading-relaxed mb-2">
                    <strong>Seniors in the U.S. collectively hold over $12 trillion in home equity.</strong>
                  </p>
                  <p className="text-lg leading-relaxed">
                    Yet, <strong>less than 2% of eligible homeowners utilize reverse mortgage programs.</strong>
                  </p>
                  <p className="text-lg leading-relaxed mt-4">
                    This represents a massive untapped resource that could significantly enhance retirement security for millions of Americans.
                  </p>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-teal mb-4">A Reverse Mortgage Can Help Seniors:</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-soft-gray rounded-lg p-6">
                        <h4 className="text-xl font-bold text-teal mb-3">THRIVE Financially in Retirement</h4>
                        <p className="text-base text-gray-700 leading-relaxed">
                          Reverse mortgages provide access to home equity that can eliminate monthly mortgage payments, cover unexpected expenses, fund healthcare needs, and enhance overall financial stability.
                        </p>
                      </div>
                      <div className="bg-soft-gray rounded-lg p-6">
                        <h4 className="text-xl font-bold text-teal mb-3">STAY IN CONTROL</h4>
                        <p className="text-base text-gray-700 leading-relaxed">
                          You retain full ownership, decide how to use funds, control when to draw, maintain independence, and are protected by strong federal regulations.
                        </p>
                      </div>
                      <div className="bg-soft-gray rounded-lg p-6">
                        <h4 className="text-xl font-bold text-teal mb-3">PLAN AHEAD</h4>
                        <p className="text-base text-gray-700 leading-relaxed">
                          Strategic use can delay Social Security, preserve investment portfolios, provide growing available credit, and reduce longevity risk.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-serif font-bold text-teal mb-4">Possible Uses of a Reverse Mortgage</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="list-disc list-inside space-y-2 text-base text-gray-700">
                        <li>Eliminate Monthly Mortgage Payments</li>
                        <li>Supplement or Increase Monthly Cash Flow</li>
                        <li>Establish a &quot;Standby Line of Credit&quot;</li>
                        <li>Access Funds for In-Home Care or Aging-in-Place Renovations</li>
                      </ul>
                      <ul className="list-disc list-inside space-y-2 text-base text-gray-700">
                        <li>Fund Travel, Hobbies, and Experiences</li>
                        <li>Help Family Members</li>
                        <li>Delay Social Security</li>
                        <li>Preserve Investment Portfolio</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-soft-gray rounded-lg p-6">
                    <h3 className="text-2xl font-serif font-bold text-teal mb-4">Is a Reverse Mortgage Right for You?</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-xl font-bold text-teal mb-3">Consider a reverse mortgage if you:</h4>
                        <ul className="list-disc list-inside space-y-2 text-base text-gray-700">
                          <li>Are 62 or older and plan to stay in your home</li>
                          <li>Have significant equity in your home (generally 50% or more)</li>
                          <li>Need to eliminate monthly mortgage payments</li>
                          <li>Want to access home equity without selling</li>
                          <li>Are looking for ways to make retirement savings last longer</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-teal mb-3">A reverse mortgage may NOT be right if:</h4>
                        <ul className="list-disc list-inside space-y-2 text-base text-gray-700">
                          <li>You plan to move or sell in the next few years</li>
                          <li>You have very little equity in your home</li>
                          <li>You cannot afford property taxes, insurance, and maintenance</li>
                          <li>You want to leave maximum equity to heirs</li>
                          <li>You have more cost-effective alternatives</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-soft-gray rounded-lg p-6">
                    <h3 className="text-2xl font-serif font-bold text-teal mb-4">Next Steps: Learn More and Get Personalized Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="text-2xl font-bold text-teal mr-3">1.</span>
                        <div>
                          <h4 className="text-xl font-bold text-teal mb-2">Speak with a Licensed Reverse Mortgage Specialist</h4>
                          <p className="text-base text-gray-700 leading-relaxed">
                            Get personalized guidance and answers to your specific questions. A licensed specialist can evaluate your unique situation, provide accurate loan estimates, explain all your options, and answer questions about how a reverse mortgage would impact your specific financial plan.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="text-2xl font-bold text-teal mr-3">2.</span>
                        <div>
                          <h4 className="text-xl font-bold text-teal mb-2">Get Your Free Reverse Mortgage Financial Analysis Report</h4>
                          <p className="text-base text-gray-700 leading-relaxed">
                            Request a no-obligation analysis that shows how much you may be eligible to borrow, estimated closing costs, different payment options, projected loan balance over time, and comparison to other financing options.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="text-2xl font-bold text-teal mr-3">3.</span>
                        <div>
                          <h4 className="text-xl font-bold text-teal mb-2">Complete HUD-Approved Counseling</h4>
                          <p className="text-base text-gray-700 leading-relaxed">
                            Before proceeding, you&apos;ll complete a required counseling session with an independent, HUD-approved counselor who will ensure you fully understand how reverse mortgages work, discuss alternatives, answer all your questions, and provide an unbiased assessment.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="text-2xl font-bold text-teal mr-3">4.</span>
                        <div>
                          <h4 className="text-xl font-bold text-teal mb-2">Consult with Your Financial Advisor</h4>
                          <p className="text-base text-gray-700 leading-relaxed">
                            Discuss how a reverse mortgage fits into your overall retirement and estate plan. Bring your reverse mortgage analysis to your financial advisor, CPA, or attorney for their input.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* CTA Section */}
              <section className="bg-teal rounded-lg p-8 md:p-12 text-center text-white mb-16">
                <h2 className="text-3xl font-serif font-bold mb-4">
                  Ready to Learn More?
                </h2>
                <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
                  Get your free, no-obligation Reverse Mortgage Financial Analysis Report to see how much you may qualify for and how it could benefit your retirement plan.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/calculate" 
                    className="bg-white text-teal px-8 py-4 rounded-lg font-semibold text-lg inline-block hover:bg-soft-gray transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
                    aria-label="Get your free reverse mortgage analysis report"
                  >
                    Get Your Free Analysis Report
                  </Link>
                  <a 
                    href="https://calendly.com/justin-castro-texanabank/reverse-mortgage-discussion" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green text-white px-8 py-4 rounded-lg font-semibold text-lg inline-block hover:bg-green-dark transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-green focus:ring-opacity-50"
                  >
                    Schedule a Consultation
                  </a>
                </div>
              </section>

              {/* Disclaimer Footer */}
              <div className="border-t border-gray-300 pt-8 pb-4">
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  <strong>Important Disclosures:</strong> This information is for educational purposes only and does not constitute financial advice. Reverse mortgage terms, rates, and availability are subject to change and vary by lender and location. You should consult with a licensed reverse mortgage specialist, financial advisor, and/or attorney before making any decisions. All borrowers are required to complete HUD-approved counseling. You remain responsible for property taxes, homeowner&apos;s insurance, HOA dues (if applicable), and home maintenance.
                </p>
                <p className="text-xs text-gray-500 italic text-center">
                  Powered by Texana Bank | FDIC Insured
                </p>
              </div>
            </article>
          </main>
        </div>
      </div>
    </div>
  );
}
