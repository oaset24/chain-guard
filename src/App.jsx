
import { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import AddressChecker from "./components/AddressChecker";
import DonationWidget from "./components/monetization/DonationWidget";
import AdPlaceholder from "./components/monetization/AdPlaceholder";
import CookieConsent from "./components/gdpr/CookieConsent";
import PrivacyDashboard from "./components/gdpr/PrivacyDashboard";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Imprint from "./pages/Imprint";
import CookiePolicy from "./pages/CookiePolicy";
import TermsOfService from "./pages/TermsOfService";
import "./App.css";

function App() {
  const [showAbout, setShowAbout] = useState(false);
  const location = useLocation();

  // Listen for cookie settings events
  useEffect(() => {
    const handleOpenCookieSettings = () => {
      // This would open cookie settings modal
      window.dispatchEvent(new CustomEvent('openCookieModal'));
    };

    window.addEventListener('openCookieSettings', handleOpenCookieSettings);
    return () => window.removeEventListener('openCookieSettings', handleOpenCookieSettings);
  }, []);

  const isMainPage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-gray-900 to-dark bg-mesh-pattern relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(74,111,165,0.2),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(201,162,39,0.15),transparent_50%),radial-gradient(circle_at_40%_90%,rgba(224,122,95,0.1),transparent_50%)] pointer-events-none"></div>
      
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl float"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-br from-accent/10 to-success/10 rounded-full blur-2xl float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-gradient-to-br from-violet/10 to-warning/10 rounded-full blur-2xl float" style={{ animationDelay: "4s" }}></div>
      </div>
      
      {/* Navigation with Glass Effect */}
      <nav className="relative z-10 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card p-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Link to="/" className="flex items-center gap-3 hover-glow p-2 rounded-lg transition-all">
                  <span className="text-3xl morph-icon">🛡️</span>
                  <span className="gradient-text font-bold text-2xl">ChainGuard Pro</span>
                </Link>
              </div>
              <div className="flex items-center gap-4">
                {isMainPage ? (
                  <button
                    onClick={() => setShowAbout(!showAbout)}
                    className="px-6 py-2 glass rounded-xl text-light/90 hover:text-light hover-glow transition text-sm font-medium group"
                  >
                    <span className="flex items-center gap-2">
                      <span className="morph-icon group-hover:scale-110">
                        {showAbout ? "←" : "ℹ️"}
                      </span>
                      {showAbout ? "Zurück" : "Info"}
                    </span>
                  </button>
                ) : (
                  <Link
                    to="/"
                    className="px-6 py-2 glass rounded-xl text-light/90 hover:text-light hover-glow transition text-sm font-medium group"
                  >
                    <span className="flex items-center gap-2">
                      <span className="morph-icon group-hover:scale-110">🏠</span>
                      Home
                    </span>
                  </Link>
                )}
                
                <Link
                  to="/privacy-dashboard"
                  className="px-6 py-2 glass rounded-xl text-light/90 hover:text-light hover-glow transition text-sm font-medium group"
                >
                  <span className="flex items-center gap-2">
                    <span className="morph-icon group-hover:scale-110">🛡️</span>
                    Datenschutz
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={
            <div className="flex min-h-[calc(100vh-200px)]">
              {/* Desktop Sidebar Ad */}
              <div className="hidden lg:block w-80 p-4">
                <div className="sticky top-24">
                  <AdPlaceholder size="sidebar" position="sidebar" />
                  <div className="mt-4">
                    <AdPlaceholder size="large" position="sidebar" />
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 flex items-center justify-center p-4">
                <div className="w-full max-w-4xl">
                  {!showAbout ? (
                    <div className="space-y-6">
                      {/* Mobile Banner Ad */}
                      <div className="lg:hidden">
                        <AdPlaceholder size="banner" position="top" />
                      </div>
                      
                      <AddressChecker />
                      
                      {/* Native Ad after successful check - would be shown conditionally */}
                      <AdPlaceholder size="native" position="content" native={true} />
                      
                      <DonationWidget />
                    </div>
                  ) : (
                    <AboutSection onClose={() => setShowAbout(false)} />
                  )}
                </div>
              </div>

              {/* Right Sidebar Ad (Desktop) */}
              <div className="hidden xl:block w-80 p-4">
                <div className="sticky top-24">
                  <AdPlaceholder size="sidebar" position="right-sidebar" />
                </div>
              </div>
            </div>
          } />
          <Route path="/privacy-dashboard" element={<PrivacyDashboard />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/imprint" element={<Imprint />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>
      </main>

      {/* Enhanced Footer */}
      <footer className="relative z-10 p-6 mt-12">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card p-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Brand Info */}
              <div className="flex flex-col items-center lg:items-start gap-4">
                <div className="flex items-center gap-6 text-light/80 text-sm">
                  <span className="flex items-center gap-2">
                    <span className="morph-icon text-success">🔒</span>
                    Privacy First
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="morph-icon text-primary">⚡</span>
                    Open Source
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="morph-icon text-secondary">🌐</span>
                    Dezentralisiert
                  </span>
                </div>
                <div className="flex justify-center lg:justify-start gap-3 flex-wrap">
                  <div className="px-3 py-1 glass rounded-full text-primary text-xs font-medium hover-glow cursor-default">
                    <span className="morph-icon inline-block mr-1">🔗</span>
                    Alchemy API
                  </div>
                  <div className="px-3 py-1 glass rounded-full text-secondary text-xs font-medium hover-glow cursor-default">
                    <span className="morph-icon inline-block mr-1">⚙️</span>
                    Ethers.js
                  </div>
                  <div className="px-3 py-1 glass rounded-full text-accent text-xs font-medium hover-glow cursor-default">
                    <span className="morph-icon inline-block mr-1">⚛️</span>
                    React + Vite
                  </div>
                </div>
              </div>

              {/* Legal Links */}
              <div className="flex flex-col items-center lg:items-end gap-4">
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <Link 
                    to="/privacy-policy"
                    className="text-light/70 hover:text-primary transition-colors hover-glow px-2 py-1 rounded"
                  >
                    Datenschutz
                  </Link>
                  <Link 
                    to="/cookie-policy"
                    className="text-light/70 hover:text-secondary transition-colors hover-glow px-2 py-1 rounded"
                  >
                    Cookies
                  </Link>
                  <Link 
                    to="/terms"
                    className="text-light/70 hover:text-accent transition-colors hover-glow px-2 py-1 rounded"
                  >
                    AGB
                  </Link>
                  <Link 
                    to="/imprint"
                    className="text-light/70 hover:text-warning transition-colors hover-glow px-2 py-1 rounded"
                  >
                    Impressum
                  </Link>
                </div>
                <div className="text-xs text-light/60 text-center lg:text-right">
                  © 2024 ChainGuard GmbH • Berlin, Deutschland
                  <br />
                  Made with ❤️ for the Web3 Community
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* GDPR Cookie Consent */}
      <CookieConsent />
    </div>
  );
}

function AboutSection({ onClose }) {
  const features = [
    {
      icon: "🌐",
      title: "Multi-Chain Support",
      description: "Ethereum, BNB Chain, Polygon, Arbitrum, Optimism & Avalanche"
    },
    {
      icon: "⚡",
      title: "Alchemy Integration", 
      description: "Professionelle RPC-Endpoints für zuverlässige Daten"
    },
    {
      icon: "🛡️",
      title: "Sicherheitswarnungen",
      description: "Intelligente Alerts bei Multi-Chain Aktivitäten"
    },
    {
      icon: "📊",
      title: "Detaillierte Analyse",
      description: "Balance, TX-Count, Token-Standards & Explorer-Links"
    },
    {
      icon: "📋",
      title: "Copy-to-Clipboard",
      description: "Einfaches Kopieren von Adressen und Daten"
    },
    {
      icon: "📱",
      title: "PWA Ready",
      description: "Installierbar als Progressive Web App"
    },
    {
      icon: "🔒",
      title: "DSGVO-konform",
      description: "Vollständige Datenschutz-Compliance"
    },
    {
      icon: "☕",
      title: "Community-finanziert",
      description: "Unterstützt durch Spenden der Community"
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto glass-card p-8 success-animation">
      <div className="text-center mb-8">
        <h2 className="text-5xl font-bold gradient-text mb-4 float">
          Über ChainGuard Pro
        </h2>
        <p className="text-light/80 text-lg max-w-2xl mx-auto leading-relaxed">
          Die professionelle, DSGVO-konforme Lösung für Multi-Chain Wallet-Adress-Validierung und Netzwerk-Erkennung
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="glass-card p-6 card-hover group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="text-4xl mb-4 morph-icon group-hover:scale-110">{feature.icon}</div>
            <h3 className="text-secondary font-semibold mb-3 text-lg group-hover:text-primary transition-colors">
              {feature.title}
            </h3>
            <p className="text-light/70 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      <div className="glass rounded-2xl p-6 text-center mb-8 hover-glow">
        <h3 className="text-light font-semibold mb-4 text-lg flex items-center justify-center gap-2">
          <span className="morph-icon text-2xl">🚀</span>
          Unterstützte Netzwerke
        </h3>
        <div className="flex flex-wrap justify-center gap-3 text-sm">
          {["Ethereum", "BNB Chain", "Polygon", "Arbitrum", "Optimism", "Avalanche"].map((network, index) => (
            <span 
              key={index}
              className="px-4 py-2 glass rounded-full hover-glow transition-all duration-300 cursor-default font-medium text-light/90"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {network}
            </span>
          ))}
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={onClose}
          className="btn-primary px-8 py-4 text-white font-bold text-lg group"
        >
          <span className="flex items-center gap-2">
            <span className="morph-icon group-hover:scale-110">🛡️</span>
            Zurück zum Checker
          </span>
        </button>
      </div>
    </div>
  );
}

export default App;
