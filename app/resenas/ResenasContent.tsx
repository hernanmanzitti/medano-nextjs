"use client"

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export function ResenasContent() {
  const revealObserverRef = useRef<IntersectionObserver | null>(null)
  const barsObserverRef = useRef<IntersectionObserver | null>(null)
  const counterObserverRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    revealObserverRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('revealed')
            revealObserverRef.current?.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    document.querySelectorAll('.reveal').forEach((el) => {
      revealObserverRef.current?.observe(el)
    })

    barsObserverRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('animate')
            barsObserverRef.current?.unobserve(e.target)
          }
        })
      },
      { threshold: 0.4 }
    )

    document.querySelectorAll('.resenas-stat-fill').forEach((el) => {
      barsObserverRef.current?.observe(el)
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
      revealObserverRef.current?.disconnect()
      barsObserverRef.current?.disconnect()
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
            "name": "Reseñas Online — Médano",
            "description": "Mejorá tu reputación online. Aumentamos reseñas, subimos tu puntuación y respondemos a todos tus clientes en Google, TripAdvisor, Facebook y más.",
            "url": "https://medano.co/resenas",
            "provider": {
              "@type": "Organization",
              "name": "Médano",
              "url": "https://medano.co",
              "address": { "@type": "PostalAddress", "addressLocality": "Buenos Aires", "addressCountry": "AR" }
            }
          })
        }}
      />

      {/* HERO */}
      <section id="resenas-hero" aria-label="Mejorá tu reputación online">
        <div className="resenas-hero-bg" aria-hidden="true"></div>
        <div className="resenas-hero-grid" aria-hidden="true"></div>
        <div className="container">
          <div className="resenas-hero-inner">

            <div className="hero-eyebrow-shared animate-in">
              <span className="hero-dot" aria-hidden="true"></span>
              Reputación Digital
            </div>

            <h1 className="hero-title-shared animate-in">
              Mejorá tu
              <em> reputación </em>
              online.
            </h1>
            <div className="resenas-hero-stars animate-in" aria-hidden="true">
              <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>
            </div>
            <p className="resenas-hero-sub">
              Aumentá la cantidad de reseñas, subí tu puntuación media y respondé a todos tus clientes.
              Rankeá primero en Google, TripAdvisor, Apple Maps y más.
            </p>

            <div className="resenas-hero-actions">
              <Link href="/#contact" className="btn-primary">
                Empezar ahora
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>

            <div className="resenas-kpi-strip" role="list" aria-label="Resultados clave">
              <div className="resenas-kpi-card" role="listitem">
                <p className="resenas-kpi-number">10x</p>
                <p className="resenas-kpi-title">Reseñas nuevas</p>
                <p className="resenas-kpi-desc">Más opiniones, más visibilidad en buscadores</p>
              </div>
              <div className="resenas-kpi-card" role="listitem">
                <p className="resenas-kpi-number">4.8&#9733;</p>
                <p className="resenas-kpi-title">Puntuación media</p>
                <p className="resenas-kpi-desc">Superá 4&#9733; y convertí más visitas en clientes</p>
              </div>
              <div className="resenas-kpi-card" role="listitem">
                <p className="resenas-kpi-number">24 hs</p>
                <p className="resenas-kpi-title">Tiempo de respuesta</p>
                <p className="resenas-kpi-desc">Respondemos a cada reseña en menos de un día</p>
              </div>
            </div>

          </div>
        </div>

        <div className="resenas-platforms-bar reveal">
          <div className="container">
            <div className="resenas-platforms-bar-inner">
              <span className="resenas-platforms-label">Plataformas</span>
              <div className="resenas-platforms-logos">
                <span>Google</span>
                <span className="resenas-sep" aria-hidden="true">·</span>
                <span>TripAdvisor</span>
                <span className="resenas-sep" aria-hidden="true">·</span>
                <span>Facebook</span>
                <span className="resenas-sep" aria-hidden="true">·</span>
                <span>UberEats</span>
                <span className="resenas-sep" aria-hidden="true">·</span>
                <span>Booking</span>
                <span className="resenas-sep" aria-hidden="true">·</span>
                <span>Apple Maps</span>
                <span className="resenas-sep" aria-hidden="true">·</span>
                <span>Yelp</span>
                <span className="resenas-sep" aria-hidden="true">·</span>
                <span>Open Table</span>
                <span className="resenas-sep" aria-hidden="true">·</span>
                <span className="resenas-platforms-more">+30 más</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section id="resenas-stats">
        <div className="container">

          <div className="resenas-section-header reveal">
            <div className="resenas-section-header-text">
              <span className="section-label">Por qué importa</span>
              <h2 className="section-heading">El proceso de<br />compra cambió</h2>
            </div>
            <div className="resenas-section-counter" aria-hidden="true">1</div>
          </div>

          <div className="resenas-stats-grid">
            <div className="resenas-stat-card reveal">
              <div className="resenas-stat-number">84<span className="resenas-stat-pct">%</span></div>
              <p className="resenas-stat-desc">Confía en una reseña online igual que en una recomendación personal.</p>
              <div className="resenas-stat-source">Fuente: BrightLocal 2023</div>
              <div className="resenas-stat-bar" aria-hidden="true">
                <div className="resenas-stat-fill" style={{ '--fill': '84%' } as React.CSSProperties}></div>
              </div>
            </div>
            <div className="resenas-stat-card reveal">
              <div className="resenas-stat-number">71<span className="resenas-stat-pct">%</span></div>
              <p className="resenas-stat-desc">Consulta reseñas antes de adquirir un servicio o producto.</p>
              <div className="resenas-stat-source">Fuente: ReviewTrackers 2023</div>
              <div className="resenas-stat-bar" aria-hidden="true">
                <div className="resenas-stat-fill" style={{ '--fill': '71%' } as React.CSSProperties}></div>
              </div>
            </div>
            <div className="resenas-stat-card reveal">
              <div className="resenas-stat-number">60<span className="resenas-stat-pct">%</span></div>
              <p className="resenas-stat-desc">No considera un comercio con menos de 4 estrellas de valoración.</p>
              <div className="resenas-stat-source">Fuente: BrightLocal Local Consumer Review Survey</div>
              <div className="resenas-stat-bar" aria-hidden="true">
                <div className="resenas-stat-fill" style={{ '--fill': '60%' } as React.CSSProperties}></div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SERVICIOS */}
      <section id="resenas-servicios">
        <div className="container">

          <div className="resenas-section-header reveal">
            <div className="resenas-section-header-text">
              <span className="section-label">Nuestros servicios</span>
              <h2 className="section-heading">Lo que<br />hacemos</h2>
            </div>
            <div className="resenas-section-counter" aria-hidden="true">2</div>
          </div>

          <div className="resenas-services-grid">

            {/* 1. Analítica & Evolución — wide (span 2) */}
            <div className="resenas-service-card resenas-service-card--wide reveal">
              <div className="resenas-service-tag">DataTrackers</div>
              <div className="resenas-service-wide-inner">
                <div className="resenas-service-wide-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>
                </div>
                <div className="resenas-service-wide-body">
                  <h3 className="resenas-service-title">Analítica &amp; Evolución</h3>
                  <div className="resenas-service-sub">Dashboard con comparativa de períodos</div>
                  <p className="resenas-service-desc">Reportes detallados de rating, cantidad de reseñas, tasa de respuesta y velocidad de respuesta. Incluye comparativa de periodos y evolución con comparación directa frente a Google Maps.</p>
                  <div className="resenas-feature-chips">
                    <span className="resenas-feature-chip">Rating histórico</span>
                    <span className="resenas-feature-chip">Tasa de respuesta</span>
                    <span className="resenas-feature-chip">Velocidad de respuesta</span>
                    <span className="resenas-feature-chip">vs. Google Maps</span>
                    <span className="resenas-feature-chip">Comparativa de períodos</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Solicitud de reseñas */}
            <div className="resenas-service-card reveal">
              <div className="resenas-service-tag">Solicitud</div>
              <div className="resenas-service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="resenas-service-title">Solicitud de reseñas</h3>
              <div className="resenas-service-sub">Email, QR, SMS y NPS</div>
              <p className="resenas-service-desc">Activamos campañas automáticas de email marketing que dirigen a tus clientes a dejar reseñas en las plataformas correctas. También usamos códigos QR, encuestas privadas y SMS.</p>
            </div>

            {/* 3. Bandeja unificada */}
            <div className="resenas-service-card reveal">
              <div className="resenas-service-tag">Gestión</div>
              <div className="resenas-service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" /></svg>
              </div>
              <h3 className="resenas-service-title">Bandeja unificada</h3>
              <div className="resenas-service-sub">Todas las plataformas en un lugar</div>
              <p className="resenas-service-desc">Centralizamos todas tus reseñas en una sola bandeja de entrada. Clasificamos por estado: respondida, pendiente y en proceso, para que no se escape ninguna oportunidad.</p>
            </div>

            {/* 4. Respuestas inteligentes */}
            <div className="resenas-service-card reveal">
              <div className="resenas-service-tag">Respuestas</div>
              <div className="resenas-service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
              </div>
              <h3 className="resenas-service-title">Respuestas inteligentes</h3>
              <div className="resenas-service-sub">IA + criterio humano</div>
              <p className="resenas-service-desc">Respondemos todas tus reseñas en menos de 24 horas. Combinamos respuestas prediseñadas con inteligencia artificial, para que cada cliente sienta que la marca se preocupa por él.</p>
            </div>

            {/* 5. Análisis de palabras clave */}
            <div className="resenas-service-card reveal">
              <div className="resenas-service-tag">Análisis</div>
              <div className="resenas-service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </div>
              <h3 className="resenas-service-title">Análisis de palabras clave</h3>
              <div className="resenas-service-sub">Insights desde la voz del cliente</div>
              <p className="resenas-service-desc">Transformamos la experiencia de compra obteniendo información precisa a nivel de palabra. Descubrí qué valoran y qué les molesta a tus clientes con datos reales.</p>
            </div>

            {/* 6. Benchmark competidores */}
            <div className="resenas-service-card reveal">
              <div className="resenas-service-tag">Competencia</div>
              <div className="resenas-service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </div>
              <h3 className="resenas-service-title">Benchmark competidores</h3>
              <div className="resenas-service-sub">Hasta 10 competidores por ubicación</div>
              <p className="resenas-service-desc">Analizamos la puntuación, cantidad de reseñas y palabras clave de tu competencia. Identificá en qué te destacás y dónde hay oportunidades de mejora.</p>
            </div>

            {/* 7. Comparativa de sucursales */}
            <div className="resenas-service-card reveal">
              <div className="resenas-service-tag">Sucursales</div>
              <div className="resenas-service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h3 className="resenas-service-title">Comparativa de sucursales</h3>
              <div className="resenas-service-sub">Multi-location</div>
              <p className="resenas-service-desc">Comparamos el desempeño de todas tus sucursales: reseñas, puntuación, tasa y velocidad de respuesta. Identificá cuál necesita más atención y actuá en consecuencia.</p>
            </div>
{/* 8. Reportes y Alertas */}
            <div className="resenas-service-card reveal">
              <div className="resenas-service-tag">Reportes</div>
              <div className="resenas-service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              </div>
              <h3 className="resenas-service-title">Informes y Alertas</h3>
              <div className="resenas-service-sub">Automatización a medida</div>
              <p className="resenas-service-desc">Configuramos KPIs personalizados con periodicidad flexible. Recibí alertas inmediatas ante reseñas críticas para proteger tu reputación en tiempo real.</p>
            </div>

            {/* 9. Jerarquía de Usuarios */}
            <div className="resenas-service-card reveal">
              <div className="resenas-service-tag">Gestión Corporativa</div>
              <div className="resenas-service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              </div>
              <h3 className="resenas-service-title">Jerarquía de Usuarios</h3>
              <div className="resenas-service-sub">Control por niveles</div>
              <p className="resenas-service-desc">Asigná accesos diferenciados para administradores centrales, gerentes regionales o encargados de sucursal. Gestión segura y escalable para toda tu organización.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section id="resenas-proceso">
        <div className="container">

          <div className="resenas-section-header reveal">
            <div className="resenas-section-header-text">
              <span className="section-label">Cómo trabajamos</span>
              <h2 className="section-heading">El proceso</h2>
            </div>
            <div className="resenas-section-counter" aria-hidden="true">3</div>
          </div>

          <div className="resenas-proceso-timeline">

            <div className="resenas-proceso-step reveal">
              <div className="resenas-proceso-dot">
                <span className="resenas-proceso-num">01</span>
              </div>
              <div className="resenas-proceso-body">
                <h3 className="resenas-proceso-title">Diagnóstico</h3>
                <p className="resenas-proceso-desc">Auditamos tu presencia actual en todas las plataformas. Puntuación, cantidad de reseñas, tasa de respuesta y posición frente a competidores.</p>
              </div>
            </div>

            <div className="resenas-proceso-step reveal">
              <div className="resenas-proceso-dot">
                <span className="resenas-proceso-num">02</span>
              </div>
              <div className="resenas-proceso-body">
                <h3 className="resenas-proceso-title">Estrategia</h3>
                <p className="resenas-proceso-desc">Diseñamos una estrategia personalizada: qué plataformas priorizar, cómo solicitar reseñas y cómo gestionar respuestas según tu industria.</p>
              </div>
            </div>

            <div className="resenas-proceso-step reveal">
              <div className="resenas-proceso-dot">
                <span className="resenas-proceso-num">03</span>
              </div>
              <div className="resenas-proceso-body">
                <h3 className="resenas-proceso-title">Ejecución</h3>
                <p className="resenas-proceso-desc">Activamos campañas de solicitud, respondemos reseñas y monitoreamos en tiempo real desde nuestra plataforma DataTrackers.</p>
              </div>
            </div>

            <div className="resenas-proceso-step reveal">
              <div className="resenas-proceso-dot">
                <span className="resenas-proceso-num">04</span>
              </div>
              <div className="resenas-proceso-body">
                <h3 className="resenas-proceso-title">Reportes</h3>
                <p className="resenas-proceso-desc">Reportes mensuales con evolución de KPIs: puntuación media, cantidad de reseñas, tasa de respuesta y comparativa con la competencia.</p>
              </div>
            </div>
            <div className="resenas-proceso-step reveal">
              <div className="resenas-proceso-dot">
                <span className="resenas-proceso-num">05</span>
              </div>
              <div className="resenas-proceso-body">
                <h3 className="resenas-proceso-title">Crecimiento y Rentabilidad</h3>
                <p className="resenas-proceso-desc">
                  Transformamos los mejores testimonios en activos para <strong>Paid Media</strong>, impulsando la conversión y la facturación. En paralelo, convertimos los puntos críticos en planes de acción operativa para blindar tu marca.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALCULADORA CTA */}
      <section id="resenas-calc-cta" aria-label="Calculadora de reseñas">
        <div className="container">
          <div className="resenas-calc-cta-inner reveal">

            <div className="resenas-calc-cta-text">
              <span className="section-label">Herramienta gratuita</span>
              <h2 className="resenas-calc-cta-title">
                ¿Cuántas reseñas necesitás para subir de rating?
              </h2>
              <p className="resenas-calc-cta-desc">
                Calculá en segundos cuántas reseñas de 5 estrellas necesita
                tu negocio para alcanzar el rating que querés. Sin registro,
                sin costo.
              </p>
              <div className="resenas-calc-cta-actions">
                <Link href="/calculadora/resenas" className="btn-primary">
                  Usar la calculadora gratis
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
            </div>

            <div className="resenas-calc-cta-preview" aria-hidden="true">
              <div className="resenas-calc-preview-card">
                <div className="resenas-calc-preview-row">
                  <span className="resenas-calc-preview-label">Reseñas actuales</span>
                  <span className="resenas-calc-preview-value">85</span>
                </div>
                <div className="resenas-calc-preview-row">
                  <span className="resenas-calc-preview-label">Rating actual</span>
                  <span className="resenas-calc-preview-value">4.1 ★</span>
                </div>
                <div className="resenas-calc-preview-row">
                  <span className="resenas-calc-preview-label">Rating objetivo</span>
                  <span className="resenas-calc-preview-value">4.5 ★</span>
                </div>
                <div className="resenas-calc-preview-result">
                  <span className="resenas-calc-preview-result-num">58</span>
                  <span className="resenas-calc-preview-result-label">reseñas de 5 ★ necesarias</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section id="resenas-testimonios">
        <div className="container">

          <div className="resenas-section-header reveal">
            <div className="resenas-section-header-text">
              <span className="section-label">Casos reales</span>
              <h2 className="section-heading">Clientes<br />que crecieron</h2>
            </div>
            <div className="resenas-section-counter" aria-hidden="true">&#9733;</div>
          </div>

          <div className="resenas-testi-grid">
            
            <div className="resenas-testi-card reveal">
              <div className="resenas-testi-stars" aria-label="5 estrellas">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <blockquote className="resenas-testi-text">
                &ldquo;No fue suerte. Fue sistema, estrategia y tecnología aplicada a la reputación online."
                  Caso Boreal — Resultados:
                  • Antes: 20 reseñas/mes (1.8 ★)
                  • Con Médano: +600 reseñas (4.6 ★)
                  Reputación activa, ordenada y en crecimiento.&rdquo;
              </blockquote>
              <div className="resenas-testi-footer">
                <div className="resenas-testi-author">
                  <div className="resenas-testi-avatar" aria-hidden="true">AV</div>
                  <div>
                    <div className="resenas-testi-name">Bruno Cirnigliaro.</div>
                    <div className="resenas-testi-biz">Boreal Salud · Argentina</div>
                  </div>
                </div>
                <div className="resenas-testi-platform">Multi-plataforma</div>
              </div>
            </div>

            <div className="resenas-testi-card reveal">
              <div className="resenas-testi-stars" aria-label="5 estrellas">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <blockquote className="resenas-testi-text">
                &ldquo;En 3 meses duplicamos la cantidad de reseñas en Google. Nuestra puntuación subió de 3.8 a 4.6 y el tráfico orgánico creció notablemente. El equipo de Médano maneja todo sin que tengamos que preocuparnos.&rdquo;
              </blockquote>
              <div className="resenas-testi-footer">
                <div className="resenas-testi-author">
                  <div className="resenas-testi-avatar" aria-hidden="true">MP</div>
                  <div>
                    <div className="resenas-testi-name">María P.</div>
                    <div className="resenas-testi-biz">Restaurante · Buenos Aires</div>
                  </div>
                </div>
                <div className="resenas-testi-platform">Google Mi Negocio</div>
              </div>
            </div>

            <div className="resenas-testi-card reveal">
              <div className="resenas-testi-stars" aria-label="5 estrellas">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <blockquote className="resenas-testi-text">
                &ldquo;Nunca habíamos respondido reseñas sistemáticamente. Médano implementó el proceso y en 2 meses nuestra tasa de respuesta pasó de 0% a 98%. Los clientes lo notan y lo mencionan.&rdquo;
              </blockquote>
              <div className="resenas-testi-footer">
                <div className="resenas-testi-author">
                  <div className="resenas-testi-avatar" aria-hidden="true">CL</div>
                  <div>
                    <div className="resenas-testi-name">Carlos L.</div>
                    <div className="resenas-testi-biz">Hotel boutique · Mendoza</div>
                  </div>
                </div>
                <div className="resenas-testi-platform">TripAdvisor</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="resenas-cta">
        <div className="container">
          <div className="resenas-cta-inner reveal">
            <div className="resenas-cta-content">
              <span className="section-label">¿Listo para crecer?</span>
              <h2 className="section-heading">Tu reputación vende.<br />Nosotros la construimos.</h2>
              <p className="section-subheading">
                Contactanos hoy y en 48 horas tenés un diagnóstico gratuito de tu reputación online.
              </p>
            </div>
            <div className="resenas-cta-actions">
              <Link href="/#contact" className="btn-outline">
                Completar formulario
              </Link>
              <a href="https://datatrackers.co/" className="btn-primary" target="_blank" rel="noopener">
                Conocer DataTrackers
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
