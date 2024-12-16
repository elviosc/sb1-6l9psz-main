import { useEffect } from 'react';

interface ScriptConfig {
  src: string;
  id: string;
  async?: boolean;
  defer?: boolean;
}

export function MarketingScripts() {
  useEffect(() => {
    // Google Analytics
    const gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=UA-57446922-1';
    document.head.appendChild(gaScript);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', 'UA-57446922-1');

    // Google Tag Manager
    const gtmScript = document.createElement('script');
    gtmScript.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-WZQBRPW');
    `;
    document.head.appendChild(gtmScript);

    // Cleanup function
    return () => {
      document.head.removeChild(gaScript);
      document.head.removeChild(gtmScript);
    };
  }, []);

  return (
    <noscript>
      <iframe 
        src="https://www.googletagmanager.com/ns.html?id=GTM-WZQBRPW"
        height="0" 
        width="0" 
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  );
}

// Add TypeScript declaration for gtag
declare global {
  interface Window {
    dataLayer: any[];
  }
}
