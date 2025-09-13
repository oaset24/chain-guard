
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const CONSENT_COOKIE = 'chainGuard_cookie_consent';
const PREFERENCES_COOKIE = 'chainGuard_cookie_preferences';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    performance: false
  });

  useEffect(() => {
    // Check if consent has been given
    const consent = Cookies.get(CONSENT_COOKIE);
    const savedPrefs = Cookies.get(PREFERENCES_COOKIE);

    if (savedPrefs) {
      setPreferences(JSON.parse(savedPrefs));
    }

    if (!consent) {
      // Delay showing banner for better UX
      setTimeout(() => setShowBanner(true), 2000);
    }
  }, []);

  const savePreferences = (prefs = preferences) => {
    const consentData = {
      timestamp: new Date().toISOString(),
      preferences: prefs
    };

    Cookies.set(CONSENT_COOKIE, 'granted', { expires: 365, sameSite: 'Lax' });
    Cookies.set(PREFERENCES_COOKIE, JSON.stringify(prefs), { expires: 365, sameSite: 'Lax' });

    // Remove non-consented cookies
    if (!prefs.analytics) {
      // Clear analytics cookies
      document.cookie.split(";").forEach(cookie => {
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
        if (name.includes('_ga') || name.includes('_gtag')) {
          document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
        }
      });
    }

    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      performance: true
    };
    setPreferences(allAccepted);
    savePreferences(allAccepted);
  };

  const acceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
      performance: false
    };
    setPreferences(necessaryOnly);
    savePreferences(necessaryOnly);
  };

  const handlePreferenceChange = (type) => {
    if (type === 'necessary') return; // Always required
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  if (!showBanner && !showSettings) return null;

  return (
    <>
      {/* Cookie Banner */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 success-animation">
          <div className="max-w-6xl mx-auto">
            <div className="glass-card p-6 border border-secondary/30">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                <div className="flex items-start gap-4 flex-1">
                  <div className="flex-shrink-0">
                    <span className="text-3xl morph-icon">🍪</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-light mb-2 flex items-center gap-2">
                      <span>🔒</span>
                      Ihre Privatsphäre ist uns wichtig
                    </h3>
                    <p className="text-light/80 text-sm leading-relaxed mb-3">
                      Wir verwenden Cookies und ähnliche Technologien, um Ihnen das bestmögliche Erlebnis zu bieten. 
                      Einige sind notwendig für den Betrieb, andere helfen uns bei der Analyse und Verbesserung.
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="px-3 py-1 glass rounded-full text-success border border-success/30">
                        ✅ Notwendige Cookies
                      </span>
                      <span className="px-3 py-1 glass rounded-full text-warning border border-warning/30">
                        📊 Analytics (optional)
                      </span>
                      <span className="px-3 py-1 glass rounded-full text-primary border border-primary/30">
                        📈 Marketing (optional)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 lg:flex-shrink-0">
                  <button
                    onClick={() => setShowSettings(true)}
                    className="px-6 py-3 glass hover-glow text-light font-medium rounded-xl transition-all text-sm group"
                  >
                    <span className="flex items-center gap-2">
                      <span className="morph-icon group-hover:scale-110">⚙️</span>
                      Einstellungen
                    </span>
                  </button>
                  <button
                    onClick={acceptNecessary}
                    className="px-6 py-3 glass hover-glow text-light font-medium rounded-xl transition-all text-sm group border border-light/20"
                  >
                    <span className="flex items-center gap-2">
                      <span className="morph-icon group-hover:scale-110">✋</span>
                      Nur Notwendige
                    </span>
                  </button>
                  <button
                    onClick={acceptAll}
                    className="btn-primary px-6 py-3 text-white font-bold text-sm group"
                  >
                    <span className="flex items-center gap-2">
                      <span className="morph-icon group-hover:scale-110">✅</span>
                      Alle akzeptieren
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cookie Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/80 backdrop-blur-sm">
          <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="glass-card p-8 success-animation">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold gradient-text mb-4 flex items-center justify-center gap-2">
                  <span className="morph-icon">🛡️</span>
                  Cookie-Einstellungen
                </h2>
                <p className="text-light/80 leading-relaxed">
                  Verwalten Sie Ihre Cookie-Präferenzen. Sie können diese jederzeit in den Datenschutzeinstellungen ändern.
                </p>
              </div>

              <div className="space-y-6">
                {/* Necessary Cookies */}
                <div className="glass p-6 rounded-xl">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl morph-icon">🔒</span>
                      <div>
                        <h3 className="text-lg font-semibold text-success">Notwendige Cookies</h3>
                        <p className="text-sm text-light/70">Erforderlich für die Grundfunktionen</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={true}
                        disabled={true}
                        className="sr-only"
                      />
                      <div className="w-12 h-6 bg-success/30 border border-success rounded-full relative">
                        <div className="w-5 h-5 bg-success rounded-full absolute top-0.5 right-0.5 transition-all flex items-center justify-center">
                          <span className="text-xs">✓</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-light/60 leading-relaxed">
                    Diese Cookies sind für das Funktionieren der Website erforderlich und können nicht deaktiviert werden.
                    Dazu gehören Session-Management, Sicherheit und grundlegende Funktionalitäten.
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className="glass p-6 rounded-xl">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl morph-icon">📊</span>
                      <div>
                        <h3 className="text-lg font-semibold text-warning">Analytics-Cookies</h3>
                        <p className="text-sm text-light/70">Helfen uns die Nutzung zu verstehen</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handlePreferenceChange('analytics')}
                      className="flex items-center"
                    >
                      <div className={`w-12 h-6 rounded-full relative transition-all ${
                        preferences.analytics ? 'bg-success/30 border border-success' : 'bg-gray-600/30 border border-gray-600'
                      }`}>
                        <div className={`w-5 h-5 rounded-full absolute top-0.5 transition-all flex items-center justify-center ${
                          preferences.analytics 
                            ? 'right-0.5 bg-success' 
                            : 'left-0.5 bg-gray-400'
                        }`}>
                          <span className="text-xs">{preferences.analytics ? '✓' : '×'}</span>
                        </div>
                      </div>
                    </button>
                  </div>
                  <p className="text-xs text-light/60 leading-relaxed">
                    Sammeln anonymisierte Daten über Website-Nutzung, Besucherzahlen und Verweildauer.
                    Keine personenbezogenen Daten werden gespeichert.
                  </p>
                </div>

                {/* Marketing Cookies */}
                <div className="glass p-6 rounded-xl">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl morph-icon">📈</span>
                      <div>
                        <h3 className="text-lg font-semibold text-primary">Marketing-Cookies</h3>
                        <p className="text-sm text-light/70">Für personalisierte Werbung</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handlePreferenceChange('marketing')}
                      className="flex items-center"
                    >
                      <div className={`w-12 h-6 rounded-full relative transition-all ${
                        preferences.marketing ? 'bg-success/30 border border-success' : 'bg-gray-600/30 border border-gray-600'
                      }`}>
                        <div className={`w-5 h-5 rounded-full absolute top-0.5 transition-all flex items-center justify-center ${
                          preferences.marketing 
                            ? 'right-0.5 bg-success' 
                            : 'left-0.5 bg-gray-400'
                        }`}>
                          <span className="text-xs">{preferences.marketing ? '✓' : '×'}</span>
                        </div>
                      </div>
                    </button>
                  </div>
                  <p className="text-xs text-light/60 leading-relaxed">
                    Ermöglichen die Anzeige relevanter Werbung und das Tracking von Werbekampagnen-Effektivität.
                  </p>
                </div>

                {/* Performance Cookies */}
                <div className="glass p-6 rounded-xl">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl morph-icon">⚡</span>
                      <div>
                        <h3 className="text-lg font-semibold text-secondary">Performance-Cookies</h3>
                        <p className="text-sm text-light/70">Optimieren die Ladezeiten</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handlePreferenceChange('performance')}
                      className="flex items-center"
                    >
                      <div className={`w-12 h-6 rounded-full relative transition-all ${
                        preferences.performance ? 'bg-success/30 border border-success' : 'bg-gray-600/30 border border-gray-600'
                      }`}>
                        <div className={`w-5 h-5 rounded-full absolute top-0.5 transition-all flex items-center justify-center ${
                          preferences.performance 
                            ? 'right-0.5 bg-success' 
                            : 'left-0.5 bg-gray-400'
                        }`}>
                          <span className="text-xs">{preferences.performance ? '✓' : '×'}</span>
                        </div>
                      </div>
                    </button>
                  </div>
                  <p className="text-xs text-light/60 leading-relaxed">
                    Speichern Präferenzen und Optimierungen für bessere Performance und Benutzererfahrung.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-light/10">
                <button
                  onClick={() => setShowSettings(false)}
                  className="flex-1 px-6 py-3 glass hover-glow text-light font-medium rounded-xl transition-all group"
                >
                  <span className="flex items-center justify-center gap-2">
                    <span className="morph-icon group-hover:scale-110">❌</span>
                    Abbrechen
                  </span>
                </button>
                <button
                  onClick={() => savePreferences()}
                  className="flex-1 btn-primary px-6 py-3 text-white font-bold group"
                >
                  <span className="flex items-center justify-center gap-2">
                    <span className="morph-icon group-hover:scale-110">💾</span>
                    Einstellungen speichern
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
