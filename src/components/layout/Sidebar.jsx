
import AdPlaceholder from '../monetization/AdPlaceholder';

export default function Sidebar({ position = 'left' }) {
  return (
    <aside className={`hidden lg:block w-80 p-4 ${position === 'right' ? 'order-3' : 'order-1'}`}>
      <div className="sticky top-24 space-y-4">
        {/* Ad Spaces */}
        <AdPlaceholder size="sidebar" position={`${position}-sidebar`} />
        
        {position === 'left' && (
          <AdPlaceholder size="large" position={`${position}-sidebar`} />
        )}

        {/* Helpful Links for SEO and User Engagement */}
        <div className="glass-card p-6">
          <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
            <span className="morph-icon">📚</span>
            Nützliche Links
          </h3>
          <div className="space-y-3">
            {[
              {
                title: "Ethereum Wallet Guide",
                url: "https://ethereum.org/en/wallets/",
                desc: "Offizieller Wallet-Guide"
              },
              {
                title: "DeFi Safety Guide",
                url: "https://defisafety.com/",
                desc: "DeFi Sicherheits-Ressourcen"
              },
              {
                title: "Blockchain Explorers",
                url: "https://etherscan.io",
                desc: "Block Explorer Links"
              }
            ].map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 glass rounded-lg hover-glow transition-all group text-sm"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="morph-icon group-hover:scale-110">🔗</span>
                  <span className="font-semibold text-secondary group-hover:text-primary">
                    {link.title}
                  </span>
                </div>
                <p className="text-xs text-light/60">{link.desc}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="glass-card p-6">
          <h3 className="text-lg font-bold text-secondary mb-4 flex items-center gap-2">
            <span className="morph-icon">📊</span>
            Statistiken
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-light/70">Unterstützte Chains:</span>
              <span className="font-bold text-success">6+</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-light/70">Checks heute:</span>
              <span className="font-bold text-primary">1,337</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-light/70">Uptime:</span>
              <span className="font-bold text-success">99.5%</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
