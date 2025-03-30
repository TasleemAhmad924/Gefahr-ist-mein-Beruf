"use client"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <main className="container mx-auto px-internal py-section">
        <h1 className="text-4xl font-bold text-black mb-8">Datenschutz</h1>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-black mt-8 mb-4">Datenschutz auf einen Blick</h2>
          <p className="text-foreground leading-relaxed">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          </p>

          <h2 className="text-2xl font-bold text-black mt-8 mb-4">Datenerfassung auf unserer Website</h2>
          <p className="text-foreground leading-relaxed">
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
          </p>

          <h2 className="text-2xl font-bold text-black mt-8 mb-4">Ihre Rechte</h2>
          <p className="text-foreground leading-relaxed">
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Sperrung dieser Daten zu verlangen.
          </p>

          <h2 className="text-2xl font-bold text-black mt-8 mb-4">Analyse-Tools und Werbung</h2>
          <p className="text-foreground leading-relaxed">
            Wir verwenden keine Analyse-Tools oder Werbung auf dieser Website. Ihre Daten werden nicht an Dritte weitergegeben.
          </p>

          <h2 className="text-2xl font-bold text-black mt-8 mb-4">SSL- oder TLS-Verschlüsselung</h2>
          <p className="text-foreground leading-relaxed">
            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-section border-t border-[#E53935]">
        <div className="container mx-auto px-internal">
          <div className="flex justify-center">
            <a 
              href="/"
              className="text-[#E53935] hover:underline transition-all duration-300 font-medium"
            >
              Zurück zur Startseite
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
} 