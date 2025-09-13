
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { CHAINS } from "../networks";
import NetworkCard from "./NetworkCard";
import SecurityAlert from "./SecurityAlert";
import LoadingSpinner from "./LoadingSpinner";

export default function AddressChecker() {
  const [address, setAddress] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  // Copy to clipboard functionality
  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const validateAndCheckAddress = async () => {
    setError("");
    setResults([]);

    if (!address.trim()) {
      setError("❌ Bitte geben Sie eine Wallet-Adresse ein.");
      return;
    }

    if (!ethers.isAddress(address)) {
      setError("❌ Ungültige Adresse. Bitte geben Sie eine gültige 0x... EVM-Adresse ein.");
      return;
    }

    setLoading(true);
    const findings = [];

    // Check all chains in parallel for better performance
    const promises = CHAINS.map(async (chain) => {
      try {
        const provider = new ethers.JsonRpcProvider(chain.rpc, {
          chainId: chain.id,
          name: chain.name
        });

        // Set timeout for provider requests
        provider._networkPromise = Promise.resolve({
          chainId: chain.id,
          name: chain.name
        });

        const [balance, txCount] = await Promise.all([
          provider.getBalance(address),
          provider.getTransactionCount(address)
        ]);

        return {
          chain: chain.name,
          symbol: chain.symbol,
          testnet: chain.testnet || false,
          balance: ethers.formatEther(balance),
          txCount,
          logo: chain.logo,
          explorer: chain.explorer,
          tokenStandards: chain.tokenStandards,
          color: chain.color,
          gasUnit: chain.gasUnit,
          chainId: chain.id,
          success: true
        };
      } catch (err) {
        return {
          chain: chain.name,
          logo: chain.logo,
          explorer: chain.explorer,
          error: "⚠️ Netzwerk nicht erreichbar",
          success: false,
          chainId: chain.id
        };
      }
    });

    try {
      const chainResults = await Promise.all(promises);
      setResults(chainResults);
    } catch (err) {
      setError("❌ Fehler beim Prüfen der Netzwerke. Bitte versuchen Sie es erneut.");
    }

    setLoading(false);
  };

  const handleInputChange = (e) => {
    const value = e.target.value.trim();
    setAddress(value);
    if (error && value) {
      setError(""); // Clear error when user starts typing
    }
  };

  const activeNetworks = results?.filter(r => 
    r?.success && !r?.error && (parseFloat(r?.balance || 0) > 0 || (r?.txCount || 0) > 0)
  ) || [];

  const hasActivity = activeNetworks?.length > 0;

  return (
    <div className="w-full max-w-4xl mx-auto glass-card p-8 success-animation">
      {/* Enhanced Header */}
      <header className="text-center mb-10">
        <div className="float mb-6">
          <h1 className="text-6xl font-extrabold gradient-text mb-4 tracking-tight">
            🛡️ ChainGuard Pro
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full"></div>
        </div>
        <p className="text-light/80 text-xl max-w-2xl mx-auto mb-6 leading-relaxed font-light">
          Professioneller Multi-Chain Wallet Checker für sichere Web3-Transaktionen
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {CHAINS?.map((chain, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-light/90 hover-glow group cursor-default"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <img 
                src={chain?.logo} 
                alt={chain?.name} 
                className="w-5 h-5 rounded-full group-hover:scale-110 transition-transform" 
              />
              <span className="font-medium">{chain?.name}</span>
            </div>
          ))}
        </div>
      </header>

      {/* Enhanced Input Section */}
      <div className="mb-10">
        <div className="text-center mb-6">
          <label className="text-lg font-medium text-light mb-2 block">
            <span className="morph-icon inline-block mr-2">🔍</span>
            Wallet-Adresse eingeben
          </label>
          <p className="text-light/60 text-sm">
            Geben Sie eine EVM-kompatible Adresse ein (0x...)
          </p>
        </div>

        <div className="glass-card p-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full input-focus">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary z-10">
                <span className="morph-icon text-lg">💰</span>
              </div>
              <input
                type="text"
                placeholder="0x742d35Cc6634C0532925a3b8D0Ac6d99c9ebe1B8..."
                value={address}
                onChange={handleInputChange}
                className="w-full pl-12 pr-14 py-4 glass rounded-xl text-light text-base focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all duration-300 placeholder-light/40 font-mono"
              />
              {address && (
                <button
                  onClick={() => copyToClipboard(address)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 glass rounded-lg hover-glow transition-all group"
                  title="Kopieren"
                >
                  <span className="morph-icon text-secondary group-hover:text-success">
                    {copied ? "✅" : "📋"}
                  </span>
                </button>
              )}
            </div>

            <button
              onClick={validateAndCheckAddress}
              disabled={loading || !address?.trim()}
              className="btn-primary px-8 py-4 text-white font-bold text-base min-w-[140px] group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none"
            >
              {loading ? (
                <LoadingSpinner />
              ) : (
                <span className="flex items-center gap-2">
                  <span className="morph-icon group-hover:scale-110">🔍</span>
                  Analysieren
                </span>
              )}
            </button>
          </div>
          
          {/* Address Validation Indicator */}
          {address && (
            <div className="mt-4 flex items-center justify-center">
              <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm ${
                address && address.length > 0 && address.startsWith('0x') && address.length === 42
                  ? 'bg-success/20 text-success border border-success/30'
                  : 'bg-warning/20 text-warning border border-warning/30'
              }`}>
                <span className="morph-icon">
                  {address && address.length > 0 && address.startsWith('0x') && address.length === 42 ? '✅' : '⚠️'}
                </span>
                <span className="font-medium">
                  {address && address.length > 0 && address.startsWith('0x') && address.length === 42 
                    ? 'Gültiges Adressformat' 
                    : 'Prüfe Adressformat...'}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Enhanced Error Message */}
      {error && (
        <div className="glass-card p-6 mb-8 border border-danger/30 loading-pulse">
          <div className="flex items-center justify-center gap-3 text-danger">
            <span className="text-2xl morph-icon">🚨</span>
            <div className="text-center">
              <h4 className="font-bold mb-1">Eingabefehler</h4>
              <p className="text-sm">{error}</p>
            </div>
          </div>
        </div>
      )}

      {/* Security Alert */}
      {results?.length > 0 && (
        <SecurityAlert hasActivity={hasActivity} activeCount={activeNetworks?.length} />
      )}

      {/* Enhanced Results Grid */}
      {results?.length > 0 && (
        <div className="mb-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-light mb-2 flex items-center justify-center gap-2">
              <span className="morph-icon">📊</span>
              Netzwerk-Analyseergebnisse
            </h3>
            <div className="h-0.5 w-16 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results?.map((result, index) => (
              <div 
                key={index}
                className="success-animation"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <NetworkCard
                  result={result}
                  address={address}
                  onCopy={copyToClipboard}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Enhanced General Warning */}
      {results?.length > 0 && (
        <div className="glass-card p-6 border border-warning/30 hover-glow">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <span className="text-3xl morph-icon">⚠️</span>
            </div>
            <div>
              <h4 className="text-warning font-bold text-lg mb-3 flex items-center gap-2">
                Wichtiger Sicherheitshinweis
              </h4>
              <div className="glass rounded-lg p-4 mb-4">
                <p className="text-light/80 leading-relaxed">
                  EVM-Adressen sind auf allen kompatiblen Blockchains technisch gültig. 
                  <span className="block mt-2 font-semibold text-warning">
                    ⚡ Prüfen Sie immer das korrekte Zielnetzwerk vor dem Senden!
                  </span>
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2 text-light/70">
                  <span className="morph-icon text-success">✅</span>
                  <span>Netzwerk verifizieren</span>
                </div>
                <div className="flex items-center gap-2 text-light/70">
                  <span className="morph-icon text-success">✅</span>
                  <span>Testübertragung empfohlen</span>
                </div>
                <div className="flex items-center gap-2 text-light/70">
                  <span className="morph-icon text-success">✅</span>
                  <span>Chain-ID überprüfen</span>
                </div>
                <div className="flex items-center gap-2 text-light/70">
                  <span className="morph-icon text-success">✅</span>
                  <span>Gas-Gebühren beachten</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
