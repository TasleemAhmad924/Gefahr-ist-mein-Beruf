import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'
import { PostHogProvider } from '../components/PostHogProvider'

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
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N825RXCR');
          `}
        </Script>
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N825RXCR"
height="0" width="0" style={{display: 'none', visibility: 'hidden'}}></iframe></noscript>
        {/* End Google Tag Manager (noscript) */}
        <PostHogProvider>
          {children}
        </PostHogProvider>
      </body>
    </html>
  )
}
