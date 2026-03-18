import type { Metadata } from 'next'
import Script from 'next/script'
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
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NSSSTRN9');`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NSSSTRN9"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <SkipLink />
        <NavBar />
        <main id="main-content">{children}</main>
        <Footer />
        <WaChip />
      </body>
    </html>
  )
}
