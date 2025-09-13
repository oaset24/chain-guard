
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export default function PrivacyDashboard() {
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    performance: false
  });
  const [showDataExport, setShowDataExport] = useState(false);
  const [exportData, setExportData] = useState(null);

  useEffect(() => {
    const savedPrefs = Cookies.get('chainGuard_cookie_preferences');
    if (savedPrefs) {
      setPreferences(JSON.parse(savedPrefs));
    }
  }, []);

  const updatePreferences = (type) => {
    if (type === 'necessary') return;
    
    const newPrefs = {
      ...preferences,
      [type]: !preferences[type]
    };
    
    setPreferences(newPrefs);
    Cookies.set('chainGuard_cookie_preferences', JSON.stringify(newPrefs), { expires: 365, sameSite: 'Lax' });
    
    // Clear cookies if disabled
    if (!newPrefs[type]) {
      document.cookie.split(";").forEach(cookie => {
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
        if (type === 'analytics' && (name.includes('_ga') || name.includes('_gtag'))) {
          document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
        }
      });
    }
  };

  const exportUserData = () => {
    const userData = {
      timestamp: new Date().toISOString(),
      cookiePreferences: preferences,
      storedData: {
        localStorage: Object.keys(localStorage).filter(key => key.includes('chainGuard')),
        cookies: document.cookie.split(';').filter(cookie => cookie.includes('chainGuard'))
      },
      browserInfo: {
        userAgent: navigator.userAgent,
        language: navigator.language,
        platform: navigator.platform
      }
    };
    
    setExportData(userData);
    setShowDataExport(true);
  };

  const deleteAllData = () => {
    if (confirm('Sind Sie sicher, dass Sie alle Daten löschen möchten? Diese Aktion kann nicht rückgängig gemacht werden.')) {
      // Clear all cookies
      document.cookie.split(";").forEach(cookie => {
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
        if (name.includes('chainGuard')) {
          document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
        }
      });
      
      // Clear localStorage
      Object.keys(localStorage).forEach(key => {
        if (key.includes('chainGuard')) {
          localStorage.removeItem(key);
        }
      });
      
      alert('Alle Daten wurden gelöscht.');
      window.location.reload();
    }
  };

  const downloadData = () => {
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `chainGuard_data_export_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-gray-900 to-dark bg-mesh-pattern relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(74,111,165,0.2),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(201,162,39,0.15),transparent_50%)] pointer-events-none"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold gradient-text mb-4 flex items-center justify-center gap-3">
              <span className="morph-icon">🛡️</span>
              Datenschutz-Dashboard
            </h1>
            <p className="text-light/80 text-lg max-w-2xl mx-auto">
              Verwalten Sie Ihre Datenschutzeinstellungen und üben Sie Ihre DSGVO-Rechte aus
            </p>
          </div>

          {/* Cookie Preferences */}
          <div className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-bold text-light mb-6 flex items-center gap-2">
              <span className="morph-icon">🍪</span>
              Cookie-Einstellungen
            </h2>
            
            <div className="grid gap-6">
              {[
                { key: 'necessary', icon: '🔒', title: 'Notwendige Cookies', description: 'Erforderlich für Grundfunktionen', disabled: true, color: 'success' },
                { key: 'analytics', icon: '📊', title: 'Analytics-Cookies', description: 'Anonymisierte Nutzungsstatistiken', disabled: false, color: 'warning' },
                { key: 'marketing', icon: '📈', title: 'Marketing-Cookies', description: 'Personalisierte Werbung', disabled: false, color: 'primary' },
                { key: 'performance', icon: '⚡', title: 'Performance-Cookies', description: 'Optimierte Ladezeiten', disabled: false, color: 'secondary' }
              ].map(({ key, icon, title, description, disabled, color }) => (
                <div key={key} className="glass p-4 rounded-xl">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-xl morph-icon">{icon}</span>
                      <div>
                        <h3 className={`font-semibold text-${color}`}>{title}</h3>
                        <p className="text-sm text-light/70">{description}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => updatePreferences(key)}
                      disabled={disabled}
                      className="flex items-center"
                    >
                      <div className={`w-12 h-6 rounded-full relative transition-all ${
                        preferences[key] ? `bg-${color}/30 border border-${color}` : 'bg-gray-600/30 border border-gray-600'
                      } ${disabled ? 'opacity-75' : ''}`}>
                        <div className={`w-5 h-5 rounded-full absolute top-0.5 transition-all flex items-center justify-center ${
                          preferences[key] 
                            ? `right-0.5 bg-${color}` 
                            : 'left-0.5 bg-gray-400'
                        }`}>
                          <span className="text-xs">{preferences[key] ? '✓' : '×'}</span>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* GDPR Rights */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold text-light mb-6 flex items-center gap-2">
              <span className="morph-icon">⚖️</span>
              Ihre DSGVO-Rechte
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Data Export */}
              <div className="glass p-6 rounded-xl card-hover">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl morph-icon">📥</span>
                  <h3 className="text-lg font-semibold text-primary">Datenexport</h3>
                </div>
                <p className="text-light/70 text-sm mb-4 leading-relaxed">
                  Laden Sie alle über Sie gespeicherten Daten in einem strukturierten, gängigen Format herunter.
                </p>
                <button
                  onClick={exportUserData}
                  className="w-full btn-primary px-4 py-3 text-white font-medium group"
                >
                  <span className="flex items-center justify-center gap-2">
                    <span className="morph-icon group-hover:scale-110">📊</span>
                    Daten exportieren
                  </span>
                </button>
              </div>

              {/* Data Deletion */}
              <div className="glass p-6 rounded-xl card-hover">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl morph-icon">🗑️</span>
                  <h3 className="text-lg font-semibold text-danger">Datenlöschung</h3>
                </div>
                <p className="text-light/70 text-sm mb-4 leading-relaxed">
                  Löschen Sie alle gespeicherten Daten permanent. Diese Aktion kann nicht rückgängig gemacht werden.
                </p>
                <button
                  onClick={deleteAllData}
                  className="w-full px-4 py-3 bg-danger/20 border border-danger text-danger font-medium rounded-xl hover:bg-danger/30 transition-all group"
                >
                  <span className="flex items-center justify-center gap-2">
                    <span className="morph-icon group-hover:scale-110">❌</span>
                    Alle Daten löschen
                  </span>
                </button>
              </div>

              {/* Data Portability */}
              <div className="glass p-6 rounded-xl card-hover">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl morph-icon">📤</span>
                  <h3 className="text-lg font-semibold text-secondary">Datenübertragung</h3>
                </div>
                <p className="text-light/70 text-sm mb-4 leading-relaxed">
                  Recht auf Datenübertragbarkeit - erhalten Sie Ihre Daten in einem maschinenlesbaren Format.
                </p>
                <button
                  onClick={() => alert('Kontaktieren Sie uns für die Datenübertragung: privacy@chainGuard.com')}
                  className="w-full px-4 py-3 glass hover-glow text-light font-medium rounded-xl transition-all group"
                >
                  <span className="flex items-center justify-center gap-2">
                    <span className="morph-icon group-hover:scale-110">📮</span>
                    Anfrage stellen
                  </span>
                </button>
              </div>

              {/* Contact */}
              <div className="glass p-6 rounded-xl card-hover">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl morph-icon">📞</span>
                  <h3 className="text-lg font-semibold text-accent">Datenschutzbeauftragter</h3>
                </div>
                <p className="text-light/70 text-sm mb-4 leading-relaxed">
                  Haben Sie Fragen zum Datenschutz? Kontaktieren Sie unseren Datenschutzbeauftragten.
                </p>
                <button
                  onClick={() => window.open('mailto:privacy@chainGuard.com', '_blank')}
                  className="w-full px-4 py-3 glass hover-glow text-light font-medium rounded-xl transition-all group"
                >
                  <span className="flex items-center justify-center gap-2">
                    <span className="morph-icon group-hover:scale-110">✉️</span>
                    Kontakt aufnehmen
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Data Export Modal */}
      {showDataExport && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/80 backdrop-blur-sm">
          <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="glass-card p-8 success-animation">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold gradient-text mb-2 flex items-center justify-center gap-2">
                  <span className="morph-icon">📊</span>
                  Datenexport
                </h2>
                <p className="text-light/70">Ihre gesammelten Daten sind bereit zum Download</p>
              </div>

              <div className="glass p-4 rounded-xl mb-6 max-h-60 overflow-y-auto">
                <pre className="text-xs text-light/80 font-mono">
                  {JSON.stringify(exportData, null, 2)}
                </pre>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setShowDataExport(false)}
                  className="flex-1 px-6 py-3 glass hover-glow text-light font-medium rounded-xl transition-all group"
                >
                  <span className="flex items-center justify-center gap-2">
                    <span className="morph-icon group-hover:scale-110">❌</span>
                    Schließen
                  </span>
                </button>
                <button
                  onClick={downloadData}
                  className="flex-1 btn-primary px-6 py-3 text-white font-bold group"
                >
                  <span className="flex items-center justify-center gap-2">
                    <span className="morph-icon group-hover:scale-110">💾</span>
                    Download
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
