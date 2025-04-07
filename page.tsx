"use client"

import { ChevronDown, ExternalLink, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
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
import { GradientText } from "@/components/ui/gradient-text";
import { PressBox } from "@/components/ui/press-box";
import Image from "next/image";
import { ClientWrapper } from "@/components/ClientWrapper";
import { CookieConsent } from "@/components/ui/cookie-consent";

export default function BookWebsite() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Book',
    'name': 'Gefahr ist mein Beruf',
    'author': {
      '@type': 'Person',
      'name': 'Josef Resch',
      'jobTitle': 'Privatermittler',
      'birthDate': '1949'
    },
    'isbn': '978-3-9879132-2-8',
    'numberOfPages': '304',
    'publisher': {
      '@type': 'Organization',
      'name': 'Westend'
    },
    'datePublished': '2025-04-07',
    'description': 'Autobiografie eines Privatermittlers über gefährliche Einsätze weltweit.',
    'inLanguage': 'Deutsch',
    'offers': {
      '@type': 'Offer',
      'price': '18.00',
      'priceCurrency': 'EUR',
      'availability': 'https://schema.org/PreOrder'
    }
  };

  return (
    <ClientWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-white text-foreground">
        {/* Hero Section */}
        <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            {/* Background image */}
            <div className="absolute inset-0">
              <img
                src="/background-image-upscale.png"
                alt="Background texture"
                className="absolute inset-0 w-full h-full object-cover object-center opacity-10"
                loading="eager"
                width={1920}
                height={1080}
              />
            </div>
            {/* Flickering Grid Overlay */}
            <FlickeringGrid
              className="absolute inset-0 z-10"
              squareSize={4}
              gridGap={6}
              color="#000000"
              maxOpacity={0.05}
              flickerChance={0.1}
            />
          </div>
          <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 text-center">
            <div className="max-w-[90rem] mx-auto">
              <h1 className="mb-6 md:mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-normal text-black opacity-0 animate-fade-in [animation-delay:200ms] [animation-fill-mode:forwards]">
                <span className="inline-block mb-2 md:mb-0 md:mr-3">
                  Gefahr ist mein
                </span>
                <span className="inline-block bg-gradient-to-r from-[#FF3D3D] via-[#E53935] to-[#CC1E1E] bg-clip-text text-transparent px-1 tracking-tight drop-shadow-sm">
                  Beruf
                </span>
              </h1>
              <p className="mx-auto mb-8 md:mb-10 max-w-2xl text-base sm:text-lg md:text-xl text-foreground leading-relaxed opacity-0 animate-fade-in [animation-delay:200ms] [animation-fill-mode:forwards]">
                Ein packender Blick in die Welt des Risikos und der Gefahr – von Josef Resch
              </p>
              <Button 
                variant="outline"
                size="lg"
                className="animate-bounce rounded-full border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-[1.02] transform opacity-0 animate-fade-in [animation-delay:200ms] [animation-fill-mode:forwards] px-6 py-3 md:px-8 md:py-4 min-h-[48px]"
                onClick={() => {
                  const aboutBookSection = document.querySelector('[id="about-book"]');
                  if (aboutBookSection) {
                    aboutBookSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <ChevronDown className="mr-2 h-5 w-5" />
                Erfahre mehr
              </Button>
            </div>
          </div>
        </section>

        {/* Author Section */}
        <section className="py-16 md:py-24 border-t-2 border-primary/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-[90rem] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                <div className="md:col-span-5 flex items-center justify-center">
                  <div className="relative h-[400px] w-full max-w-[300px] overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl group">
                    <img
                      src="/ReschFoto.jpg"
                      alt="Josef Resch"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      width={300}
                      height={400}
                    />
                  </div>
                </div>
                <div className="md:col-span-7 flex flex-col justify-center space-y-6">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-black">
                    Über den Autor
                  </h2>
                  <div className="prose prose-lg text-foreground">
                    <p className="leading-relaxed">
                      <strong>JOSEF RESCH</strong>, geboren 1949, war jahrzehntelang
                      als Privatermittler für Wirtschaftsunternehmen und
                      Privatpersonen tätig. Zu seinen Auftraggebern zählten neben
                      zahlreichen Gläubigern unter anderem {" "}
                      <strong>Siemens</strong>, das <strong>Bundeskriminalamt</strong>{" "}
                      und verschiedene <strong>Landeskriminalämter</strong>.
                    </p>
                    <p className="leading-relaxed">
                      Nach mehr als 30 Jahren zieht der gebürtige Oberbayer jetzt
                      Bilanz.
                    </p>
                  </div>
                  <Separator className="bg-primary/20 my-6" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Book Highlights */}
        <section className="py-16 md:py-24 border-t-2 border-primary/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-black text-center mb-12">
              Inhalt
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Junior",
                  subtitle: "Wie aus dem Jungen von der Alm ein Privatermittler wurde",
                  page: "S. 9–39",
                },
                {
                  title: "Traumtänzer",
                  subtitle: "Über eine Geldwäsche mit Löschpapier und Föhn",
                  page: "S. 40–54",
                },
                {
                  title: "Kaiserschmarrn",
                  subtitle: "Wie man in Kolumbien einen Anschlag überlebt",
                  page: "S. 55–76",
                },
                {
                  title: "Anfänger",
                  subtitle: "Kokainhandel mit Oma R.",
                  page: "S. 77–101",
                },
                {
                  title: "Höllenritt",
                  subtitle: "Die Liebe einer Mutter zum verlorenen Sohn",
                  page: "S. 102–130",
                },
                {
                  title: "Versprechen",
                  subtitle: "Siemens, Telekom und der Telefonkartenbetrug im Prager Nachtclub",
                  page: "S. 131–165",
                },
                {
                  title: "Bauernopfer",
                  subtitle: "Der Multimillionen-Bankraub von Belfast",
                  page: "S. 166–194",
                },
                {
                  title: "Neubeginn",
                  subtitle: "Den Wirtschaftskriminellen auf der Spur",
                  page: "S. 195–209",
                },
                {
                  title: "Antichrist",
                  subtitle: "Kopfgeldjagd auf Florian Homm",
                  page: "S. 210–240",
                },
                {
                  title: "Gier",
                  subtitle: "Wie Argentinien sich weigerte, seine Schulden zu begleichen",
                  page: "S. 241–253",
                },
                {
                  title: "Abschuss",
                  subtitle: "Ermittlungen zum Absturz des Flugs MH17",
                  page: "S. 254–288",
                },
                {
                  title: "Abschied",
                  subtitle: "Ein Geschenk an meine Mutter",
                  page: "S. 289–295",
                },
              ].map((chapter, index) => (
                <Card
                  key={index}
                  className="border-2 border-primary/10 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/20 hover:scale-[1.02] transform h-[140px]"
                >
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-black">
                        {chapter.title}
                      </h3>
                      <span className="text-sm text-primary font-medium whitespace-nowrap">
                        {chapter.page}
                      </span>
                    </div>
                    <p className="text-foreground text-sm leading-relaxed">
                      {chapter.subtitle}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            {/* Danksagung */}
            <div className="mt-8 text-center">
              <Card className="inline-block border-2 border-primary/10 bg-white shadow-sm hover:shadow-md hover:scale-[1.02] transform transition-all duration-300">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center gap-4">
                    <span className="font-medium text-black">Danksagung</span>
                    <span className="text-sm text-primary">S. 296</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About the Book */}
        <section className="py-16 md:py-24 border-t-2 border-primary/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
              <div className="md:col-span-7 space-y-6">
                <h2 id="about-book" className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-black">
                  Über das Buch
                </h2>
                <div className="prose prose-lg text-foreground">
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
                </div>

                <div className="grid gap-6">
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-black">Erfahrungen aus der Praxis</h3>
                      <p className="text-sm text-foreground">
                        Authentische Berichte aus Jahrzehnten professionellen
                        Risikomanagements, einschließlich Konfrontationen mit
                        gefährlichen Kriminellen und Ermittlungen unter extremem
                        Druck.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Shield className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-black">Expertise und Einblicke</h3>
                      <p className="text-sm text-foreground">
                        Professionelle Techniken und strategisches Denken in
                        hochriskanten Situationen, die einen seltenen Einblick in
                        den Denkprozess eines erfahrenen Ermittlers gewähren.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-black">Hinter den Kulissen</h3>
                      <p className="text-sm text-foreground">
                        Exklusive Details aus einigen der herausforderndsten
                        Einsätze, die es den Lesern ermöglichen, einen Blick
                        hinter die Kulissen der Arbeit eines Privatermittlers zu
                        werfen.
                      </p>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={() => window.open("https://www.bic-media.com/mobile/mobileWidget-jqm1.4.html?borderWidth=0&shopsFilter=ullstein&clickTeaser=no&download=yes&height=446&links=yes&metadata=yes&showExtraFacebookButton=no&showFullScreenButton=no&showLanguageButton=no&showMenu=no&showTAFButton=yes&tellafriend=yes&width=850&isbn=9783430202008&layout=auto&search=yes", "_blank")}
                  className="bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02] transform px-6 py-3 md:px-8 md:py-4"
                >
                  <BookOpen className="mr-2 h-5 w-5" />
                  Leseprobe
                </Button>
              </div>
              <div className="md:col-span-5">
                <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden group shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src="/bookcover-HD-new.jpg"
                    alt="Buchcover von 'Gefahr ist mein Beruf' von Josef Resch"
                    fill
                    className="object-contain w-full h-full"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    quality={100}
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Media Coverage */}
        <section className="py-16 md:py-24 border-t-2 border-primary/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-[90rem] mx-auto">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-black text-center mb-12">
                In den Medien
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <PressBox
                  type="news"
                  outlet="Wifka News"
                  title="Einbruch bei Deutscher Bank: Privatermittler soll helfen"
                  href="https://wifka.de/blog/einbruch-bei-deutscher-bank-privatermittler-soll-helfen"
                  imageSrc="/Media-Box-Picture-1.png"
                />
                <PressBox
                  type="tv"
                  outlet="Tim Gabel Podcast"
                  title="JOSEF RESCH: Jagd auf Pablo Escobar, Florian Homm und die Wahrheit hinter Flug MH17"
                  href="https://youtu.be/VaEd6C4iBaw?si=W7H5ynp17o7MVMZ_"
                  imageSrc="/Media-Box-Picture-2.jpg"
                />
                <PressBox
                  type="news"
                  outlet="Wifka News"
                  title="Als in Travemünde eine Autobombe explodierte"
                  href="https://wifka.de/blog/als-in-travem%C3%BCnde-eine-autobombe-explodierte"
                  imageSrc="/Media-Box-Picture-3.png"
                />
                <PressBox
                  type="link"
                  outlet=""
                  title="Mehr spannende Artikel auf wifka.de entdecken"
                  href="https://wifka.de/"
                  className="bg-gradient-to-br from-[#FF3D3D] via-[#E53935] to-[#CC1E1E] hover:brightness-110"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Buy Now */}
        <section className="py-16 md:py-24 border-t-2 border-primary/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-[90rem] mx-auto">
              {/* Hugendubel & Thalia Section */}
              <div className="rounded-lg border-2 border-primary/20 bg-white p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
                  <div className="md:col-span-8 space-y-6">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-black">
                      Jetzt erhältlich bei Hugendubel & Thalia
                    </h2>
                    <div className="space-y-6">
                      <p className="text-gray-700 text-lg">
                        <strong>„Gefahr ist mein Beruf"</strong> ist ab sofort in allen Hugendubel und Thalia Filialen sowie online erhältlich.
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 bg-gray-50 p-6 rounded-lg">
                        <div className="space-y-1">
                          <p className="font-semibold text-black">Erscheinungsdatum</p>
                          <p className="text-gray-700">07. April 2025</p>
                        </div>
                        <div className="space-y-1">
                          <p className="font-semibold text-black">Sprache</p>
                          <p className="text-gray-700">Deutsch</p>
                        </div>
                        <div className="space-y-1">
                          <p className="font-semibold text-black">Seitenanzahl</p>
                          <p className="text-gray-700">304</p>
                        </div>
                        <div className="space-y-1">
                          <p className="font-semibold text-black">Autor</p>
                          <p className="text-gray-700">Josef Resch</p>
                        </div>
                        <div className="space-y-1">
                          <p className="font-semibold text-black">Verlag</p>
                          <p className="text-gray-700">Westend</p>
                        </div>
                        <div className="space-y-1">
                          <p className="font-semibold text-black">Produktart</p>
                          <p className="text-gray-700">Kartoniert</p>
                        </div>
                        <div className="space-y-1">
                          <p className="font-semibold text-black">Gewicht</p>
                          <p className="text-gray-700">425 g</p>
                        </div>
                        <div className="space-y-1">
                          <p className="font-semibold text-black">Größe (L/B/H)</p>
                          <p className="text-gray-700">25/135/216 mm</p>
                        </div>
                        <div className="col-span-2 space-y-1 border-t border-gray-200 pt-4 mt-2">
                          <p className="font-semibold text-black">ISBN</p>
                          <p className="text-gray-700">9783987913228</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Button
                        onClick={() => window.open('https://www.hugendubel.de/de/taschenbuch/josef_resch-gefahr_ist_mein_beruf-50207187-produkt-details.html', '_blank')}
                        className="bg-primary hover:bg-primary/90 text-white transition-all duration-300 hover:scale-[1.02] transform flex-1 min-h-[48px]"
                      >
                        Bei Hugendubel kaufen
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                      <Button
                        onClick={() => window.open('https://www.thalia.de/shop/home/artikeldetails/A1074746056', '_blank')}
                        className="bg-primary hover:bg-primary/90 text-white transition-all duration-300 hover:scale-[1.02] transform flex-1 min-h-[48px]"
                      >
                        Bei Thalia kaufen
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="md:col-span-4">
                    <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden group shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <Image
                        src="/bookcover-HD-new.jpg"
                        alt="Buchcover von 'Gefahr ist mein Beruf' von Josef Resch"
                        fill
                        className="object-contain w-full h-full"
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                        quality={100}
                        loading="eager"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Amazon Section */}
              <div className="rounded-lg border-2 border-primary/20 bg-white p-6 md:p-8 mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                  <div className="space-y-6">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-black">
                      Zwei faszinierende Bücher für jeden Geschmack auf Amazon
                    </h2>
                    <div className="space-y-4 text-gray-600">
                      <p>
                        <strong>„Gefahr ist mein Beruf"</strong> – Enthüllt die Geheimnisse des Privatdetektivs und das Leben im Schatten der gefährlichsten Fälle.
                      </p>
                      <p>
                        <strong>„Einkehr in der Schwaigeralm bei Kreuth"</strong> – Erlebe die Geschichte der legendären Almwirtschaft, dem Elternhaus von Josef Resch, und ihre kulinarischen Traditionen, liebevoll erzählt von Hermine Resch.
                      </p>
                      <p className="text-sm italic">
                        Tipp: Die beiden Bücher bilden zusammen ein einzigartiges Gesamtbild – das Leben eines Privatdetektivs und die Wurzeln in der traditionsreichen Schwaigeralm bei Kreuth. Bald im Set erhältlich!
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        onClick={() => window.open('https://amzn.eu/d/3by4fpM', '_blank')}
                        className="bg-[#FF9900] hover:bg-[#FF9900]/90 text-white transition-all duration-300 hover:scale-[1.02] transform"
                      >
                        Jetzt auf Amazon kaufen
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                      <Button
                        onClick={() => window.open('https://amzn.eu/d/cCKzs4r', '_blank')}
                        className="bg-[#FF9900] hover:bg-[#FF9900]/90 text-white transition-all duration-300 hover:scale-[1.02] transform"
                      >
                        Jetzt auf Amazon kaufen
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative aspect-[3/4] rounded-lg overflow-hidden group">
                      <Image
                        src="/Mother-Bookcover.jpg"
                        alt="Buchcover"
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.05]"
                        priority
                      />
                    </div>
                    <div className="relative aspect-[3/4] rounded-lg overflow-hidden group">
                      <Image
                        src="/bookcover-HD-new.jpg"
                        alt="Buchcover"
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.05]"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-[90rem] mx-auto">
              <div className="rounded-lg bg-[#E53935] p-6 md:p-8 text-center">
                <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Sie brauchen Hilfe?
                </h2>
                <p className="mx-auto mb-8 max-w-2xl text-white text-lg">
                  Kontaktieren Sie Josef Resch – vertraulich und direkt, per Mail oder telefonisch. Als erfahrener Privatermittler steht er Ihnen mit höchster Diskretion zur Seite.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="mailto:info@wifka.de"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-[#E53935] font-semibold hover:bg-opacity-90 transition-all duration-300"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    info@wifka.de
                  </a>
                  <a
                    href="tel:+4917183618680"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-[#E53935] font-semibold hover:bg-opacity-90 transition-all duration-300"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    +49 171 8361868
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 md:py-24 border-t-2 border-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-[90rem] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-black">IMPRESSUM</h2>
                  <div className="space-y-3">
                    <p className="text-foreground">Wifka GmbH</p>
                    <p className="text-foreground">Breslauer Str. 22, 23611 Bad Schwartau</p>
                    <p className="text-foreground flex items-center gap-2">
                      <span>Telefon:</span>
                      <a href="tel:+4917183618680" className="font-bold hover:text-primary transition-colors">
                        +49 171 8361868
                      </a>
                    </p>
                    <p className="text-foreground flex items-center gap-2">
                      <span>Festnetz:</span>
                      <a href="tel:+494518104516" className="font-bold hover:text-primary transition-colors">
                        +49 451 8104516
                      </a>
                    </p>
                    <p className="text-foreground flex items-center gap-2">
                      <span>E-Mail:</span>
                      <a
                        href="mailto:info@wifka.de"
                        className="text-primary hover:text-primary/80 transition-colors duration-300"
                      >
                        info@wifka.de
                      </a>
                    </p>
                    <p className="text-foreground flex items-center gap-2">
                      <span>Website:</span>
                      <a
                        href="https://www.wifka.de"
                        className="text-primary hover:text-primary/80 transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        www.wifka.de
                      </a>
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-lg font-bold text-black">Rechtliches</h2>
                  <div className="space-y-3">
                    <p className="text-foreground">
                      Geschäftsführer: <strong>Josef Resch</strong>
                    </p>
                    <p className="text-foreground">
                      Registergericht: Amtsgericht Lübeck<br />
                      Registernummer: HRB 6062 HL
                    </p>
                    <p className="text-foreground">
                      St.Nr.: 22288 16503<br />
                      UstID: DE 243185098
                    </p>
                    <p className="mt-6 text-sm text-foreground">
                      <strong>Haftungshinweis:</strong> Trotz sorgfältiger inhaltlicher
                      Kontrolle übernehmen wir keine Haftung für die Inhalte externer
                      Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren
                      Betreiber verantwortlich.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-6 border-t border-primary/20 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm text-foreground">
                  © {new Date().getFullYear()} Wifka GmbH. Alle Rechte vorbehalten.
                </p>
                <nav className="flex gap-6">
                  <a
                    href="/datenschutz"
                    className="text-primary hover:text-primary/80 hover:underline transition-all duration-300 font-medium min-h-[44px] flex items-center"
                  >
                    Datenschutz
                  </a>
                  <a
                    href="/impressum"
                    className="text-primary hover:text-primary/80 hover:underline transition-all duration-300 font-medium min-h-[44px] flex items-center"
                  >
                    Impressum
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </footer>

        {/* Cookie Consent */}
        <CookieConsent />
      </div>
    </ClientWrapper>
  );
}
