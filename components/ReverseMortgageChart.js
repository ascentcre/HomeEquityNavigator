'use client';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export default function ReverseMortgageChart({ monthlyData }) {
  if (!monthlyData || monthlyData.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <p className="text-gray-600" style={{ fontSize: '18px' }}>
          Enter your information to see the chart
        </p>
      </div>
    );
  }

  // Prepare data for chart - use yearly data points for better performance
  const chartData = monthlyData
    .filter((_, index) => index % 12 === 0 || index === monthlyData.length - 1)
    .map((data) => ({
      year: data.year,
      'Line of Credit': Math.round(data.lineOfCredit),
      'Loan Balance': Math.round(data.loanBalance),
    }));

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 border border-gray-300 rounded-lg shadow-lg">
          <p className="font-semibold mb-2" style={{ fontSize: '18px' }}>
            Year {payload[0].payload.year}
          </p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color, fontSize: '18px' }}>
              {entry.name}: {formatCurrency(entry.value)}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-teal mb-6" style={{ fontSize: '18px' }}>
        Line of Credit vs. Loan Balance Over 30 Years
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorLoc" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#008080" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#008080" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="colorLoan" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#013220" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#013220" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="year" 
            style={{ fontSize: '16px' }}
            label={{ value: 'Year', position: 'insideBottom', offset: -5, style: { fontSize: '18px' } }}
          />
          <YAxis 
            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
            style={{ fontSize: '16px' }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            wrapperStyle={{ fontSize: '18px', paddingTop: '20px' }}
          />
          <Area
            type="monotone"
            dataKey="Line of Credit"
            stroke="#008080"
            fillOpacity={1}
            fill="url(#colorLoc)"
          />
          <Area
            type="monotone"
            dataKey="Loan Balance"
            stroke="#013220"
            fillOpacity={1}
            fill="url(#colorLoan)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

