"use client"

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export function PublicidadDigitalContent() {
  const observerRef = useRef<IntersectionObserver | null>(null)
  const counterObserverRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            observerRef.current?.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    document.querySelectorAll('.reveal').forEach((el) => {
      observerRef.current?.observe(el)
    })

    counterObserverRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-active')
            counterObserverRef.current?.unobserve(e.target)
          }
        })
      },
      { threshold: 0.5 }
    )

    document.querySelectorAll('.resenas-section-counter').forEach((el) => {
      counterObserverRef.current?.observe(el)
    })

    return () => {
      observerRef.current?.disconnect()
      counterObserverRef.current?.disconnect()
    }
  }, [])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Publicidad Digital — Médano",
            "description": "Performance marketing: Google Ads, Meta Ads, TikTok, LinkedIn y Video Ads para empresas en Argentina y Latinoamérica.",
            "url": "https://medano.co/publicidad-digital",
            "provider": {
              "@type": "ProfessionalService",
              "name": "Médano",
              "url": "https://medano.co",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Buenos Aires",
                "addressCountry": "AR"
              }
            },
            "areaServed": {
              "@type": "Country",
              "name": "Argentina"
            },
            "serviceType": ["Google Ads", "Meta Ads", "TikTok Ads", "LinkedIn Ads", "Video Ads", "Programmatic", "Analytics"]
          })
        }}
      />

      {/* HERO */}
      <section id="pd-hero" aria-label="Publicidad Digital — Hero">
        <div className="pd-hero-bg" aria-hidden="true"></div>
        <div className="pd-hero-grid" aria-hidden="true"></div>
        <div className="container">
          <div className="pd-hero-inner">

            <div className="hero-eyebrow-shared animate-in">
              <span className="hero-dot" aria-hidden="true"></span>
              Performance Marketing
            </div>

            <h1 className="hero-title-shared animate-in">
              Potenciá tu forma
              <em> de adquirir.</em>
            </h1>

            <p className="pd-hero-sub animate-in">
              Diseñamos y ejecutamos campañas de publicidad digital orientadas a resultados reales: más conversiones, mejor costo por adquisición y escala sostenida.
            </p>

            <div className="pd-hero-actions animate-in">
              <Link href="/#contact" className="btn-primary">
                Empezar ahora
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* MÉTRICAS */}
      <section id="pd-metricas" aria-labelledby="metricas-title">
        <div className="container">
          <div className="pd-metrics-header reveal">
            <span className="pd-section-label">Números que importan</span>
            <h2 className="pd-section-title" id="metricas-title">
              Los resultados hablan<br />por sí solos.
            </h2>
          </div>

          <div className="pd-metrics-grid" role="list" aria-label="Métricas de performance">

            <div className="pd-metric-card reveal reveal-delay-1" role="listitem">
              <span className="pd-metric-value" aria-label="50k leads">+50.000</span>
              <p className="pd-metric-label">Leads calificados<br />en el último año</p>
            </div>

            <div className="pd-metric-card reveal reveal-delay-2" role="listitem">
              <span className="pd-metric-value" aria-label="+5 mm usd">+5M US$</span>
              <p className="pd-metric-label"> en ventas generadas<br />para clientes</p>
            </div>

            <div className="pd-metric-card reveal reveal-delay-3" role="listitem">
              <span className="pd-metric-value" aria-label="Más 15 mercados">+15 países</span>
              <p className="pd-metric-label">con campañas activas</p>
            </div>
            <div className="pd-metric-card reveal reveal-delay-4" role="listitem">
              <span className="pd-metric-value" aria-label="24 horas">+10 fuentes</span>
              <p className="pd-metric-label">de Datos en los Dashboards<br />de nuestros clientes</p>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="pd-servicios" aria-labelledby="servicios-title">
        <div className="container">
          <div className="pd-servicios-header">
            <span className="section-label">Canales de adquisición</span>
            <h2 className="pd-section-title reveal" id="servicios-title">
              Cobertura total<br />en todos los canales.
            </h2>
          </div>

          <div className="pd-servicios-grid" role="list" aria-label="Servicios de publicidad digital">

            {/* Google Ads */}
            <article className="pd-service-card reveal reveal-delay-1" role="listitem">
              <p className="pd-service-num" aria-hidden="true">01</p>
              <div className="pd-service-icon-wrap" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.35 11.1H12.18V13.83H18.69C18.36 17.64 15.19 19.27 12.19 19.27C8.36 19.27 5 16.25 5 12C5 7.9 8.2 4.73 12.2 4.73C15.29 4.73 17.1 6.7 17.1 6.7L19 4.72C19 4.72 16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12C2.03 17.05 6.16 22 12.25 22C17.6 22 21.5 18.33 21.5 12.91C21.5 11.76 21.35 11.1 21.35 11.1Z" />
                </svg>
              </div>
              <h3 className="pd-service-name">Google Ads</h3>
              <p className="pd-service-tagline">Search · Display · Shopping · PMax</p>
              <p className="pd-service-desc">Capturamos la intención de compra en el momento exacto. Estructuramos campañas de búsqueda, display, shopping y Performance Max para maximizar el retorno sobre inversión.</p>
            </article>

            {/* Meta Ads */}
            <article className="pd-service-card reveal reveal-delay-2" role="listitem">
              <p className="pd-service-num" aria-hidden="true">02</p>
              <div className="pd-service-icons-duo" aria-hidden="true">
                {/* Instagram */}
                <div className="pd-service-icon-wrap">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                {/* Facebook */}
                <div className="pd-service-icon-wrap">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </div>
              </div>
              <h3 className="pd-service-name">Meta Ads</h3>
              <p className="pd-service-tagline">Facebook · Instagram · Audience Network</p>
              <p className="pd-service-desc">Impacto en las plataformas sociales con mayor alcance. Diseñamos creativos, segmentamos audiencias y optimizamos el funnel completo desde awareness hasta conversión.</p>
            </article>

            {/* Video Ads */}
            <article className="pd-service-card reveal reveal-delay-3" role="listitem">
              <p className="pd-service-num" aria-hidden="true">03</p>
              <div className="pd-service-icons-duo" aria-hidden="true">
                <div className="pd-service-icon-wrap">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
                  </svg>
                </div>
                <div className="pd-service-icon-wrap">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.55A3.02 3.02 0 0 0 .5 6.19C0 8.04 0 12 0 12s0 3.96.5 5.81a3.02 3.02 0 0 0 2.12 2.14C4.46 20.5 12 20.5 12 20.5s7.54 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14C24 15.96 24 12 24 12s0-3.96-.5-5.81zM9.75 15.5V8.5l6.25 3.5-6.25 3.5z" />
                  </svg>
                </div>
              </div>
              <h3 className="pd-service-name">Video Ads</h3>
              <p className="pd-service-tagline">TikTok · YouTube</p>
              <p className="pd-service-desc">Formatos de video que generan awareness y performance. Producimos piezas adaptadas al contexto de cada plataforma para maximizar el engagement y las conversiones.</p>
            </article>

            {/* LinkedIn Ads */}
            <article className="pd-service-card reveal reveal-delay-1" role="listitem">
              <p className="pd-service-num" aria-hidden="true">04</p>
              <div className="pd-service-icon-wrap" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
              </div>
              <h3 className="pd-service-name">LinkedIn Ads</h3>
              <p className="pd-service-tagline">B2B · Lead Gen · Sponsored Content</p>
              <p className="pd-service-desc">La plataforma B2B por excelencia. Segmentación por cargo, industria y empresa para alcanzar tomadores de decisión con mensajes que convierten.</p>
            </article>

            {/* Programática */}
            <article className="pd-service-card reveal reveal-delay-2" role="listitem">
              <p className="pd-service-num" aria-hidden="true">05</p>
              <div className="pd-service-icon-wrap" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
              </div>
              <h3 className="pd-service-name">Programmatic</h3>
              <p className="pd-service-tagline">Display · Native · DOOH</p>
              <p className="pd-service-desc">Alcance masivo y preciso a través de compra programática. Display, native advertising y publicidad exterior digital para construir presencia de marca en todos los puntos de contacto.</p>
            </article>

            {/* Analytics */}
            <article className="pd-service-card reveal reveal-delay-3" role="listitem">
              <p className="pd-service-num" aria-hidden="true">06</p>
              <div className="pd-service-icon-wrap" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
              </div>
              <h3 className="pd-service-name">Reportes &amp; Analytics</h3>
              <p className="pd-service-tagline">Data Studio · GA4 · Dashboards</p>
              <p className="pd-service-desc">Visibilidad total de tu inversión. Dashboards en tiempo real en Looker Studio y GA4 para que veas qué funciona, qué no y cuánto vale cada peso invertido.</p>
            </article>

          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section id="pd-proceso">
        <div className="container">

          <div className="resenas-section-header reveal">
            <div className="resenas-section-header-text">
              <span className="section-label">Nuestra metodología</span>
              <h2 className="section-heading">El proceso</h2>
            </div>
          </div>

          <div className="resenas-proceso-timeline">

            <div className="resenas-proceso-step reveal">
              <div className="resenas-proceso-dot">
                <span className="resenas-proceso-num">01</span>
              </div>
              <div className="resenas-proceso-body">
                <h3 className="resenas-proceso-title">Diagnóstico</h3>
                <p className="resenas-proceso-desc">Auditamos tus campañas actuales, identificamos ineficiencias y mapeamos oportunidades. En 72 horas tenés un informe con potencial real de mejora.</p>
              </div>
            </div>

            <div className="resenas-proceso-step reveal">
              <div className="resenas-proceso-dot">
                <span className="resenas-proceso-num">02</span>
              </div>
              <div className="resenas-proceso-body">
                <h3 className="resenas-proceso-title">Estrategia</h3>
                <p className="resenas-proceso-desc">Diseñamos la arquitectura de campañas, definimos audiencias, KPIs y presupuesto por canal. Cada decisión tiene un fundamento en datos, no en intuición.</p>
              </div>
            </div>

            <div className="resenas-proceso-step reveal">
              <div className="resenas-proceso-dot">
                <span className="resenas-proceso-num">03</span>
              </div>
              <div className="resenas-proceso-body">
                <h3 className="resenas-proceso-title">Ejecución</h3>
                <p className="resenas-proceso-desc">Activamos, monitoreamos y optimizamos en tiempo real. Ajustes proactivos ante cualquier variación de performance con respuesta máxima de 24 horas.</p>
              </div>
            </div>

            <div className="resenas-proceso-step reveal">
              <div className="resenas-proceso-dot">
                <span className="resenas-proceso-num">04</span>
              </div>
              <div className="resenas-proceso-body">
                <h3 className="resenas-proceso-title">Escalado</h3>
                <p className="resenas-proceso-desc">Identificamos los mensajes y canales que mejor convierten y escalamos inversión de forma inteligente para multiplicar resultados sin sacrificar eficiencia.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PARTNERS DE MEDIOS */}
      <section id="pd-partners" aria-labelledby="partners-title">
        <div className="container">
          <div className="pd-partners-header reveal">
            <span className="pd-section-label">Partners de medios</span>
            <h2 className="pd-section-title" id="partners-title">
              Presentes en las<br />plataformas que importan.
            </h2>
          </div>

          <div className="pd-partners-grid" role="list" aria-label="Plataformas de publicidad digital">

            <div className="pd-partner-item reveal reveal-delay-1" role="listitem">
              <div className="pd-partner-badge">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" /></svg>
                <span className="pd-partner-name">Google</span>
              </div>
            </div>

            <div className="pd-partner-item reveal reveal-delay-2" role="listitem">
              <div className="pd-partner-badge">
                <svg fill="currentColor" fillRule="evenodd" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.897 4c1.915 0 3.516.932 5.43 3.376l.282-.373c.19-.246.383-.484.58-.71l.313-.35C14.588 4.788 15.792 4 17.225 4c1.273 0 2.469.557 3.491 1.516l.218.213c1.73 1.765 2.917 4.71 3.053 8.026l.011.392.002.25c0 1.501-.28 2.759-.818 3.7l-.14.23-.108.153c-.301.42-.664.758-1.086 1.009l-.265.142-.087.04a3.493 3.493 0 01-.302.118 4.117 4.117 0 01-1.33.208c-.524 0-.996-.067-1.438-.215-.614-.204-1.163-.56-1.726-1.116l-.227-.235c-.753-.812-1.534-1.976-2.493-3.586l-1.43-2.41-.544-.895-1.766 3.13-.343.592C7.597 19.156 6.227 20 4.356 20c-1.21 0-2.205-.42-2.936-1.182l-.168-.184c-.484-.573-.837-1.311-1.043-2.189l-.067-.32a8.69 8.69 0 01-.136-1.288L0 14.468c.002-.745.06-1.49.174-2.23l.1-.573c.298-1.53.828-2.958 1.536-4.157l.209-.34c1.177-1.83 2.789-3.053 4.615-3.16L6.897 4zm-.033 2.615l-.201.01c-.83.083-1.606.673-2.252 1.577l-.138.199-.01.018c-.67 1.017-1.185 2.378-1.456 3.845l-.004.022a12.591 12.591 0 00-.207 2.254l.002.188c.004.18.017.36.04.54l.043.291c.092.503.257.908.486 1.208l.117.137c.303.323.698.492 1.17.492 1.1 0 1.796-.676 3.696-3.641l2.175-3.4.454-.701-.139-.198C9.11 7.3 8.084 6.616 6.864 6.616zm10.196-.552l-.176.007c-.635.048-1.223.359-1.82.933l-.196.198c-.439.462-.887 1.064-1.367 1.807l.266.398c.18.274.362.56.55.858l.293.475 1.396 2.335.695 1.114c.583.926 1.03 1.6 1.408 2.082l.213.262c.282.326.529.54.777.673l.102.05c.227.1.457.138.718.138.176.002.35-.023.518-.073.338-.104.61-.32.813-.637l.095-.163.077-.162c.194-.459.29-1.06.29-1.785l-.006-.449c-.08-2.871-.938-5.372-2.2-6.798l-.176-.189c-.67-.683-1.444-1.074-2.27-1.074z" />
                </svg>
                <span className="pd-partner-name">Meta</span>
              </div>
            </div>

            <div className="pd-partner-item reveal reveal-delay-3" role="listitem">
              <div className="pd-partner-badge">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                <span className="pd-partner-name">LinkedIn</span>
              </div>
            </div>

            <div className="pd-partner-item reveal reveal-delay-4" role="listitem">
              <div className="pd-partner-badge">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg>
                <span className="pd-partner-name">TikTok</span>
              </div>
            </div>

            <div className="pd-partner-item reveal reveal-delay-1" role="listitem">
              <div className="pd-partner-badge">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" /></svg>
                <span className="pd-partner-name">YouTube</span>
              </div>
            </div>

            <div className="pd-partner-item reveal reveal-delay-2" role="listitem">
              <div className="pd-partner-badge">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.385 3.535 9.954 8.438 11.477-.117-.976-.222-2.474.046-3.539.243-.96 1.62-6.868 1.62-6.868s-.414-.827-.414-2.051c0-1.924 1.115-3.362 2.503-3.362 1.18 0 1.753.886 1.753 1.948 0 1.187-.757 2.963-1.148 4.61-.327 1.378.69 2.5 2.048 2.5 2.457 0 4.352-2.591 4.352-6.331 0-3.312-2.38-5.628-5.78-5.628-3.936 0-6.244 2.952-6.244 6.003 0 1.188.457 2.46 1.028 3.155a.412.412 0 0 1 .095.394c-.105.436-.338 1.378-.384 1.57-.061.254-.204.308-.47.186-1.754-.817-2.85-3.386-2.85-5.45 0-4.43 3.219-8.502 9.284-8.502 4.876 0 8.664 3.473 8.664 8.112 0 4.84-3.05 8.733-7.28 8.733-1.422 0-2.76-.74-3.218-1.612l-.874 3.263c-.317 1.22-1.17 2.748-1.742 3.678C10.044 23.88 11.007 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                </svg>
                <span className="pd-partner-name">Pinterest</span>
              </div>
            </div>

            <div className="pd-partner-item reveal reveal-delay-3" role="listitem">
              <div className="pd-partner-badge">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" /></svg>
                <span className="pd-partner-name">Spotify</span>
              </div>
            </div>

            <div className="pd-partner-item reveal reveal-delay-4" role="listitem">
              <div className="pd-partner-badge">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.314 1.59c-.225.003-.45.013-.675.03-2.165.155-4.295.924-6.069 2.327-2.194 1.732-3.296 4.325-3.496 7.05h.002c-.093 1.22-.23 2.15-.469 2.63-.238.479-.42.638-1.24.639C.27 14.259-.4 15.612.266 16.482c1.248 1.657 2.902 2.705 4.72 3.364a2.198 2.198 0 00-.033.367 2.198 2.198 0 002.2 2.197 2.198 2.198 0 002.128-1.668c1.307.12 2.607.14 3.824.1.364-.012.73-.045 1.094-.092a2.198 2.198 0 002.127 1.66 2.198 2.198 0 002.2-2.197 2.198 2.198 0 00-.151-.797 12.155 12.155 0 002.303-1.549c2.094-1.807 3.511-4.399 3.302-7.404-.112-1.723-.761-3.298-1.748-4.608-2.143-2.86-5.53-4.309-8.918-4.265zm.366 1.54c.312.008.623.027.933.063 2.48.288 4.842 1.496 6.4 3.577v.001c.829 1.1 1.355 2.386 1.446 3.792v.003c.173 2.477-.965 4.583-2.777 6.147a10.66 10.66 0 01-2.375 1.535 2.198 2.198 0 00-.98-.234 2.198 2.198 0 00-1.934 1.158 9.894 9.894 0 01-1.338.146 27.323 27.323 0 01-3.971-.148 2.198 2.198 0 00-1.932-1.156 2.198 2.198 0 00-1.347.463c-1.626-.553-3.078-1.422-4.155-2.762 1.052-.096 1.916-.6 2.319-1.408.443-.889.53-1.947.625-3.198v-.002c.175-2.391 1.11-4.536 2.92-5.964h.002c1.77-1.402 3.978-2.061 6.164-2.012zm-3.157 4.638c-.688 0-1.252.579-1.252 1.298 0 .72.564 1.297 1.252 1.297.689 0 1.252-.577 1.252-1.297 0-.711-.563-1.298-1.252-1.298zm5.514 0c-.688 0-1.25.579-1.25 1.298-.008.72.554 1.297 1.25 1.297.688 0 1.252-.577 1.252-1.297 0-.711-.564-1.298-1.252-1.298zM9.641 11.78a.72.72 0 00-.588.32.692.692 0 00-.11.54c.345 1.783 2.175 3.129 4.264 3.129h.125c1.056-.032 2.026-.343 2.816-.922.767-.556 1.29-1.316 1.477-2.137a.746.746 0 00-.094-.547.69.69 0 00-.445-.32.714.714 0 00-.867.539c-.22.93-1.299 1.9-2.934 1.94-1.572.046-2.738-.986-2.926-1.956a.72.72 0 00-.718-.586Z" />
                </svg>
                <span className="pd-partner-name">Waze</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="pd-cta" aria-label="Llamado a la acción">
        <div className="container">
          <div className="pd-cta-content">
            <span className="pd-cta-label">¿Listo para crecer?</span>
            <h2 className="pd-cta-title">
              Empezá a adquirir<br />clientes con propósito.
            </h2>
            <p className="pd-cta-sub">
              Hablemos sobre tu negocio, tus objetivos y qué canales tienen más potencial para vos.
            </p>
            <div className="pd-cta-actions">
              <Link href="/#contact" className="btn-outline">
                Completar formulario
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
