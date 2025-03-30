import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gefahr ist mein Beruf – Josef Resch | Privatermittler & Autor',
  description: 'Josef Resch, ehemaliger Privatermittler, enthüllt in seinem Buch gefährliche Einsätze für Siemens, BKA und mehr. Jetzt seine Geschichte lesen.',
  keywords: 'Privatermittler, Wirtschaftskriminalität, Buch, Josef Resch, Siemens, BKA, Ermittler, Autobiografie',
  authors: [{ name: 'Josef Resch' }],
  openGraph: {
    type: 'website',
    title: 'Gefahr ist mein Beruf – Josef Resch',
    description: 'Die wahre Geschichte eines Privatermittlers im Kampf gegen Wirtschaftskriminalität.',
    url: 'https://www.josef-resch.de',
    siteName: 'Josef Resch',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Gefahr ist mein Beruf – Josef Resch'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gefahr ist mein Beruf – Josef Resch',
    description: 'Die wahre Geschichte eines Privatermittlers im Kampf gegen Wirtschaftskriminalität.',
    images: ['/og-image.jpg']
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' }
    ]
  }
}

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode
}>) {
  return (
      <html lang="en">
      <body>{children}</body>
      </html>
  )
}
