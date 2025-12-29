'use client';

import { useState } from 'react';
import { pdf } from '@react-pdf/renderer';
import { ReportPDFDocument } from './ReportPDF';

export default function PDFDownloadButton({ inputs, results }) {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async () => {
    if (!results || !inputs) {
      alert('Please complete the calculator first');
      return;
    }

    setIsGenerating(true);
    try {
      const doc = <ReportPDFDocument inputs={inputs} results={results} />;
      const asPdf = pdf(doc);
      const blob = await asPdf.toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'reverse-mortgage-analysis.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isGenerating || !results}
      className="w-full bg-teal text-white px-6 py-4 rounded-lg font-semibold hover:bg-teal-light transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-teal focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
      style={{ fontSize: '18px', minHeight: '48px' }}
    >
      {isGenerating ? 'Generating PDF...' : 'Download My Analysis'}
    </button>
  );
}

