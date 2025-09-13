
export default function NetworkCard({ result, address, onCopy }) {
  if (!result) return null;

  const isActive = result?.success && !result?.error && 
    (parseFloat(result?.balance || 0) > 0 || (result?.txCount || 0) > 0);

  const formatBalance = (balance) => {
    if (!balance) return "0.0000";
    const num = parseFloat(balance);
    return num > 0.0001 ? num.toFixed(4) : num.toExponential(2);
  };

  const handleExplorerClick = () => {
    if (result?.explorer && address) {
      window.open(`${result.explorer}/address/${address}`, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      className={`glass-card p-6 card-hover group ${
        isActive
          ? "border-success/50 shadow-success/20"
          : result?.testnet
          ? "border-warning/50 shadow-warning/10"
          : "border-gray-600/30"
      }`}
    >
      {/* Enhanced Header with Logo and Chain Name */}
      <div className="flex items-center gap-4 mb-6">
        {result?.logo && (
          <div className="relative status-indicator">
            <div className="p-1 glass rounded-full">
              <img
                src={result.logo}
                alt={result?.chain}
                className="w-12 h-12 rounded-full group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            {isActive && <span className="status-active"></span>}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className={`text-xl font-bold flex items-center gap-2 group-hover:text-primary transition-colors ${
            isActive ? "text-success" : "text-light"
          }`}>
            <span className="truncate">{result?.chain}</span>
            {result?.testnet && (
              <span className="px-3 py-1 text-xs glass rounded-full font-medium text-warning border border-warning/30 morph-icon">
                Test
              </span>
            )}
          </h3>
          {result?.chainId && (
            <p className="text-sm text-light/60 font-mono">
              Chain ID: <span className="text-secondary font-semibold">{result.chainId}</span>
            </p>
          )}
        </div>
      </div>

      {/* Enhanced Content */}
      {result?.error ? (
        <div className="glass p-4 text-center border border-danger/30">
          <div className="flex items-center justify-center gap-2 text-danger">
            <span className="morph-icon text-lg">⚠️</span>
            <span className="font-medium">{result.error}</span>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Enhanced Balance */}
          <div className="glass p-4 hover-glow group/balance">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-light/60 flex items-center gap-1">
                <span className="morph-icon">💰</span>
                Balance
              </span>
              {parseFloat(result?.balance || 0) > 0 && (
                <span className="morph-icon text-success group-hover/balance:scale-110">✨</span>
              )}
            </div>
            <p className="text-xl font-mono font-bold text-light counter">
              {formatBalance(result?.balance)} 
              <span className="text-secondary ml-2">{result?.symbol}</span>
            </p>
          </div>

          {/* Enhanced Transaction Count */}
          <div className="glass p-4 hover-glow group/tx">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-light/60 flex items-center gap-1">
                <span className="morph-icon">📊</span>
                Transaktionen
              </span>
              {(result?.txCount || 0) > 0 && (
                <span className="morph-icon text-primary group-hover/tx:scale-110">⚡</span>
              )}
            </div>
            <p className="text-xl font-mono font-bold text-light counter">
              {result?.txCount?.toLocaleString() || 0}
            </p>
          </div>

          {/* Enhanced Token Standards */}
          {result?.tokenStandards && (
            <div>
              <p className="text-sm text-light/60 mb-3 flex items-center gap-1">
                <span className="morph-icon">🏷️</span>
                Token-Standards
              </p>
              <div className="flex flex-wrap gap-2">
                {result.tokenStandards.map((standard, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 glass text-primary text-xs font-semibold rounded-full hover-glow"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {standard}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Enhanced Action Buttons */}
          <div className="flex gap-3 pt-2">
            {result?.explorer && (
              <button
                onClick={handleExplorerClick}
                className="flex-1 px-4 py-3 glass hover-glow text-primary font-semibold rounded-xl transition-all group/explorer"
              >
                <span className="flex items-center justify-center gap-2">
                  <span className="morph-icon group-hover/explorer:scale-110">🔍</span>
                  <span>Explorer</span>
                </span>
              </button>
            )}
            <button
              onClick={() => onCopy?.(address)}
              className="px-4 py-3 glass hover-glow text-secondary font-semibold rounded-xl transition-all group/copy"
              title="Adresse kopieren"
            >
              <span className="morph-icon group-hover/copy:scale-110">📋</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
