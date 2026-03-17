import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { verticales } from "@/data/verticales"
import { ciudades } from "@/data/ciudades"
import { plataformas } from "@/data/plataformas"
import { CalculadoraTool } from "./CalculadoraTool"
import "./page.css"

type Props = {
  params: Promise<{ vertical: string; ciudad: string }>
}

export async function generateStaticParams() {
  const params: { vertical: string; ciudad: string }[] = []

  for (const ciudad of ciudades) {
    for (const vertical of verticales) {
      if (ciudad.tipo === "comercial") {
        params.push({ vertical: vertical.slug, ciudad: ciudad.slug })
      } else {
        if (ciudad.verticalesTouristicos?.includes(vertical.slug)) {
          params.push({ vertical: vertical.slug, ciudad: ciudad.slug })
        }
      }
    }
  }

  return params
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { vertical: vSlug, ciudad: cSlug } = await params
  const vertical = verticales.find((v) => v.slug === vSlug)
  const ciudad = ciudades.find((c) => c.slug === cSlug)

  if (!vertical || !ciudad) return {}

  return {
    title: `Calculadora de Reseñas para ${vertical.labelPlural} en ${ciudad.label}`,
    description: `¿Cuántas reseñas necesita tu ${vertical.label} en ${ciudad.label} para subir de rating? Calculalo gratis.`,
    alternates: {
      canonical: `/calculadora/resenas/${vertical.slug}/${ciudad.slug}`,
    },
  }
}

export default async function CalculadoraPage({ params }: Props) {
  const { vertical: vSlug, ciudad: cSlug } = await params
  const vertical = verticales.find((v) => v.slug === vSlug)
  const ciudad = ciudades.find((c) => c.slug === cSlug)

  if (!vertical || !ciudad) notFound()

  return (
    <>
      {/* ── Hero ── */}
      <section id="calc-hero" className="calc-hero" aria-labelledby="calc-hero-title">
        <div className="calc-hero-grid" aria-hidden="true" />
        <div className="calc-hero-content">
          <span className="calc-eyebrow">
            <span className="calc-eyebrow-dot" aria-hidden="true" />
            Calculadora Gratuita
          </span>
          <h1 id="calc-hero-title" className="calc-hero-title">
            ¿Cuántas reseñas necesita tu {vertical.label} en {ciudad.label}?
          </h1>
          <p className="calc-hero-subtitle">{vertical.context}</p>
        </div>
      </section>

      {/* ── Calculadora interactiva ── */}
      <section id="calc-tool" className="calc-tool" aria-labelledby="calc-tool-title">
        <div className="calc-tool-inner">
          <h2 id="calc-tool-title" className="sr-only">
            Calculadora de reseñas
          </h2>
          <CalculadoraTool
            defaultReviews={vertical.avgReviews}
            defaultRating={vertical.avgRating}
          />
        </div>
      </section>

      {/* ── Contexto ── */}
      <section id="calc-contexto" className="calc-contexto" aria-labelledby="calc-contexto-title">
        <div className="calc-contexto-inner">
          <h2 id="calc-contexto-title" className="calc-contexto-title">
            ¿Por qué importa el rating de tu {vertical.label}?
          </h2>
          <div className="calc-stats-grid">
            <div className="calc-stat-card">
              <p className="calc-stat-value">90%</p>
              <p className="calc-stat-label">
                de los consumidores lee reseñas antes de visitar un negocio
              </p>
            </div>
            <div className="calc-stat-card">
              <p className="calc-stat-value">+31%</p>
              <p className="calc-stat-label">
                de gasto adicional en negocios con reseñas excelentes
              </p>
            </div>
            <div className="calc-stat-card">
              <p className="calc-stat-value">4.0★</p>
              <p className="calc-stat-label">
                es el mínimo de rating que los clientes consideran aceptable
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Plataformas ── */}
      {(() => {
        const plataformasFiltradas = plataformas.filter((p) => {
          if (!p.relevantePara.includes(vertical.slug)) return false
          if (vertical.plataformasRelevantes) {
            return vertical.plataformasRelevantes.includes(p.slug)
          }
          return true
        })

        if (plataformasFiltradas.length === 0) return null

        return (
          <section id="calc-plataformas" className="calc-plataformas" aria-labelledby="calc-plataformas-title">
            <div className="calc-plataformas-inner">
              <h2 id="calc-plataformas-title" className="calc-plataformas-title">
                Cómo conseguir más reseñas para tu {vertical.label} en {ciudad.label}
              </h2>
              {plataformasFiltradas.map((plataforma) => (
                <div key={plataforma.slug} className="calc-plataforma-item">
                  <h3 className="calc-plataforma-nombre">
                    {plataforma.label} para {vertical.labelPlural} en {ciudad.label}
                  </h3>
                  <p className="calc-plataforma-desc">{plataforma.descripcion}</p>
                  <ul className="calc-plataforma-tips">
                    {plataforma.tips.map((tip, i) => (
                      <li key={i} className="calc-plataforma-tip">{tip}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )
      })()}

      {/* ── CTA ── */}
      <section id="calc-cta" className="calc-cta" aria-labelledby="calc-cta-title">
        <div className="calc-cta-grid" aria-hidden="true" />
        <div className="calc-cta-inner">
          <h2 id="calc-cta-title" className="calc-cta-title">
            Empezá a conseguir reseñas hoy
          </h2>
          <p className="calc-cta-text">
            DataTrackers automatiza el pedido de reseñas a tus clientes.
            Probalo gratis 14 días.
          </p>
          <div className="calc-cta-buttons">
            <a
              href="https://datatrackers.co"
              className="calc-cta-btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Probar DataTrackers gratis
            </a>
            <a
              href="https://wa.me/5491173616189"
              className="calc-cta-btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hablá con nosotros por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
