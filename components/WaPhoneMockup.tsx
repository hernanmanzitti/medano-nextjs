"use client"

import { useEffect, useState, useRef } from 'react'

/* ── Conversaciones ──────────────────────────────── */
const CONVERSATIONS = [
  {
    business:   'Clínica Ojos BA',
    initials:   'CO',
    clientName: 'Juan',
    link:       'g.page/r/clinicaojosba',
    reply:      '¡Excelente atención! Ya dejé la reseña 🙏',
    device:     'iphone'  as const,
    wallpaper:  'wallpaper-default',
    phoneBg:    '#0f1117',
    headerBg:   '#1a1d2e',
  },
  {
    business:   'Hamburguesería Palermo',
    initials:   'HP',
    clientName: 'María',
    link:       'g.page/r/hamburguesapalermo',
    reply:      'La mejor hamburguesa del barrio ⭐',
    device:     'android' as const,
    wallpaper:  'wallpaper-warm',
    phoneBg:    '#1a1008',
    headerBg:   '#251808',
  },
  {
    business:   'Pinturería Premium',
    initials:   'PP',
    clientName: 'Carlos',
    link:       'g.page/r/pintuerianpremium',
    reply:      'Muy buena atención y variedad 👌',
    device:     'android' as const,
    wallpaper:  'wallpaper-night',
    phoneBg:    '#070d1a',
    headerBg:   '#0d1530',
  },
]

/* ── Fases y duraciones (ms) ─────────────────────── */
type Phase =
  | 'idle'        // pantalla vacía, conversación entra
  | 'sent'        // burbuja enviada aparece
  | 'typing'      // indicador de escritura
  | 'received'    // respuesta aparece
  | 'read'        // ticks se ponen azules
  | 'pause'       // pausa antes de salir
  | 'exit'        // toda la conv sale

const SEQUENCE: { phase: Phase; duration: number }[] = [
  { phase: 'idle',     duration:  500 },
  { phase: 'sent',     duration: 1600 },
  { phase: 'typing',   duration: 1800 },
  { phase: 'received', duration: 1200 },
  { phase: 'read',     duration:  900 },
  { phase: 'pause',    duration: 1400 },
  { phase: 'exit',     duration:  400 },
]

/* ── Componente ──────────────────────────────────── */
export function WaPhoneMockup() {
  const [convIdx, setConvIdx] = useState(0)
  const [phase,   setPhase  ] = useState<Phase>('idle')
  const stepRef               = useRef(0)
  const timerRef              = useRef<ReturnType<typeof setTimeout> | null>(null)

  /* Avanzar por la secuencia */
  useEffect(() => {
    const current = SEQUENCE[stepRef.current]
    if (!current) return

    timerRef.current = setTimeout(() => {
      const nextStep = stepRef.current + 1

      if (nextStep >= SEQUENCE.length) {
        /* Reiniciar con la siguiente conversación */
        stepRef.current = 0
        setConvIdx(i => (i + 1) % CONVERSATIONS.length)
        setPhase('idle')
      } else {
        stepRef.current = nextStep
        setPhase(SEQUENCE[nextStep].phase)
      }
    }, current.duration)

    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [phase, convIdx])

  const conv      = CONVERSATIONS[convIdx]
  const isAndroid = conv.device === 'android'
  const isExiting = phase === 'exit'

  const showSent     = phase !== 'idle'
  const showTyping   = phase === 'typing'
  const showReceived = ['received', 'read', 'pause', 'exit'].includes(phase)
  const ticksBlue    = ['read', 'pause', 'exit'].includes(phase)

  return (
    <div
      className={`wa-phone ${isAndroid ? 'wa-phone--android' : 'wa-phone--iphone'}`}
      style={{ backgroundColor: conv.phoneBg, transition: 'background-color 0.4s ease' }}
    >
      {/* ── Top bar ───────────────────────────── */}
      <div className="wa-phone-top" style={{ backgroundColor: conv.phoneBg }}>
        {isAndroid
          ? <div className="wa-android-camera" aria-hidden="true" />
          : <div className="wa-iphone-notch"   aria-hidden="true" />
        }
      </div>

      {/* ── Status bar (Android) ──────────────── */}
      {isAndroid && (
        <div
          className="wa-android-statusbar"
          style={{ backgroundColor: conv.headerBg }}
          aria-hidden="true"
        >
          <span className="wa-android-time">9:41</span>
          <div className="wa-android-icons">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <rect x="2" y="7" width="16" height="10" rx="2"/>
              <path d="M22 11v2"/>
            </svg>
          </div>
        </div>
      )}

      {/* ── Zona animada: header + body + footer ─ */}
      <div
        key={convIdx}
        className={isExiting ? 'wa-conv-exit' : 'wa-conv-enter'}
        style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden', minHeight: 0 }}
      >
        {/* Header */}
        <div
          className="wa-chat-header"
          style={{ backgroundColor: conv.headerBg }}
        >
          {isAndroid && (
            <svg
              className="wa-android-back"
              width="18" height="18"
              viewBox="0 0 24 24"
              fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          )}
          <div className={`wa-chat-avatar ${isAndroid ? 'wa-chat-avatar--android' : ''}`}>
            {conv.initials}
          </div>
          <div className="wa-chat-info">
            <span className="wa-chat-name">{conv.business}</span>
            <span className="wa-chat-status">en línea</span>
          </div>
          <div className="wa-chat-header-actions" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>
            </svg>
          </div>
        </div>

        {/* Body / burbujas */}
        <div className={`wa-chat-body ${conv.wallpaper}`}>
          <span className="wa-date-chip">Hoy</span>

          {/* Burbuja enviada */}
          {showSent && (
            <div className="wa-bubble wa-bubble--sent wa-bubble--pop" key={`sent-${convIdx}`}>
              Hola {conv.clientName}, gracias por tu visita a{' '}
              <strong>{conv.business}</strong> 🙌 ¿Cómo estuvo? Si la pasaste bien,
              nos ayudaría mucho que lo cuentes acá:
              <br /><br />
              <span className="wa-link">👉 {conv.link}</span>
              <br />¡Muchas gracias!
              <div className="wa-bubble-meta">
                <span className="wa-time">09:42</span>
                <span className={`wa-ticks ${ticksBlue ? 'wa-ticks--blue' : ''}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </span>
              </div>
            </div>
          )}

          {/* Typing indicator */}
          {showTyping && (
            <div className="wa-bubble wa-bubble--received wa-typing-bubble" key={`typing-${convIdx}`}>
              <span className="wa-dot" />
              <span className="wa-dot" />
              <span className="wa-dot" />
            </div>
          )}

          {/* Respuesta recibida */}
          {showReceived && (
            <div className="wa-bubble wa-bubble--received wa-bubble--pop" key={`received-${convIdx}`}>
              <span className="wa-stars">⭐⭐⭐⭐⭐</span>
              {conv.reply}
              <div className="wa-bubble-meta">
                <span className="wa-time">09:48</span>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div
          className={`wa-chat-footer ${isAndroid ? 'wa-chat-footer--android' : ''}`}
          style={{ backgroundColor: conv.headerBg }}
        >
          <div className="wa-fake-input">Escribe un mensaje</div>
          <div className="wa-send-btn" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="white" aria-hidden="true">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* ── Android navbar ────────────────────── */}
      {isAndroid && (
        <div className="wa-android-navbar" style={{ backgroundColor: conv.phoneBg }} aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" opacity="0.5">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
          </svg>
          <div className="wa-android-home-btn" />
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5">
            <rect x="4" y="4" width="16" height="16" rx="2"/>
          </svg>
        </div>
      )}

      {/* ── iPhone home bar ───────────────────── */}
      {!isAndroid && (
        <div className="wa-iphone-home" style={{ backgroundColor: conv.phoneBg }} aria-hidden="true" />
      )}
    </div>
  )
}
