'use client'

import { useEffect, useState } from 'react'

const DEFAULT_PHRASES = [
  'la reputación online',
  'la publicidad digital',
  'el SEO, GEO y posicionamiento',
  'los tests de impacto causal',
  'la analítica de datos',
  'el community management y los diseños',
]
const INTERVAL_MS = 2600

export default function RotatingHeadline({
  phrases = DEFAULT_PHRASES,
  intervalMs = INTERVAL_MS,
}: {
  phrases?: string[]
  intervalMs?: number
}) {
  const [i, setI] = useState(0)

  useEffect(() => {
    if (phrases.length <= 1) return
    const id = setInterval(() => {
      setI((v) => (v + 1) % phrases.length)
    }, intervalMs)
    return () => clearInterval(id)
  }, [phrases.length, intervalMs])

  return (
    <span className="hero-rotator" aria-live="polite">
      {/* key fuerza remount → re-dispara la animación CSS de entrada */}
      <span key={i} className="hero-rotator__word">
        {phrases[i]}
      </span>
    </span>
  )
}
