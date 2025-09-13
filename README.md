# 🔐 ChainGuard - Multi-Chain Address Checker

[![License: MIT](https://upload.wikimedia.org/wikipedia/commons/2/2e/MIT_Logo_New.svg)
[![React](https://i.ytimg.com/vi/4cgpu9L2AE8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCzedb-c7IZSg8ZCib1APCJvLdWqw)
[![Vite](https://static.vecteezy.com/system/resources/previews/024/158/639/non_2x/blank-shield-frame-element-in-purple-color-vector.jpg)
[![GDPR Compliant](https://cdn.vectorstock.com/i/1000v/23/07/gdpr-compliance-badge-template-vector-21042307.jpg)

**Multi-Chain Wallet Address Network Checker - GDPR Compliant Crypto Security Tool**

Ein professionelles Tool zur Überprüfung von Wallet-Adressen auf verschiedenen Blockchain-Netzwerken mit vollständiger GDPR-Konformität und erweiterten Sicherheitsfeatures.

## 🚀 Live Demo

**[🌐 Live Demo ansehen](https://oaset24.github.io/wallet-network-checker/)**

## ✨ Features

### 🔍 Multi-Chain Support
- **Ethereum** (ETH) - Mainnet
- **Polygon** (MATIC) - Layer 2 Solution
- **Binance Smart Chain** (BNB) - High Performance
- **Arbitrum** (ARB) - Optimistic Rollup
- **Optimism** (OP) - Optimistic Rollup
- **Avalanche** (AVAX) - High Throughput
- **Sepolia** (SEP) - Ethereum Testnet

### 🛡️ Sicherheitsfeatures
- ✅ **Adress-Validierung** - Automatische Erkennung ungültiger Adressen
- 🔒 **Keine Datenübertragung** - Alle Prüfungen erfolgen lokal
- 🚫 **Kein Tracking** - Vollständig privat und anonym
- 🛡️ **XSS-Schutz** - Sichere Input-Validierung
- 📱 **Responsive Design** - Optimiert für alle Geräte

### 🇪🇺 GDPR-Konformität
- 🍪 **Cookie-Management** - Vollständige Kontrolle über Cookies
- 📋 **Privacy Dashboard** - Transparente Datenschutz-Einstellungen
- 📄 **Rechtliche Seiten** - Datenschutz, Impressum, AGB
- ✅ **Einwilligungsmanagement** - GDPR-konforme Zustimmung
- 🔐 **Datenminimierung** - Nur notwendige Daten werden verarbeitet

### 💰 Monetarisierung (Optional)
- 📢 **Werbeplätze** - Diskrete Anzeigenbereiche
- 💝 **Spenden-Widget** - Unterstützung für Entwickler
- 🎯 **Ethische Werbung** - Nur relevante, sichere Anzeigen

## 🛠️ Installation

### Voraussetzungen
- Node.js 18+ 
- npm oder yarn

### Lokale Entwicklung

```bash
# Repository klonen
git clone https://github.com/oaset24/chain-guard.git
cd wallet-network-checker

# Dependencies installieren
npm install

# Entwicklungsserver starten
npm run dev

# Build für Produktion
npm run build

# Preview der Production-Build
npm run preview
```

## 🚀 Deployment

### Vercel (Empfohlen)
1. Repository zu Vercel verbinden
2. Automatisches Deployment bei Git-Push
3. Keine weitere Konfiguration nötig

### GitHub Pages
1. Repository-Settings → Pages
2. Source: GitHub Actions
3. Automatisches Deployment via Workflow

### Netlify
1. Repository zu Netlify verbinden
2. Build Command: `npm run build`
3. Publish Directory: `dist`

## 🔧 Konfiguration

### Environment Variablen
```env
# Optional: Analytics (falls gewünscht)
VITE_ANALYTICS_ID=your_analytics_id

# Optional: Monetarisierung
VITE_AD_NETWORK_ID=your_ad_network_id
```

### Anpassungen
- **Netzwerke**: Bearbeite `src/networks.js`
- **Styling**: Anpassung via `tailwind.config.js`
- **GDPR-Texte**: Bearbeite Dateien in `src/pages/`

## 📱 Browser-Unterstützung

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile Browser

## 🤝 Contributing

Beiträge sind willkommen! Bitte beachte:

1. Fork das Repository
2. Erstelle einen Feature-Branch (`git checkout -b feature/AmazingFeature`)
3. Committe deine Änderungen (`git commit -m 'Add some AmazingFeature'`)
4. Push zum Branch (`git push origin feature/AmazingFeature`)
5. Öffne einen Pull Request

## 📄 Lizenz

Dieses Projekt steht unter der MIT-Lizenz. Siehe [LICENSE](LICENSE) für Details.

## 🙏 Danksagungen

- **React Team** - Für das großartige Framework
- **Vite** - Für das schnelle Build-Tool
- **Tailwind CSS** - Für das utility-first CSS Framework
- **Blockchain Communities** - Für die offenen Standards

## 📞 Support

- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/oaset24/wallet-network-checker/issues)
- 💡 **Feature Requests**: [GitHub Discussions](https://github.com/oaset24/wallet-network-checker/discussions)
- 📧 **Kontakt**: [GitHub Profile](https://github.com/oaset24)

## 🔮 Roadmap

- [ ] **Mehr Netzwerke** - Solana, Cardano, Polkadot
- [ ] **Hardware Wallet Support** - Ledger, Trezor Integration
- [ ] **Batch-Prüfung** - Multiple Adressen gleichzeitig
- [ ] **API-Integration** - Balance und Transaction History
- [ ] **Mobile App** - React Native Version
- [ ] **Browser Extension** - Chrome/Firefox Extension

---

**Made with ❤️ for the Crypto Community**

*Sicher, Privat, GDPR-Konform*
