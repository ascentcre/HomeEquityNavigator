import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-teal text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Copyright and Links */}
        <div className="flex flex-col md:flex-row justify-between items-center pb-6 border-b border-teal-light">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Texana Bank. All rights reserved.
          </p>
          <div className="flex items-center space-x-3 text-sm">
            <a 
              href="https://texanabank.com/privacy-policy/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-gray-500">|</span>
            <a 
              href="https://texanabank.com/terms-of-use/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Terms of Use
            </a>
          </div>
        </div>

        {/* Main Content: Disclaimers and Notices */}
        <div className="py-6 space-y-4 text-sm text-gray-300 leading-relaxed">
          {/* Required Compliance Disclaimer */}
          <p className="font-semibold text-white">
            Texana Bank - NMLS # 407536, is an Equal Housing Lender. Texana Bank is not an agency of the federal government or acting at the direction of HUD/FHA. Programs, rates, terms, and restrictions are subject to change without notice. Underwriting terms and conditions apply.
          </p>
          
          <p>
            This material is not from HUD or FHA and has not been approved by HUD or a government agency. 
            Texana Bank is not affiliated with or endorsed by HUD, FHA, or any government agency. Reverse 
            mortgages are available to homeowners 62 years of age or older. You must live in the home as your 
            primary residence, maintain the property, and pay property taxes and homeowner&apos;s insurance. The loan 
            becomes due when you no longer occupy the home as your primary residence or fail to meet loan obligations. 
            Counseling from a HUD-approved counseling agency is required before obtaining a reverse mortgage. 
            Reverse mortgages are originated through Texana Bank&apos;s network of third-party lenders.
          </p>
          
          <p>
            This information is for educational purposes only and does not constitute an offer to lend. All loan 
            programs are subject to credit approval, income verification, and property evaluation. Interest rates 
            and program terms are subject to change without notice.
          </p>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="pt-6 border-t border-teal-light">
          {/* Copyright and NMLS */}
          <p className="text-gray-300 text-sm text-center">
            Texana Bank, N.A. | NMLS ID #407536 | © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
