import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gefahr ist mein Beruf',
  description: 'Gefahr ist mein Beruf',
  generator: 'Test',
  icons: {
    icon: '/favicon.ico',
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
