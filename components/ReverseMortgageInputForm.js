'use client';

import { useState } from 'react';
import InputTooltip from './InputTooltip';

export default function ReverseMortgageInputForm({ inputs, onInputChange }) {
  const handleChange = (field, value) => {
    const numValue = parseFloat(value) || 0;
    onInputChange({ ...inputs, [field]: numValue });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
      <h2 className="text-2xl font-bold text-teal mb-6" style={{ fontSize: '18px' }}>
        Enter Your Information
      </h2>
      
      <div className="space-y-5">
        <div>
          <label 
            htmlFor="age" 
            className="block text-gray-700 font-semibold mb-2 flex items-center"
            style={{ fontSize: '18px' }}
          >
            Age
            <InputTooltip 
              text="Enter the age of the youngest borrower. Must be 62 or older to qualify for a reverse mortgage."
              id="age-tooltip"
            />
          </label>
          <input
            type="number"
            id="age"
            min="62"
            max="100"
            value={inputs.age || ''}
            onChange={(e) => handleChange('age', e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal text-lg"
            style={{ fontSize: '18px' }}
          />
        </div>

        <div>
          <label 
            htmlFor="homeValue" 
            className="block text-gray-700 font-semibold mb-2 flex items-center"
            style={{ fontSize: '18px' }}
          >
            Home Value ($)
            <InputTooltip 
              text="Enter the current estimated market value of your home. This will be confirmed by a professional appraisal if you proceed with a reverse mortgage."
              id="homeValue-tooltip"
            />
          </label>
          <input
            type="number"
            id="homeValue"
            min="0"
            step="1000"
            value={inputs.homeValue || ''}
            onChange={(e) => handleChange('homeValue', e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal text-lg"
            style={{ fontSize: '18px' }}
          />
        </div>

        <div>
          <label 
            htmlFor="mortgageBalance" 
            className="block text-gray-700 font-semibold mb-2 flex items-center"
            style={{ fontSize: '18px' }}
          >
            Current Mortgage Balance ($)
            <InputTooltip 
              text="Enter the remaining balance on your current mortgage or any existing liens on the property. This amount will be paid off first from the reverse mortgage proceeds."
              id="mortgageBalance-tooltip"
            />
          </label>
          <input
            type="number"
            id="mortgageBalance"
            min="0"
            step="1000"
            value={inputs.mortgageBalance || ''}
            onChange={(e) => handleChange('mortgageBalance', e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal text-lg"
            style={{ fontSize: '18px' }}
          />
        </div>

        <div>
          <label 
            htmlFor="margin" 
            className="block text-gray-700 font-semibold mb-2 flex items-center"
            style={{ fontSize: '18px' }}
          >
            Margin (%)
            <InputTooltip 
              text="The margin is a fixed percentage added to the index rate to determine your interest rate. Typical margins range from 2.0% to 3.0%. This is set by the lender and remains constant throughout the loan."
              id="margin-tooltip"
            />
          </label>
          <input
            type="number"
            id="margin"
            min="0"
            max="10"
            step="0.1"
            value={inputs.margin || ''}
            onChange={(e) => handleChange('margin', e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal text-lg"
            style={{ fontSize: '18px' }}
          />
        </div>

        <div>
          <label 
            htmlFor="expectedIndex" 
            className="block text-gray-700 font-semibold mb-2 flex items-center"
            style={{ fontSize: '18px' }}
          >
            Expected Index (%)
            <InputTooltip 
              text="The index rate is a variable interest rate benchmark (like the 1-Year CMT or LIBOR). Enter your expected average index rate. Your actual interest rate will be the Index Rate plus the Margin."
              id="expectedIndex-tooltip"
            />
          </label>
          <input
            type="number"
            id="expectedIndex"
            min="0"
            max="10"
            step="0.1"
            value={inputs.expectedIndex || ''}
            onChange={(e) => handleChange('expectedIndex', e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal text-lg"
            style={{ fontSize: '18px' }}
          />
        </div>

        <div>
          <label 
            htmlFor="appreciationRate" 
            className="block text-gray-700 font-semibold mb-2 flex items-center"
            style={{ fontSize: '18px' }}
          >
            Expected Annual Home Appreciation (%)
            <InputTooltip 
              text="Enter your expected annual percentage increase in your home's value. Historical averages are typically 3-5% per year, but this varies by location and market conditions."
              id="appreciationRate-tooltip"
            />
          </label>
          <input
            type="number"
            id="appreciationRate"
            min="0"
            max="10"
            step="0.1"
            value={inputs.appreciationRate || ''}
            onChange={(e) => handleChange('appreciationRate', e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal text-lg"
            style={{ fontSize: '18px' }}
          />
        </div>
      </div>
    </div>
  );
}

