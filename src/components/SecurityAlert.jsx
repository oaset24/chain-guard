
export default function SecurityAlert({ hasActivity, activeCount }) {
  if (!hasActivity) {
    return (
      <div className="glass-card p-6 mb-8 border border-gray-600/30 success-animation">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0">
            <span className="text-3xl morph-icon">ℹ️</span>
          </div>
          <div>
            <h4 className="text-light font-bold text-lg mb-2 flex items-center gap-2">
              Keine Aktivität erkannt
            </h4>
            <div className="glass p-3 rounded-lg">
              <p className="text-light/80 text-sm leading-relaxed">
                Diese Adresse zeigt keine Balance oder Transaktionen auf den überprüften Netzwerken.
                <span className="block mt-2 text-light/60">
                  Dies bedeutet nicht, dass die Adresse ungültig ist.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const alertLevel = activeCount > 3 ? "high" : activeCount > 1 ? "medium" : "low";
  
  const alertConfig = {
    high: {
      bg: "bg-danger/20",
      border: "border-danger",
      text: "text-danger",
      icon: "🚨",
      title: "Hohe Aktivität Erkannt!",
      message: `Diese Adresse ist auf ${activeCount} Netzwerken aktiv. Prüfen Sie das Zielnetzwerk sehr sorgfältig!`
    },
    medium: {
      bg: "bg-warning/20",
      border: "border-warning", 
      text: "text-warning",
      icon: "⚠️",
      title: "Mehrere Netzwerke Aktiv",
      message: `Diese Adresse ist auf ${activeCount} Netzwerken aktiv. Stellen Sie sicher, dass Sie das richtige Netzwerk wählen.`
    },
    low: {
      bg: "bg-success/20",
      border: "border-success",
      text: "text-success", 
      icon: "✅",
      title: "Adresse Gefunden",
      message: "Diese Adresse ist auf einem Netzwerk aktiv. Prüfen Sie dennoch das Zielnetzwerk."
    }
  };

  const config = alertConfig[alertLevel];

  return (
    <div className={`glass-card p-6 mb-8 border ${config.border}/50 success-animation hover-glow`}>
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <span className="text-4xl morph-icon">{config.icon}</span>
        </div>
        <div className="flex-1">
          <h4 className={`${config.text} font-bold text-xl mb-3`}>{config.title}</h4>
          <div className="glass p-4 rounded-lg mb-4">
            <p className={`${config.text} text-base leading-relaxed`}>{config.message}</p>
          </div>
          
          {/* Enhanced Security Tips */}
          <div className="glass p-4 rounded-lg">
            <h5 className="text-light font-bold text-sm mb-4 flex items-center gap-2">
              <span className="morph-icon">🔒</span>
              Sicherheits-Checkliste
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { icon: "🔗", text: "Chain-ID überprüfen" },
                { icon: "💸", text: "Testübertragung senden" },
                { icon: "🏢", text: "Offizielle RPC verwenden" },
                { icon: "📋", text: "Contract-Adressen verifizieren" }
              ].map((tip, index) => (
                <div key={index} className="flex items-center gap-2 text-light/80 text-sm">
                  <span className="morph-icon text-success">{tip.icon}</span>
                  <span>{tip.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
