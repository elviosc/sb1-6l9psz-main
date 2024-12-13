import { useEffect } from 'react';

export function MarketingScripts() {
  useEffect(() => {
    // Google Analytics (UA)
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

    // Google Analytics (GA4)
    const ga4Script = document.createElement('script');
    ga4Script.async = true;
    ga4Script.src = 'https://www.googletagmanager.com/gtag/js?id=G-NTVL8TMECV';
    document.head.appendChild(ga4Script);
    gtag('config', 'G-NTVL8TMECV');

    // Google Tag Manager
    (function(w,d,s,l,i){
      w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
      var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
      j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
      f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-WZQBRPW');

    // Additional GTM
    (function(w,d,s,l,i){
      w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
      var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
      j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
      f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-KTFFF72J');

    (function(w,d,s,l,i){
      w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
      var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
      j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
      f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-PQ94334D');

    // Microsoft Clarity
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "hg9hl0450n");

    // AdOpt
    const adoptMeta = document.createElement('meta');
    adoptMeta.name = 'adopt-website-id';
    adoptMeta.content = '56360db1-696d-4fd3-b8a0-0988d8150ff1';
    document.head.appendChild(adoptMeta);

    const adoptScript = document.createElement('script');
    adoptScript.src = '//tag.goadopt.io/injector.js?website_code=56360db1-696d-4fd3-b8a0-0988d8150ff1';
    adoptScript.className = 'adopt-injector';
    document.head.appendChild(adoptScript);

    // Cleanup function
    return () => {
      document.head.removeChild(gaScript);
      document.head.removeChild(ga4Script);
      document.head.removeChild(adoptMeta);
      document.head.removeChild(adoptScript);
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe 
          src="https://www.googletagmanager.com/ns.html?id=GTM-WZQBRPW"
          height="0" 
          width="0" 
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
      <noscript>
        <iframe 
          src="https://www.googletagmanager.com/ns.html?id=GTM-KTFFF72J"
          height="0" 
          width="0" 
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
      <noscript>
        <iframe 
          src="https://www.googletagmanager.com/ns.html?id=GTM-PQ94334D"
          height="0" 
          width="0" 
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  );
}
