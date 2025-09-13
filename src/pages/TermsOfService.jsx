
export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-gray-900 to-dark bg-mesh-pattern relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(74,111,165,0.2),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(201,162,39,0.15),transparent_50%)] pointer-events-none"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 mb-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold gradient-text mb-4 flex items-center justify-center gap-3">
                <span className="morph-icon">📋</span>
                Nutzungsbedingungen
              </h1>
              <p className="text-light/70">Allgemeine Geschäftsbedingungen für ChainGuard</p>
              <p className="text-light/60 text-sm mt-2">Stand: {new Date().toLocaleDateString('de-DE')}</p>
            </div>

            <div className="space-y-8 text-light/90">
              
              {/* Geltungsbereich */}
              <section>
                <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                  <span className="morph-icon">🌐</span>
                  1. Geltungsbereich
                </h2>
                <div className="glass p-6 rounded-xl">
                  <p className="text-sm text-light/80 leading-relaxed mb-4">
                    Diese Nutzungsbedingungen regeln die Nutzung der ChainGuard-Webanwendung, 
                    eines kostenlosen Tools zur Analyse von Blockchain-Wallet-Adressen auf verschiedenen Netzwerken.
                  </p>
                  <div className="bg-primary/10 border border-primary/30 p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <span className="text-primary morph-icon text-xl">ℹ️</span>
                      <div>
                        <h3 className="font-semibold text-primary mb-2">Wichtiger Hinweis:</h3>
                        <p className="text-xs text-light/70 leading-relaxed">
                          Durch die Nutzung von ChainGuard stimmen Sie diesen Bedingungen zu. 
                          Wenn Sie nicht einverstanden sind, nutzen Sie die Anwendung bitte nicht.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Leistungsbeschreibung */}
              <section>
                <h2 className="text-2xl font-bold text-secondary mb-4 flex items-center gap-2">
                  <span className="morph-icon">⚙️</span>
                  2. Leistungsbeschreibung
                </h2>
                <div className="space-y-4">
                  
                  <div className="glass p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-success mb-3 flex items-center gap-2">
                      <span className="morph-icon">✅</span>
                      Was ChainGuard bietet:
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        { icon: '🔍', feature: 'Multi-Chain Adress-Validierung', desc: 'Überprüfung von Wallet-Adressen auf 6+ Blockchain-Netzwerken' },
                        { icon: '📊', feature: 'Balance & Transaction Analysis', desc: 'Anzeige von Guthaben und Transaktionshistorie' },
                        { icon: '🛡️', feature: 'Sicherheitswarnungen', desc: 'Intelligente Alerts bei Multi-Chain-Aktivitäten' },
                        { icon: '🔗', feature: 'Explorer-Integration', desc: 'Direkte Verlinkung zu Block-Explorern' },
                        { icon: '📱', feature: 'Progressive Web App', desc: 'Installierbar als PWA für Desktop und Mobile' },
                        { icon: '🔒', feature: 'Datenschutz-freundlich', desc: 'Keine Speicherung von Wallet-Adressen' }
                      ].map((item, index) => (
                        <div key={index} className="glass p-4 rounded-lg card-hover">
                          <div className="flex items-start gap-3">
                            <span className="text-lg morph-icon">{item.icon}</span>
                            <div>
                              <h4 className="font-semibold text-secondary text-sm mb-1">{item.feature}</h4>
                              <p className="text-xs text-light/70 leading-relaxed">{item.desc}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="glass p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-warning mb-3 flex items-center gap-2">
                      <span className="morph-icon">⚠️</span>
                      Was ChainGuard NICHT ist:
                    </h3>
                    <div className="bg-warning/10 border border-warning/30 p-4 rounded-lg">
                      <ul className="text-sm text-light/80 space-y-2">
                        <li>• <strong>Keine Wallet-Anwendung:</strong> ChainGuard speichert keine privaten Schlüssel</li>
                        <li>• <strong>Keine Finanzberatung:</strong> Alle Informationen dienen nur der Analyse</li>
                        <li>• <strong>Keine Transaktionsdienste:</strong> Keine Durchführung von Transfers möglich</li>
                        <li>• <strong>Keine Garantie:</strong> Daten können unvollständig oder veraltet sein</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Nutzungsrechte und -pflichten */}
              <section>
                <h2 className="text-2xl font-bold text-accent mb-4 flex items-center gap-2">
                  <span className="morph-icon">⚖️</span>
                  3. Nutzungsrechte und -pflichten
                </h2>
                <div className="space-y-4">
                  
                  <div className="glass p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-success mb-3 flex items-center gap-2">
                      <span className="morph-icon">✅</span>
                      Erlaubte Nutzung:
                    </h3>
                    <ul className="text-sm text-light/80 space-y-2 list-disc list-inside">
                      <li>Kostenlose Nutzung für private und kommerzielle Zwecke</li>
                      <li>Analyse eigener und öffentlicher Wallet-Adressen</li>
                      <li>Integration in eigene Workflows (API-Nutzung nach Absprache)</li>
                      <li>Weiterempfehlung und Verlinkung</li>
                    </ul>
                  </div>

                  <div className="glass p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-danger mb-3 flex items-center gap-2">
                      <span className="morph-icon">❌</span>
                      Verbotene Nutzung:
                    </h3>
                    <div className="bg-danger/10 border border-danger/30 p-4 rounded-lg">
                      <ul className="text-sm text-light/80 space-y-2 list-disc list-inside">
                        <li>Automatisierte Massenanfragen ohne Genehmigung (Rate-Limiting)</li>
                        <li>Reverse Engineering der Anwendung</li>
                        <li>Umgehung von Sicherheitsmaßnahmen</li>
                        <li>Nutzung für illegale Aktivitäten</li>
                        <li>Verletzung von Urheberrechten Dritter</li>
                        <li>DoS/DDoS-Attacken oder ähnliche Störungen</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Haftungsausschluss */}
              <section>
                <h2 className="text-2xl font-bold text-warning mb-4 flex items-center gap-2">
                  <span className="morph-icon">⚠️</span>
                  4. Haftungsausschluss
                </h2>
                <div className="space-y-4">
                  
                  <div className="glass p-6 rounded-xl">
                    <div className="bg-warning/10 border border-warning/30 p-6 rounded-lg">
                      <div className="flex items-start gap-4 mb-4">
                        <span className="text-warning text-3xl morph-icon">⚠️</span>
                        <div>
                          <h3 className="text-xl font-bold text-warning mb-2">
                            WICHTIGER HAFTUNGSAUSSCHLUSS
                          </h3>
                          <p className="text-sm text-light/80 leading-relaxed">
                            ChainGuard ist ein kostenloses Analyse-Tool. Wir übernehmen keine Haftung für:
                          </p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-danger mb-2">Finanzielle Verluste:</h4>
                          <ul className="text-xs text-light/70 space-y-1 list-disc list-inside">
                            <li>Falsche Transaktionen aufgrund unserer Daten</li>
                            <li>Netzwerk-Verwechslungen</li>
                            <li>Veraltete oder unvollständige Informationen</li>
                            <li>Smart Contract Fehler</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-danger mb-2">Technische Probleme:</h4>
                          <ul className="text-xs text-light/70 space-y-1 list-disc list-inside">
                            <li>Ausfallzeiten oder Störungen</li>
                            <li>Datenverlust</li>
                            <li>Sicherheitslücken</li>
                            <li>API-Limitierungen</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="glass p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                      <span className="morph-icon">🛡️</span>
                      Haftungsbegrenzung:
                    </h3>
                    <p className="text-sm text-light/80 leading-relaxed mb-4">
                      Soweit gesetzlich zulässig, beschränken wir unsere Haftung auf Vorsatz und grobe Fahrlässigkeit. 
                      Eine Haftung für mittelbare Schäden, entgangenen Gewinn oder Folgeschäden ist ausgeschlossen.
                    </p>
                    <div className="bg-primary/10 border border-primary/30 p-4 rounded-lg">
                      <p className="text-xs text-light/70">
                        <strong>Maximaler Haftungsbetrag:</strong> 0 EUR (kostenloses Tool)
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Datenschutz */}
              <section>
                <h2 className="text-2xl font-bold text-violet mb-4 flex items-center gap-2">
                  <span className="morph-icon">🔒</span>
                  5. Datenschutz und Privatsphäre
                </h2>
                <div className="glass p-6 rounded-xl">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-success mb-3 flex items-center gap-2">
                        <span className="morph-icon">✅</span>
                        Unser Versprechen:
                      </h3>
                      <ul className="text-sm text-light/80 space-y-2">
                        <li>• Keine permanente Speicherung von Wallet-Adressen</li>
                        <li>• Minimale Datenerfassung</li>
                        <li>• DSGVO-konforme Verarbeitung</li>
                        <li>• Transparente Cookie-Verwendung</li>
                        <li>• Sichere Datenübertragung (TLS 1.3)</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-3">Weitere Informationen:</h3>
                      <p className="text-sm text-light/80 mb-4">
                        Detaillierte Informationen finden Sie in unserer Datenschutzerklärung.
                      </p>
                      <a
                        href="/privacy-policy"
                        className="inline-flex items-center gap-2 px-4 py-2 btn-primary text-white font-medium rounded-lg text-sm"
                      >
                        <span className="morph-icon">🛡️</span>
                        Datenschutzerklärung
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              {/* Verfügbarkeit */}
              <section>
                <h2 className="text-2xl font-bold text-secondary mb-4 flex items-center gap-2">
                  <span className="morph-icon">⚡</span>
                  6. Verfügbarkeit und Service-Level
                </h2>
                <div className="glass p-6 rounded-xl">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 glass rounded-lg">
                      <span className="text-3xl morph-icon mb-2 block">🎯</span>
                      <h3 className="font-semibold text-success mb-2">Ziel-Uptime</h3>
                      <p className="text-2xl font-bold text-success">99.5%</p>
                      <p className="text-xs text-light/60 mt-2">Best-Effort Basis</p>
                    </div>
                    <div className="text-center p-4 glass rounded-lg">
                      <span className="text-3xl morph-icon mb-2 block">🔧</span>
                      <h3 className="font-semibold text-warning mb-2">Wartungsfenster</h3>
                      <p className="text-sm font-semibold text-warning">So 02:00-04:00</p>
                      <p className="text-xs text-light/60 mt-2">CET, monatlich</p>
                    </div>
                    <div className="text-center p-4 glass rounded-lg">
                      <span className="text-3xl morph-icon mb-2 block">📞</span>
                      <h3 className="font-semibold text-primary mb-2">Support</h3>
                      <p className="text-sm font-semibold text-primary">Community</p>
                      <p className="text-xs text-light/60 mt-2">GitHub Issues</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 bg-warning/10 border border-warning/30 p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <span className="text-warning morph-icon">⚠️</span>
                      <div>
                        <h4 className="font-semibold text-warning mb-2">Haftungsausschluss:</h4>
                        <p className="text-xs text-light/70 leading-relaxed">
                          ChainGuard wird als kostenloses Tool "as-is" bereitgestellt. Wir bemühen uns um 
                          hohe Verfügbarkeit, können aber keine Garantien für unterbrechungsfreien Service geben.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Änderungen */}
              <section>
                <h2 className="text-2xl font-bold text-accent mb-4 flex items-center gap-2">
                  <span className="morph-icon">📝</span>
                  7. Änderungen der Nutzungsbedingungen
                </h2>
                <div className="glass p-6 rounded-xl">
                  <p className="text-sm text-light/80 leading-relaxed mb-4">
                    Wir behalten uns vor, diese Nutzungsbedingungen jederzeit zu ändern. 
                    Wesentliche Änderungen werden den Nutzern rechtzeitig mitgeteilt.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-primary/10 border border-primary/30 p-4 rounded-lg">
                      <h3 className="font-semibold text-primary mb-2 flex items-center gap-2">
                        <span className="morph-icon">📢</span>
                        Mitteilung von Änderungen:
                      </h3>
                      <ul className="text-xs text-light/70 space-y-1">
                        <li>• Hinweis auf der Website (30 Tage vorher)</li>
                        <li>• E-Mail an registrierte Nutzer</li>
                        <li>• Changelog in der Anwendung</li>
                        <li>• Social Media Ankündigung</li>
                      </ul>
                    </div>
                    <div className="bg-success/10 border border-success/30 p-4 rounded-lg">
                      <h3 className="font-semibold text-success mb-2 flex items-center gap-2">
                        <span className="morph-icon">✅</span>
                        Ihre Optionen:
                      </h3>
                      <ul className="text-xs text-light/70 space-y-1">
                        <li>• Fortsetzung der Nutzung = Zustimmung</li>
                        <li>• Einstellung der Nutzung möglich</li>
                        <li>• Feedback zu Änderungen willkommen</li>
                        <li>• Transparente Versionierung</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Anwendbares Recht */}
              <section>
                <h2 className="text-2xl font-bold text-danger mb-4 flex items-center gap-2">
                  <span className="morph-icon">⚖️</span>
                  8. Anwendbares Recht und Gerichtsstand
                </h2>
                <div className="glass p-6 rounded-xl">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-primary mb-3">Rechtliches:</h3>
                      <div className="space-y-3 text-sm text-light/80">
                        <p><strong>Anwendbares Recht:</strong> Bundesrepublik Deutschland</p>
                        <p><strong>Gerichtsstand:</strong> Berlin</p>
                        <p><strong>Sprache:</strong> Deutsch (maßgeblich)</p>
                        <p><strong>EU-Recht:</strong> DSGVO, ePrivacy-VO</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary mb-3">Streitbeilegung:</h3>
                      <p className="text-sm text-light/80 mb-4">
                        Bei Streitigkeiten bevorzugen wir außergerichtliche Einigungen. 
                        Kontaktieren Sie uns zunächst direkt.
                      </p>
                      <button
                        onClick={() => window.open('mailto:legal@chainGuard.com', '_blank')}
                        className="px-4 py-2 glass hover-glow text-light font-medium rounded-lg text-sm transition-all group"
                      >
                        <span className="flex items-center gap-2">
                          <span className="morph-icon group-hover:scale-110">📧</span>
                          legal@chainGuard.com
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Kontakt und Schlussbestimmungen */}
              <section>
                <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                  <span className="morph-icon">📞</span>
                  9. Kontakt und Schlussbestimmungen
                </h2>
                <div className="glass p-6 rounded-xl">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-secondary mb-3">Kontaktinformationen:</h3>
                      <div className="space-y-2 text-sm text-light/80">
                        <p><strong>Rechtliche Fragen:</strong> legal@chainGuard.com</p>
                        <p><strong>Support:</strong> support@chainGuard.com</p>
                        <p><strong>Datenschutz:</strong> privacy@chainGuard.com</p>
                        <p><strong>Allgemein:</strong> info@chainGuard.com</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-accent mb-3">Schlussbestimmungen:</h3>
                      <ul className="text-sm text-light/80 space-y-2">
                        <li>• Sollten Teile dieser AGB unwirksam sein, bleibt der Rest gültig</li>
                        <li>• Salvatorische Klausel gilt</li>
                        <li>• Änderungen nur in Textform wirksam</li>
                        <li>• Version: 1.0 vom {new Date().toLocaleDateString('de-DE')}</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-light/20 text-center">
                    <p className="text-xs text-light/60">
                      Diese Nutzungsbedingungen wurden mit Sorgfalt erstellt. 
                      Bei Fragen oder Unklarheiten stehen wir Ihnen gerne zur Verfügung.
                    </p>
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
