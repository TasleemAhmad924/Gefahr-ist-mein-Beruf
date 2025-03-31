"use client"

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* Header */}
      <header className="border-b-2 border-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[90rem] mx-auto py-6">
            <Link href="/" className="inline-block">
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-[1.02] transform min-h-[48px]"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Zurück zur Startseite
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[90rem] mx-auto">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black mb-12">
                Impressum
              </h1>
              
              <div className="prose prose-lg max-w-none space-y-12">
                <section className="space-y-6">
                  <div className="bg-primary/5 p-6 rounded-lg space-y-2">
                    <p className="font-bold text-xl">Wifka GmbH</p>
                    <div className="space-y-1">
                      <p>Breslauer Str. 22</p>
                      <p>23611 Bad Schwartau</p>
                    </div>
                    <div className="space-y-1 mt-4">
                      <p>Tel: <a href="tel:+4917183618680" className="text-primary hover:underline">+49 171 83 61 86 8</a></p>
                      <p>Telefax: +49 (0)451/8104516</p>
                      <p>E-Mail: <a href="mailto:info@wifka.de" className="text-primary hover:underline">info@wifka.de</a></p>
                      <p>Internet: <a href="https://www.wifka.de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.wifka.de</a></p>
                    </div>
                  </div>

                  <div className="space-y-4 mt-8">
                    <h2 className="text-2xl font-bold text-black">Unternehmensdetails</h2>
                    <div className="space-y-2">
                      <p><strong>Geschäftsführer:</strong> Josef Resch</p>
                      <p><strong>Registergericht:</strong> Amtsgericht Lübeck</p>
                      <p><strong>Registernummer:</strong> HRB 6062 HL</p>
                      <p><strong>St.Nr.:</strong> 22288 16503</p>
                      <p><strong>UstID:</strong> DE 243185098</p>
                    </div>
                  </div>

                  <div className="space-y-4 mt-8">
                    <h2 className="text-2xl font-bold text-black">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h2>
                    <div className="space-y-2">
                      <p>Josef Resch</p>
                      <p>Breslauer Str. 22</p>
                      <p>23611 Bad Schwartau</p>
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-lg mt-8">
                    <p className="text-foreground leading-relaxed">
                      Bitte beachten Sie, dass Aufträge und Verträge mit der Firma Wifka aus Sicherheitsgründen ausschließlich mit Herrn Josef Resch abgeschlossen werden können. Nur diese Verträge sind gültig.
                    </p>
                  </div>

                  <div className="space-y-8 mt-12">
                    <h2 className="text-2xl font-bold text-black">Disclaimer</h2>
                    
                    <section className="space-y-4">
                      <h3 className="text-xl font-semibold text-black">Haftung für Inhalte</h3>
                      <p className="text-foreground leading-relaxed">
                        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                      </p>
                      <p className="text-foreground leading-relaxed">
                        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                      </p>
                    </section>

                    <section className="space-y-4">
                      <h3 className="text-xl font-semibold text-black">Haftung für Links</h3>
                      <p className="text-foreground leading-relaxed">
                        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                      </p>
                      <p className="text-foreground leading-relaxed">
                        Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                      </p>
                    </section>

                    <section className="space-y-4">
                      <h3 className="text-xl font-semibold text-black">Urheberrecht</h3>
                      <p className="text-foreground leading-relaxed">
                        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                      </p>
                      <p className="text-foreground leading-relaxed">
                        Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                      </p>
                    </section>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-16 md:py-24 border-t-2 border-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[90rem] mx-auto">
            <div className="text-center">
              <p className="text-sm text-foreground">
                © {new Date().getFullYear()} Wifka GmbH. Alle Rechte vorbehalten.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 