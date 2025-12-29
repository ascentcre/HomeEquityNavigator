'use client';

import { useEffect } from 'react';

export default function HubSpotForm() {
  const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
  const formId = process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID;

  useEffect(() => {
    // Validate environment variables
    if (!portalId || !formId) {
      console.error('HubSpot environment variables are not configured. Please set NEXT_PUBLIC_HUBSPOT_PORTAL_ID and NEXT_PUBLIC_HUBSPOT_FORM_ID in your environment variables.');
      return;
    }

    // Load HubSpot script if not already loaded
    const scriptId = 'hs-form-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = `https://js-na2.hsforms.net/forms/embed/${portalId}.js`;
      script.defer = true;
      document.body.appendChild(script);
    }

    // Apply accessibility enhancements after form loads
    const applyAccessibilityStyles = () => {
      const formFrame = document.querySelector('.hs-form-frame');
      if (formFrame) {
        // Use MutationObserver to watch for form content changes
        const observer = new MutationObserver(() => {
          const inputs = formFrame.querySelectorAll('input, textarea, select, button');
          inputs.forEach((input) => {
            // Ensure minimum font size for accessibility
            const computedStyle = window.getComputedStyle(input);
            const fontSize = parseInt(computedStyle.fontSize);
            if (fontSize < 16) {
              input.style.fontSize = '16px';
            }
            
            // Ensure adequate color contrast
            if (!input.style.color || input.style.color === 'rgb(0, 0, 0)') {
              input.style.color = '#004a4c';
            }
            
            // Ensure buttons meet minimum touch target size
            if (input.tagName === 'BUTTON' || input.type === 'submit') {
              input.style.minHeight = '48px';
              if (input.style.paddingTop && parseInt(input.style.paddingTop) < 12) {
                input.style.paddingTop = '12px';
              }
              if (input.style.paddingBottom && parseInt(input.style.paddingBottom) < 12) {
                input.style.paddingBottom = '12px';
              }
            }
          });
        });

        observer.observe(formFrame, {
          childList: true,
          subtree: true
        });

        // Also apply styles immediately after a short delay
        setTimeout(() => {
          const inputs = formFrame.querySelectorAll('input, textarea, select, button');
          inputs.forEach((input) => {
            input.style.fontSize = '16px';
            input.style.color = '#004a4c';
            if (input.tagName === 'BUTTON' || input.type === 'submit') {
              input.style.minHeight = '48px';
            }
          });
        }, 500);

        return () => observer.disconnect();
      }
    };

    // Apply styles when form frame appears
    const checkInterval = setInterval(() => {
      if (document.querySelector('.hs-form-frame')) {
        applyAccessibilityStyles();
        clearInterval(checkInterval);
      }
    }, 100);

    // Cleanup interval after 10 seconds
    setTimeout(() => clearInterval(checkInterval), 10000);
  }, [portalId, formId]);

  // Show error message if environment variables are missing
  if (!portalId || !formId) {
    return (
      <div className="w-full p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-sm text-yellow-800">
          HubSpot form configuration is missing. Please configure NEXT_PUBLIC_HUBSPOT_PORTAL_ID and NEXT_PUBLIC_HUBSPOT_FORM_ID environment variables.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div 
        className="hs-form-frame" 
        data-region="na2" 
        data-form-id={formId}
        data-portal-id={portalId}
      />
    </div>
  );
}

