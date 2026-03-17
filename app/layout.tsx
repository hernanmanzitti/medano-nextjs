import type { Metadata } from 'next'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import { WaChip } from '@/components/WaChip'
import { SkipLink } from '@/components/SkipLink'
import './globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Médano',
    default: 'Médano — Multiplicamos la facturación de marcas con estrategia y datos',
  },
  description: 'Potenciamos la facturación de tu marca con estrategias de Google Ads, Reputación Online y Paid Media.',
  icons: {
    icon: '/img/favicon-square.png',
    apple: '/img/favicon-square.png',
  },
  openGraph: {
    locale: 'es_AR',
    type: 'website',
    siteName: 'Médano',
    images: ['/og-medano.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SkipLink />
        <NavBar />
        <main id="main-content">{children}</main>
        <Footer />
        <WaChip />
      </body>
    </html>
  )
}
