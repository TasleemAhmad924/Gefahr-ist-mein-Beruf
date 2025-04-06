"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./dialog"
import { Switch } from "./switch"
import { Button } from "./button"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface CookiePreferences {
  googleAnalytics: boolean
  posthog: boolean
}

export function CookieConsent() {
  const [mounted, setMounted] = useState(false)
  const [showBanner, setShowBanner] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    googleAnalytics: false,
    posthog: false,
  })
  const [showGoogleAnalyticsDetails, setShowGoogleAnalyticsDetails] = useState(false)

  // Handle initial mount and check for existing preferences
  useEffect(() => {
    const checkConsent = () => {
      const consent = localStorage.getItem("cookie-consent")
      if (!consent) {
        setShowBanner(true)
      } else {
        try {
          const savedPreferences = JSON.parse(consent)
          setPreferences(savedPreferences)
        } catch (e) {
          console.error('Error parsing stored cookie preferences:', e)
          setShowBanner(true)
        }
      }
    }

    // Set mounted first, then check consent
    setMounted(true)
    checkConsent()
  }, [])

  // Debug useEffect to track state changes
  useEffect(() => {
    if (mounted) {
      console.log('Component mounted, banner visibility:', showBanner)
    }
  }, [mounted, showBanner])

  const handleAcceptAll = () => {
    const newPreferences = {
      googleAnalytics: true,
      posthog: true,
    }
    setPreferences(newPreferences)
    savePreferences(newPreferences)
    setShowBanner(false)
  }

  const handleDecline = () => {
    const newPreferences = {
      googleAnalytics: false,
      posthog: false,
    }
    setPreferences(newPreferences)
    savePreferences(newPreferences)
    setShowBanner(false)
  }

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem("cookie-consent", JSON.stringify(prefs))
    
    // Push to dataLayer for GTM
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'cookie_consent_update',
        cookie_consent: {
          analytics: prefs.googleAnalytics,
          posthog: prefs.posthog
        }
      })
    }

    // Initialize services based on preferences
    if (prefs.googleAnalytics) {
      window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' })
    }
    
    if (prefs.posthog) {
      // Initialize PostHog
      if (typeof window.posthog !== 'undefined') {
        window.posthog.opt_in_capturing()
      }
    } else {
      if (typeof window.posthog !== 'undefined') {
        window.posthog.opt_out_capturing()
      }
    }
  }

  const handleSavePreferences = () => {
    savePreferences(preferences)
    setShowPreferences(false)
    setShowBanner(false)
  }

  // Wait for component to mount before rendering
  if (!mounted) {
    return null
  }

  // Show the banner if showBanner is true
  return showBanner ? (
    <>
      <div className="fixed inset-x-0 bottom-0 z-50 p-4 md:p-0 md:bottom-4 md:inset-x-auto md:right-4">
        <div className="w-full md:w-[420px] bg-white rounded-2xl shadow-lg p-6">
          <div className="flex flex-col gap-5">
            <div className="space-y-2">
              <p className="text-[16px] leading-relaxed text-gray-700">
                Wir verwenden Cookies und ähnliche Technologien auf unserer Website und verarbeiten personenbezogene Daten von dir (z. B. IP-Adresse), um die Nutzung unserer Website zu analysieren und zu verbessern.
              </p>
              <div className="flex gap-2 text-[12px] text-gray-500">
                <Link 
                  href="/datenschutz" 
                  className="underline hover:text-gray-700"
                >
                  Datenschutzerklärung
                </Link>
                <span>•</span>
                <Link 
                  href="/impressum" 
                  className="underline hover:text-gray-700"
                >
                  Impressum
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                onClick={() => setShowPreferences(true)}
                className="px-4 py-2.5 text-[14px] font-normal text-gray-700 bg-white rounded-xl border border-gray-200 hover:bg-gray-50"
              >
                Einstellungen
                <br />
                verwalten
              </button>
              <button
                onClick={handleDecline}
                className="px-4 py-2.5 text-[14px] font-normal text-gray-700 bg-gray-100 rounded-xl border border-gray-200 hover:bg-gray-200"
              >
                Alle
                <br />
                ablehnen
              </button>
              <button 
                onClick={handleAcceptAll} 
                className="px-4 py-2.5 text-[14px] font-normal text-white bg-red-500 rounded-xl hover:bg-red-600"
              >
                Alle
                <br />
                akzeptieren
              </button>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={showPreferences} onOpenChange={setShowPreferences}>
        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-hidden flex flex-col">
          <DialogHeader className="border-b pb-4">
            <DialogTitle className="text-xl">Privatsphäre-Einstellungen</DialogTitle>
          </DialogHeader>

          <div className="flex-1 overflow-y-auto px-6">
            <div className="space-y-8 py-6">
              {/* Introduction Section */}
              <section>
                <p className="text-sm leading-relaxed text-gray-700">
                  Wir verwenden Cookies und ähnliche Technologien auf unserer Website und verarbeiten personenbezogene Daten von dir (z. B. IP-Adresse), um die Nutzung unserer Website zu analysieren und zu verbessern. Die Datenverarbeitung kann auch erst in Folge gesetzter Cookies stattfinden. Wir teilen diese Daten mit Dritten, die wir in den Privatsphäre-Einstellungen benennen.
                </p>
              </section>

              {/* Services Section */}
              <section>
                <h3 className="text-lg font-semibold mb-4">Genutzte Dienste</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0">•</span>
                    <span>Google Analytics (Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA) – Zur Analyse des Nutzerverhaltens auf unserer Website</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0">•</span>
                    <span>Google Tag Manager (Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA) – Zur Verwaltung und Steuerung von Website-Tags</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0">•</span>
                    <span>PostHog (PostHog Inc., 2261 Market Street #4008, San Francisco, CA 94114, USA) – Zur Verbesserung der Benutzererfahrung durch anonymisierte Analyse</span>
                  </li>
                </ul>
              </section>

              {/* Data Processing Section */}
              <section>
                <h3 className="text-lg font-semibold mb-4">Datenverarbeitung</h3>
                <div className="space-y-4 text-sm leading-relaxed text-gray-700">
                  <p>
                    Die Datenverarbeitung kann mit deiner Einwilligung oder auf Basis eines berechtigten Interesses erfolgen, dem du in den Privatsphäre-Einstellungen widersprechen kannst. Du hast das Recht, nicht einzuwilligen und deine Einwilligung zu einem späteren Zeitpunkt zu ändern oder zu widerrufen.
                  </p>
                  <p>
                    Einige Services setzen Cookies und/oder verarbeiten personenbezogene Daten, ohne die Standards für die Mitteilung der Einwilligung einzuhalten. Diese Services werden in mehrere Gruppen eingeteilt. Sogenannte "essenzielle Services" werden auf Basis eines berechtigten Interesses genutzt und können nicht abgewählt werden (ein Widerspruch muss ggf. per E-Mail oder Brief gemäß der Datenschutzerklärung erfolgen), während alle anderen Services nur nach einer Einwilligung genutzt werden.
                  </p>
                </div>
              </section>

              {/* Third-country Transfers Section */}
              <section>
                <h3 className="text-lg font-semibold mb-4">Drittland-Übermittlungen</h3>
                <p className="text-sm leading-relaxed text-gray-700">
                  Einige dieser Dienste verarbeiten personenbezogene Daten in unsicheren Drittländern, insbesondere in den USA. Mit deiner Einwilligung stimmst du der Datenverarbeitung gekennzeichneter Dienste gemäß Art. 49 Abs. 1 lit. a DSGVO zu. Dabei können Risiken wie unzureichende Rechtsmittel, unbefugter Zugriff durch Behörden oder unzureichende Datensicherheitsmaßnahmen bestehen.
                </p>
              </section>

              {/* Age Warning Section */}
              <section className="bg-red-50 p-4 rounded-lg">
                <p className="text-sm text-red-600 font-medium">
                  Du bist unter 16 Jahre alt? Dann kannst du nicht in optionale Services einwilligen. Bitte bitte deine Eltern oder Erziehungsberechtigten, diese Einwilligung mit dir zu treffen.
                </p>
              </section>

              {/* Cookie Settings Section */}
              <section>
                <h3 className="text-lg font-semibold mb-4">Cookie-Einstellungen</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="space-y-1">
                      <h4 className="font-medium">Essenzielle Services</h4>
                      <p className="text-sm text-gray-500">
                        Diese können nicht deaktiviert werden.
                      </p>
                    </div>
                    <Switch checked={true} disabled />
                  </div>

                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between p-4">
                        <div className="space-y-1">
                          <h4 className="font-medium">Statistik-Services</h4>
                          <p className="text-sm text-gray-500">
                            Google Analytics, PostHog – Helfen uns, die Nutzung der Website besser zu verstehen.
                          </p>
                        </div>
                        <Switch
                          checked={preferences.googleAnalytics && preferences.posthog}
                          onCheckedChange={(checked) =>
                            setPreferences((prev) => ({
                              googleAnalytics: checked,
                              posthog: checked,
                            }))
                          }
                        />
                      </div>

                      {/* Google Analytics Details Accordion */}
                      <div className="border-t border-gray-200">
                        <button
                          onClick={() => setShowGoogleAnalyticsDetails(!showGoogleAnalyticsDetails)}
                          className="flex items-center justify-between w-full p-4 text-left"
                          aria-expanded={showGoogleAnalyticsDetails}
                          aria-controls="google-analytics-details"
                        >
                          <span className="text-sm font-medium">Details zu Google Analytics</span>
                          <ChevronDown 
                            className={cn(
                              "h-4 w-4 text-gray-500 transition-transform duration-200",
                              showGoogleAnalyticsDetails ? "transform rotate-180" : ""
                            )}
                          />
                        </button>
                        
                        <div
                          id="google-analytics-details"
                          role="region"
                          aria-hidden={!showGoogleAnalyticsDetails}
                          className={cn(
                            "overflow-hidden transition-all duration-200",
                            showGoogleAnalyticsDetails ? "max-h-[2000px]" : "max-h-0"
                          )}
                        >
                          <div className="p-4 space-y-4 text-sm text-gray-700 border-t border-gray-200">
                            <p>
                              Google Analytics erstellt detaillierte Statistiken über das Nutzerverhalten auf der Website, um Analyseinformationen zu erhalten. Dazu müssen die IP-Adresse eines Nutzers und Metadaten verarbeitet werden, mit denen das Land, die Stadt und die Sprache eines Nutzers bestimmt werden können. Cookies oder Cookie-ähnliche Technologien können gespeichert und gelesen werden. Diese können persönliche Daten und technische Daten wie die Nutzer-ID enthalten, die folgende zusätzliche Informationen liefern können:
                            </p>
                            
                            <ul className="list-disc pl-5 space-y-2">
                              <li>Zeitinformationen darüber, wann und wie lange ein Nutzer auf den verschiedenen Seiten der Website war oder ist</li>
                              <li>Gerätekategorie (Desktop, Handy und Tablet), Plattform (Web, iOS-App oder Android-App), Browser und Bildschirmauflösung, die ein Nutzer verwendet hat</li>
                              <li>woher ein Nutzer kam (z. B. Herkunftswebsite, Suchmaschine einschließlich des gesuchten Begriffs, Social Media-Plattform, Newsletter, organisches Video, bezahlte Suche oder Kampagne)</li>
                              <li>ob ein Nutzer zu einer Zielgruppe gehört oder nicht</li>
                              <li>was ein Nutzer auf der Website getan hat und welche Ereignisse durch die Aktionen des Nutzers ausgelöst wurden</li>
                              <li>Konversionen (z. B. ob ein Nutzer etwas gekauft hat und was gekauft wurde)</li>
                              <li>Geschlecht, Alter und Interessen, wenn eine Zuordnung möglich ist</li>
                            </ul>

                            <div className="space-y-4 mt-6">
                              <h5 className="font-medium">Datenverarbeitung und -weitergabe</h5>
                              <p>
                                Diese Daten könnten von Google auch verwendet werden, um die besuchten Websites zu erfassen und um die Dienste von Google zu verbessern. Sie können über mehrere Domains verknüpft werden und mit anderen Google-Produkten verbunden werden. Google gibt personenbezogene Daten an seine verbundenen Unternehmen und andere vertrauenswürdige Unternehmen weiter.
                              </p>
                            </div>

                            <div className="space-y-4">
                              <h5 className="font-medium">Rechtliche Grundlage</h5>
                              <p>Verwendung auf gesetzlicher Grundlage von: Einwilligung</p>
                              
                              <div>
                                <h6 className="font-medium mb-2">Zusätzliche Zwecke der Datenverarbeitung:</h6>
                                <ul className="list-disc pl-5 space-y-2">
                                  <li>Speicherung und Auslesen von Daten wie Cookies im Zusammenhang mit Werbung</li>
                                  <li>Speichern und Auslesen von Daten im Zusammenhang mit Analysen</li>
                                  <li>Auswertung und Anzeige von personalisierter Werbung</li>
                                  <li>Übermitteln von Nutzerdaten an Google für Online-Werbezwecke</li>
                                </ul>
                              </div>
                            </div>

                            <div className="space-y-4">
                              <h5 className="font-medium">Anbieterinformationen</h5>
                              <div className="space-y-2">
                                <p>Google Ireland Limited</p>
                                <p>Gordon House, Barrow Street, Dublin 4, Irland</p>
                                <p>Telefon: +353 1 543 1000</p>
                                <p>E-Mail: dpo-google@google.com</p>
                                <div className="space-y-1">
                                  <Link href="https://support.google.com/" className="text-primary hover:underline block">Kontaktformular</Link>
                                  <Link href="https://business.safety.google/intl/de/privacy/" className="text-primary hover:underline block">Datenschutzerklärung</Link>
                                  <Link href="https://www.google.de/contact/impressum.html" className="text-primary hover:underline block">Impressum</Link>
                                </div>
                              </div>
                            </div>

                            <div className="space-y-4">
                              <h5 className="font-medium">Cookie-Informationen</h5>
                              <div className="space-y-4">
                                <div className="bg-gray-100 p-3 rounded">
                                  <p className="font-medium">Analyse Cookie</p>
                                  <div className="mt-2 space-y-1 text-sm">
                                    <p>Host: www.gefahr-ist-mein-beruf.com</p>
                                    <p>Typ: HTTP Cookie</p>
                                    <p>Dauer: 24 Monate</p>
                                    <p>Zweck: Benutzer-ID zur Analyse des allgemeinen Benutzerverhaltens auf verschiedenen Websites</p>
                                  </div>
                                </div>
                                
                                <div className="bg-gray-100 p-3 rounded">
                                  <p className="font-medium">Website-spezifisches Analyse Cookie</p>
                                  <div className="mt-2 space-y-1 text-sm">
                                    <p>Host: www.gefahr-ist-mein-beruf.com</p>
                                    <p>Typ: HTTP Cookie</p>
                                    <p>Dauer: 24 Monate</p>
                                    <p>Zweck: Benutzer-ID zur Analyse des Benutzerverhaltens auf dieser Website für Berichte über die Nutzung der Website</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Google Consent Mode Info */}
              <section className="border-t pt-4">
                <h3 className="text-lg font-semibold mb-4">Google Consent Mode</h3>
                <div className="space-y-4 text-sm text-gray-700">
                  <p>
                    Wir nutzen den Google Consent Mode, um sicherzustellen, dass Google-Dienste nur mit deiner Zustimmung Daten verarbeiten.
                  </p>
                  <p>
                    Der Google Consent Mode ist ein Standard für die Einholung von Einwilligungen zur Verarbeitung personenbezogener Daten und zum Setzen von Cookies durch teilnehmende Partner. Es besteht die Möglichkeit Einwilligungen zur Datenverarbeitung für definierte Zwecke zu erteilen, sodass auf dieser Website eingesetzte Google-Services und die mit Google Tag integrierten Tags von Drittanbietern Daten nur im gewünschen Maße verarbeiten können.
                  </p>
                  <p>
                    Wenn du nicht einwillgst, erhältst du ein Service, der für dich weniger personalisiert ist. Die wichtigsten Leistungen bleiben jedoch dieselben und es gibt keine fehlenden Features, die nicht unbedingt deine Einwilligung erfordern.
                  </p>
                  <p>
                    Unabhängig davon besteht im Abschnitt "Nicht standardisierte Datenverarbeitung" die Möglichkeit, in den Einsatz von Services einzuwilligen oder das Recht auf Widerspruch gegen berechtigte Interessen auszuüben. Einzelheiten zur spezifischen Datenverarbeitung sind in dem benannten Abschnitt zu finden.
                  </p>
                  <p className="text-sm text-gray-500">
                    Weitere Informationen zur Verarbeitung personenbezogener Daten durch Google und Partner findest du <Link href="https://business.safety.google/intl/de/privacy/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">hier</Link>.
                  </p>
                </div>
              </section>
            </div>
          </div>

          <div className="border-t mt-auto">
            <div className="flex flex-col-reverse sm:flex-row gap-2 justify-end p-4">
              <Button variant="outline" onClick={() => setShowPreferences(false)}>
                Abbrechen
              </Button>
              <Button onClick={handleSavePreferences} className="bg-primary hover:bg-primary/90">
                Einstellungen speichern
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  ) : null
} 