import HubSpotForm from '@/components/HubSpotForm';
import { Calculator } from 'lucide-react';

export const metadata = {
  title: 'Calculate Your Reverse Mortgage Benefits | Horizon Equity Navigator',
  description: 'Get a personalized estimate of your reverse mortgage benefits. See how much you could access from your home equity to enhance your retirement.',
};

export default function CalculatePage() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-soft-gray min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-soft-blue bg-opacity-30 p-4 rounded-full">
              <Calculator className="h-12 w-12 text-bright-green" aria-hidden="true" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-teal mb-4">
          Get Your Free Reverse Mortgage Analysis Report
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Receive a personalized financial report prepared by our licensed loan officers - delivered straight to your inbox. 
          See real numbers based on your specific situation, with zero obligation to proceed.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <HubSpotForm />
          
          <div className="mt-8 p-6 bg-soft-gray rounded-lg">
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Privacy Notice:</strong> Your information is secure and will only be used 
              to provide you with a reverse mortgage estimate. We respect your privacy and will 
              never share your information with third parties without your consent.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

