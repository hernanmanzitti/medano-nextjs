import type { Metadata } from 'next'
import { ResenasContent } from './ResenasContent'
import '../styles/resenas.css'

export const metadata: Metadata = {
  title: 'Gestión de Reseñas y Reputación Online',
  description: 'Automatizá tus reseñas en Google para mejorar tu reputación y facturación. Caso de éxito: de 1.8 a 4.6 estrellas.',
}

export default function ResenasPage() {
  return <ResenasContent />
}
