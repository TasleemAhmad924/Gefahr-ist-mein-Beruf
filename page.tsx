import { ChevronDown, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { BookOpen, CheckCircle, FileText, Newspaper, Play, Shield, ShoppingCart, Store } from "lucide-react"

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
            <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">Beruf</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
            A gripping journey into the world of professional risk and danger by Josef Resch
          </p>
          <Button
            variant="outline"
            size="lg"
            className="animate-bounce rounded-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
          >
            <ChevronDown className="mr-2" />
            Discover More
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
                  src="/placeholder.svg?height=600&width=400"
                  alt="Josef Resch"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">Meet the Author</h2>
              <p className="mb-6 text-gray-300">
                Privatermittler Josef Resch hat bereits für alle Kaliber gearbeitet: für eine verzweifelte Mutter, die ihr entführtes Kind aus den Fängen des algerischen Vaters befreit sehen will, für Wirtschaftsgrößen wie Siemens, die ein Sicherheitsleck gestopft sehen wollen, sowie zuletzt für einen anonymen Auftraggeber, der 47 Millionen Dollar Belohnung auslobt, um die Drahtzieher des Abschusses von Flug MH17 ausfindig zu machen, bei dem 2014 in der Ostukraine 298 Menschen ums Leben kamen.

                Immer wieder begibt er sich bei seiner Arbeit in Lebensgefahr, wenn er zum Beispiel im Auftrag des Bundeskriminalamts in die kolumbianische Drogenhochburg Medellín reist, wo er zufällig auf den berüchtigten Pablo Escobar trifft und wenig später Opfer eines Anschlags wird.
                Resch erlebt zudem überraschende Wendungen, wenn sich etwa eine unscheinbare Oma als Drogenbaronin entpuppt, und er muss gelegentlich dabei zusehen, wie von ihm aufgedeckte Skandale vertuscht werden, damit sie nicht an die Öffentlichkeit gelangen.

                Kurz vor dem Ruhestand lässt Josef Resch einen Teil der in diesem Geschäft existentiellen Diskretion fallen und lässt uns an seinen spektakulärsten Einsätzen teilhaben.
              </p>
              <Separator className="mb-6 bg-red-600/20" />
              <div className="flex gap-4">
                <Button variant="outline" className="border-red-600">
                  About the Author
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Highlights */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">Inside the Book</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Chapter 1: The Beginning",
                description: "How it all started - the first dangerous assignment.",
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
                  <h3 className="mb-2 text-xl font-bold text-red-600">{chapter.title}</h3>
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
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">About the Book</h2>
              <p className="mb-6 text-gray-300">
                In "Gefahr ist mein Beruf," Josef Resch takes readers on an unprecedented journey into the world of
                professional risk-taking. Through firsthand accounts and gripping narratives, he reveals the intense
                preparation, split-second decisions, and unwavering courage required in his dangerous profession.
              </p>
              <div className="mb-8 grid gap-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-red-600/10 p-2">
                    <CheckCircle className="h-4 w-4 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold">Real-world Experiences</h3>
                    <p className="text-sm text-gray-300">Authentic accounts from decades of professional risk-taking</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-red-600/10 p-2">
                    <Shield className="h-4 w-4 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold">Expert Insights</h3>
                    <p className="text-sm text-gray-300">
                      Professional techniques and strategic thinking in high-stakes situations
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-red-600/10 p-2">
                    <BookOpen className="h-4 w-4 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold">Behind the Scenes</h3>
                    <p className="text-sm text-gray-300">
                      Exclusive details from some of the most challenging assignments
                    </p>
                  </div>
                </div>
              </div>
              <Button className="bg-red-600 hover:bg-red-700">
                <BookOpen className="mr-2 h-4 w-4" />
                Read Sample
              </Button>
            </div>
            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-2xl">
                <img
                  src="/placeholder.svg?height=800&width=600"
                  alt="Book Cover"
                  className="h-full w-full object-cover"
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
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">Media Coverage</h2>
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
              <a key={index} href={item.link} className="group relative overflow-hidden rounded-lg">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                  <div className="absolute bottom-0 p-4">
                    <div className="mb-2 flex items-center gap-2">
                      {item.type === "video" && <Play className="h-4 w-4 text-red-600" />}
                      {item.type === "pdf" && <FileText className="h-4 w-4 text-red-600" />}
                      {item.type === "article" && <Newspaper className="h-4 w-4 text-red-600" />}
                      <span className="text-sm text-red-600">{item.source}</span>
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
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Available Now</h2>
              <div className="mb-6 flex items-center justify-center gap-2">
                <span className="text-3xl font-bold text-red-600">€24.99</span>
                <span className="text-sm text-gray-300">(Hardcover)</span>
              </div>
              <div className="mb-8 flex flex-col gap-2 text-sm text-gray-300">
                <p>Also available in:</p>
                <div className="flex justify-center gap-4">
                  <span>Kindle Edition: €9.99</span>
                  <span>Audiobook: €19.99</span>
                </div>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button size="lg" className="bg-[#FF9900] hover:bg-[#FF9900]/90">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Buy on Amazon
                </Button>
                <Button size="lg" variant="outline" className="border-red-600">
                  <Store className="mr-2 h-4 w-4" />
                  Other Retailers
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="rounded-lg bg-gradient-to-r from-red-900/50 to-black p-8 text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">Begin Your Journey</h2>
            <p className="mx-auto mb-8 max-w-2xl text-gray-300">
              Dive into the thrilling world of professional risk-taking and discover the stories that will keep you on
              the edge of your seat.
            </p>
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              Get Your Copy Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-red-600/20 py-8">
        <div className="container mx-auto px-4 text-center text-gray-300">
          <p>© {new Date().getFullYear()} Josef Resch. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

