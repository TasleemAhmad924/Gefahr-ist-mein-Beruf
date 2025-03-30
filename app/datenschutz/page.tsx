"use client"

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function DatenschutzPage() {
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
                Datenschutzerklärung
              </h1>
              
              <div className="prose prose-lg max-w-none space-y-12">
                <section className="space-y-6">
                  <h2 className="text-2xl font-bold text-black">1. Datenschutz auf einen Blick</h2>
                  <h3 className="text-xl font-semibold text-black">Allgemeine Hinweise</h3>
                  <p className="text-foreground leading-relaxed">
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                  </p>
                </section>

                <section className="space-y-6">
                  <h3 className="text-xl font-semibold text-black">Datenerfassung auf dieser Website</h3>
                  <div className="space-y-4">
                    <h4 className="text-lg font-medium text-black">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
                    <p className="text-foreground leading-relaxed">
                      Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                    </p>
                  </div>
                </section>

                <section className="space-y-6">
                  <h4 className="text-lg font-medium text-black">Wie erfassen wir Ihre Daten?</h4>
                  <div className="space-y-4">
                    <p className="text-foreground leading-relaxed">
                      Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                    </p>
                    <p className="text-foreground leading-relaxed">
                      Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
                    </p>
                  </div>
                </section>

                <section className="space-y-6">
                  <h4 className="text-lg font-medium text-black">Wofür nutzen wir Ihre Daten?</h4>
                  <p className="text-foreground leading-relaxed">
                    Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                  </p>
                </section>

                <section className="space-y-6">
                  <h4 className="text-lg font-medium text-black">Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
                  <p className="text-foreground leading-relaxed">
                    Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
                  </p>
                </section>

                <section className="space-y-6">
                  <h2 className="text-2xl font-bold text-black">2. Hosting</h2>
                  <p className="text-foreground leading-relaxed">
                    Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
                  </p>
                  <h3 className="text-xl font-semibold text-black">Externes Hosting</h3>
                  <p className="text-foreground leading-relaxed">
                    Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
                  </p>
                </section>

                <section className="space-y-6">
                  <h2 className="text-2xl font-bold text-black">3. Allgemeine Hinweise und Pflichtinformationen</h2>
                  <h3 className="text-xl font-semibold text-black">Datenschutz</h3>
                  <div className="space-y-4">
                    <p className="text-foreground leading-relaxed">
                      Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                    </p>
                    <p className="text-foreground leading-relaxed">
                      Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
                    </p>
                  </div>
                </section>

                <section className="space-y-6">
                  <h3 className="text-xl font-semibold text-black">Hinweis zur verantwortlichen Stelle</h3>
                  <p className="text-foreground leading-relaxed">
                    Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                  </p>
                  <div className="bg-primary/5 p-6 rounded-lg space-y-2">
                    <p className="font-medium">Wifka GmbH</p>
                    <p>Breslauer Str. 22</p>
                    <p>23611 Bad Schwartau</p>
                    <p>Telefon: +49 171 8361868</p>
                    <p>E-Mail: info@wifka.de</p>
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