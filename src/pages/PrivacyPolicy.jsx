
export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-gray-900 to-dark bg-mesh-pattern relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(74,111,165,0.2),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(201,162,39,0.15),transparent_50%)] pointer-events-none"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 mb-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold gradient-text mb-4 flex items-center justify-center gap-3">
                <span className="morph-icon">🛡️</span>
                Datenschutzerklärung
              </h1>
              <p className="text-light/70">Stand: {new Date().toLocaleDateString('de-DE')}</p>
            </div>

            <div className="space-y-8 text-light/90">
              {/* 1. Verantwortlicher */}
              <section>
                <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                  <span className="morph-icon">👤</span>
                  1. Verantwortlicher
                </h2>
                <div className="glass p-6 rounded-xl">
                  <p className="mb-4">
                    Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer nationaler 
                    Datenschutzgesetze der EU-Mitgliedsstaaten sowie sonstiger datenschutzrechtlicher Bestimmungen ist:
                  </p>
                  <div className="font-mono text-sm bg-dark/30 p-4 rounded-lg border border-light/10">
                    ChainGuard GmbH<br />
                    Blockchain Straße 123<br />
                    10115 Berlin, Deutschland<br />
                    <br />
                    E-Mail: privacy@chainGuard.com<br />
                    Telefon: +49 30 12345678<br />
                    Website: https://chainGuard.app
                  </div>
                </div>
              </section>

              {/* 2. Datenschutzbeauftragter */}
              <section>
                <h2 className="text-2xl font-bold text-secondary mb-4 flex items-center gap-2">
                  <span className="morph-icon">🔒</span>
                  2. Datenschutzbeauftragter
                </h2>
                <div className="glass p-6 rounded-xl">
                  <p>
                    Bei Fragen zum Datenschutz können Sie sich jederzeit an unseren Datenschutzbeauftragten wenden:
                  </p>
                  <div className="font-mono text-sm bg-dark/30 p-4 rounded-lg border border-light/10 mt-4">
                    Dr. Maria Schmidt<br />
                    Datenschutzbeauftragte<br />
                    E-Mail: dpo@chainGuard.com<br />
                    Telefon: +49 30 12345679
                  </div>
                </div>
              </section>

              {/* 3. Grundsätze der Datenverarbeitung */}
              <section>
                <h2 className="text-2xl font-bold text-success mb-4 flex items-center gap-2">
                  <span className="morph-icon">⚖️</span>
                  3. Grundsätze der Datenverarbeitung
                </h2>
                <div className="glass p-6 rounded-xl">
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { icon: '🎯', title: 'Zweckbindung', desc: 'Daten werden nur für festgelegte Zwecke verarbeitet' },
                      { icon: '🔐', title: 'Datensicherheit', desc: 'Höchste Sicherheitsstandards bei der Verarbeitung' },
                      { icon: '📊', title: 'Datenminimierung', desc: 'Nur notwendige Daten werden erhoben' },
                      { icon: '⏳', title: 'Speicherbegrenzung', desc: 'Löschung nach Zweckerfüllung' }
                    ].map((principle, index) => (
                      <div key={index} className="glass p-4 rounded-lg card-hover">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xl morph-icon">{principle.icon}</span>
                          <h3 className="font-semibold text-warning">{principle.title}</h3>
                        </div>
                        <p className="text-sm text-light/70">{principle.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* 4. Datenverarbeitung */}
              <section>
                <h2 className="text-2xl font-bold text-warning mb-4 flex items-center gap-2">
                  <span className="morph-icon">📊</span>
                  4. Art der Datenverarbeitung
                </h2>
                <div className="space-y-6">
                  
                  {/* Website-Nutzung */}
                  <div className="glass p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                      <span className="morph-icon">🌐</span>
                      4.1 Website-Nutzung
                    </h3>
                    <div className="space-y-4 text-sm">
                      <div>
                        <h4 className="font-semibold text-secondary mb-2">Verarbeitete Daten:</h4>
                        <ul className="list-disc list-inside space-y-1 text-light/80 pl-4">
                          <li>IP-Adresse (anonymisiert nach 24h)</li>
                          <li>Browsertyp und -version</li>
                          <li>Betriebssystem</li>
                          <li>Referrer-URL</li>
                          <li>Zugriffszeit</li>
                          <li>Wallet-Adressen (nur temporär für Analyse)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary mb-2">Rechtsgrundlage:</h4>
                        <p className="text-light/80">Art. 6 Abs. 1 lit. f DSGVO (berechtigte Interessen)</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary mb-2">Speicherdauer:</h4>
                        <p className="text-light/80">Logfiles werden nach 30 Tagen automatisch gelöscht</p>
                      </div>
                    </div>
                  </div>

                  {/* Cookies */}
                  <div className="glass p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                      <span className="morph-icon">🍪</span>
                      4.2 Cookies und ähnliche Technologien
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-light/20">
                            <th className="text-left py-3 px-2 text-secondary">Cookie-Typ</th>
                            <th className="text-left py-3 px-2 text-secondary">Zweck</th>
                            <th className="text-left py-3 px-2 text-secondary">Laufzeit</th>
                            <th className="text-left py-3 px-2 text-secondary">Einwilligung</th>
                          </tr>
                        </thead>
                        <tbody className="text-light/80">
                          <tr className="border-b border-light/10">
                            <td className="py-3 px-2 font-medium">Notwendige</td>
                            <td className="py-3 px-2">Grundfunktionen</td>
                            <td className="py-3 px-2">Session</td>
                            <td className="py-3 px-2 text-success">Nicht erforderlich</td>
                          </tr>
                          <tr className="border-b border-light/10">
                            <td className="py-3 px-2 font-medium">Analytics</td>
                            <td className="py-3 px-2">Nutzungsanalyse</td>
                            <td className="py-3 px-2">13 Monate</td>
                            <td className="py-3 px-2 text-warning">Opt-in erforderlich</td>
                          </tr>
                          <tr className="border-b border-light/10">
                            <td className="py-3 px-2 font-medium">Marketing</td>
                            <td className="py-3 px-2">Personalisierte Werbung</td>
                            <td className="py-3 px-2">12 Monate</td>
                            <td className="py-3 px-2 text-warning">Opt-in erforderlich</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Blockchain-Abfragen */}
                  <div className="glass p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                      <span className="morph-icon">⛓️</span>
                      4.3 Blockchain-Abfragen
                    </h3>
                    <div className="space-y-4 text-sm">
                      <div className="bg-warning/10 border border-warning/30 p-4 rounded-lg">
                        <div className="flex items-start gap-3">
                          <span className="text-warning text-xl morph-icon">⚠️</span>
                          <div>
                            <h4 className="font-semibold text-warning mb-2">Wichtiger Hinweis:</h4>
                            <p className="text-light/80 leading-relaxed">
                              Blockchain-Daten sind öffentlich einsehbar. ChainGuard speichert keine eingegebenen 
                              Wallet-Adressen permanent. Alle Abfragen erfolgen in Echtzeit über externe APIs 
                              (Alchemy) und werden nach der Anzeige nicht gespeichert.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 5. Ihre Rechte */}
              <section>
                <h2 className="text-2xl font-bold text-accent mb-4 flex items-center gap-2">
                  <span className="morph-icon">⚖️</span>
                  5. Ihre Rechte nach DSGVO
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { 
                      icon: '📋', 
                      title: 'Auskunftsrecht (Art. 15)', 
                      desc: 'Informationen über verarbeitete Daten',
                      action: 'Anfrage per E-Mail an privacy@chainGuard.com' 
                    },
                    { 
                      icon: '✏️', 
                      title: 'Berichtigungsrecht (Art. 16)', 
                      desc: 'Korrektur unrichtiger Daten',
                      action: 'Mitteilung der korrekten Daten' 
                    },
                    { 
                      icon: '🗑️', 
                      title: 'Löschungsrecht (Art. 17)', 
                      desc: 'Vollständige Datenlöschung',
                      action: 'Löschungsantrag mit Begründung' 
                    },
                    { 
                      icon: '🔒', 
                      title: 'Einschränkung (Art. 18)', 
                      desc: 'Beschränkung der Verarbeitung',
                      action: 'Antrag auf Einschränkung' 
                    },
                    { 
                      icon: '📤', 
                      title: 'Datenübertragbarkeit (Art. 20)', 
                      desc: 'Daten in maschinenlesbarem Format',
                      action: 'Export über Privacy-Dashboard' 
                    },
                    { 
                      icon: '❌', 
                      title: 'Widerspruchsrecht (Art. 21)', 
                      desc: 'Widerspruch gegen Verarbeitung',
                      action: 'Formloser Widerspruch möglich' 
                    }
                  ].map((right, index) => (
                    <div key={index} className="glass p-5 rounded-xl card-hover">
                      <div className="flex items-start gap-3 mb-3">
                        <span className="text-2xl morph-icon">{right.icon}</span>
                        <div>
                          <h3 className="font-semibold text-secondary text-sm mb-1">{right.title}</h3>
                          <p className="text-xs text-light/70 leading-relaxed">{right.desc}</p>
                        </div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-light/10">
                        <p className="text-xs text-light/60">
                          <strong>Ausübung:</strong> {right.action}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* 6. Datenübermittlung */}
              <section>
                <h2 className="text-2xl font-bold text-violet mb-4 flex items-center gap-2">
                  <span className="morph-icon">🌍</span>
                  6. Datenübermittlung und Drittanbieter
                </h2>
                <div className="space-y-4">
                  
                  {/* Alchemy */}
                  <div className="glass p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                      <span className="morph-icon">🔗</span>
                      Alchemy (Blockchain API)
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <h4 className="font-semibold text-secondary mb-2">Zweck:</h4>
                        <p className="text-light/80">Blockchain-Datenabfragen und Netzwerkanalyse</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary mb-2">Datenübermittlung:</h4>
                        <p className="text-light/80">Wallet-Adressen (temporär, nicht gespeichert)</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary mb-2">Standort:</h4>
                        <p className="text-light/80">USA (Privacy Shield Nachfolgeabkommen)</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary mb-2">Datenschutz:</h4>
                        <p className="text-light/80">
                          <a 
                            href="https://alchemy.com/privacy-policy" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary hover:text-secondary underline"
                          >
                            Alchemy Privacy Policy ↗
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CDN & Hosting */}
                  <div className="glass p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                      <span className="morph-icon">☁️</span>
                      Hosting & CDN
                    </h3>
                    <p className="text-sm text-light/80 mb-4">
                      Diese Website wird auf Servern in Deutschland gehostet. Alle Daten werden 
                      nach deutschen und europäischen Datenschutzstandards verarbeitet.
                    </p>
                    <div className="bg-success/10 border border-success/30 p-4 rounded-lg">
                      <div className="flex items-center gap-2">
                        <span className="text-success morph-icon">✅</span>
                        <span className="text-sm font-semibold text-success">EU-Hosting</span>
                      </div>
                      <p className="text-xs text-light/70 mt-2">
                        Alle Server befinden sich in der EU und unterliegen der DSGVO
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 7. Datensicherheit */}
              <section>
                <h2 className="text-2xl font-bold text-danger mb-4 flex items-center gap-2">
                  <span className="morph-icon">🛡️</span>
                  7. Datensicherheit
                </h2>
                <div className="glass p-6 rounded-xl">
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      {
                        icon: '🔐',
                        title: 'Verschlüsselung',
                        desc: 'TLS 1.3 Ende-zu-Ende Verschlüsselung für alle Datenübertragungen'
                      },
                      {
                        icon: '🔒',
                        title: 'Zugriffskontrolle',
                        desc: 'Strenge Zugangskontrollen und Authentifizierungsverfahren'
                      },
                      {
                        icon: '🛡️',
                        title: 'Monitoring',
                        desc: '24/7 Überwachung und Intrusion Detection Systeme'
                      }
                    ].map((measure, index) => (
                      <div key={index} className="text-center">
                        <div className="text-3xl mb-3 morph-icon">{measure.icon}</div>
                        <h3 className="font-semibold text-secondary mb-2">{measure.title}</h3>
                        <p className="text-xs text-light/70 leading-relaxed">{measure.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* 8. Kontakt */}
              <section>
                <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                  <span className="morph-icon">📧</span>
                  8. Kontakt und Beschwerden
                </h2>
                <div className="glass p-6 rounded-xl">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-secondary mb-3">Datenschutzanfragen:</h3>
                      <div className="space-y-2 text-sm">
                        <p><strong>E-Mail:</strong> privacy@chainGuard.com</p>
                        <p><strong>Antwortzeit:</strong> Binnen 30 Tagen</p>
                        <p><strong>Kostenlos:</strong> Erste Auskunft kostenfrei</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary mb-3">Aufsichtsbehörde:</h3>
                      <div className="text-sm text-light/80">
                        <p>Berliner Beauftragte für Datenschutz und Informationsfreiheit</p>
                        <p>Friedrichstr. 219</p>
                        <p>10969 Berlin</p>
                        <p className="mt-2">
                          <a 
                            href="https://www.datenschutz-berlin.de" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary hover:text-secondary underline"
                          >
                            www.datenschutz-berlin.de ↗
                          </a>
                        </p>
                      </div>
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
