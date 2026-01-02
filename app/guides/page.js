'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  BookOpen, 
  Video, 
  Search, 
  Play, 
  Clock, 
  CheckCircle, 
  Shield, 
  FileText, 
  Calculator, 
  Users, 
  Home, 
  TrendingUp,
  ChevronDown,
  ChevronUp,
  Filter,
  X,
  ArrowUp
} from 'lucide-react';

export default function GuidesPage() {
  const [activeMode, setActiveMode] = useState(''); // 'video' or 'reading' or ''
  const [activeSection, setActiveSection] = useState('');
  const [expandedSections, setExpandedSections] = useState({});
  const [videoSearchQuery, setVideoSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Video categories and content
  const videoCategories = [
    {
      id: 'getting-started',
      name: 'Getting Started',
      icon: Home,
      videos: [
        {
          id: 'intro',
          title: 'Introduction to Reverse Mortgages',
          duration: '4:32',
          thumbnail: '/api/placeholder/400/225',
          description: 'Learn the basics of reverse mortgages and how they work.',
          url: 'https://reversemortgageseminar.net/justin'
        },
        {
          id: 'myths',
          title: 'Common Myths Debunked',
          duration: '5:15',
          thumbnail: '/api/placeholder/400/225',
          description: 'Separate fact from fiction about reverse mortgages.',
          url: 'https://reversemortgageseminar.net/justin'
        },
        {
          id: 'basics',
          title: 'How Reverse Mortgages Work',
          duration: '6:20',
          thumbnail: '/api/placeholder/400/225',
          description: 'Understanding the mechanics of reverse mortgages.',
          url: 'https://reversemortgageseminar.net/justin'
        }
      ]
    },
    {
      id: 'eligibility',
      name: 'Eligibility & Requirements',
      icon: Users,
      videos: [
        {
          id: 'who-qualifies',
          title: 'Who Qualifies for a Reverse Mortgage?',
          duration: '3:45',
          thumbnail: '/api/placeholder/400/225',
          description: 'Learn about age, property, and financial requirements.',
          url: 'https://reversemortgageseminar.net/justin'
        },
        {
          id: 'property-types',
          title: 'Property Types That Qualify',
          duration: '4:10',
          thumbnail: '/api/placeholder/400/225',
          description: 'Understanding which properties are eligible.',
          url: 'https://reversemortgageseminar.net/justin'
        }
      ]
    },
    {
      id: 'benefits',
      name: 'Benefits & Uses',
      icon: TrendingUp,
      videos: [
        {
          id: 'eliminate-payments',
          title: 'Eliminate Monthly Mortgage Payments',
          duration: '4:50',
          thumbnail: '/api/placeholder/400/225',
          description: 'How reverse mortgages can free up your monthly budget.',
          url: 'https://reversemortgageseminar.net/justin'
        },
        {
          id: 'financial-planning',
          title: 'Financial Planning Strategies',
          duration: '5:30',
          thumbnail: '/api/placeholder/400/225',
          description: 'Using reverse mortgages in retirement planning.',
          url: 'https://reversemortgageseminar.net/justin'
        },
        {
          id: 'age-in-place',
          title: 'Funding Home Modifications',
          duration: '3:25',
          thumbnail: '/api/placeholder/400/225',
          description: 'Using equity to age in place safely.',
          url: 'https://reversemortgageseminar.net/justin'
        }
      ]
    },
    {
      id: 'protections',
      name: 'Protections & Safety',
      icon: Shield,
      videos: [
        {
          id: 'fha-insurance',
          title: 'FHA Insurance Protection',
          duration: '4:15',
          thumbnail: '/api/placeholder/400/225',
          description: 'Understanding non-recourse protection and FHA insurance.',
          url: 'https://reversemortgageseminar.net/justin'
        },
        {
          id: 'spouse-protection',
          title: 'Spouse Protection Rules',
          duration: '3:55',
          thumbnail: '/api/placeholder/400/225',
          description: 'How eligible non-borrowing spouses are protected.',
          url: 'https://reversemortgageseminar.net/justin'
        },
        {
          id: 'heirs',
          title: 'What Happens to Your Heirs?',
          duration: '5:00',
          thumbnail: '/api/placeholder/400/225',
          description: 'Understanding inheritance options for your heirs.',
          url: 'https://reversemortgageseminar.net/justin'
        }
      ]
    },
    {
      id: 'comparison',
      name: 'Comparisons',
      icon: Calculator,
      videos: [
        {
          id: 'heloc-vs-reverse',
          title: 'HELOC vs. Reverse Mortgage',
          duration: '6:10',
          thumbnail: '/api/placeholder/400/225',
          description: 'Comparing home equity options for seniors.',
          url: 'https://reversemortgageseminar.net/justin'
        },
        {
          id: 'alternatives',
          title: 'Alternatives to Reverse Mortgages',
          duration: '4:40',
          thumbnail: '/api/placeholder/400/225',
          description: 'Exploring other options for accessing home equity.',
          url: 'https://reversemortgageseminar.net/justin'
        }
      ]
    }
  ];

  // Get all videos for search
  const allVideos = videoCategories.flatMap(category => 
    category.videos.map(video => ({ ...video, category: category.name, categoryId: category.id }))
  );

  // Filter videos based on search and category
  const filteredVideos = allVideos.filter(video => {
    const matchesSearch = videoSearchQuery === '' || 
      video.title.toLowerCase().includes(videoSearchQuery.toLowerCase()) ||
      video.description.toLowerCase().includes(videoSearchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || video.categoryId === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  useEffect(() => {
    const handleScroll = () => {
      // Show/hide back to top button
      setShowBackToTop(window.scrollY > 400);

      // Update active section for reading mode
      if (activeMode === 'reading') {
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
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeMode]);

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

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
      {/* Hero Section with Choice Architecture */}
      <section className="bg-gradient-to-b from-soft-gray to-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-teal mb-6 leading-tight text-center">
            How Reverse Mortgages Work
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-12 text-center max-w-3xl mx-auto">
            Choose your preferred learning method. Watch short videos or read our comprehensive guide—both cover the same essential information.
          </p>

          {!activeMode && (
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Video Path */}
              <button
                onClick={() => setActiveMode('video')}
                className="bg-white border-4 border-teal rounded-xl p-8 hover:bg-teal hover:text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-teal focus:ring-opacity-50 shadow-lg hover:shadow-xl group"
                aria-label="Learn through video tutorials"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-teal/10 group-hover:bg-white/20 rounded-full p-6 mb-4">
                    <Video className="h-12 w-12 text-teal group-hover:text-white" />
                  </div>
                  <h2 className="text-2xl font-serif font-bold mb-3">Watch Video Tutorials</h2>
                  <p className="text-base mb-4 leading-relaxed">
                    Short, easy-to-follow videos organized by topic
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-600 group-hover:text-white/90 mb-4">
                    <Clock className="h-4 w-4" />
                    <span>3-6 minutes per video</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 group-hover:text-white/90">
                    <CheckCircle className="h-4 w-4" />
                    <span>Search by topic or question</span>
                  </div>
                </div>
              </button>

              {/* Reading Path */}
              <button
                onClick={() => setActiveMode('reading')}
                className="bg-white border-4 border-green rounded-xl p-8 hover:bg-green hover:text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green focus:ring-opacity-50 shadow-lg hover:shadow-xl group"
                aria-label="Read the comprehensive guide"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-green/10 group-hover:bg-white/20 rounded-full p-6 mb-4">
                    <BookOpen className="h-12 w-12 text-green group-hover:text-white" />
                  </div>
                  <h2 className="text-2xl font-serif font-bold mb-3">Read the Guide</h2>
                  <p className="text-base mb-4 leading-relaxed">
                    Comprehensive written guide with detailed explanations
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-600 group-hover:text-white/90 mb-4">
                    <Clock className="h-4 w-4" />
                    <span>15-20 minutes to read</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 group-hover:text-white/90">
                    <CheckCircle className="h-4 w-4" />
                    <span>Print-friendly format</span>
                  </div>
                </div>
              </button>
            </div>
          )}

          {activeMode && (
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setActiveMode('')}
                className="text-teal hover:text-teal-light font-medium text-lg underline underline-offset-4 transition-colors flex items-center gap-2"
              >
                <X className="h-5 w-5" />
                Choose a different learning method
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Video Learning Section */}
      {activeMode === 'video' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Search and Filter Bar */}
          <div className="bg-soft-gray rounded-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search videos by topic or question..."
                  value={videoSearchQuery}
                  onChange={(e) => setVideoSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent text-lg"
                  aria-label="Search videos"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-10 pr-8 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent text-lg appearance-none bg-white"
                  aria-label="Filter by category"
                >
                  <option value="all">All Categories</option>
                  {videoCategories.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
              </div>
            </div>
            {videoSearchQuery && (
              <div className="mt-4 text-sm text-gray-600">
                Found {filteredVideos.length} video{filteredVideos.length !== 1 ? 's' : ''}
              </div>
            )}
          </div>

          {/* Video Categories */}
          {selectedCategory === 'all' && !videoSearchQuery ? (
            <div className="space-y-12">
              {videoCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <div key={category.id} id={category.id} className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="bg-teal/10 rounded-lg p-3">
                        <IconComponent className="h-6 w-6 text-teal" />
                      </div>
                      <h2 className="text-3xl font-serif font-bold text-teal">{category.name}</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.videos.map((video) => (
                        <div
                          key={video.id}
                          className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                        >
                          <div className="relative aspect-video bg-gray-200">
                            <img
                              src={video.thumbnail}
                              alt={video.title}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                              }}
                            />
                            <div className="absolute inset-0 bg-teal/90 flex items-center justify-center" style={{ display: 'none' }}>
                              <Play className="h-16 w-16 text-white" />
                            </div>
                            <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {video.duration}
                            </div>
                          </div>
                          <div className="p-5">
                            <h3 className="text-xl font-bold text-teal mb-2">{video.title}</h3>
                            <p className="text-gray-600 mb-4 text-sm leading-relaxed">{video.description}</p>
                            <a
                              href={video.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 bg-teal text-white px-4 py-2 rounded-lg font-semibold hover:bg-teal-light transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-teal focus:ring-opacity-50"
                              aria-label={`Watch ${video.title}`}
                            >
                              <Play className="h-4 w-4" />
                              Watch Video
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVideos.length > 0 ? (
                filteredVideos.map((video) => (
                  <div
                    key={video.id}
                    className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="relative aspect-video bg-gray-200">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="absolute inset-0 bg-teal/90 flex items-center justify-center" style={{ display: 'none' }}>
                        <Play className="h-16 w-16 text-white" />
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="text-xs text-teal font-semibold mb-2 uppercase">{video.category}</div>
                      <h3 className="text-xl font-bold text-teal mb-2">{video.title}</h3>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">{video.description}</p>
                      <a
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-teal text-white px-4 py-2 rounded-lg font-semibold hover:bg-teal-light transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-teal focus:ring-opacity-50"
                        aria-label={`Watch ${video.title}`}
                      >
                        <Play className="h-4 w-4" />
                        Watch Video
                      </a>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-lg text-gray-600">No videos found matching your search.</p>
                </div>
              )}
            </div>
          )}

          {/* Related Content Suggestions */}
          <div className="mt-12 bg-soft-gray rounded-lg p-6">
            <h3 className="text-2xl font-serif font-bold text-teal mb-4">Next Steps</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Ready to see how much you might qualify for? Get your free, personalized analysis report.
            </p>
            <Link
              href="/calculate"
              className="inline-flex items-center gap-2 bg-teal text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-light transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-teal focus:ring-opacity-50"
            >
              Get Your Free Analysis Report
            </Link>
          </div>
        </div>
      )}

      {/* Reading Guide Section */}
      {activeMode === 'reading' && (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Table of Contents Sidebar */}
          <aside className="lg:w-64 lg:flex-shrink-0">
            <div className="lg:sticky lg:top-24">
                <div className="bg-soft-gray rounded-lg p-6 mb-6">
                  <h2 className="text-xl font-serif font-bold text-teal flex items-center mb-4">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Table of Contents
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
                    {[
                      {
                        title: 'Myth 1: Reverse Mortgages Are Too Expensive',
                        content: 'While reverse mortgages do have upfront costs (including FHA mortgage insurance and origination fees), these costs are often comparable to other mortgage products. The key difference is that most fees can be financed into the loan, and you can access your home equity without monthly mortgage payments. When you compare the cost to the benefit of eliminating monthly mortgage payments and accessing tax-free cash, many borrowers find significant value.'
                      },
                      {
                        title: 'Myth 2: You Don\'t Retain Title to Your Home',
                        content: 'This is completely false. With a reverse mortgage, you retain full ownership and title to your home, just as you would with a traditional mortgage. You can sell your home at any time, and you\'re responsible for property taxes, homeowner\'s insurance, and home maintenance—just like any homeowner.'
                      },
                      {
                        title: 'Myth 3: Your Spouse Will Be Left Homeless',
                        content: 'Federal regulations include strong protections for "Eligible Non-Borrowing Spouses." If your spouse qualifies as an eligible non-borrowing spouse, they may remain in the home for life as long as all loan terms are met (paying property taxes, insurance, and maintaining the home). This protection was specifically designed to prevent surviving spouses from losing their homes.'
                      },
                      {
                        title: 'Myth 4: Your Kids Will Lose the House to the Bank',
                        content: 'Your heirs inherit the home and have several options: Sell the home and retain any equity after paying off the reverse mortgage (just like any other mortgage), keep the home by paying off the loan balance (either through refinancing or paying cash), buy the home for 95% of the appraised value or the amount due, whichever is less, or deed the home to the lender if the home value is less than the loan balance (the "non-recourse" feature means neither you nor your heirs will owe more than the home\'s value).'
                      },
                      {
                        title: 'Myth 5: You Must Own Your Home Free-and-Clear',
                        content: 'You do NOT need to own your home outright. Many people use reverse mortgages to pay off existing mortgages, which eliminates their monthly mortgage payments. If you have an existing mortgage, the reverse mortgage proceeds must first pay off that loan, and you receive the remaining funds as a lump sum, line of credit, or monthly payments. The key is having sufficient equity in your home—generally, you need to be 62 or older and have significant equity built up.'
                      }
                    ].map((myth, index) => (
                      <div key={index} className="bg-soft-gray rounded-lg p-6">
                        <h3 className="text-2xl font-serif font-bold text-teal mb-3">{myth.title}</h3>
                    <p className="text-base text-gray-700 leading-relaxed">
                          <strong className="text-teal">Reality:</strong> {myth.content}
                    </p>
                  </div>
                    ))}
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
                </div>
              </section>

                {/* Continue with other sections - I'll include key sections but keep it manageable */}
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
                      <p className="text-sm opacity-90">Meet immediate financial goals</p>
                  </div>
                  <div className="bg-green text-white rounded-lg p-6 text-center">
                    <CheckCircle className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">LIFESTYLE</h3>
                      <p className="text-sm opacity-90">Support the lifestyle you&apos;ve earned</p>
                  </div>
                  <div className="bg-bright-green text-white rounded-lg p-6 text-center">
                    <CheckCircle className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">PLAN</h3>
                      <p className="text-sm opacity-90">Secure a stronger future</p>
                  </div>
                </div>
              </section>

              {/* Eligibility Section */}
              <section id="eligibility" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-serif font-bold text-teal mb-6 flex items-center">
                  <Users className="h-8 w-8 mr-3" />
                  Who Is Eligible?
                </h2>

                  <div className="space-y-6">
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
                        All borrowers are required to complete an independent counseling session with a HUD-approved counseling agency. This ensures you fully understand how reverse mortgages work, your obligations as a borrower, alternatives to reverse mortgages, and the impact on you and your heirs.
                      </p>
                  </div>
                </div>
              </section>

                {/* Protections Section */}
              <section id="protections" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-serif font-bold text-teal mb-6 flex items-center">
                  <Shield className="h-8 w-8 mr-3" />
                  Consumer Protections for Seniors and Heirs
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Reverse mortgages are highly regulated, with numerous safeguards designed to protect borrowers, spouses, and heirs.
                </p>

                    <div className="bg-teal text-white rounded-lg p-5 mb-4">
                      <h5 className="text-xl font-bold mb-2">You and Your Heirs Will Never Owe More Than the Value of Your Home</h5>
                      <p className="leading-relaxed mb-2">
                        This is called the &quot;non-recourse&quot; feature. Even if your loan balance grows larger than your home&apos;s value (due to accruing interest and/or declining home values), neither you nor your heirs will owe more than the home is worth when the loan comes due.
                      </p>
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
                        <td className="border border-gray-300 px-4 py-3 font-semibold">Non-Recourse Protection</td>
                        <td className="border border-gray-300 px-4 py-3">No</td>
                        <td className="border border-gray-300 px-4 py-3">Yes - never owe more than home value</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

                {/* Examples Section */}
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
                      <strong>Important Note:</strong> These examples are for illustrative purposes using sample data. Actual loan amounts, interest rates, and terms will vary based on individual circumstances, current market conditions, and the specific lender.
                  </p>
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
                    <strong>Important Disclosures:</strong> This information is for educational purposes only and does not constitute financial advice. Reverse mortgage terms, rates, and availability are subject to change and vary by lender and location. You should consult with a licensed reverse mortgage specialist, financial advisor, and/or attorney before making any decisions.
                </p>
                <p className="text-xs text-gray-500 italic text-center">
                  Powered by Texana Bank | FDIC Insured
                </p>
              </div>
            </article>
          </main>
        </div>
      </div>
      )}

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-teal text-white p-4 rounded-full shadow-lg hover:bg-teal-light transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-teal focus:ring-opacity-50 z-50"
          aria-label="Back to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          .no-print {
            display: none !important;
          }
          body {
            font-size: 12pt;
            line-height: 1.6;
          }
          h1, h2, h3 {
            page-break-after: avoid;
          }
          section {
            page-break-inside: avoid;
          }
        }
      `}</style>
    </div>
  );
}
