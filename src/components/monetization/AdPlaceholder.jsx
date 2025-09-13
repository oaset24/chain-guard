
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export default function AdPlaceholder({ size = 'banner', position = 'content', native = false }) {
  const [hasAdConsent, setHasAdConsent] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const preferences = Cookies.get('chainGuard_cookie_preferences');
    if (preferences) {
      const prefs = JSON.parse(preferences);
      setHasAdConsent(prefs.marketing || prefs.performance);
    }
  }, []);

  const getAdDimensions = () => {
    const dimensions = {
      banner: { width: '320px', height: '50px' }, // Mobile banner
      sidebar: { width: '300px', height: '250px' }, // Desktop sidebar
      large: { width: '300px', height: '600px' }, // Large sidebar
      native: { width: '100%', height: 'auto' } // Native ad
    };
    return dimensions[size] || dimensions.banner;
  };

  const getCryptoAds = () => {
    const ads = [
      {
        title: '🔐 Ledger Hardware Wallet',
        description: 'Sicherste Aufbewahrung für Ihre Krypto-Assets',
        cta: 'Jetzt kaufen',
        url: 'https://shop.ledger.com/?r=chainGuard',
        discount: '-20% mit Code CHAINGUARD'
      },
      {
        title: '⚡ Trezor Model T',
        description: 'Premium Hardware Wallet mit Touchscreen',
        cta: 'Mehr erfahren',
        url: 'https://trezor.io/?offer_id=chainGuard',
        discount: 'Kostenloser Versand'
      },
      {
        title: '📊 CoinTracker',
        description: 'Automatisches Krypto Tax-Reporting',
        cta: 'Kostenlos testen',
        url: 'https://www.cointracker.io/?ref=chainGuard',
        discount: '30 Tage gratis'
      },
      {
        title: '🛡️ MetaMask',
        description: 'Der vertrauenswürdigste Web3 Wallet',
        cta: 'Download',
        url: 'https://metamask.io/download/',
        discount: 'Kostenlos'
      }
    ];
    
    return ads[Math.floor(Math.random() * ads.length)];
  };

  const [currentAd] = useState(getCryptoAds());
  const dimensions = getAdDimensions();

  if (!isVisible) return null;

  return (
    <div 
      className={`relative group ${native ? '' : 'flex-shrink-0'}`}
      style={{ width: dimensions.width, height: dimensions.height }}
    >
      {hasAdConsent ? (
        // Real ad placeholder with crypto-relevant content
        <div className={`glass-card p-4 h-full flex flex-col justify-between hover-glow ${
          native ? 'border border-primary/30' : ''
        }`}>
          {!native && (
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-2 right-2 p-1 glass rounded-full text-xs hover-glow text-light/60 hover:text-light z-10"
              title="Werbung schließen"
            >
              ×
            </button>
          )}
          
          <div className="flex-1">
            <h4 className="font-bold text-sm text-primary mb-2 flex items-center gap-2">
              <span className="morph-icon">{currentAd.title.split(' ')[0]}</span>
              {currentAd.title.slice(2)}
            </h4>
            <p className="text-xs text-light/70 mb-3 leading-relaxed">
              {currentAd.description}
            </p>
            {currentAd.discount && (
              <div className="px-2 py-1 bg-success/20 border border-success/30 rounded-full text-xs text-success font-semibold mb-3 inline-block">
                {currentAd.discount}
              </div>
            )}
          </div>
          
          <button
            onClick={() => window.open(currentAd.url, '_blank', 'noopener,noreferrer')}
            className="btn-primary px-3 py-2 text-white text-xs font-bold group/cta w-full"
          >
            <span className="flex items-center justify-center gap-1">
              <span className="morph-icon group-hover/cta:scale-110">🛒</span>
              {currentAd.cta}
            </span>
          </button>
          
          {/* Ad disclosure */}
          <div className="text-xs text-light/40 mt-2 text-center">
            Werbung • Affiliate Link
          </div>
        </div>
      ) : (
        // GDPR-compliant placeholder when no ad consent
        <div className="glass-card p-4 h-full flex flex-col items-center justify-center text-center border border-warning/30">
          <span className="text-2xl morph-icon mb-2">🔒</span>
          <h4 className="text-sm font-semibold text-warning mb-2">
            Werbung deaktiviert
          </h4>
          <p className="text-xs text-light/60 mb-3 leading-relaxed">
            Sie haben keine Einwilligung für Marketing-Cookies erteilt.
          </p>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('openCookieSettings'))}
            className="px-3 py-2 glass hover-glow text-xs font-medium rounded-lg transition-all text-light/80"
          >
            Cookie-Einstellungen
          </button>
        </div>
      )}
      
      {/* Google AdSense placeholder comment */}
      {/* 
        This is where Google AdSense code would be inserted:
        <ins className="adsbygoogle"
             style={{ display: 'block', width: dimensions.width, height: dimensions.height }}
             data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
             data-ad-slot="XXXXXXXXXX"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
      */}
    </div>
  );
}
