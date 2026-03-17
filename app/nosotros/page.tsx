import type { Metadata } from 'next'
import { NosotrosContent } from './NosotrosContent'

export const metadata: Metadata = {
  title: 'Sobre Nosotros | Médano — Agencia de Performance',
  description: 'Conocé al equipo de Médano. Combinamos años de experiencia en marketing estratégico y tecnología para escalar negocios en toda la región.',
}

export default function NosotrosPage() {
  return <NosotrosContent />
}
