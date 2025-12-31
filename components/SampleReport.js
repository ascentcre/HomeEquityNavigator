'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Info, Check, ArrowDown } from 'lucide-react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  Legend,
} from 'recharts';

// Tooltip component with hover delay
function InfoTooltip({ text, children }) {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, 300);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`inline-flex items-center cursor-help ${!children ? '' : ''}`}
      >
        {children}
        <Info className={`h-4 w-4 text-teal ${children ? 'ml-1' : ''}`} />
      </div>
      {isVisible && (
        <div className="absolute z-50 bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 p-3 bg-gray-900 text-white text-sm rounded-lg shadow-xl pointer-events-none">
          {text}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
        </div>
      )}
    </div>
  );
}

// Accordion Section Component
function AccordionSection({ title, isOpen, onToggle, children, defaultOpen = false }) {
  return (
    <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 bg-white hover:bg-gray-50 flex items-center justify-between text-left transition-colors"
        aria-expanded={isOpen}
      >
        <h3 className="text-xl font-bold text-teal">{title}</h3>
        <ChevronDown
          className={`h-6 w-6 text-teal transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-6 bg-white border-t border-gray-200">{children}</div>
      </div>
    </div>
  );
}

// Metric Card Component
function MetricCard({ title, value, tooltip, highlight = false }) {
  return (
    <div
      className={`bg-white rounded-lg shadow-md p-6 border-2 ${
        highlight ? 'border-bright-green border-2' : 'border-gray-200'
      }`}
    >
      <div className="flex items-center justify-between mb-2">
        <p className="text-gray-600 text-sm font-medium">{title}</p>
        {tooltip && <InfoTooltip text={tooltip} />}
      </div>
      <p className={`text-3xl font-bold ${highlight ? 'text-bright-green' : 'text-teal'}`}>
        {value}
      </p>
    </div>
  );
}

export default function SampleReport() {
  const [openSection, setOpenSection] = useState('available-funds'); // Default open section

  const toggleSection = (section) => {
    // Accordion behavior: close current section if clicking it, otherwise open new one and close current
    setOpenSection(openSection === section ? null : section);
  };

  // Donut chart data for Available Funds Breakdown
  const breakdownData = [
    { name: 'Available to You', value: 120800, color: '#44c17e' },
    { name: 'Mortgage Payoff', value: 85000, color: '#0080ff' },
    { name: 'Initial MIP', value: 9000, color: '#ff9500' },
    { name: 'Origination Fee', value: 6000, color: '#ffd700' },
    { name: 'Closing Costs', value: 4200, color: '#808080' },
  ];

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  // 10-Year Equity Projection data
  const projectionData = Array.from({ length: 11 }, (_, i) => {
    const year = i;
    // Home value grows at ~4% annually
    const homeValue = 450000 * Math.pow(1.04, year);
    // Line of credit grows at loan rate + 0.5% (approximately 6.5%)
    const lineOfCredit = 85000 * Math.pow(1.065, year);
    // Loan balance grows (assuming no draws after initial)
    const loanBalance = 120800 * Math.pow(1.065, year);
    return {
      year: year,
      'Home Value': Math.round(homeValue),
      'Line of Credit': Math.round(lineOfCredit),
      'Loan Balance': Math.round(loanBalance),
    };
  });

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-300 rounded-lg shadow-lg">
          <p className="font-semibold mb-2">Year {payload[0].payload.year}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color, fontSize: '14px' }}>
              {entry.name}: {formatCurrency(entry.value)}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  // Custom label for pie chart
  const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    if (percent < 0.05) return null; // Don't show labels for very small slices
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        fontSize="12"
        fontWeight="bold"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 md:p-10 mb-8">
      {/* Header */}
      <div className="mb-8 pb-6 border-b-2 border-gray-200">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-teal mb-3">
          See What Your Personalized Report Looks Like
        </h2>
        <p className="text-lg text-gray-600 mb-4">
          This is a sample report showing how your personalized analysis will be formatted. Your actual report will be customized to your specific situation.
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-500">
          <p>
            <strong>Report Date:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
          <p>
            <strong>Prepared by:</strong> Justin Castro, NMLS #2704481, U.S. Army Veteran
          </p>
        </div>
        <div className="mt-4 p-4 bg-soft-gray rounded-lg">
          <p className="text-sm text-gray-700">
            <strong>Sample Scenario:</strong> John & Mary Smith, Age 72 | 123 Oak Street, Austin, TX 78613
          </p>
        </div>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <MetricCard
          title="Home Value"
          value="$450k"
          tooltip="The current appraised value of your home"
        />
        <MetricCard
          title="Available Funds"
          value="$120k"
          tooltip="Total amount available after all costs and mortgage payoff"
          highlight={true}
        />
        <MetricCard
          title="Line of Credit"
          value="$85k"
          tooltip="Available credit line that grows over time, providing an inflation hedge"
        />
        <MetricCard
          title="Cash Available"
          value="$35k"
          tooltip="Immediate cash you can receive at closing"
        />
      </div>

      {/* Accordion Sections */}
      <div className="space-y-4">
        {/* Section A: Available Funds Breakdown */}
        <AccordionSection
          title="Available Funds Breakdown"
          isOpen={openSection === 'available-funds'}
          onToggle={() => toggleSection('available-funds')}
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left side: Donut chart */}
            <div>
              <h4 className="text-lg font-semibold text-teal mb-4 text-center">Distribution Breakdown</h4>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={breakdownData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomLabel}
                    outerRadius={100}
                    innerRadius={60}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {breakdownData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <RechartsTooltip formatter={(value) => formatCurrency(value)} />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 flex flex-wrap justify-center gap-3 text-xs">
                {breakdownData.map((item, index) => (
                  <div key={index} className="flex items-center gap-1">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-gray-600">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side: Line-by-line breakdown */}
            <div>
              <h4 className="text-lg font-semibold text-teal mb-4">Detailed Breakdown</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-700">Principal Limit</span>
                    <InfoTooltip text="Maximum amount you can borrow based on your age and home value" />
                  </div>
                  <span className="font-semibold text-green">+{formatCurrency(225000)}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-700">Initial MIP (2%)</span>
                    <InfoTooltip text="One-time FHA insurance that protects you and your heirs" />
                  </div>
                  <span className="font-semibold text-red-600">-{formatCurrency(9000)}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-700">Origination Fee</span>
                    <InfoTooltip text="Fee charged by the lender for processing your loan" />
                  </div>
                  <span className="font-semibold text-red-600">-{formatCurrency(6000)}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-700">Closing Costs</span>
                    <InfoTooltip text="Third-party fees including appraisal, title, and other services" />
                  </div>
                  <span className="font-semibold text-red-600">-{formatCurrency(4200)}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-700">Mortgage Payoff</span>
                    <InfoTooltip text="Amount used to pay off your existing mortgage balance" />
                  </div>
                  <span className="font-semibold text-red-600">-{formatCurrency(85000)}</span>
                </div>
                <div className="flex items-center justify-between py-3 pt-4 border-t-2 border-teal bg-soft-gray rounded-lg px-4 mt-2">
                  <span className="font-bold text-lg text-teal">Total Available</span>
                  <span className="font-bold text-xl text-bright-green">
                    {formatCurrency(120800)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </AccordionSection>

        {/* Section B: How You Can Access Your Funds */}
        <AccordionSection
          title="How You Can Access Your Funds"
          isOpen={openSection === 'access-funds'}
          onToggle={() => toggleSection('access-funds')}
        >
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 text-center">
              <h4 className="text-xl font-bold text-teal mb-2">Lump Sum Cash</h4>
              <p className="text-3xl font-bold text-bright-green mb-3">{formatCurrency(35800)}</p>
              <InfoTooltip text="Receive a one-time payment at closing for immediate needs">
                <p className="text-sm text-gray-600">Immediate cash payment</p>
              </InfoTooltip>
            </div>
            <div className="bg-white border-2 border-bright-green rounded-lg p-6 text-center shadow-lg">
              <h4 className="text-xl font-bold text-teal mb-2">Line of Credit</h4>
              <p className="text-3xl font-bold text-bright-green mb-3">{formatCurrency(85000)}</p>
              <InfoTooltip text="Unused portion grows at loan rate + 0.5%, providing inflation hedge and increasing borrowing power over time">
                <p className="text-sm text-gray-600">Grows over time • Draw as needed</p>
              </InfoTooltip>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 text-center">
              <h4 className="text-xl font-bold text-teal mb-2">Monthly Payments</h4>
              <p className="text-3xl font-bold text-bright-green mb-3">$1,200/mo</p>
              <InfoTooltip text="Receive fixed monthly payments for life or a set term to supplement retirement income">
                <p className="text-sm text-gray-600">Supplemental income stream</p>
              </InfoTooltip>
            </div>
          </div>
        </AccordionSection>

        {/* Section C: 10-Year Equity Projection */}
        <AccordionSection
          title="10-Year Equity Projection"
          isOpen={openSection === 'projection'}
          onToggle={() => toggleSection('projection')}
        >
          <div className="mb-4">
            <p className="text-gray-600 mb-4">
              This projection shows how your home value, available line of credit, and loan balance change over time.
            </p>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={projectionData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="year"
                  label={{ value: 'Years', position: 'insideBottom', offset: -5 }}
                />
                <YAxis
                  tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                  label={{ value: 'Value ($)', angle: -90, position: 'insideLeft' }}
                />
                <RechartsTooltip content={<CustomTooltip />} />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="Home Value"
                  stroke="#0080ff"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="Line of Credit"
                  stroke="#44c17e"
                  strokeWidth={3}
                  strokeDasharray="5 5"
                  dot={{ r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="Loan Balance"
                  stroke="#dc2626"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
            <div className="mt-6 p-4 bg-bright-green bg-opacity-10 rounded-lg border border-bright-green">
              <p className="text-lg font-semibold text-teal">
                Projected Equity Remaining After 10 Years: <span className="text-bright-green">{formatCurrency(420000)}</span>
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Even after 10 years of growth, you retain significant equity in your home, providing security and flexibility.
              </p>
            </div>
          </div>
        </AccordionSection>

        {/* Section D: Understanding Your Report */}
        <AccordionSection
          title="Understanding Your Report"
          isOpen={openSection === 'faq'}
          onToggle={() => toggleSection('faq')}
        >
          <div className="space-y-4">
            <details className="group">
              <summary className="cursor-pointer font-semibold text-teal text-lg py-2 list-none flex items-center justify-between hover:text-teal-light">
                <span>Do I still own my home?</span>
                <ChevronDown className="h-5 w-5 transform group-open:rotate-180 transition-transform" />
              </summary>
              <p className="text-gray-600 mt-2 pl-4">
                Yes! You remain the legal owner of your home. The reverse mortgage is a lien on your property, not a transfer of ownership. You retain title and can sell, refinance, or pass the home to your heirs.
              </p>
            </details>

            <details className="group border-t border-gray-200 pt-4">
              <summary className="cursor-pointer font-semibold text-teal text-lg py-2 list-none flex items-center justify-between hover:text-teal-light">
                <span>Are there monthly payments?</span>
                <ChevronDown className="h-5 w-5 transform group-open:rotate-180 transition-transform" />
              </summary>
              <p className="text-gray-600 mt-2 pl-4">
                No monthly mortgage payments are required. You must still pay property taxes, homeowners insurance, and maintain the home, but no principal or interest payments are due as long as you live in the home.
              </p>
            </details>

            <details className="group border-t border-gray-200 pt-4">
              <summary className="cursor-pointer font-semibold text-teal text-lg py-2 list-none flex items-center justify-between hover:text-teal-light">
                <span>What happens when I pass away?</span>
                <ChevronDown className="h-5 w-5 transform group-open:rotate-180 transition-transform" />
              </summary>
              <p className="text-gray-600 mt-2 pl-4">
                Your heirs have options: they can repay the loan and keep the home, sell the home to pay off the loan (keeping any remaining equity), or if the loan balance exceeds the home value, they are not responsible for the difference thanks to FHA insurance.
              </p>
            </details>

            <details className="group border-t border-gray-200 pt-4">
              <summary className="cursor-pointer font-semibold text-teal text-lg py-2 list-none flex items-center justify-between hover:text-teal-light">
                <span>Why does the line of credit grow?</span>
                <ChevronDown className="h-5 w-5 transform group-open:rotate-180 transition-transform" />
              </summary>
              <p className="text-gray-600 mt-2 pl-4">
                Your unused line of credit grows at your loan rate plus 0.5% annually. This growth feature helps protect against inflation and increases your borrowing power over time, making it a valuable tool for future needs.
              </p>
            </details>
          </div>
        </AccordionSection>
      </div>

      {/* Transition CTA Section */}
      <div className="mt-12 pt-8 border-t-2 border-gray-200 text-center">
        <h3 className="text-3xl font-serif font-bold text-teal mb-6">
          Ready to See YOUR Numbers?
        </h3>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <div className="flex items-center gap-2 text-gray-700">
            <Check className="h-5 w-5 text-bright-green" />
            <span>Custom to your situation</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <Check className="h-5 w-5 text-bright-green" />
            <span>Completely free</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <Check className="h-5 w-5 text-bright-green" />
            <span>No obligation</span>
          </div>
        </div>
        <div className="animate-bounce flex justify-center">
          <ArrowDown className="h-8 w-8 text-teal" />
        </div>
      </div>
    </div>
  );
}

