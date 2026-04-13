import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { verticales } from "@/data/verticales"
import "./page.css"

type Props = {
  params: Promise<{ vertical: string }>
}

export async function generateStaticParams() {
  return verticales
    .filter((v) => v.faqItems && v.faqItems.length > 0)
    .map((v) => ({ vertical: v.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { vertical: vSlug } = await params
  const vertical = verticales.find((v) => v.slug === vSlug)

  if (!vertical) return {}

  return {
    title: `Preguntas frecuentes sobre reseñas para ${vertical.labelPlural} | médano`,
    description: `Resolvemos las ${vertical.faqItems?.length ?? 3} dudas más frecuentes sobre cómo conseguir, gestionar y responder reseñas de Google para ${vertical.labelPlural}. Incluye la calculadora gratuita.`,
    alternates: {
      canonical: `/faq/resenas/${vertical.slug}`,
    },
    openGraph: {
      title: `FAQ reseñas para ${vertical.labelPlural} | médano`,
      description: `Las preguntas más frecuentes sobre reseñas de Google para ${vertical.labelPlural}.`,
      url: `https://medano.co/faq/resenas/${vertical.slug}`,
    },
  }
}

export default async function FaqVerticalPage({ params }: Props) {
  const { vertical: vSlug } = await params
  const vertical = verticales.find((v) => v.slug === vSlug)

  if (!vertical || !vertical.faqItems || vertical.faqItems.length === 0) notFound()

  const faqSchema = {
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio",       item: "https://medano.co" },
      { "@type": "ListItem", position: 2, name: "FAQ Reseñas",  item: "https://medano.co/faq/resenas" },
      { "@type": "ListItem", position: 3, name: vertical.labelPlural, item: `https://medano.co/faq/resenas/${vertical.slug}` },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── Hero ── */}
      <section id="faq-hero" className="faq-hero">
        <div className="faq-hero-content">
          <span className="faq-eyebrow">Preguntas Frecuentes — {vertical.labelPlural}</span>
          <h1 className="faq-title">
            Preguntas frecuentes sobre reseñas para {vertical.labelPlural}
          </h1>
          <p className="faq-subtitle">{vertical.context}</p>
        </div>
      </section>

      {/* ── FAQ items ── */}
      <section id="faq-items" className="faq-items-section" aria-labelledby="faq-items-title">
        <div className="faq-items-inner">
          <h2 id="faq-items-title" className="sr-only">
            Preguntas y respuestas
          </h2>
          <ol className="faq-list" role="list">
            {vertical.faqItems.map((item, i) => (
              <li key={i} className="faq-item" id={`faq-${i + 1}`}>
                <div className="faq-item-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</div>
                <div className="faq-item-body">
                  <h2 className="faq-question">{item.pregunta}</h2>
                  <p className="faq-answer">{item.respuesta}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Calculadora del rubro ── */}
      <section id="faq-calc-cta" className="faq-calc-cta">
        <div className="faq-calc-cta-inner">
          <div className="faq-calc-cta-content">
            <h2 className="faq-calc-cta-title">
              ¿Cuántas reseñas necesita tu {vertical.label}?
            </h2>
            <p className="faq-calc-cta-text">
              Calculá gratis cuántas reseñas de 5 estrellas necesitás para
              subir tu rating y superar a la competencia en Google.
            </p>
            <div className="faq-calc-cta-buttons">
              <Link
                href={`/calculadora/resenas/${vertical.slug}`}
                className="faq-btn-primary"
              >
                Usar la calculadora para {vertical.labelPlural}
              </Link>
              <Link href="/#contact" className="faq-btn-secondary">
                Hablar con un especialista
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Otros rubros ── */}
      <section id="faq-otros" className="faq-otros">
        <div className="faq-otros-inner">
          <h2 className="faq-otros-title">FAQ para otros rubros</h2>
          <div className="faq-otros-grid" role="list">
            {verticales
              .filter((v) => v.slug !== vertical.slug && v.faqItems && v.faqItems.length > 0)
              .map((v) => (
                <Link
                  key={v.slug}
                  href={`/faq/resenas/${v.slug}`}
                  className="faq-otros-card"
                  role="listitem"
                >
                  <span className="faq-otros-name">{v.labelPlural}</span>
                  <span className="faq-otros-hint">{v.faqItems![0].pregunta}</span>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}
