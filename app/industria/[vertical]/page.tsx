import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { verticales } from "@/data/verticales"
import { NotasPreview } from "@/app/components/NotasPreview"
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
    title: `Gestión de reseñas para ${vertical.labelPlural}`,
    description: `Cómo mejorar la reputación online de tu ${vertical.label.toLowerCase()} con múltiples sucursales. Estrategias, plataformas y herramientas para gestionar reseñas a escala.`,
    alternates: {
      canonical: `/industria/${vertical.slug}`,
    },
  }
}

const industriaSchema = (vertical: (typeof verticales)[0]) => [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Gestión de reseñas para ${vertical.labelPlural}`,
    description: vertical.descripcion ?? vertical.context,
    provider: {
      "@type": "Organization",
      name: "médano",
      url: "https://medano.co",
    },
    serviceType: "Reputación digital",
    areaServed: ["AR", "CR", "PA"],
    url: `https://medano.co/industria/${vertical.slug}`,
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://medano.co" },
      { "@type": "ListItem", position: 2, name: "Industrias", item: "https://medano.co/industria" },
      { "@type": "ListItem", position: 3, name: vertical.labelPlural, item: `https://medano.co/industria/${vertical.slug}` },
    ],
  },
  ...(vertical.faqItems?.length
    ? [{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: vertical.faqItems.map((f) => ({
          "@type": "Question",
          name: f.pregunta,
          acceptedAnswer: { "@type": "Answer", text: f.respuesta },
        })),
      }]
    : []),
]

export default async function IndustriaVerticalPage({ params }: Props) {
  const { vertical: vSlug } = await params
  const vertical = verticales.find((v) => v.slug === vSlug)

  if (!vertical) notFound()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(industriaSchema(vertical)) }}
      />

      {/* ── Hero ── */}
      <section id="industria-hero" className="industria-hero" aria-labelledby="industria-title">
        <div className="industria-hero-content">
          <span className="industria-eyebrow">Gestión de reseñas por industria</span>
          <h1 id="industria-title" className="industria-title">
            Gestión de reseñas para {vertical.labelPlural}
          </h1>
          <p className="industria-subtitle">
            {vertical.descripcion ?? vertical.context}
          </p>
          <div className="industria-hero-actions">
            <Link href="/contacto" className="industria-cta-primary">
              Quiero mejorar mis reseñas
            </Link>
            <Link
              href={`/calculadora/resenas/${vertical.slug}`}
              className="industria-cta-secondary"
            >
              Calculadora gratuita para {vertical.labelPlural.toLowerCase()}
            </Link>
          </div>
        </div>
        <div className="industria-hero-stats">
          <div className="industria-stat">
            <span className="industria-stat-num">{vertical.avgReviews}</span>
            <span className="industria-stat-label">reseñas promedio del sector</span>
          </div>
          <div className="industria-stat">
            <span className="industria-stat-num">{vertical.avgRating}</span>
            <span className="industria-stat-label">rating promedio del sector</span>
          </div>
        </div>
      </section>

      {/* ── Beneficios ── */}
      {vertical.beneficiosClave && vertical.beneficiosClave.length > 0 && (
        <section id="industria-beneficios" className="industria-beneficios" aria-labelledby="industria-beneficios-title">
          <div className="industria-beneficios-inner">
            <h2 id="industria-beneficios-title" className="industria-section-title">
              Por qué gestionar las reseñas de tu {vertical.label.toLowerCase()}
            </h2>
            <ul className="industria-beneficios-list">
              {vertical.beneficiosClave.map((b, i) => (
                <li key={i} className="industria-beneficio-item">{b}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ── FAQ ── */}
      {vertical.faqItems && vertical.faqItems.length > 0 && (
        <section id="industria-faq" className="industria-faq" aria-labelledby="industria-faq-title">
          <div className="industria-faq-inner">
            <h2 id="industria-faq-title" className="industria-section-title">
              Preguntas frecuentes sobre reseñas en {vertical.labelPlural.toLowerCase()}
            </h2>
            <dl className="industria-faq-list">
              {vertical.faqItems.map((item, i) => (
                <div key={i} className="industria-faq-item">
                  <dt className="industria-faq-pregunta">{item.pregunta}</dt>
                  <dd className="industria-faq-respuesta">{item.respuesta}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {/* ── CTA calculadora ── */}
      <section id="industria-calc-cta" className="industria-calc-cta">
        <h2 className="industria-section-title">
          ¿Cuántas reseñas necesita tu {vertical.label.toLowerCase()}?
        </h2>
        <p>
          Usá nuestra calculadora gratuita para saber cuántas reseñas necesitás
          en tu ciudad para superar a tu competencia.
        </p>
        <Link href={`/calculadora/resenas/${vertical.slug}`} className="industria-cta-primary">
          Calculadora para {vertical.labelPlural.toLowerCase()}
        </Link>
      </section>

      {/* ── CTA contacto ── */}
      <section id="industria-contacto-cta" className="industria-contacto-cta">
        <h2 className="industria-section-title">
          Gestionamos las reseñas de tu {vertical.label.toLowerCase()} por vos
        </h2>
        <p>
          Nuestro equipo se ocupa del monitoreo, la respuesta y la estrategia de
          crecimiento de reseñas para {vertical.labelPlural.toLowerCase()} con múltiples sucursales.
        </p>
        <div className="industria-cta-grupo">
          <Link href="/contacto" className="industria-cta-primary">
            Quiero un diagnóstico gratuito
          </Link>
          <a
            href="https://wa.me/5491173616189?text=Hola%2C%20quiero%20mejorar%20las%20rese%C3%B1as%20de%20mi%20negocio"
            className="industria-cta-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hablar por WhatsApp
          </a>
        </div>
      </section>

      <NotasPreview />
    </>
  )
}
