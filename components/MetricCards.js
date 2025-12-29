'use client';

export default function MetricCards({ results }) {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-teal">
        <h3 className="text-gray-600 font-semibold mb-2" style={{ fontSize: '18px' }}>
          Initial Cash Available
        </h3>
        <p className="text-3xl font-bold text-teal" style={{ fontSize: '24px' }}>
          {formatCurrency(results?.initialCashAvailable || 0)}
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green">
        <h3 className="text-gray-600 font-semibold mb-2" style={{ fontSize: '18px' }}>
          Total Line of Credit at Year 10
        </h3>
        <p className="text-3xl font-bold text-green" style={{ fontSize: '24px' }}>
          {formatCurrency(results?.totalLineOfCreditYear10 || 0)}
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-teal-dark">
        <h3 className="text-gray-600 font-semibold mb-2" style={{ fontSize: '18px' }}>
          Projected Equity at Year 25
        </h3>
        <p className="text-3xl font-bold text-teal-dark" style={{ fontSize: '24px' }}>
          {formatCurrency(results?.projectedEquityYear25 || 0)}
        </p>
      </div>
    </div>
  );
}

