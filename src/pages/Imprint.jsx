
export default function Imprint() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-gray-900 to-dark bg-mesh-pattern relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(74,111,165,0.2),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(201,162,39,0.15),transparent_50%)] pointer-events-none"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 mb-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold gradient-text mb-4 flex items-center justify-center gap-3">
                <span className="morph-icon">🏢</span>
                Impressum
              </h1>
              <p className="text-light/70">Angaben gemäß § 5 TMG</p>
            </div>

            <div className="space-y-8 text-light/90">
              
              {/* Unternehmensinformationen */}
              <section>
                <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                  <span className="morph-icon">🏢</span>
                  Unternehmensinformationen
                </h2>
                <div className="glass p-6 rounded-xl">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold text-secondary mb-4">Firmenangaben:</h3>
                      <div className="space-y-2 text-sm">
                        <p><strong>Firmenname:</strong> ChainGuard GmbH</p>
                        <p><strong>Rechtsform:</strong> Gesellschaft mit beschränkter Haftung</p>
                        <p><strong>Registergericht:</strong> Amtsgericht Berlin-Charlottenburg</p>
                        <p><strong>Registernummer:</strong> HRB 123456 B</p>
                        <p><strong>USt-IdNr.:</strong> DE123456789</p>
                        <p><strong>Steuernummer:</strong> 30/123/45678</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary mb-4">Anschrift:</h3>
                      <div className="font-mono text-sm bg-dark/30 p-4 rounded-lg border border-light/10">
                        ChainGuard GmbH<br />
                        Blockchain Straße 123<br />
                        10115 Berlin<br />
                        Deutschland
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Kontaktdaten */}
              <section>
                <h2 className="text-2xl font-bold text-secondary mb-4 flex items-center gap-2">
                  <span className="morph-icon">📞</span>
                  Kontaktdaten
                </h2>
                <div className="glass p-6 rounded-xl">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-4 glass rounded-lg card-hover">
                      <span className="text-3xl morph-icon mb-3 block">📧</span>
                      <h3 className="font-semibold text-primary mb-2">E-Mail</h3>
                      <p className="text-sm text-light/80">info@chainGuard.com</p>
                      <p className="text-xs text-light/60 mt-2">Support: support@chainGuard.com</p>
                    </div>
                    <div className="text-center p-4 glass rounded-lg card-hover">
                      <span className="text-3xl morph-icon mb-3 block">📱</span>
                      <h3 className="font-semibold text-success mb-2">Telefon</h3>
                      <p className="text-sm text-light/80">+49 30 12345678</p>
                      <p className="text-xs text-light/60 mt-2">Mo-Fr: 9:00-18:00 Uhr</p>
                    </div>
                    <div className="text-center p-4 glass rounded-lg card-hover">
                      <span className="text-3xl morph-icon mb-3 block">📠</span>
                      <h3 className="font-semibold text-warning mb-2">Fax</h3>
                      <p className="text-sm text-light/80">+49 30 12345679</p>
                      <p className="text-xs text-light/60 mt-2">24/7 erreichbar</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Geschäftsführung */}
              <section>
                <h2 className="text-2xl font-bold text-accent mb-4 flex items-center gap-2">
                  <span className="morph-icon">👥</span>
                  Geschäftsführung
                </h2>
                <div className="glass p-6 rounded-xl">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="text-center p-4 glass rounded-lg card-hover">
                      <span className="text-4xl morph-icon mb-3 block">👨‍💼</span>
                      <h3 className="font-semibold text-primary text-lg mb-2">Max Blockchain</h3>
                      <p className="text-sm text-light/70 mb-2">CEO & Gründer</p>
                      <p className="text-xs text-light/60">
                        Blockchain-Experte mit 8+ Jahren Erfahrung in Web3-Technologien
                      </p>
                    </div>
                    <div className="text-center p-4 glass rounded-lg card-hover">
                      <span className="text-4xl morph-icon mb-3 block">👩‍💼</span>
                      <h3 className="font-semibold text-secondary text-lg mb-2">Sarah DeFi</h3>
                      <p className="text-sm text-light/70 mb-2">CTO & Co-Gründerin</p>
                      <p className="text-xs text-light/60">
                        Full-Stack Entwicklerin, spezialisiert auf Smart Contracts und DeFi
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Verantwortlich für den Inhalt */}
              <section>
                <h2 className="text-2xl font-bold text-violet mb-4 flex items-center gap-2">
                  <span className="morph-icon">✍️</span>
                  Verantwortlich für den Inhalt
                </h2>
                <div className="glass p-6 rounded-xl">
                  <div className="bg-primary/10 border border-primary/30 p-4 rounded-lg">
                    <p className="text-sm text-light/80 mb-4">
                      Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
                    </p>
                    <div className="font-mono text-sm bg-dark/30 p-4 rounded-lg border border-light/10">
                      Max Blockchain<br />
                      Blockchain Straße 123<br />
                      10115 Berlin<br />
                      Deutschland
                    </div>
                  </div>
                </div>
              </section>

              {/* Haftungsausschluss */}
              <section>
                <h2 className="text-2xl font-bold text-warning mb-4 flex items-center gap-2">
                  <span className="morph-icon">⚖️</span>
                  Haftungsausschluss
                </h2>
                <div className="space-y-4">
                  
                  {/* Haftung für Inhalte */}
                  <div className="glass p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                      <span className="morph-icon">📄</span>
                      Haftung für Inhalte
                    </h3>
                    <p className="text-sm text-light/80 leading-relaxed mb-4">
                      Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen 
                      Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind 
                      wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder 
                      gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, 
                      die auf eine rechtswidrige Tätigkeit hinweisen.
                    </p>
                    <div className="bg-warning/10 border border-warning/30 p-4 rounded-lg">
                      <div className="flex items-start gap-3">
                        <span className="text-warning morph-icon">⚠️</span>
                        <div>
                          <h4 className="font-semibold text-warning mb-2">Wichtiger Hinweis:</h4>
                          <p className="text-xs text-light/70 leading-relaxed">
                            ChainGuard ist ein Analyse-Tool. Wir übernehmen keine Haftung für finanzielle 
                            Verluste, die durch falsche Transaktionen oder Netzwerk-Verwechslungen entstehen.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Haftung für Links */}
                  <div className="glass p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-secondary mb-3 flex items-center gap-2">
                      <span className="morph-icon">🔗</span>
                      Haftung für Links
                    </h3>
                    <p className="text-sm text-light/80 leading-relaxed">
                      Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir 
                      keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine 
                      Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige 
                      Anbieter oder Betreiber der Seiten verantwortlich.
                    </p>
                  </div>

                  {/* Urheberrecht */}
                  <div className="glass p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-success mb-3 flex items-center gap-2">
                      <span className="morph-icon">©️</span>
                      Urheberrecht
                    </h3>
                    <p className="text-sm text-light/80 leading-relaxed mb-4">
                      Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten 
                      unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, 
                      Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes 
                      bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                    </p>
                    <div className="bg-success/10 border border-success/30 p-4 rounded-lg">
                      <div className="flex items-center gap-2">
                        <span className="text-success morph-icon">📋</span>
                        <span className="text-sm font-semibold text-success">Open Source Komponenten</span>
                      </div>
                      <p className="text-xs text-light/70 mt-2">
                        Teile dieser Software nutzen Open Source Bibliotheken. 
                        Die entsprechenden Lizenzen finden Sie in der Dokumentation.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Streitschlichtung */}
              <section>
                <h2 className="text-2xl font-bold text-danger mb-4 flex items-center gap-2">
                  <span className="morph-icon">🤝</span>
                  Streitschlichtung
                </h2>
                <div className="glass p-6 rounded-xl">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-primary mb-3">EU-Streitschlichtung:</h3>
                      <p className="text-sm text-light/80 leading-relaxed mb-4">
                        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit.
                      </p>
                      <a 
                        href="https://ec.europa.eu/consumers/odr/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 glass hover-glow text-primary rounded-lg text-sm transition-all"
                      >
                        <span className="morph-icon">🌐</span>
                        EU-OS Plattform ↗
                      </a>
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary mb-3">Verbraucherstreitbeilegung:</h3>
                      <p className="text-sm text-light/80 leading-relaxed">
                        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                        Verbraucherschlichtungsstelle teilzunehmen.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
