"use client"

import { useEffect, useState } from 'react'

const CONVERSATIONS = [
  {
    business: 'Clínica Ojos BA',
    initials: 'CO',
    clientName: 'Juan',
    link: 'g.page/r/clinicaojosba',
    reply: '¡Excelente atención! Ya dejé la reseña 🙏',
    device: 'iphone' as const,
    wallpaper: 'wallpaper-default',
    phoneBg: '#0f1117',
    headerBg: '#1a1d2e',
  },
  {
    business: 'Hamburguesa Palermo',
    initials: 'HP',
    clientName: 'María',
    link: 'g.page/r/hamburguesapalermo',
    reply: 'La mejor hamburguesa del barrio ⭐',
    device: 'android' as const,
    wallpaper: 'wallpaper-warm',
    phoneBg: '#1a1008',
    headerBg: '#251808',
  },
  {
    business: 'Pinturería Premium',
    initials: 'PP',
    clientName: 'Carlos',
    link: 'g.page/r/pintuerianpremium',
    reply: 'Muy buena atención y variedad 👌',
    device: 'android' as const,
    wallpaper: 'wallpaper-night',
    phoneBg: '#070d1a',
    headerBg: '#0d1530',
  },
]

export function WaPhoneMockup() {
  const [active, setActive] = useState(0)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true)
      setTimeout(() => {
        setActive(prev => (prev + 1) % CONVERSATIONS.length)
        setAnimating(false)
      }, 300)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  const conv = CONVERSATIONS[active]
  const isAndroid = conv.device === 'android'

  return (
    <div
      className={`wa-phone ${isAndroid ? 'wa-phone--android' : 'wa-phone--iphone'}`}
      style={{ backgroundColor: conv.phoneBg, transition: 'background-color 0.4s ease' }}
    >
      <div className="wa-phone-top" style={{ backgroundColor: conv.phoneBg }}>
        {isAndroid ? (
          <div className="wa-android-camera" aria-hidden="true" />
        ) : (
          <div className="wa-iphone-notch" aria-hidden="true" />
        )}
      </div>

      {isAndroid && (
        <div className="wa-android-statusbar" style={{ backgroundColor: conv.headerBg }} aria-hidden="true">
          <span className="wa-android-time">9:41</span>
          <div className="wa-android-icons">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="7" width="16" height="10" rx="2"/><path d="M22 11v2"/></svg>
          </div>
        </div>
      )}

      <div
        className={`wa-chat-header ${animating ? 'wa-conv-exit' : 'wa-conv-enter'}`}
        style={{ backgroundColor: conv.headerBg }}
      >
        {isAndroid && (
          <svg className="wa-android-back" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
        </div>
      </div>

      <div className={`wa-chat-body ${conv.wallpaper} ${animating ? 'wa-conv-exit' : 'wa-conv-enter'}`}>
        <span className="wa-date-chip">Hoy</span>

        <div className="wa-bubble wa-bubble--sent">
          Hola {conv.clientName}, gracias por tu visita a <strong>{conv.business}</strong> 🙌 ¿Cómo estuvo? Si la pasaste bien, nos ayudaría mucho que lo cuentes acá:
          <br /><br />
          <span className="wa-link">👉 {conv.link}</span>
          <br />¡Muchas gracias!
          <div className="wa-bubble-meta">
            <span className="wa-time">09:42</span>
            <span className="wa-ticks wa-ticks--read">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
            </span>
          </div>
        </div>

        <div className="wa-bubble wa-bubble--received">
          <span className="wa-stars">⭐⭐⭐⭐⭐</span>
          {conv.reply}
          <div className="wa-bubble-meta">
            <span className="wa-time">09:48</span>
          </div>
        </div>
      </div>

      <div
        className={`wa-chat-footer ${isAndroid ? 'wa-chat-footer--android' : ''}`}
        style={{ backgroundColor: conv.headerBg }}
      >
        <div className="wa-fake-input">Escribe un mensaje</div>
        <div className="wa-send-btn" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="white" aria-hidden="true"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
        </div>
      </div>

      {isAndroid && (
        <div className="wa-android-navbar" style={{ backgroundColor: conv.phoneBg }} aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" opacity="0.5"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
          <div className="wa-android-home-btn" />
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5"><rect x="4" y="4" width="16" height="16" rx="2"/></svg>
        </div>
      )}

      {!isAndroid && (
        <div className="wa-iphone-home" style={{ backgroundColor: conv.phoneBg }} aria-hidden="true" />
      )}
    </div>
  )
}
