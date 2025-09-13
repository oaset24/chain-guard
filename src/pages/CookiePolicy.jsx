
export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-gray-900 to-dark bg-mesh-pattern relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(74,111,165,0.2),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(201,162,39,0.15),transparent_50%)] pointer-events-none"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 mb-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold gradient-text mb-4 flex items-center justify-center gap-3">
                <span className="morph-icon">🍪</span>
                Cookie-Richtlinie
              </h1>
              <p className="text-light/70">Umfassende Informationen über unsere Cookie-Verwendung</p>
              <p className="text-light/60 text-sm mt-2">Stand: {new Date().toLocaleDateString('de-DE')}</p>
            </div>

            <div className="space-y-8 text-light/90">
              
              {/* Was sind Cookies */}
              <section>
                <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                  <span className="morph-icon">🍪</span>
                  Was sind Cookies?
                </h2>
                <div className="glass p-6 rounded-xl">
                  <p className="text-sm text-light/80 leading-relaxed mb-4">
                    Cookies sind kleine Textdateien, die von Ihrem Webbrowser auf Ihrem Endgerät gespeichert werden. 
                    Sie ermöglichen es uns, bestimmte Informationen über Ihre Website-Nutzung zu sammeln und Ihnen 
                    ein besseres Erlebnis zu bieten.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-success/10 border border-success/30 p-4 rounded-lg">
                      <h3 className="font-semibold text-success mb-2 flex items-center gap-2">
                        <span className="morph-icon">✅</span>
                        Vorteile von Cookies
                      </h3>
                      <ul className="text-xs text-light/70 space-y-1">
                        <li>• Personalisierte Benutzererfahrung</li>
                        <li>• Gespeicherte Einstellungen</li>
                        <li>• Verbesserte Website-Performance</li>
                        <li>• Analysemöglichkeiten</li>
                      </ul>
                    </div>
                    <div className="bg-warning/10 border border-warning/30 p-4 rounded-lg">
                      <h3 className="font-semibold text-warning mb-2 flex items-center gap-2">
                        <span className="morph-icon">🔒</span>
                        Ihre Kontrolle
                      </h3>
                      <ul className="text-xs text-light/70 space-y-1">
                        <li>• Vollständige Transparenz</li>
                        <li>• Granulare Einstellungen</li>
                        <li>• Jederzeit änderbar</li>
                        <li>• Opt-out jederzeit möglich</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Cookie-Kategorien */}
              <section>
                <h2 className="text-2xl font-bold text-secondary mb-4 flex items-center gap-2">
                  <span className="morph-icon">📊</span>
                  Cookie-Kategorien
                </h2>
                <div className="space-y-6">
                  
                  {/* Notwendige Cookies */}
                  <div className="glass p-6 rounded-xl">
                    <div className="flex items-start gap-4 mb-4">
                      <span className="text-3xl morph-icon">🔒</span>
                      <div>
                        <h3 className="text-xl font-bold text-success mb-2">Notwendige Cookies</h3>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-success/20 border border-success/30 rounded-full text-xs text-success font-semibold mb-4">
                          <span>✅</span>
                          <span>Immer aktiv - Keine Einwilligung erforderlich</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-sm text-light/80 leading-relaxed mb-6">
                      Diese Cookies sind für das Funktionieren der Website unbedingt erforderlich und können 
                      nicht deaktiviert werden. Sie werden nur als Reaktion auf Ihre Handlungen gesetzt.
                    </p>

                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-light/20">
                            <th className="text-left py-3 px-2 text-secondary font-semibold">Cookie-Name</th>
                            <th className="text-left py-3 px-2 text-secondary font-semibold">Zweck</th>
                            <th className="text-left py-3 px-2 text-secondary font-semibold">Laufzeit</th>
                          </tr>
                        </thead>
                        <tbody className="text-light/80">
                          <tr className="border-b border-light/10">
                            <td className="py-3 px-2 font-mono text-xs">chainGuard_session</td>
                            <td className="py-3 px-2">Sitzungsverwaltung</td>
                            <td className="py-3 px-2">Session</td>
                          </tr>
                          <tr className="border-b border-light/10">
                            <td className="py-3 px-2 font-mono text-xs">chainGuard_cookie_consent</td>
                            <td className="py-3 px-2">Speichert Cookie-Einwilligung</td>
                            <td className="py-3 px-2">365 Tage</td>
                          </tr>
                          <tr className="border-b border-light/10">
                            <td className="py-3 px-2 font-mono text-xs">chainGuard_cookie_preferences</td>
                            <td className="py-3 px-2">Cookie-Einstellungen</td>
                            <td className="py-3 px-2">365 Tage</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="glass p-6 rounded-xl">
                    <div className="flex items-start gap-4 mb-4">
                      <span className="text-3xl morph-icon">📊</span>
                      <div>
                        <h3 className="text-xl font-bold text-warning mb-2">Analytics-Cookies</h3>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-warning/20 border border-warning/30 rounded-full text-xs text-warning font-semibold mb-4">
                          <span>⚠️</span>
                          <span>Opt-in erforderlich</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-light/80 leading-relaxed mb-6">
                      Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren, 
                      indem sie Informationen anonym sammeln und weitergeben.
                    </p>

                    <div className="bg-warning/10 border border-warning/30 p-4 rounded-lg mb-6">
                      <div className="flex items-start gap-3">
                        <span className="text-warning morph-icon">🔒</span>
                        <div>
                          <h4 className="font-semibold text-warning mb-2">Datenschutz-freundlich:</h4>
                          <ul className="text-xs text-light/70 space-y-1">
                            <li>• IP-Adressen werden anonymisiert</li>
                            <li>• Keine personenbezogenen Daten</li>
                            <li>• Aggregierte Statistiken nur</li>
                            <li>• Kein Cross-Site-Tracking</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-light/20">
                            <th className="text-left py-3 px-2 text-secondary font-semibold">Cookie-Name</th>
                            <th className="text-left py-3 px-2 text-secondary font-semibold">Anbieter</th>
                            <th className="text-left py-3 px-2 text-secondary font-semibold">Zweck</th>
                            <th className="text-left py-3 px-2 text-secondary font-semibold">Laufzeit</th>
                          </tr>
                        </thead>
                        <tbody className="text-light/80">
                          <tr className="border-b border-light/10">
                            <td className="py-3 px-2 font-mono text-xs">_ga</td>
                            <td className="py-3 px-2">Google Analytics</td>
                            <td className="py-3 px-2">Benutzer-Identifikation</td>
                            <td className="py-3 px-2">2 Jahre</td>
                          </tr>
                          <tr className="border-b border-light/10">
                            <td className="py-3 px-2 font-mono text-xs">_ga_*</td>
                            <td className="py-3 px-2">Google Analytics</td>
                            <td className="py-3 px-2">Sitzungsdaten</td>
                            <td className="py-3 px-2">2 Jahre</td>
                          </tr>
                          <tr className="border-b border-light/10">
                            <td className="py-3 px-2 font-mono text-xs">chainGuard_analytics</td>
                            <td className="py-3 px-2">Plausible.io</td>
                            <td className="py-3 px-2">Privacy-first Analytics</td>
                            <td className="py-3 px-2">24 Stunden</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="glass p-6 rounded-xl">
                    <div className="flex items-start gap-4 mb-4">
                      <span className="text-3xl morph-icon">📈</span>
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-2">Marketing-Cookies</h3>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 border border-primary/30 rounded-full text-xs text-primary font-semibold mb-4">
                          <span>🎯</span>
                          <span>Opt-in erforderlich</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-light/80 leading-relaxed mb-6">
                      Diese Cookies werden verwendet, um Ihnen relevante Werbung zu zeigen und 
                      die Effektivität unserer Werbekampagnen zu messen.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-primary/10 border border-primary/30 p-4 rounded-lg">
                        <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                          <span className="morph-icon">🎯</span>
                          Verwendung
                        </h4>
                        <ul className="text-xs text-light/70 space-y-1">
                          <li>• Personalisierte Werbung</li>
                          <li>• Retargeting-Kampagnen</li>
                          <li>• Affiliate-Tracking</li>
                          <li>• Conversion-Messung</li>
                        </ul>
                      </div>
                      <div className="bg-danger/10 border border-danger/30 p-4 rounded-lg">
                        <h4 className="font-semibold text-danger mb-2 flex items-center gap-2">
                          <span className="morph-icon">🚫</span>
                          Ohne Einwilligung
                        </h4>
                        <ul className="text-xs text-light/70 space-y-1">
                          <li>• Keine personalisierten Anzeigen</li>
                          <li>• Generische Werbeinhalte</li>
                          <li>• Kein Cross-Site-Tracking</li>
                          <li>• DSGVO-konforme Alternativen</li>
                        </ul>
                      </div>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-light/20">
                            <th className="text-left py-3 px-2 text-secondary font-semibold">Cookie-Name</th>
                            <th className="text-left py-3 px-2 text-secondary font-semibold">Anbieter</th>
                            <th className="text-left py-3 px-2 text-secondary font-semibold">Zweck</th>
                            <th className="text-left py-3 px-2 text-secondary font-semibold">Laufzeit</th>
                          </tr>
                        </thead>
                        <tbody className="text-light/80">
                          <tr className="border-b border-light/10">
                            <td className="py-3 px-2 font-mono text-xs">ads_preferences</td>
                            <td className="py-3 px-2">Google Ads</td>
                            <td className="py-3 px-2">Werbepräferenzen</td>
                            <td className="py-3 px-2">13 Monate</td>
                          </tr>
                          <tr className="border-b border-light/10">
                            <td className="py-3 px-2 font-mono text-xs">affiliate_ref</td>
                            <td className="py-3 px-2">ChainGuard</td>
                            <td className="py-3 px-2">Affiliate-Tracking</td>
                            <td className="py-3 px-2">30 Tage</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Performance Cookies */}
                  <div className="glass p-6 rounded-xl">
                    <div className="flex items-start gap-4 mb-4">
                      <span className="text-3xl morph-icon">⚡</span>
                      <div>
                        <h3 className="text-xl font-bold text-accent mb-2">Performance-Cookies</h3>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/20 border border-accent/30 rounded-full text-xs text-accent font-semibold mb-4">
                          <span>⚡</span>
                          <span>Opt-in erforderlich</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-light/80 leading-relaxed mb-4">
                      Diese Cookies sammeln Informationen darüber, wie Besucher die Website nutzen, 
                      um die Performance und Benutzerfreundlichkeit zu verbessern.
                    </p>

                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-light/20">
                            <th className="text-left py-3 px-2 text-secondary font-semibold">Cookie-Name</th>
                            <th className="text-left py-3 px-2 text-secondary font-semibold">Zweck</th>
                            <th className="text-left py-3 px-2 text-secondary font-semibold">Laufzeit</th>
                          </tr>
                        </thead>
                        <tbody className="text-light/80">
                          <tr className="border-b border-light/10">
                            <td className="py-3 px-2 font-mono text-xs">performance_metrics</td>
                            <td className="py-3 px-2">Ladezeiten-Analyse</td>
                            <td className="py-3 px-2">7 Tage</td>
                          </tr>
                          <tr className="border-b border-light/10">
                            <td className="py-3 px-2 font-mono text-xs">user_preferences</td>
                            <td className="py-3 px-2">UI-Einstellungen</td>
                            <td className="py-3 px-2">365 Tage</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </section>

              {/* Cookie-Management */}
              <section>
                <h2 className="text-2xl font-bold text-violet mb-4 flex items-center gap-2">
                  <span className="morph-icon">⚙️</span>
                  Cookie-Management
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  
                  <div className="glass p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                      <span className="morph-icon">🎛️</span>
                      Ihre Einstellungen ändern
                    </h3>
                    <div className="space-y-4">
                      <p className="text-sm text-light/80">
                        Sie können Ihre Cookie-Einstellungen jederzeit anpassen:
                      </p>
                      <button
                        onClick={() => window.dispatchEvent(new CustomEvent('openCookieSettings'))}
                        className="btn-primary px-6 py-3 text-white font-bold w-full group"
                      >
                        <span className="flex items-center justify-center gap-2">
                          <span className="morph-icon group-hover:scale-110">🍪</span>
                          Cookie-Einstellungen öffnen
                        </span>
                      </button>
                      <p className="text-xs text-light/60">
                        Ihre Änderungen werden sofort wirksam und für zukünftige Besuche gespeichert.
                      </p>
                    </div>
                  </div>

                  <div className="glass p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-secondary mb-4 flex items-center gap-2">
                      <span className="morph-icon">🌐</span>
                      Browser-Einstellungen
                    </h3>
                    <div className="space-y-3">
                      <p className="text-sm text-light/80 mb-4">
                        Sie können Cookies auch direkt in Ihrem Browser verwalten:
                      </p>
                      <div className="space-y-2 text-xs">
                        {[
                          { browser: 'Chrome', shortcut: 'Ctrl+Shift+Delete' },
                          { browser: 'Firefox', shortcut: 'Ctrl+Shift+Delete' },
                          { browser: 'Safari', shortcut: 'Cmd+Option+E' },
                          { browser: 'Edge', shortcut: 'Ctrl+Shift+Delete' }
                        ].map((item, index) => (
                          <div key={index} className="flex items-center justify-between glass p-2 rounded">
                            <span className="font-medium">{item.browser}</span>
                            <span className="font-mono text-light/60">{item.shortcut}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Drittanbieter-Cookies */}
              <section>
                <h2 className="text-2xl font-bold text-danger mb-4 flex items-center gap-2">
                  <span className="morph-icon">🔗</span>
                  Drittanbieter-Cookies
                </h2>
                <div className="glass p-6 rounded-xl">
                  <p className="text-sm text-light/80 leading-relaxed mb-6">
                    Einige Cookies werden von Drittanbietern gesetzt. Hier sind die wichtigsten 
                    Dienste und Links zu deren Datenschutzrichtlinien:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      {
                        name: 'Google Analytics',
                        purpose: 'Website-Analyse',
                        privacy: 'https://policies.google.com/privacy',
                        optout: 'https://tools.google.com/dlpage/gaoptout'
                      },
                      {
                        name: 'Google Ads',
                        purpose: 'Werbeanzeigen',
                        privacy: 'https://policies.google.com/privacy',
                        optout: 'https://adssettings.google.com/'
                      },
                      {
                        name: 'Plausible.io',
                        purpose: 'Privacy-first Analytics',
                        privacy: 'https://plausible.io/privacy',
                        optout: 'Cookie-basiert'
                      },
                      {
                        name: 'Buy me a Coffee',
                        purpose: 'Spenden-Widget',
                        privacy: 'https://buymeacoffee.com/privacy',
                        optout: 'Cookie-Einstellungen'
                      }
                    ].map((service, index) => (
                      <div key={index} className="glass p-4 rounded-lg">
                        <h4 className="font-semibold text-primary mb-2">{service.name}</h4>
                        <p className="text-xs text-light/70 mb-3">{service.purpose}</p>
                        <div className="space-y-2">
                          <a
                            href={service.privacy}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-xs text-secondary hover:text-primary underline"
                          >
                            Datenschutzrichtlinie ↗
                          </a>
                          <p className="text-xs text-light/60">
                            <strong>Opt-out:</strong> {service.optout}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Kontakt */}
              <section>
                <h2 className="text-2xl font-bold text-accent mb-4 flex items-center gap-2">
                  <span className="morph-icon">📞</span>
                  Fragen zu Cookies?
                </h2>
                <div className="glass p-6 rounded-xl">
                  <div className="text-center">
                    <p className="text-sm text-light/80 mb-6">
                      Haben Sie Fragen zu unserer Cookie-Verwendung? Kontaktieren Sie uns!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                      <button
                        onClick={() => window.open('mailto:privacy@chainGuard.com', '_blank')}
                        className="px-6 py-3 glass hover-glow text-light font-medium rounded-xl transition-all group"
                      >
                        <span className="flex items-center gap-2">
                          <span className="morph-icon group-hover:scale-110">📧</span>
                          privacy@chainGuard.com
                        </span>
                      </button>
                      <div className="text-xs text-light/60">
                        Antwortzeit: Binnen 48 Stunden
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
