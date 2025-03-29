import { ChevronDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  BookOpen,
  CheckCircle,
  FileText,
  Newspaper,
  Play,
  Shield,
  ShoppingCart,
  Store,
} from "lucide-react";

export default function BookWebsite() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black" />
          <img
            src="/placeholder.svg?height=1080&width=1920"
            alt="Background texture"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-20 text-center">
          <h1 className="mb-6 text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl">
            Gefahr ist mein{" "}
            <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
              Beruf
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
            A gripping journey into the world of professional risk and danger by
            Josef Resch
          </p>
            <Button 
            variant="outline"
            size="lg"
            className="animate-bounce rounded-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
            onClick={() => {
              const aboutBookSection = document.querySelector('[id="about-book"]');
              if (aboutBookSection) {
              aboutBookSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            >
            <ChevronDown className="mr-2" />
            Erfahre mehr
            </Button>
        </div>
      </section>

      {/* Author Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="flex items-center justify-center">
              <div className="relative h-[400px] w-[300px] overflow-hidden rounded-lg">
                <img
                  src="/ReschFoto.jpg"
                  alt="Josef Resch"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
                Über den Autor
              </h2>
              <p className="mb-6 text-gray-300 leading-relaxed">
                <strong>JOSEF RESCH</strong>, geboren 1949, war jahrzehntelang
                als Privatermittler für Wirtschaftsunternehmen und
                Privatpersonen tätig. Zu seinen Auftraggebern zählten neben
                zahlreichen Gläubigern unter anderem {" "}
                <strong>Siemens</strong>, das <strong>Bundeskriminalamt</strong>{" "}
                und verschiedene <strong>Landeskriminalämter</strong>.<br />
                <br />
                Nach mehr als 30 Jahren zieht der gebürtige Oberbayer jetzt
                Bilanz.
              </p>

              <Separator className="mb-6 bg-red-600/20" />
              <div className="flex gap-4">
                {/* <Button variant="outline" className="border-red-600">
                  Über den Autor
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Highlights */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Inside the Book
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Chapter 1: The Beginning",
                description:
                  "How it all started - the first dangerous assignment.",
              },
              {
                title: "Chapter 2: High Stakes",
                description: "Navigating through life-threatening situations.",
              },
              {
                title: "Chapter 3: The Network",
                description: "Building connections in the world of risk.",
              },
            ].map((chapter, index) => (
              <Card
                key={index}
                className="border-red-600/20 bg-black/50 backdrop-blur-sm transition-transform hover:scale-105"
              >
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-red-600">
                    {chapter.title}
                  </h3>
                  <p className="text-gray-300">{chapter.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About the Book */}
      <section className="py-20 bg-gradient-to-b from-black to-red-950/20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 id="about-book" className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
                Über das Buch
              </h2>
              <p className="mb-6 text-gray-300">
                Privatermittler <strong>Josef Resch</strong> hat bereits für
                alle Kaliber gearbeitet: für eine verzweifelte Mutter, die ihr
                entführtes Kind aus den Fängen des algerischen Vaters befreit
                sehen will, für Wirtschaftsgrößen wie <strong>Siemens</strong>,
                die ein Sicherheitsleck gestopft sehen wollen, sowie zuletzt für
                einen anonymen Auftraggeber, der{" "}
                <strong>47 Millionen Dollar</strong> Belohnung auslobt, um die
                Drahtzieher des Abschusses von Flug <strong>MH17</strong>{" "}
                ausfindig zu machen – ein Unglück, bei dem 2014 in der
                Ostukraine <strong>298 Menschen</strong> ums Leben kamen.
                <br />
                <br />
                Immer wieder begibt er sich bei seiner Arbeit in{" "}
                <strong>Lebensgefahr</strong>. Im Auftrag des{" "}
                <strong>Bundeskriminalamts</strong> reist er in die
                kolumbianische Drogenhochburg <strong>Medellín</strong>, wo er
                zufällig auf den berüchtigten <strong>Pablo Escobar</strong>{" "}
                trifft und wenig später Opfer eines Anschlags wird. Resch erlebt
                zudem <strong>überraschende Wendungen</strong>: Eine
                unscheinbare{" "}
                <strong>Oma entpuppt sich als Drogenbaronin</strong>, und er
                muss dabei zusehen, wie von ihm aufgedeckte Skandale vertuscht
                werden, damit sie nicht an die Öffentlichkeit gelangen.
                <br />
                <br />
                Kurz vor dem Ruhestand lässt <strong>Josef Resch</strong> einen
                Teil der in diesem Geschäft existentiellen Diskretion fallen und
                gewährt uns Einblick in seine spektakulärsten Einsätze.
              </p>

              <div className="mb-8 grid gap-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-red-600/10 p-2">
                    <CheckCircle className="h-4 w-4 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold">Erfahrungen aus der Praxis</h3>
                    <p className="text-sm text-gray-300">
                      Authentische Berichte aus Jahrzehnten professionellen
                      Risikomanagements, einschließlich Konfrontationen mit
                      gefährlichen Kriminellen und Ermittlungen unter extremem
                      Druck.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-red-600/10 p-2">
                    <Shield className="h-4 w-4 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold">Expertise und Einblicke</h3>
                    <p className="text-sm text-gray-300">
                      Professionelle Techniken und strategisches Denken in
                      hochriskanten Situationen, die einen seltenen Einblick in
                      den Denkprozess eines erfahrenen Ermittlers gewähren.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-red-600/10 p-2">
                    <BookOpen className="h-4 w-4 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold">Hinter den Kulissen</h3>
                    <p className="text-sm text-gray-300">
                      Exklusive Details aus einigen der herausforderndsten
                      Einsätze, die es den Lesern ermöglichen, einen Blick
                      hinter die Kulissen der Arbeit eines Privatermittlers zu
                      werfen.
                    </p>
                  </div>
                </div>
              </div>

              <Button
                onClick={() =>
                  window.open(
                    "https://www.bic-media.com/mobile/mobileWidget-jqm1.4.html?borderWidth=0&shopsFilter=ullstein&clickTeaser=no&download=yes&height=446&links=yes&metadata=yes&showExtraFacebookButton=no&showFullScreenButton=no&showLanguageButton=no&showMenu=no&showTAFButton=yes&tellafriend=yes&width=850&isbn=9783430202008&layout=auto&search=yes",
                    "_blank"
                  )
                }
                className="bg-red-600 hover:bg-red-700"
              >
                <BookOpen className="mr-2 h-4 w-4" />
                Leseprobe
              </Button>
            </div>
            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-2xl">
                <img
                  src="/bookCover.jpg"
                  alt="Book Cover"
                  className="h-auto w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 -z-10 aspect-square w-full rounded-lg bg-red-600/20 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Media Coverage
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                type: "article",
                source: "The Daily News",
                title: "Josef Resch: Life on the Edge",
                image: "/placeholder.svg?height=200&width=300",
                link: "#",
              },
              {
                type: "video",
                source: "Global TV",
                title: "Exclusive Interview with Josef Resch",
                image: "/placeholder.svg?height=200&width=300",
                link: "#",
              },
              {
                type: "pdf",
                source: "Risk Magazine",
                title: "Professional Risk-Taking: A Deep Dive",
                image: "/placeholder.svg?height=200&width=300",
                link: "#",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                  <div className="absolute bottom-0 p-4">
                    <div className="mb-2 flex items-center gap-2">
                      {item.type === "video" && (
                        <Play className="h-4 w-4 text-red-600" />
                      )}
                      {item.type === "pdf" && (
                        <FileText className="h-4 w-4 text-red-600" />
                      )}
                      {item.type === "article" && (
                        <Newspaper className="h-4 w-4 text-red-600" />
                      )}
                      <span className="text-sm text-red-600">
                        {item.source}
                      </span>
                    </div>
                    <h3 className="font-bold">{item.title}</h3>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Buy Now */}
      <section className="py-20 bg-gradient-to-b from-red-950/20 to-black">
        <div className="container mx-auto px-4">
          <div className="rounded-lg border border-red-600/20 bg-black/50 p-8 backdrop-blur-sm">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Jetzt Verfügbar
              </h2>
              <div className="mb-6 flex flex-col items-center justify-center gap-2">
                <img
                  onClick={() =>
                    window.open(
                      "https://www.thalia.at/shop/home/artikeldetails/A1038094606",
                      "_blank"
                    )
                  }
                  src="/bookcover.jpg"
                  alt="Book Cover"
                  className="h-64 w-40 rounded-lg object-cover hover:cursor-pointer"
                ></img>
                <div className="relative">
                  <span className="text-3xl font-bold text-red-600">
                    18.50€
                  </span>
                </div>
              </div>
              {/* <div className="mb-8 flex flex-col gap-2 text-sm text-gray-300">
                <p>Auch verfügbar als:</p>
                <div className="flex justify-center gap-4">
                  <span>Kindle Edition: €9.99</span>
                  <span>Audiobook: €19.99</span>
                </div>
              </div> */}
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button
                  onClick={() =>
                    window.open(
                      "https://www.thalia.at/shop/home/artikeldetails/A1038094606",
                      "_blank"
                    )
                  }
                  size="lg"
                  className="bg-[#FF9900] hover:bg-[#FF9900]/90"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Jetzt kaufen
                </Button>
                {/* <Button
                  onClick={() =>
                    window.open(
                      "https://www.thalia.at/shop/home/artikeldetails/A1038094606",
                      "_blank"
                    )
                  }
                  size="lg"
                  variant="outline"
                  className="border-red-600"
                >
                  <Store className="mr-2 h-4 w-4 text-black" />
                  Andere Anbieter
                </Button> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="rounded-lg bg-gradient-to-r from-red-900/50 to-black p-8 text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Begin Your Journey
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-gray-300">
              Dive into the thrilling world of professional risk-taking and
              discover the stories that will keep you on the edge of your seat.
            </p>
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              Get Your Copy Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-red-600/20 py-8">
      <div className="container mx-auto px-6 md:px-12 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg font-semibold mb-2">Wifka GmbH</p>
            <p className="mb-4">Breslauer Str. 22, 23611 Bad Schwartau</p>
            <p className="mb-4">
              Telefon: {" "} <strong>+49 171 8361868</strong>
            </p>
            <p className="mb-4">
              Festnetz: {" "} <strong>+49 451 8104516</strong>
            </p>
            <p className="mb-4">
              E-Mail:{" "}
              <a
                href="mailto:info@wifka.de"
                className="text-red-600 hover:text-red-400"
              >
                info@wifka.de
              </a>
            </p>
            <p>
              Website:{" "}
              <a
                href="http://www.wifka.de"
                className="text-red-600 hover:text-red-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.wifka.de
              </a>
            </p>
          </div>

          <div>
            <p className="text-lg font-semibold mb-2">Rechtliches</p>
            <p className="mb-4">Geschäftsführer: <strong>Josef Resch</strong></p>
            <p className="mb-4">
              Registergericht: Amtsgericht Lübeck | Registernummer: HRB 6062 HL
            </p>
            <p className="mb-4">St.Nr.: 22288 16503 | UstID: DE 243185098</p>
            <p className="mt-4 text-sm">
              <strong>Haftungshinweis:</strong> Trotz sorgfältiger inhaltlicher
              Kontrolle übernehmen wir keine Haftung für die Inhalte externer
              Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren
              Betreiber verantwortlich.
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-red-600/20 pt-4">
          <p className="text-sm">
            © {new Date().getFullYear()} Wifka GmbH. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
      </footer>
    </div>
  );
}
