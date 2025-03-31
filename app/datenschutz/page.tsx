"use client";

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
                  <h3 className="text-xl font-semibold text-black">
                    Allgemeine Hinweise
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    Die folgenden Hinweise geben einen einfachen Überblick
                    darüber, was mit Ihren personenbezogenen Daten passiert,
                    wenn Sie unsere Website besuchen. Personenbezogene Daten
                    sind alle Daten, mit denen Sie persönlich identifiziert
                    werden können. Ausführliche Informationen zum Thema
                    Datenschutz entnehmen Sie unserer unter diesem Text
                    aufgeführten Datenschutzerklärung.
                  </p>
                </section>

                <section className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-black">
                      Datenerfassung auf unserer Website
                    </h3>
                    <h4 className="text-lg font-medium text-black">
                      <strong>
                        Wer ist verantwortlich für die Datenerfassung auf dieser
                        Website?
                      </strong>
                    </h4>
                    <p className="text-foreground leading-relaxed">
                      Die Datenverarbeitung auf dieser Website erfolgt durch den
                      Websitebetreiber. Dessen Kontaktdaten können Sie dem
                      Impressum dieser Website entnehmen.
                    </p>
                  </div>
                </section>

                <section className="space-y-6">
                  <h4 className="text-lg font-medium text-black">
                    <strong>Wie erfassen wir Ihre Daten?</strong>
                  </h4>
                  <div className="space-y-4">
                    <p className="text-foreground leading-relaxed">
                      Ihre Daten werden zum einen dadurch erhoben, dass Sie uns
                      diese mitteilen. Hierbei kann es sich z.B. um Daten
                      handeln, die Sie in ein Kontaktformular eingeben.
                    </p>
                    <p className="text-foreground leading-relaxed">
                      Andere Daten werden automatisch oder nach Ihrer
                      Einwilligung beim Besuch der Website durch unsere
                      IT-Systeme erfasst. Das sind vor allem technische Daten
                      (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des
                      Seitenaufrufs).
                    </p>
                  </div>
                </section>

                <section className="space-y-6">
                  <h4 className="text-lg font-medium text-black">
                    <strong> Wofür nutzen wir Ihre Daten? </strong>
                  </h4>
                  <p className="text-foreground leading-relaxed">
                    Ihre Daten werden zum einen dadurch erhoben, dass Sie uns
                    diese mitteilen. Hierbei kann es sich z.B. um Daten handeln,
                    die Sie in ein Kontaktformular eingeben.
                    <br></br>
                    Andere Daten werden automatisch beim Besuch der Website
                    durch unsere IT-Systeme erfasst. Das sind vor allem
                    technische Daten (z.B. Internetbrowser, Betriebssystem oder
                    Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten
                    erfolgt automatisch, sobald Sie unsere Website betreten.
                  </p>
                </section>

                <section className="space-y-6">
                  <h4 className="text-lg font-medium text-black">
                    <strong>
                      {" "}
                      Welche Rechte haben Sie bezüglich Ihrer Daten?
                    </strong>
                  </h4>
                  <p className="text-foreground leading-relaxed">
                    Sie haben jederzeit das Recht unentgeltlich Auskunft über
                    Herkunft, Empfänger und Zweck Ihrer gespeicherten
                    personenbezogenen Daten zu erhalten. Sie haben außerdem ein
                    Recht, die Berichtigung, Sperrung oder Löschung dieser Daten
                    zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema
                    Datenschutz können Sie sich jederzeit unter der im Impressum
                    angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen
                    ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                  </p>
                </section>

                <section className="space-y-6">
                  <h3 className="text-xl font-semibold text-black">
                    Analyse-Tools und Tools von Drittanbietern
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    Beim Besuch unserer Website kann Ihr Surf-Verhalten
                    statistisch ausgewertet werden. Das geschieht vor allem mit
                    Cookies und mit sogenannten Analyseprogrammen. Die Analyse
                    Ihres Surf-Verhaltens erfolgt in der Regel anonym; das
                    Surf-Verhalten kann nicht zu Ihnen zurückverfolgt werden.
                    Sie können dieser Analyse widersprechen oder sie durch die
                    Nichtbenutzung bestimmter Tools verhindern. Details hierzu
                    entnehmen Sie unserer Datenschutzerklärung unter der
                    Überschrift “Drittmodule und Analysetools”.
                    <br></br>
                    Sie können dieser Analyse widersprechen. Über die
                    Widerspruchsmöglichkeiten werden wir Sie in dieser
                    Datenschutzerklärung informieren.
                  </p>
                </section>

                <section className="space-y-6">
                  <h2 className="text-2xl font-bold text-black">
                    Allgemeine Hinweise und Pflichtinformationen
                  </h2>
                  <h3 className="text-xl font-semibold text-black">
                    Datenschutz
                  </h3>
                  <div className="space-y-4">
                    <p className="text-foreground leading-relaxed">
                      Die Betreiber dieser Seiten nehmen den Schutz Ihrer
                      persönlichen Daten sehr ernst. Wir behandeln Ihre
                      personenbezogenen Daten vertraulich und entsprechend den
                      gesetzlichen Datenschutzvorschriften sowie dieser
                      Datenschutzerklärung.
                    </p>
                    <p className="text-foreground leading-relaxed">
                      Wenn Sie diese Website benutzen, werden verschiedene
                      personenbezogene Daten erhoben. Personenbezogene Daten
                      sind Daten, mit denen Sie persönlich identifiziert werden
                      können. Die vorliegende Datenschutzerklärung erläutert,
                      welche Daten wir erheben und wofür wir sie nutzen. Sie
                      erläutert auch, wie und zu welchem Zweck das geschieht.
                    </p>
                    <p className="text-foreground leading-relaxed">
                      Wir weisen darauf hin, dass die Datenübertragung im
                      Internet (z.B. bei der Kommunikation per E-Mail)
                      Sicherheitslücken aufweisen kann. Ein lückenloser Schutz
                      der Daten vor dem Zugriff durch Dritte ist nicht möglich.
                    </p>
                  </div>
                </section>

                <section className="space-y-6">
                  <h3 className="text-xl font-semibold text-black">
                    Hinweis zur verantwortlichen Stelle
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    Die verantwortliche Stelle für die Datenverarbeitung auf
                    dieser Website ist:
                  </p>
                  <div className="bg-primary/5 p-6 rounded-lg space-y-2">
                    <p className="font-medium">Wifka GmbH</p>
                    <p>Breslauer Str. 22</p>
                    <p>23611 Bad Schwartau</p>
                    <p>Telefon: +49 171 8361868</p>
                    <p>E-Mail: info@wifka.de</p>
                  </div>
                  <p className="text-foreground leading-relaxed">
                    Verantwortliche Stelle ist die natürliche oder juristische
                    Person, die allein oder gemeinsam mit anderen über die
                    Zwecke und Mittel der Verarbeitung von personenbezogenen
                    Daten (z.B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
                  </p>
                </section>

                <section className="space-y-6">
                  <h3 className="text-xl font-semibold text-black">
                    Widerruf Ihrer Einwilligung zur Datenverarbeitung
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    Viele Datenverarbeitungsvorgänge sind nur mit Ihrer
                    ausdrücklichen Einwilligung möglich. Sie können eine bereits
                    erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine
                    formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit
                    der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom
                    Widerruf unberührt.
                  </p>
                </section>

                <section className="space-y-6">
                  <h3 className="text-xl font-semibold text-black">
                    Beschwerderecht bei der zuständigen Aufsichtsbehörde
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    Im Falle datenschutzrechtlicher Verstöße steht dem
                    Betroffenen ein Beschwerderecht bei der zuständigen
                    Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde in
                    datenschutzrechtlichen Fragen ist der
                    Landesdatenschutzbeauftragte des Bundeslandes, in dem unser
                    Unternehmen seinen Sitz hat. Eine Liste der
                    Datenschutzbeauftragten sowie deren Kontaktdaten können
                    folgendem Link entnommen werden:{" "}
                    <a
                      href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html"
                      className="text-blue-500 hover:underline"
                    >
                      https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html
                    </a>
                    .
                  </p>
                </section>
                <section className="space-y-6">
                  <h3 className="text-xl font-semibold text-black">
                    Recht auf Datenübertragbarkeit
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    Sie haben das Recht, Daten, die wir auf Grundlage Ihrer
                    Einwilligung oder in Erfüllung eines Vertrags automatisiert
                    verarbeiten, an sich oder an einen Dritten in einem
                    gängigen, maschinenlesbaren Format aushändigen zu lassen.
                    Sofern Sie die direkte Übertragung der Daten an einen
                    anderen Verantwortlichen verlangen, erfolgt dies nur, soweit
                    es technisch machbar ist.
                  </p>
                </section>
                <section className="space-y-6">
                  <h3 className="text-xl font-semibold text-black">
                    Auskunft, Sperrung, Löschung
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
                    jederzeit das Recht auf unentgeltliche Auskunft über Ihre
                    gespeicherten personenbezogenen Daten, deren Herkunft und
                    Empfänger und den Zweck der Datenverarbeitung und ggf. ein
                    Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.
                    Hierzu sowie zu weiteren Fragen zum Thema personenbezogene
                    Daten können Sie sich jederzeit unter der im Impressum
                    angegebenen Adresse an uns wenden.
                  </p>
                </section>
                <section className="space-y-6">
                  <h3 className="text-xl font-semibold text-black">
                    Widerspruch gegen Werbe-Mails
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    Der Nutzung von im Rahmen der Impressumspflicht
                    veröffentlichten Kontaktdaten zur Übersendung von nicht
                    ausdrücklich angeforderter Werbung und
                    Informationsmaterialien wird hiermit widersprochen. Die
                    Betreiber der Seiten behalten sich ausdrücklich rechtliche
                    Schritte im Falle der unverlangten Zusendung von
                    Werbeinformationen, etwa durch Spam-E-Mails, vor.
                  </p>
                </section>
                <section className="space-y-6">
                  <h3 className="text-xl font-semibold text-black">Cookies</h3>
                  <p className="text-foreground leading-relaxed">
                    Unsere Internetseiten verwenden so genannte „Cookies“.
                    Cookies sind kleine Textdateien und richten auf Ihrem
                    Endgerät keinen Schaden an.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Sie werden entweder vorübergehend für die Dauer einer
                    Sitzung (Session-Cookies) oder dauerhaft (permanente
                    Cookies) auf Ihrem Endgerät gespeichert.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Session-Cookies werden nach Ende Ihres Besuchs automatisch
                    gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät
                    gespeichert, bis Sie diese selbst löschen oder eine
                    automatische Löschung durch Ihren Webbrowser erfolgt.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Teilweise können auch Cookies von Drittunternehmen auf Ihrem
                    Endgerät gespeichert werden, wenn Sie unsere Seite betreten
                    (Third-Party-Cookies).
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Diese ermöglichen uns oder Ihnen die Nutzung bestimmter
                    Dienstleistungen des Drittunternehmens (z.B. Cookies zur
                    Abwicklung von Zahlungsdienstleistungen).
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Cookies haben verschiedene Funktionen. Zahlreiche Cookies
                    sind technisch notwendig, da bestimmte Webseitenfunktionen
                    ohne diese nicht funktionieren würden (z.B. die
                    Warenkorbfunktion oder die Anzeige von Videos).
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Andere Cookies dienen dazu, das Nutzerverhalten auszuwerten
                    oder Werbung anzuzeigen.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Cookies, die zur Durchführung des elektronischen
                    Kommunikationsvorgangs (notwendige Cookies) oder zur
                    Bereitstellung bestimmter, von Ihnen erwünschter Funktionen
                    (funktionale Cookies, z. B. für die Warenkorbfunktion) oder
                    zur Optimierung der Webseite (z.B. Cookies zur Messung des
                    Webpublikums) erforderlich sind, werden auf Grundlage von
                    Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere
                    Rechtsgrundlage angegeben wird.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Der Websitebetreiber hat ein berechtigtes Interesse an der
                    Speicherung von Cookies zur technisch fehlerfreien und
                    optimierten Bereitstellung seiner Dienste.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Sofern eine Einwilligung zur Speicherung von Cookies
                    abgefragt wurde, erfolgt die Speicherung der betreffenden
                    Cookies ausschließlich auf Grundlage dieser Einwilligung
                    (Art. 6 Abs. 1 lit. a DSGVO); die Einwilligung ist jederzeit
                    widerrufbar.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Sie können Ihren Browser so einstellen, dass Sie über das
                    Setzen von Cookies informiert werden und Cookies nur im
                    Einzelfall erlauben, die Annahme von Cookies für bestimmte
                    Fälle oder generell ausschließen sowie das automatische
                    Löschen der Cookies beim Schließen des Browsers aktivieren.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Bei der Deaktivierung von Cookies kann die Funktionalität
                    dieser Website eingeschränkt sein.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Soweit Cookies von Drittunternehmen oder zu Analysezwecken
                    eingesetzt werden, werden wir Sie hierüber im Rahmen dieser
                    Datenschutzerklärung gesondert informieren und ggf. eine
                    Einwilligung abfragen.
                  </p>
                </section>
                <section className="space-y-6">
                  <h3 className="text-xl font-semibold text-black">
                    Cookie-Einwilligung mit Borlabs Cookie
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    Unsere Website nutzt die Cookie-Consent-Technologie von
                    Borlabs Cookie, um Ihre Einwilligung zur Speicherung
                    bestimmter Cookies in Ihrem Browser einzuholen und diese
                    datenschutzkonform zu dokumentieren. Anbieter dieser
                    Technologie ist Borlabs – Benjamin A. Bornschein,
                    Georg-Wilhelm-Str. 17, 21107 Hamburg (im Folgenden Borlabs).
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Wenn Sie unsere Website betreten, wird ein Borlabs-Cookie in
                    Ihrem Browser gespeichert, in dem die von Ihnen erteilten
                    Einwilligungen oder der Widerruf dieser Einwilligungen
                    gespeichert werden. Diese Daten werden nicht an den Anbieter
                    von Borlabs Cookie weitergegeben.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Die erfassten Daten werden gespeichert, bis Sie uns zur
                    Löschung auffordern bzw. das Borlabs-Cookie selbst löschen
                    oder der Zweck für die Datenspeicherung entfällt. Zwingende
                    gesetzliche Aufbewahrungsfristen bleiben unberührt. Details
                    zur Datenverarbeitung von Borlabs Cookie finden Sie unter{" "}
                    <a
                      href="https://de.borlabs.io/kb/welche-daten-speichert-borlabs-cookie/"
                      className="text-blue-500 hover:underline"
                    >
                      https://de.borlabs.io/kb/welche-daten-speichert-borlabs-cookie/
                    </a>
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Der Einsatz der Borlabs-Cookie-Consent-Technologie erfolgt,
                    um die gesetzlich vorgeschriebenen Einwilligungen für den
                    Einsatz von Cookies einzuholen. Rechtsgrundlage hierfür ist
                    Art. 6 Abs. 1 S. 1 lit. c DSGVO.
                  </p>
                </section>
                <section className="space-y-6">
                  <h3 className="text-xl font-semibold text-black">
                    Google Analytics
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    Diese Website nutzt Funktionen des Webanalysedienstes Google
                    Analytics. Anbieter ist die Google Inc., 1600 Amphitheatre
                    Parkway, Mountain View, CA 94043, USA.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Google Analytics verwendet so genannte “Cookies”. Das sind
                    Textdateien, die auf Ihrem Computer gespeichert werden und
                    die eine Analyse der Benutzung der Website durch Sie
                    ermöglichen. Die durch den Cookie erzeugten Informationen
                    über Ihre Benutzung dieser Website werden in der Regel an
                    einen Server von Google in den USA übertragen und dort
                    gespeichert.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Die Speicherung von Google-Analytics-Cookies erfolgt auf
                    Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der
                    Websitebetreiber hat ein berechtigtes Interesse an der
                    Analyse des Nutzerverhaltens, um sowohl sein Webangebot als
                    auch seine Werbung zu optimieren.
                  </p>

                  <h3 className="text-xl font-semibold text-black">
                    IP-Anonymisierung
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    Wir haben auf dieser Website die Funktion IP-Anonymisierung
                    aktiviert. Dadurch wird Ihre IP-Adresse von Google innerhalb
                    von Mitgliedstaaten der Europäischen Union oder in anderen
                    Vertragsstaaten des Abkommens über den Europäischen
                    Wirtschaftsraum vor der Übermittlung in die USA gekürzt. Nur
                    in Ausnahmefällen wird die volle IP-Adresse an einen Server
                    von Google in den USA übertragen und dort gekürzt.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Im Auftrag des Betreibers dieser Website wird Google diese
                    Informationen benutzen, um Ihre Nutzung der Website
                    auszuwerten, um Reports über die Websiteaktivitäten
                    zusammenzustellen und um weitere mit der Websitenutzung und
                    der Internetnutzung verbundene Dienstleistungen gegenüber
                    dem Websitebetreiber zu erbringen. Die im Rahmen von Google
                    Analytics von Ihrem Browser übermittelte IP-Adresse wird
                    nicht mit anderen Daten von Google zusammengeführt.
                  </p>

                  <h3 className="text-xl font-semibold text-black">
                    Browser Plugin
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    Sie können die Speicherung der Cookies durch eine
                    entsprechende Einstellung Ihrer Browser-Software verhindern;
                    wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall
                    gegebenenfalls nicht sämtliche Funktionen dieser Website
                    vollumfänglich nutzen können.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Sie können darüber hinaus die Erfassung der durch den Cookie
                    erzeugten und auf Ihre Nutzung der Website bezogenen Daten
                    (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung
                    dieser Daten durch Google verhindern, indem Sie das unter
                    folgendem Link verfügbare Browser-Plugin herunterladen und
                    installieren:{" "}
                    <a
                      className="text-blue-500 hover:underline"
                      href="https://tools.google.com/dlpage/gaoptout?hl=de"
                    >
                      Google Analytics Opt-Out
                    </a>
                    .
                  </p>

                  <h3 className="text-xl font-semibold text-black">
                    Widerspruch gegen Datenerfassung
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    Sie können die Erfassung Ihrer Daten durch Google Analytics
                    verhindern, indem Sie auf folgenden Link klicken. Es wird
                    ein Opt-Out-Cookie gesetzt, der die Erfassung Ihrer Daten
                    bei zukünftigen Besuchen dieser Website verhindert:{" "}
                    <a className="text-blue-500 hover:underline" href="#">
                      Google Analytics deaktivieren
                    </a>
                    .
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Mehr Informationen zum Umgang mit Nutzerdaten bei Google
                    Analytics finden Sie in der Datenschutzerklärung von Google:{" "}
                    <a
                      className="text-blue-500 hover:underline"
                      href="https://support.google.com/analytics/answer/6004245?hl=de"
                    >
                      Google Datenschutzerklärung
                    </a>
                    .
                  </p>

                  <h3 className="text-xl font-semibold text-black">
                    Auftragsdatenverarbeitung
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    Wir haben mit Google einen Vertrag zur
                    Auftragsdatenverarbeitung abgeschlossen und setzen die
                    strengen Vorgaben der deutschen Datenschutzbehörden bei der
                    Nutzung von Google Analytics vollständig um.
                  </p>

                  <h3 className="text-xl font-semibold text-black">
                    Demografische Merkmale bei Google Analytics
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    Diese Website nutzt die Funktion “demografische Merkmale”
                    von Google Analytics. Dadurch können Berichte erstellt
                    werden, die Aussagen zu Alter, Geschlecht und Interessen der
                    Seitenbesucher enthalten. Diese Daten stammen aus
                    interessenbezogener Werbung von Google sowie aus
                    Besucherdaten von Drittanbietern. Diese Daten können keiner
                    bestimmten Person zugeordnet werden.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Sie können diese Funktion jederzeit über die
                    Anzeigeneinstellungen in Ihrem Google-Konto deaktivieren
                    oder die Erfassung Ihrer Daten durch Google Analytics wie im
                    Punkt “Widerspruch gegen Datenerfassung” dargestellt
                    generell untersagen.
                  </p>
                </section>

                <section className="space-y-6">
                  <h3 className="text-xl font-semibold text-black">YouTube</h3>
                  <p className="text-foreground leading-relaxed">
                    Unsere Website nutzt Plugins der von Google betriebenen
                    Seite YouTube. Betreiber der Seiten ist die YouTube, LLC,
                    901 Cherry Ave., San Bruno, CA 94066, USA.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Wenn Sie eine unserer mit einem YouTube-Plugin
                    ausgestatteten Seiten besuchen, wird eine Verbindung zu den
                    Servern von YouTube hergestellt. Dabei wird dem
                    YouTube-Server mitgeteilt, welche unserer Seiten Sie besucht
                    haben.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Wenn Sie in Ihrem YouTube-Account eingeloggt sind,
                    ermöglichen Sie YouTube, Ihr Surfverhalten direkt Ihrem
                    persönlichen Profil zuzuordnen. Dies können Sie verhindern,
                    indem Sie sich aus Ihrem YouTube-Account ausloggen.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Die Nutzung von YouTube erfolgt im Interesse einer
                    ansprechenden Darstellung unserer Online-Angebote. Dies
                    stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1
                    lit. f DSGVO dar.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Weitere Informationen zum Umgang mit Nutzerdaten finden Sie
                    in der Datenschutzerklärung von YouTube unter:{" "}
                    <a href="https://www.google.de/intl/de/policies/privacy">
                      {" "}
                      https://www.google.de/intl/de/policies/privacy
                    </a>{" "}
                  </p>
                </section>
                <section className="space-y-6">
                  <h3 className="text-xl font-semibold text-black">
                    Google Web Fonts
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    Diese Seite nutzt zur einheitlichen Darstellung von
                    Schriftarten so genannte Web Fonts, die von Google
                    bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr
                    Browser die benötigten Web Fonts in ihren Browsercache, um
                    Texte und Schriftarten korrekt anzuzeigen.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Zu diesem Zweck muss der von Ihnen verwendete Browser
                    Verbindung zu den Servern von Google aufnehmen. Hierdurch
                    erlangt Google Kenntnis darüber, dass über Ihre IP-Adresse
                    unsere Website aufgerufen wurde. Die Nutzung von Google Web
                    Fonts erfolgt im Interesse einer einheitlichen und
                    ansprechenden Darstellung unserer Online-Angebote. Dies
                    stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1
                    lit. f DSGVO dar.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Wenn Ihr Browser Web Fonts nicht unterstützt, wird eine
                    Standardschrift von Ihrem Computer genutzt.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Weitere Informationen zu Google Web Fonts finden Sie unter{" "}
                    <a
                      href="https://developers.google.com/fonts/faq"
                      className="text-blue-500 hover:underline"
                    >
                      https://developers.google.com/fonts/faq
                    </a>{" "}
                    und in der Datenschutzerklärung von Google:{" "}
                    <a
                      href="https://www.google.com/policies/privacy/"
                      className="text-blue-500 hover:underline"
                    >
                      https://www.google.com/policies/privacy/
                    </a>
                    .
                  </p>
                </section>
                <section className="space-y-6">
                  <h3 className="text-xl font-semibold text-black"></h3>
                  <p className="text-foreground leading-relaxed"></p>
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
                © {new Date().getFullYear()} Wifka GmbH. Alle Rechte
                vorbehalten.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
