import type { Metadata } from 'next'
import Script from 'next/script'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import { WaChip } from '@/components/WaChip'
import { SkipLink } from '@/components/SkipLink'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://medano.co'),
  title: {
    default: 'médano — Agencia de reseñas y publicidad digital',
    template: '%s | médano',
  },
  description:
    'Agencia especializada en gestión de reseñas online y publicidad digital ' +
    'para empresas con múltiples sucursales en Argentina y Latinoamérica.',
  icons: {
    icon: '/img/favicon-square.png',
    apple: '/img/favicon-square.png',
  },
  openGraph: {
    siteName: 'médano',
    locale: 'es_AR',
    type: 'website',
    images: ['/og-medano.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@medano_latam',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': ['Organization', 'LocalBusiness'],
              name: 'médano',
              legalName: 'medano SRL',
              url: 'https://medano.co',
              logo: 'https://medano.co/images/logomedanofinal.png',
              description:
                'Agencia especializada en gestión de reseñas online y publicidad digital ' +
                'para empresas con múltiples sucursales en Argentina y Latinoamérica.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Buenos Aires',
                addressRegion: 'Buenos Aires',
                addressCountry: 'AR',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                availableLanguage: 'Spanish',
                url: 'https://medano.co/contacto',
              },
              sameAs: [
                'https://www.instagram.com/medano.latam',
                'https://www.linkedin.com/company/medano-latam',
              ],
              areaServed: ['AR', 'CR', 'PA'],
              knowsAbout: [
                'gestión de reseñas online',
                'reputación digital',
                'publicidad en Google Ads',
                'publicidad en Meta',
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}
