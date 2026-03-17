"use client"

import { useRef, FormEvent } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import './styles/medano-home.css'

export default function HomePage() {
  const btnRef = useRef<HTMLButtonElement>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const btn = btnRef.current
    if (!btn) return

    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      })

      btn.textContent = '¡Mensaje enviado!'
      btn.style.background = 'var(--color-success)'
      btn.disabled = true
      setTimeout(() => {
        btn.innerHTML = 'Enviar mensaje <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>'
        btn.style.background = ''
        btn.disabled = false
        form.reset()
      }, 3000)
    } catch {
      btn.textContent = 'Error, intentá de nuevo'
      btn.style.background = 'var(--color-error, #e53e3e)'
      setTimeout(() => {
        btn.innerHTML = 'Enviar mensaje <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>'
        btn.style.background = ''
      }, 3000)
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Médano",
            "description": "Crecimiento digital para empresas que quieren liderar. Google Ads, Meta Ads, Reputación Digital, Analytics y Branding.",
            "url": "https://medano.co",
            "areaServed": { "@type": "Country", "name": "Argentina" },
            "address": { "@type": "PostalAddress", "addressLocality": "Buenos Aires", "addressCountry": "AR" },
            "serviceType": ["Google Ads", "Meta Ads", "Reputación Digital", "Analytics", "Branding", "Community Management"]
          })
        }}
      />

      {/* HERO */}
      <section id="hero" aria-label="Presentación">
        <div className="hero-bg-pattern" aria-hidden="true"></div>
        <div className="hero-grid-lines" aria-hidden="true"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-eyebrow">
              <span className="hero-dot" aria-hidden="true"></span>
              Crecimiento Digital
            </div>
            <h1 className="hero-title animate-in">
              Tu reputación
              <em> vende.</em>
              {' '}Nosotros la construimos.
            </h1>
            <p className="hero-subtitle animate-in">
              Gestionamos publicidad digital, reseñas y SEO para que más clientes
              te encuentren, te elijan y vuelvan a elegirte.
            </p>
            <div className="hero-actions animate-in">
              <a href="#contact" className="btn-primary">
                Empezar ahora
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
            <div className="hero-metrics" role="list" aria-label="Métricas destacadas">
              <div role="listitem">
                <p className="hero-metric-value">+50</p>
                <p className="hero-metric-label">Marcas gestionadas</p>
              </div>
               {/*<div role="listitem">
                <p className="hero-metric-value">8×</p>
                <p className="hero-metric-label">ROI promedio</p>
              </div>*/}
              <div role="listitem">
                <p className="hero-metric-value">+10 años</p>
                <p className="hero-metric-label">En el mercado</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section id="clients" aria-labelledby="clients-heading">
        <div className="container">
          <div className="clients-header">
            <div className="clients-header-left">
              <span className="section-label">Clientes</span>
              <h2 className="clients-tagline" id="clients-heading">
                Más de 50 marcas<br/>confían en Médano.
              </h2>
              <p className="clients-subtitle">
                De empresa de retail y clínicas a franquicias y e-commerce —
                construimos crecimiento en todas las industrias.
              </p>
            </div>
            <div className="clients-stats-block">
              <div className="clients-stat">
                <p className="clients-stat-value">+50</p>
                <p className="clients-stat-label">Marcas activas</p>
              </div>
              <div className="clients-stat-divider" aria-hidden="true"></div>
              <div className="clients-stat">
                <p className="clients-stat-value">6</p>
                <p className="clients-stat-label">Industrias</p>
              </div>
              <div className="clients-stat-divider" aria-hidden="true"></div>
              <div className="clients-stat">
                <p className="clients-stat-value">+10 años</p>
                <p className="clients-stat-label">En el mercado</p>
              </div>
            </div>
          </div>

          <div className="clients-grid" role="list" aria-label="Clientes destacados">
            <div className="client-logo-item" role="listitem">
              <img src="/img/clientes_logo_kansas.png" alt="Kansas" className="client-logo-img" />
            </div>
            <div className="client-logo-item" role="listitem">
              <img src="/img/clientes_logo_medicus.png" alt="Medicus" className="client-logo-img" />
            </div>
            <div className="client-logo-item" role="listitem">
              <img src="/img/clientes_logo_ar_holdings.png" alt="AR Holdings" className="client-logo-img" />
            </div>
            <div className="client-logo-item" role="listitem">
              <img src="/img/clientes_logo_petrotandil.png" alt="Petrotandil" className="client-logo-img" />
            </div>
            <div className="client-logo-item" role="listitem">
              <img src="/img/clientes_logo_pf.png" alt="PF Changs" className="client-logo-img client-logo-img--wide" />
            </div>
            <div className="client-logo-item" role="listitem">
              <img src="/img/clientes_logo_boreal.png" alt="Boreal Salud" className="client-logo-img client-logo-img--wide" />
            </div>
            <div className="client-logo-item" role="listitem">
              <img src="/img/clientes_logo_hb.png" alt="Británico" className="client-logo-img" />
            </div>
            <div className="client-logo-item" role="listitem">
              <img src="/img/clientes_logo_la_delfina.png" alt="La Delfina" className="client-logo-img client-logo-img--wide" />
            </div>
            <div className="client-logo-item" role="listitem">
              <img src="/img/clientes_logo_faro.png" alt="Grupo Faro Verde" className="client-logo-img" />
            </div>
            <div className="client-logo-item" role="listitem">
              <img src="/img/clientes_logo_jr.png" alt="johnny rockets" className="client-logo-img" />
            </div>
            <div className="client-logo-item" role="listitem">
              <img src="/img/clientes_logo_otamendi.png" alt="Sanatorio Otamendi" className="client-logo-img client-logo-img--wide" />
            </div>
            <div className="client-logo-item" role="listitem">
              <img src="/img/clientes_logo_assistravel.png" alt="Assistravel" className="client-logo-img" />
            </div>
            <div className="client-logo-item" role="listitem">
              <img src="/img/clientes_logo_outback.png" alt="Outback" className="client-logo-img" />
            </div>
            <div className="client-logo-item" role="listitem">
              <img src="/img/clientes_logo_unicomer.png" alt="Grupo Unicomer" className="client-logo-img" />
            </div>
            <div className="client-logo-item" role="listitem">
              <img src="/img/clientes_logo_nexus.png" alt="Nexus Sport" className="client-logo-img" />
            </div>
          </div>

          <div className="clients-industries">
            <span className="clients-industry-item">Salud</span>
            <span className="clients-industry-sep" aria-hidden="true">·</span>
            <span className="clients-industry-item">Gastronomía</span>
            <span className="clients-industry-sep" aria-hidden="true">·</span>
            <span className="clients-industry-item">Real Estate</span>
            <span className="clients-industry-sep" aria-hidden="true">·</span>
            <span className="clients-industry-item">Retail</span>
            <span className="clients-industry-sep" aria-hidden="true">·</span>
            <span className="clients-industry-item">Educación</span>
            <span className="clients-industry-sep" aria-hidden="true">·</span>
            <span className="clients-industry-item">Franquicias</span>
            <span className="clients-industry-sep" aria-hidden="true">·</span>
            <span className="clients-industry-item">Hotelería</span>
          </div>
        </div>
        <div className="clients-section-divider" aria-hidden="true"></div>
      </section>

      {/* SERVICES */}
      <section id="services" aria-labelledby="services-heading">
        <div className="container">
          <div className="services-header">
            <div>
              <span className="section-label">Servicios</span>
              <h2 className="section-heading" id="services-heading">Lo que hacemos</h2>
            </div>
            <div className="services-header-right">
              <p className="section-subheading">
                Cada servicio es una palanca de crecimiento diseñada
                para generar resultados medibles, no solo actividad.
              </p>
            </div>
          </div>

          <div className="services-grid" role="list">
            <Link href="/publicidad-digital" className="service-card-link">
              <article className="service-card animate-in" role="listitem">
                <span className="service-number" aria-hidden="true">01</span>
                <div className="service-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                </div>
                <h3>Publicidad Digital</h3>
                <p>Paid media con foco en crecimiento rentable y sostenido.</p>
              </article>
            </Link>
            <Link href="/resenas" className="service-card-link">
              <article className="service-card animate-in" role="listitem">
                <span className="service-number" aria-hidden="true">02</span>
                <div className="service-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </div>
                <h3>Gestión de Reseñas</h3>
                <p>Google, TripAdvisor, Meta, UberEats y más plataformas.</p>
              </article>
            </Link>
            <article className="service-card animate-in" role="listitem">
              <span className="service-number" aria-hidden="true">03</span>
              <div className="service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
              </div>
              <h3>Analytics &amp; Data</h3>
              <p>Dashboards en tiempo real, atribución multicanal y reporting ejecutivo para decisiones basadas en datos reales.</p>
            </article>
            <article className="service-card animate-in" role="listitem">
              <span className="service-number" aria-hidden="true">04</span>
              <div className="service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
              </div>
              <h3>SEO &amp; Posicionamiento</h3>
              <p>Estrategia orgánica y optimización técnica para convertir buscadores en fuentes de rentabilidad sostenible.</p>
            </article>
            <article className="service-card animate-in" role="listitem">
              <span className="service-number" aria-hidden="true">05</span>
              <div className="service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/>
                  <circle cx="5" cy="5" r="1.5" fill="currentColor" stroke="none"/>
                  <circle cx="19" cy="5" r="1.5" fill="currentColor" stroke="none"/>
                  <circle cx="5" cy="19" r="1.5" fill="currentColor" stroke="none"/>
                  <circle cx="19" cy="19" r="1.5" fill="currentColor" stroke="none"/>
                </svg>
              </div>
              <h3>Community Management &amp; Diseño</h3>
              <p>Social media, diseño gráfico y producción de video.</p>
            </article>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      {/* <section id="projects" aria-labelledby="projects-heading">
        <div className="container">
          <div className="projects-header">
            <div>
              <span className="section-label">Proyectos</span>
              <h2 className="section-heading" id="projects-heading">Resultados que hablan.</h2>
            </div>
            <a href="#contact" className="btn-outline">Ver todos los casos</a>
          </div>

          <div className="projects-gallery">
            <article className="project-item">
              <div className="project-bg" aria-hidden="true">01</div>
              <div className="project-overlay">
                <span className="project-tag">Google Ads · E-commerce</span>
                <h3>Marca Líder en Indumentaria</h3>
              </div>
            </article>
            <article className="project-item">
              <div className="project-bg" aria-hidden="true">02</div>
              <div className="project-overlay">
                <span className="project-tag">Meta Ads · Lead Generation</span>
                <h3>Clínica Dental — Zona Norte</h3>
              </div>
            </article>
            <article className="project-item">
              <div className="project-bg" aria-hidden="true">03</div>
              <div className="project-overlay">
                <span className="project-tag">Reputación · Hospitality</span>
                <h3>Hotel Boutique Palermo</h3>
              </div>
            </article>
            <article className="project-item">
              <div className="project-bg" aria-hidden="true">04</div>
              <div className="project-overlay">
                <span className="project-tag">DataTrackers · Franquicias</span>
                <h3>Red de Franquicias — 40 sucursales</h3>
              </div>
            </article>
          </div>
        </div>
      </section>*/}

      {/* ABOUT */}
      <section id="about" aria-labelledby="about-heading">
        <div className="container">
          <div className="about-grid">
            <div className="about-visual">
              <div className="about-visual-card">
                <div className="about-visual-bg" aria-hidden="true"></div>
                <Image
                  src="/img/equipo.jpeg"
                  alt="Equipo Médano"
                  className="about-visual-img"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                />
                <div className="about-badge">
                  <p className="about-badge-value">+10</p>
                  <p className="about-badge-label">Años de trayectoria</p>
                </div>
                <div className="about-visual-stat">
                  <p>Equipo especializado en crecimiento digital.</p>
                </div>
              </div>
            </div>

            <div className="about-content">
              <span className="section-label">Nosotros</span>
              <h2 className="section-heading" id="about-heading">
                      {/* No somos una agencia.<br/>*/}
                Somos tu equipo de crecimiento.
              </h2>
              <p className="section-subheading">
                En Médano combinamos estrategia de datos, tecnología propia y creatividad
                para construir marcas digitales que dominan su categoría. Cada cliente
                recibe atención dedicada, objetivos claros y resultados medibles.
              </p>

              <div className="about-values">
                <div className="about-value-item">
                  <h4>Orientados a resultados</h4>
                  <p>Cada acción tiene un objetivo de negocio claro y métricas de éxito definidas.</p>
                </div>
                <div className="about-value-item">
                  <h4>Transparencia total</h4>
                  <p>Reportes en tiempo real y acceso completo a todos tus datos.</p>
                </div>
                <div className="about-value-item">
                  <h4>Tecnología propia</h4>
                  <p>DataTrackers: software de gestión de reputación desarrollado por Médano.</p>
                </div>
                <div className="about-value-item">
                  <h4>Equipo local</h4>
                  <p>Especialistas en el mercado argentino con visión global.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" aria-labelledby="contact-heading">
        <div className="contact-bg" aria-hidden="true"></div>
        <div className="contact-bg-dots" aria-hidden="true"></div>
        <div className="container">
          <div className="contact-inner">
            <span className="section-label">Contacto</span>
            <h2 className="section-heading" id="contact-heading">¿Listo para crecer?</h2>
            <p className="section-subheading">
              Contanos sobre tu marca.
            </p>

            <form id="contact-form" className="contact-form" name="contacto" method="POST" noValidate onSubmit={handleSubmit}>
              <input type="hidden" name="form-name" value="contacto" />
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="nombre">Nombre <span className="sr-only">(requerido)</span></label>
                  <input type="text" id="nombre" name="nombre" placeholder="Tu nombre completo" autoComplete="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="empresa">Empresa</label>
                  <input type="text" id="empresa" name="empresa" placeholder="Nombre de tu empresa" autoComplete="organization" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email <span className="sr-only">(requerido)</span></label>
                  <input type="email" id="email" name="email" placeholder="tu@empresa.com" autoComplete="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="telefono">Teléfono</label>
                  <input type="tel" id="telefono" name="telefono" placeholder="+54 9 11 0000-0000" autoComplete="tel" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea id="mensaje" name="mensaje" placeholder="Contanos sobre tu negocio, objetivos y desafíos…"></textarea>
              </div>
              <button type="submit" className="btn-primary" ref={btnRef}>
                Enviar mensaje
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
