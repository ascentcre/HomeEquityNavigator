'use client';

import { useState } from 'react';
import { HelpCircle } from 'lucide-react';

export default function InputTooltip({ text, id }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative inline-block ml-2">
      <button
        type="button"
        className="focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2 rounded-full"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onFocus={() => setIsVisible(true)}
        onBlur={() => setIsVisible(false)}
        aria-label={`Tooltip: ${text}`}
        aria-describedby={id}
      >
        <HelpCircle className="h-5 w-5 text-teal hover:text-teal-dark transition-colors" aria-hidden="true" />
      </button>
      
      {isVisible && (
        <>
          <div
            id={id}
            role="tooltip"
            className="absolute z-50 w-72 p-4 bg-gray-900 text-white rounded-lg shadow-xl left-0 bottom-full mb-2 hidden sm:block"
            style={{ fontSize: '16px', lineHeight: '1.6' }}
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
          >
            <p className="leading-relaxed">{text}</p>
            {/* Tooltip arrow */}
            <div className="absolute top-full left-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-900"></div>
          </div>
          {/* Mobile tooltip - appears below */}
          <div
            id={`${id}-mobile`}
            role="tooltip"
            className="absolute z-50 w-72 p-4 bg-gray-900 text-white rounded-lg shadow-xl left-0 top-full mt-2 sm:hidden"
            style={{ fontSize: '16px', lineHeight: '1.6' }}
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
          >
            <p className="leading-relaxed">{text}</p>
            {/* Tooltip arrow pointing up */}
            <div className="absolute bottom-full left-6 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-gray-900"></div>
          </div>
        </>
      )}
    </div>
  );
}

