import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { verticales } from "@/data/verticales"
import "./page.css"

type Props = {
  params: Promise<{ vertical: string }>
}

export async function generateStaticParams() {
  return verticales.map((v) => ({ vertical: v.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { vertical: vSlug } = await params
  const vertical = verticales.find((v) => v.slug === vSlug)

  if (!vertical) return {}

  return {
    title: `Cómo conseguir reseñas para ${vertical.labelPlural} — Guía práctica | médano`,
    description: vertical.descripcion ?? `Estrategias probadas para conseguir más reseñas de Google en ${vertical.labelPlural}. Paso a paso, adaptado a tu rubro.`,
    alternates: {
      canonical: `/guia/conseguir-resenas/${vertical.slug}`,
    },
    openGraph: {
      title: `Guía: cómo conseguir reseñas para ${vertical.labelPlural} | médano`,
      description: vertical.descripcion ?? `Estrategias probadas para conseguir más reseñas de Google en ${vertical.labelPlural}.`,
      url: `https://medano.co/guia/conseguir-resenas/${vertical.slug}`,
    },
  }
}

export default async function GuiaVerticalPage({ params }: Props) {
  const { vertical: vSlug } = await params
  const vertical = verticales.find((v) => v.slug === vSlug)

  if (!vertical) notFound()

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `Cómo conseguir reseñas para ${vertical.labelPlural}`,
    description: vertical.descripcion,
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Identificá el momento ideal para pedir",
        text: `Pedí la reseña justo después de una experiencia positiva. En ${vertical.labelPlural}, ese momento varía, pero siempre es cuando la satisfacción del cliente está en su punto más alto.`,
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Elegí el canal correcto",
        text: "WhatsApp post-visita, QR en el local, email de seguimiento o link directo a Google. Usá el canal que más usa tu cliente.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Respondé todas las reseñas",
        text: "Responder reseñas — positivas y negativas — muestra gestión activa y mejora tu posicionamiento en Google Maps.",
      },
    ],
  }

  const faqSchema = vertical.faqItems && vertical.faqItems.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: vertical.faqItems.map((item) => ({
          "@type": "Question",
          name: item.pregunta,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.respuesta,
          },
        })),
      }
    : null

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio",               item: "https://medano.co" },
      { "@type": "ListItem", position: 2, name: "Guías de reseñas",     item: "https://medano.co/guia/conseguir-resenas" },
      { "@type": "ListItem", position: 3, name: vertical.labelPlural,   item: `https://medano.co/guia/conseguir-resenas/${vertical.slug}` },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── Hero ── */}
      <section id="guia-hero" className="guia-hero">
        <div className="guia-hero-content">
          <span className="guia-eyebrow">Guía práctica — {vertical.labelPlural}</span>
          <h1 className="guia-title">
            Cómo conseguir reseñas de Google para {vertical.labelPlural}
          </h1>
          {vertical.descripcion && (
            <p className="guia-subtitle">{vertical.descripcion}</p>
          )}
        </div>
      </section>

      {/* ── Stats ── */}
      <section id="guia-stats" className="guia-stats-section">
        <div className="guia-stats-inner">
          <div className="guia-stats-grid">
            <div className="guia-stat-card">
              <span className="guia-stat-value">{vertical.avgReviews}+</span>
              <span className="guia-stat-label">Reseñas promedio en {vertical.labelPlural} bien posicionados</span>
            </div>
            <div className="guia-stat-card">
              <span className="guia-stat-value">{vertical.avgRating}</span>
              <span className="guia-stat-label">Rating promedio que rankea en el top 3 de Google Maps</span>
            </div>
            <div className="guia-stat-card">
              <span className="guia-stat-value">3×</span>
              <span className="guia-stat-label">Más conversiones con estrategia activa de reseñas</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Beneficios clave ── */}
      {vertical.beneficiosClave && vertical.beneficiosClave.length > 0 && (
        <section id="guia-beneficios" className="guia-beneficios-section">
          <div className="guia-beneficios-inner">
            <h2 className="guia-section-title">
              Por qué importan las reseñas en {vertical.labelPlural}
            </h2>
            <div className="guia-beneficios-grid">
              {vertical.beneficiosClave.map((beneficio, i) => (
                <div key={i} className="guia-beneficio-card">
                  <span className="guia-beneficio-num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="guia-beneficio-text">{beneficio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Pasos ── */}
      <section id="guia-pasos" className="guia-pasos-section">
        <div className="guia-pasos-inner">
          <h2 className="guia-section-title">
            Estrategia en 3 pasos para {vertical.labelPlural}
          </h2>
          <div className="guia-pasos-list">
            <div className="guia-paso">
              <div className="guia-paso-num">01</div>
              <div className="guia-paso-body">
                <h3 className="guia-paso-title">Identificá el momento ideal para pedir</h3>
                <p className="guia-paso-text">
                  El momento de mayor satisfacción es cuando la solicitud convierte mejor.
                  Para {vertical.labelPlural}, esto suele ser justo después de la experiencia
                  principal: al salir del local, al finalizar la consulta o al cerrar una
                  operación exitosa. No esperes: cuanto más tiempo pasa, menor es la tasa de
                  respuesta.
                </p>
              </div>
            </div>
            <div className="guia-paso">
              <div className="guia-paso-num">02</div>
              <div className="guia-paso-body">
                <h3 className="guia-paso-title">Usá el canal correcto</h3>
                <p className="guia-paso-text">
                  WhatsApp post-visita, QR en el punto de pago, email de seguimiento o link
                  directo en la firma digital. Elegí el canal que más usa tu cliente. En la
                  mayoría de los rubros, WhatsApp y QR tienen la mayor tasa de conversión.
                  El link directo a Google elimina la fricción — el cliente no tiene que
                  buscar tu ficha.
                </p>
              </div>
            </div>
            <div className="guia-paso">
              <div className="guia-paso-num">03</div>
              <div className="guia-paso-body">
                <h3 className="guia-paso-title">Respondé todas las reseñas</h3>
                <p className="guia-paso-text">
                  Google premia a los negocios con alta tasa de respuesta. Responder reseñas
                  positivas genera confianza; responder las negativas con empatía muestra
                  gestión profesional y puede convertir un cliente insatisfecho en un defensor
                  de la marca. El objetivo no es solo acumular reseñas: es construir
                  reputación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      {vertical.faqItems && vertical.faqItems.length > 0 && (
        <section id="guia-faq" className="guia-faq-section" aria-labelledby="guia-faq-title">
          <div className="guia-faq-inner">
            <h2 id="guia-faq-title" className="guia-section-title">
              Preguntas frecuentes — {vertical.labelPlural}
            </h2>
            <ol className="guia-faq-list" role="list">
              {vertical.faqItems.map((item, i) => (
                <li key={i} className="guia-faq-item" id={`faq-${i + 1}`}>
                  <div className="guia-faq-num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="guia-faq-body">
                    <h3 className="guia-faq-question">{item.pregunta}</h3>
                    <p className="guia-faq-answer">{item.respuesta}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* ── CTA Calculadora ── */}
      <section id="guia-calc-cta" className="guia-calc-cta">
        <div className="guia-calc-cta-inner">
          <div className="guia-calc-cta-content">
            <h2 className="guia-calc-cta-title">
              ¿Cuántas reseñas necesita tu {vertical.label}?
            </h2>
            <p className="guia-calc-cta-text">
              Calculá gratis cuántas reseñas de 5 estrellas necesitás para subir
              tu rating y superar a la competencia en Google.
            </p>
            <div className="guia-calc-cta-buttons">
              <Link
                href={`/calculadora/resenas/${vertical.slug}`}
                className="guia-btn-primary"
              >
                Usar la calculadora para {vertical.labelPlural}
              </Link>
              <Link href="/#contact" className="guia-btn-secondary">
                Hablar con un especialista
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Otras guías ── */}
      <section id="guia-otros" className="guia-otros">
        <div className="guia-otros-inner">
          <h2 className="guia-otros-title">Guías para otros rubros</h2>
          <div className="guia-otros-grid" role="list">
            {verticales
              .filter((v) => v.slug !== vertical.slug)
              .map((v) => (
                <Link
                  key={v.slug}
                  href={`/guia/conseguir-resenas/${v.slug}`}
                  className="guia-otros-card"
                  role="listitem"
                >
                  <span className="guia-otros-name">{v.labelPlural}</span>
                  <span className="guia-otros-hint">{v.context}</span>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}
