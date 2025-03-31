import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'
import { PostHogProvider } from '../components/PostHogProvider'

export const metadata: Metadata = {
  title: 'Josef Resch - Gefahr ist mein Beruf - Das Buch',
  description: '"Gefahr ist mein Beruf" – Die Website zum packenden True-Crime-Buch über Josef Resch, einen erfahrenen Privatermittler, der gefährliche Fälle weltweit löste. Mit Hintergründen, Leseproben und Bestellmöglichkeiten des Buches sowie spannenden Einblicken in Themen wie die Jagd auf Florian Homm, Drogenermittlungen und den MH17-Absturz. Ideal für Fans von Kriminalgeschichten und realen Thrillern.',
  keywords: 'Privatermittler, Wirtschaftskriminalität, True Crime, Josef Resch, Siemens, BKA, Ermittler, Autobiografie, Florian Homm, MH17, Drogenermittlungen',
  authors: [{ name: 'Josef Resch' }],
  openGraph: {
    type: 'website',
    title: 'Josef Resch - Gefahr ist mein Beruf - Das Buch',
    description: '"Gefahr ist mein Beruf" – Die Website zum packenden True-Crime-Buch über Josef Resch, einen erfahrenen Privatermittler, der gefährliche Fälle weltweit löste.',
    url: 'https://www.gefahr-ist-mein-beruf.com',
    siteName: 'Gefahr ist mein Beruf',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Josef Resch - Gefahr ist mein Beruf - Das Buch'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Josef Resch - Gefahr ist mein Beruf - Das Buch',
    description: '"Gefahr ist mein Beruf" – Die Website zum packenden True-Crime-Buch über Josef Resch, einen erfahrenen Privatermittler, der gefährliche Fälle weltweit löste.',
    images: ['/og-image.jpg']
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: [{ url: '/favicon.ico' }],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
      },
    ],
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Josef Resch - Gefahr ist mein Beruf',
  },
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
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
