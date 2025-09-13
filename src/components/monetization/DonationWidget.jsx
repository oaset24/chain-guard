
import { useState } from 'react';
import QRCode from 'react-qr-code';

const CRYPTO_ADDRESSES = {
  ETH: '0x742d35Cc6634C0532925a3b8D0Ac6d99c9ebe1B8',
  BTC: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
  USDC: '0x742d35Cc6634C0532925a3b8D0Ac6d99c9ebe1B8',
  BNB: '0x742d35Cc6634C0532925a3b8D0Ac6d99c9ebe1B8',
  MATIC: '0x742d35Cc6634C0532925a3b8D0Ac6d99c9ebe1B8',
  ARB: '0x742d35Cc6634C0532925a3b8D0Ac6d99c9ebe1B8',
  OP: '0x742d35Cc6634C0532925a3b8D0Ac6d99c9ebe1B8'
};

const SUGGESTED_AMOUNTS = [
  { label: 'Coffee ☕', value: '$1', eth: '0.0003' },
  { label: 'Lunch 🥪', value: '$5', eth: '0.0015' },
  { label: 'Dinner 🍕', value: '$10', eth: '0.003' },
  { label: 'Support 💪', value: '$25', eth: '0.0075' }
];

export default function DonationWidget() {
  const [selectedCrypto, setSelectedCrypto] = useState('ETH');
  const [showQR, setShowQR] = useState(false);
  const [copied, setCopied] = useState(false);
  const [supporterCount] = useState(1337); // Mock supporter count
  const [showThankYou, setShowThankYou] = useState(false);

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(CRYPTO_ADDRESSES[selectedCrypto]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleDonation = (amount) => {
    setShowThankYou(true);
    setTimeout(() => setShowThankYou(false), 3000);
    
    // Increment supporter count (mock)
    // In real app, this would be handled by backend
  };

  const getCryptoIcon = (crypto) => {
    const icons = {
      ETH: '⟠',
      BTC: '₿',
      USDC: '💵',
      BNB: '🟡',
      MATIC: '💜',
      ARB: '🔵',
      OP: '🔴'
    };
    return icons[crypto] || '💰';
  };

  return (
    <div className="glass-card p-6 mb-8 card-hover border border-secondary/30">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="text-3xl morph-icon">☕</span>
          <h3 className="text-xl font-bold gradient-text">Unterstützen Sie ChainGuard</h3>
        </div>
        <p className="text-light/70 text-sm">
          Helfen Sie uns, das Tool zu verbessern und kostenlos zu halten
        </p>
        <div className="flex items-center justify-center gap-2 mt-2 text-xs text-light/60">
          <span className="morph-icon text-success">👥</span>
          <span>{supporterCount.toLocaleString()} Unterstützer</span>
        </div>
      </div>

      {/* Crypto Selection */}
      <div className="mb-6">
        <p className="text-sm text-light/70 mb-3 text-center">Wählen Sie Ihre bevorzugte Kryptowährung:</p>
        <div className="flex flex-wrap justify-center gap-2">
          {Object.keys(CRYPTO_ADDRESSES).map((crypto) => (
            <button
              key={crypto}
              onClick={() => setSelectedCrypto(crypto)}
              className={`px-4 py-2 rounded-xl font-medium text-sm transition-all ${
                selectedCrypto === crypto
                  ? 'btn-primary text-white'
                  : 'glass hover-glow text-light/80'
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="morph-icon">{getCryptoIcon(crypto)}</span>
                {crypto}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Suggested Amounts */}
      <div className="mb-6">
        <p className="text-sm text-light/70 mb-3 text-center">Schnelle Auswahl:</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {SUGGESTED_AMOUNTS.map((amount, index) => (
            <button
              key={index}
              onClick={() => handleDonation(amount.value)}
              className="glass p-3 hover-glow text-center rounded-xl transition-all group"
            >
              <div className="text-lg mb-1">{amount.label}</div>
              <div className="text-secondary font-semibold text-sm">{amount.value}</div>
              <div className="text-xs text-light/60 mt-1">≈ {amount.eth} ETH</div>
            </button>
          ))}
        </div>
      </div>

      {/* Address Display */}
      <div className="glass p-4 rounded-xl mb-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-light/70 flex items-center gap-2">
            <span className="morph-icon">{getCryptoIcon(selectedCrypto)}</span>
            {selectedCrypto} Adresse:
          </span>
          <button
            onClick={() => setShowQR(!showQR)}
            className="p-2 glass rounded-lg hover-glow transition-all group"
            title="QR-Code anzeigen"
          >
            <span className="morph-icon text-primary group-hover:scale-110">
              {showQR ? '📱' : '📋'}
            </span>
          </button>
        </div>
        <div className="font-mono text-xs bg-dark/30 p-3 rounded-lg break-all text-light/90 border border-light/10">
          {CRYPTO_ADDRESSES[selectedCrypto]}
        </div>
      </div>

      {/* QR Code */}
      {showQR && (
        <div className="glass p-4 rounded-xl mb-4 text-center success-animation">
          <p className="text-sm text-light/70 mb-3">Scannen Sie den QR-Code mit Ihrer Wallet:</p>
          <div className="flex justify-center mb-3">
            <div className="p-4 bg-white rounded-xl">
              <QRCode 
                value={CRYPTO_ADDRESSES[selectedCrypto]} 
                size={150}
                level="H"
              />
            </div>
          </div>
          <p className="text-xs text-light/60">
            Network: {selectedCrypto === 'BTC' ? 'Bitcoin' : 'Ethereum/EVM'}
          </p>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button
          onClick={copyAddress}
          className="flex-1 px-4 py-3 glass hover-glow text-light font-medium rounded-xl transition-all group"
        >
          <span className="flex items-center justify-center gap-2">
            <span className="morph-icon group-hover:scale-110">
              {copied ? '✅' : '📋'}
            </span>
            {copied ? 'Kopiert!' : 'Adresse kopieren'}
          </span>
        </button>
        <button
          onClick={() => window.open('https://www.buymeacoffee.com/chainGuard', '_blank')}
          className="flex-1 btn-primary px-4 py-3 text-white font-bold group"
        >
          <span className="flex items-center justify-center gap-2">
            <span className="morph-icon group-hover:scale-110">☕</span>
            Buy me a Coffee
          </span>
        </button>
      </div>

      {/* Thank You Animation */}
      {showThankYou && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
          <div className="glass-card p-8 text-center success-animation">
            <div className="text-6xl mb-4 morph-icon float">🙏</div>
            <h3 className="text-2xl font-bold gradient-text mb-2">Vielen Dank!</h3>
            <p className="text-light/80">Ihre Unterstützung bedeutet uns sehr viel!</p>
          </div>
        </div>
      )}

      {/* Supporter Hall of Fame */}
      <div className="mt-6 pt-4 border-t border-light/10">
        <p className="text-xs text-light/60 text-center mb-3">🏆 Unterstützer Hall of Fame</p>
        <div className="flex justify-center gap-2 flex-wrap">
          {['🥇 Anonymous', '🥈 CryptoFan', '🥉 Web3Dev', '💎 HODLer'].map((supporter, index) => (
            <span
              key={index}
              className="px-2 py-1 glass rounded-full text-xs font-medium hover-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {supporter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
