import type { Metadata } from 'next'
import { PublicidadDigitalContent } from './PublicidadDigitalContent'
import '../styles/publicidad-digital.css'

export const metadata: Metadata = {
  title: 'Publicidad Digital y Paid Media',
  description: 'Estrategias de Google y Meta Ads enfocadas en ROI y escalabilidad de ventas para empresas.',
}

export default function PublicidadDigitalPage() {
  return <PublicidadDigitalContent />
}
