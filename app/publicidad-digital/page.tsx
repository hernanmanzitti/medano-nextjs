import type { Metadata } from 'next'
import { PublicidadDigitalContent } from './PublicidadDigitalContent'
import '../styles/publicidad-digital.css'

export const metadata: Metadata = {
  title: 'Publicidad digital para negocios con múltiples locales',
  description:
    'Estrategia y gestión de campañas en Google Ads y Meta para empresas con presencia ' +
    'en múltiples ciudades. Resultados medibles, presupuesto optimizado y crecimiento sostenido.',
  openGraph: {
    title: 'Publicidad digital para negocios con múltiples locales | médano',
    description:
      'Campañas en Google Ads y Meta con resultados medibles para tu negocio.',
    url: 'https://medano.co/publicidad-digital',
  },
}

const paidMediaSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Publicidad digital para empresas',
    description:
      'Estrategia y gestión de campañas en Google Ads y Meta para negocios ' +
      'con múltiples sucursales. Resultados medibles y crecimiento sostenido.',
    provider: {
      '@type': 'Organization',
      name: 'médano',
      url: 'https://medano.co',
    },
    areaServed: ['AR', 'CR', 'PA'],
    serviceType: 'Publicidad digital',
    url: 'https://medano.co/publicidad-digital',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://medano.co' },
      { '@type': 'ListItem', position: 2, name: 'Publicidad digital', item: 'https://medano.co/publicidad-digital' },
    ],
  },
]

export default function PublicidadDigitalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(paidMediaSchema) }}
      />
      <PublicidadDigitalContent />
    </>
  )
}
