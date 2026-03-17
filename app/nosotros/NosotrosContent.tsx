"use client"

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import '../styles/nosotros.css'

export function NosotrosContent() {
  const observerRef = useRef<IntersectionObserver | null>(null)

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
      { threshold: 0.12 }
    )

    const selectors = '.nosotros-milestone, .nosotros-member-card, .nosotros-qs-grid, .nosotros-cta-inner, .nosotros-quote-inner'
    document.querySelectorAll(selectors).forEach((el) => {
      observerRef.current?.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "Nosotros — Médano",
            "description": "El equipo detrás de Médano. Crecimiento digital para empresas que quieren liderar.",
            "url": "https://medano.co/nosotros",
            "publisher": {
              "@type": "Organization",
              "name": "Médano",
              "url": "https://medano.co",
              "address": { "@type": "PostalAddress", "addressLocality": "Buenos Aires", "addressCountry": "AR" }
            }
          })
        }}
      />

      {/* HERO */}
      <section id="nosotros-hero" aria-label="Presentación del equipo">
        <div className="nosotros-hero-bg" aria-hidden="true"></div>
        <div className="nosotros-hero-grid" aria-hidden="true"></div>
        <div className="container">
          <div className="nosotros-hero-inner">
            <div className="nosotros-hero-heading">
              <div className="hero-eyebrow-shared animate-in">
                <span className="hero-dot" aria-hidden="true"></span>
                Empresa
              </div>
              <h1 className="hero-title-shared animate-in">
                <em>El equipo</em> que construye tu reputación.
              </h1>
              <p className="nosotros-hero-subtitle animate-in">
                Somos socios estratégicos de largo plazo, no solo proveedores.
                Impacto medible, decisiones basadas en datos.
              </p>
            </div>

            <nav className="nosotros-page-nav" aria-label="Secciones de la página">
              <a href="#quienes-somos" className="nosotros-pn-item">
                <span>Quiénes somos</span>
                <span className="nosotros-pn-arrow" aria-hidden="true">→</span>
              </a>
              <a href="#nuestro-camino" className="nosotros-pn-item">
                <span>Nuestro camino</span>
                <span className="nosotros-pn-arrow" aria-hidden="true">→</span>
              </a>
              <a href="#el-equipo" className="nosotros-pn-item">
                <span>El equipo</span>
                <span className="nosotros-pn-arrow" aria-hidden="true">→</span>
              </a>
            </nav>
          </div>
        </div>
      </section>

      {/* QUIENES SOMOS */}
      <section id="quienes-somos" aria-labelledby="quienes-somos-title">
        <div className="nosotros-qs-geo" aria-hidden="true"></div>
        <div className="container">
          <div className="nosotros-qs-grid">
            <div className="nosotros-qs-label-col">
              <span className="nosotros-section-label">Quiénes somos</span>
            </div>
            <div className="nosotros-qs-content">
              <h2 id="quienes-somos-title" className="nosotros-qs-title">
                Crecimiento digital<br/>con propósito
              </h2>
              <div className="nosotros-qs-body">
                <p>
                  Médano es un equipo especializado en <strong>performance, posicionamiento y crecimiento de negocio</strong>.
                  Nuestra misión es ayudar a las empresas a escalar su rentabilidad de manera sostenida,
                  a través de estrategias basadas en datos y orientadas a resultados medibles.
                </p>
                <p>
                  Integramos un ecosistema completo de servicios en un modelo de trabajo enfocado en
                  generar impacto concreto en adquisición, visibilidad y rentabilidad.
                </p>
                <p>
                  El pilar central de nuestra metodología es la <strong>medición y la arquitectura de datos</strong>.
                  Estructuramos modelos de información que garantizan trazabilidad, consistencia analítica
                  y una toma de decisiones sustentada en indicadores objetivos.
                </p>
                <p>
                  Nuestra visión es consolidarnos como <strong>socios estratégicos de largo plazo</strong>,
                  integrándonos a la estructura de cada cliente para impulsar su evolución con rigor
                  analítico, eficiencia operativa y compromiso.
                </p>
              </div>
              <div className="nosotros-qs-metrics" role="list" aria-label="Métricas del equipo">
                <div className="nosotros-metric" role="listitem">
                  <span className="nosotros-metric-value">+50</span>
                  <span className="nosotros-metric-label">Marcas gestionadas</span>
                </div>
                <div className="nosotros-metric" role="listitem">
                  <span className="nosotros-metric-value">+17</span>
                  <span className="nosotros-metric-label">Años de experiencia</span>
                </div>
                <div className="nosotros-metric" role="listitem">
                  <span className="nosotros-metric-value">6</span>
                  <span className="nosotros-metric-label">Países en Latam</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section id="nosotros-quote" aria-label="Filosofía del equipo">
        <div className="nosotros-quote-bg" aria-hidden="true"></div>
        <div className="container">
          <div className="nosotros-quote-inner">
            <span className="nosotros-quote-mark" aria-hidden="true">&ldquo;</span>
            <blockquote className="nosotros-quote-text">
              Trabajamos con propósito.<br/>
              <em>El impacto real en el negocio es la única métrica que importa.</em>
            </blockquote>
            <div className="nosotros-quote-author">
              <div className="nosotros-quote-line" aria-hidden="true"></div>
              <span className="nosotros-quote-name">Equipo Médano · Buenos Aires</span>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section id="nuestro-camino" aria-labelledby="camino-title">
        <div className="nosotros-timeline-geo" aria-hidden="true"></div>
        <div className="container">
          <div className="nosotros-timeline-header">
            <div>
              <span className="nosotros-section-label">Nuestro camino</span>
              <h2 id="camino-title" className="nosotros-timeline-title">
                A lo largo<br/>del tiempo
              </h2>
            </div>
          </div>

          <ol className="nosotros-timeline" aria-label="Hitos del equipo Médano">
            {[
              { year: '2016', title: 'Fundación de Médano', desc: 'Nacemos en Argentina con la misión de ayudar a empresas a construir y mejorar su reputación digital en Latinoamérica, bajo el nombre DataTrackers.' },
              { year: '2016', title: 'Primeros clientes', desc: 'Comenzamos a trabajar con las primeras marcas, desarrollando estrategias de reseñas y SEO con resultados medibles desde el primer mes.' },
              { year: '2017', title: 'Lanzamiento de DataTrackers', desc: 'Desarrollamos nuestra propia plataforma de analytics para que nuestros clientes monitoreen su reputación en tiempo real en todas las plataformas.' },
              { year: '2019', title: 'Expansión en Latam', desc: 'Crecemos con nuevos clientes en Costa Rica, Panamá y distintas industrias: gastronomía, salud, turismo y retail.' },
              { year: '2024', title: 'Crecimiento regional', desc: 'Expandimos operaciones a México, Chile y Colombia, alcanzando más de 50 clientes activos en la región con presencia en 6 países.' },
              { year: '2025', title: 'Nueva plataforma & AI', desc: 'Lanzamos la nueva versión de DataTrackers con inteligencia artificial y ampliamos nuestra oferta con servicios integrales de publicidad digital.' },
            ].map((m, i) => (
              <li key={i} className="nosotros-milestone">
                <div className="nosotros-milestone-year">{m.year}</div>
                <div className="nosotros-milestone-content">
                  <h3 className="nosotros-milestone-title">{m.title}</h3>
                  <p className="nosotros-milestone-desc">{m.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* EQUIPO */}
      {/* <section id="el-equipo" aria-labelledby="equipo-title">
        <div className="container">
          <div className="nosotros-team-header">
            <span className="nosotros-section-label">El equipo</span>
            <h2 id="equipo-title" className="nosotros-team-title">
              Expertos en <em>crecimiento</em><br/>digital y reputación
            </h2>
            <p className="nosotros-team-intro">
              Un equipo apasionado por los datos, las marcas y el impacto real en el negocio de nuestros clientes.
            </p>
          </div>

          <div className="nosotros-team-grid" role="list" aria-label="Integrantes del equipo">
            {[
              {
                name: 'Manuel Barrenechea',
                role: 'Director Comercial',
                bio: 'Lidera la estrategia de crecimiento y la visión de Médano. Especialista en reputación de marcas y crecimiento en reseñas.',
                img: '/img/manuel.jpeg',
                initials: 'MB',
                placeholderClass: 'nosotros-photo-placeholder--yellow',
                linkedin: 'https://www.linkedin.com/in/manuel-barrenechea-76756b8/',
                roleTag: 'Director',
              },
              {
                name: 'María Florencia Turdó',
                role: 'Directora de Publicidad Digital',
                bio: 'Responsable de las campañas de publicidad digital y el análisis de datos para optimizar el rendimiento de cada cliente.',
                img: '/img/florencia.jpeg',
                initials: 'MT',
                placeholderClass: 'nosotros-photo-placeholder--cyan',
                linkedin: 'https://www.linkedin.com/in/maria-florencia-turd%C3%B3-5b7b30114/',
                roleTag: 'Directora',
              },
              {
                name: 'Tomás Garbers',
                role: 'Director de Diseño Gráfico',
                bio: 'Responsable de la estrategia de contenido y la identidad visual de Médano. Define la estética y voz de la marca.',
                img: '/img/tomas.jpeg',
                initials: 'TG',
                placeholderClass: 'nosotros-photo-placeholder--mid',
                linkedin: 'https://www.linkedin.com/in/tomasgarbers/',
                roleTag: 'Director',
              },
            ].map((member) => (
              <article key={member.name} className="nosotros-member-card" role="listitem">
                <div className="nosotros-photo-wrap">
                  <Image
                    className="nosotros-photo-img"
                    src={member.img}
                    alt={`Foto de ${member.name}, ${member.role} de Médano`}
                    width={400}
                    height={400}
                    unoptimized
                  />
                  <div className={`nosotros-photo-placeholder ${member.placeholderClass}`} aria-hidden="true">{member.initials}</div>
                  <div className="nosotros-photo-overlay" aria-hidden="true">
                    <span className="nosotros-role-tag">{member.roleTag}</span>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nosotros-social-btn"
                      aria-label={`LinkedIn de ${member.name}`}
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                        <circle cx="4" cy="4" r="2"/>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="nosotros-member-info">
                  <h3 className="nosotros-member-name">{member.name}</h3>
                  <p className="nosotros-member-role">{member.role}</p>
                  <p className="nosotros-member-bio">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>*/}

      {/* CTA */}
      <section id="nosotros-cta" aria-labelledby="cta-title">
        <div className="nosotros-cta-geo1" aria-hidden="true"></div>
        <div className="nosotros-cta-geo2" aria-hidden="true"></div>
        <div className="container">
          <div className="nosotros-cta-inner">
            <div className="nosotros-cta-eyebrow">Trabajemos juntos</div>
            <h2 id="cta-title" className="nosotros-cta-title">
              ¿Querés trabajar<br/>con <em>nosotros?</em>
            </h2>
            <p className="nosotros-cta-sub">
              Somos un equipo enfocado y comprometido. Si te interesa sumarte
              o trabajar con Médano, escribinos.
            </p>
            <div className="nosotros-cta-actions">
              <Link href="/#contact" className="btn-primary">
                Contactar al equipo
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
