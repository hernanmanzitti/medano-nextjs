import type { Metadata } from 'next'
import { ResenasContent } from './ResenasContent'
import '../styles/resenas.css'

export const metadata: Metadata = {
  title: 'Gestión de reseñas online · Google, TripAdvisor y más',
  description:
    'Gestionamos tus reseñas en todas las plataformas desde una bandeja unificada. ' +
    'Más reseñas positivas, respuestas rápidas y reputación digital controlada para tu negocio.',
  openGraph: {
    title: 'Gestión de reseñas online · Google, TripAdvisor y más | médano',
    description:
      'Gestionamos tus reseñas en todas las plataformas desde una bandeja unificada.',
    url: 'https://medano.co/resenas',
  },
}

const resenasSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Gestión de reseñas online',
    description:
      'Monitoreo, análisis y respuesta de reseñas en Google, TripAdvisor, ' +
      'Facebook, UberEats y más de 20 plataformas desde una bandeja unificada.',
    provider: {
      '@type': 'Organization',
      name: 'médano',
      url: 'https://medano.co',
    },
    areaServed: ['AR', 'CR', 'PA'],
    serviceType: 'Reputación digital',
    url: 'https://medano.co/resenas',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://medano.co' },
      { '@type': 'ListItem', position: 2, name: 'Reseñas', item: 'https://medano.co/resenas' },
    ],
  },
]

export default function ResenasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(resenasSchema) }}
      />
      <ResenasContent />
    </>
  )
}
