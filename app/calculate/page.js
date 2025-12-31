import HubSpotForm from '@/components/HubSpotForm';
import SampleReport from '@/components/SampleReport';
import { Calculator, ArrowDown } from 'lucide-react';

export const metadata = {
  title: 'Calculate Your Reverse Mortgage Benefits | Horizon Equity Navigator',
  description: 'Get a personalized estimate of your reverse mortgage benefits. See how much you could access from your home equity to enhance your retirement.',
};

export default function CalculatePage() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-soft-gray min-h-screen">
      <div className="max-w-6xl mx-auto">
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
        
        {/* Sample Report */}
        <SampleReport />
        
        {/* Friendly Instructions Section */}
        <div className="bg-gradient-to-b from-white to-soft-gray rounded-lg shadow-lg p-8 md:p-12 mb-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-teal mb-4">
              Get Your Personalized Analysis in 3 Simple Steps
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Fill out the form below with your information, and our licensed reverse mortgage specialist will prepare a customized analysis report tailored specifically to your situation—just like the sample above, but with your real numbers.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8 text-left">
              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-teal text-white rounded-full flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <h3 className="font-semibold text-teal text-lg">Complete the Form</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Share some basic information about yourself and your home. This helps us create an accurate estimate.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-teal text-white rounded-full flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                  <h3 className="font-semibold text-teal text-lg">We Review Your Info</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our licensed specialist reviews your information and prepares a detailed, personalized analysis report.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-teal text-white rounded-full flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                  <h3 className="font-semibold text-teal text-lg">Receive Your Report</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Get your free personalized report delivered to your inbox, showing exactly how a reverse mortgage could work for you.
                </p>
              </div>
            </div>
            
            <div className="bg-bright-green bg-opacity-10 border border-bright-green rounded-lg p-6 mb-6">
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-teal">Ready to get started?</strong> Simply complete the form below, and you'll be one step closer to discovering how much tax-free cash you could access from your home equity. Our reverse mortgage specialist is standing by to help you understand your options.
              </p>
            </div>
            
            <div className="flex justify-center">
              <ArrowDown className="h-8 w-8 text-teal animate-bounce" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="mb-6 text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-teal mb-3">
              Request Your Free Personalized Report
            </h2>
            <p className="text-lg text-gray-600">
              Please fill out the form below to receive your customized reverse mortgage analysis
            </p>
          </div>
          
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

