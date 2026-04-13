import type { Metadata } from "next"
import Link from "next/link"
import { verticales } from "@/data/verticales"
import "./page.css"

export const metadata: Metadata = {
  title: "Preguntas frecuentes sobre reseñas online por rubro | médano",
  description:
    "Resolvemos las dudas más frecuentes sobre cómo conseguir, gestionar y responder reseñas de Google para restaurantes, clínicas, hoteles, gimnasios, inmobiliarias, veterinarias y más.",
  alternates: {
    canonical: "/faq/resenas",
  },
}

const hubSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio",          item: "https://medano.co" },
    { "@type": "ListItem", position: 2, name: "FAQ Reseñas",     item: "https://medano.co/faq/resenas" },
  ],
}

export default function FaqResenasHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hubSchema) }}
      />

      {/* ── Hero ── */}
      <section id="faq-hub-hero" className="faq-hub-hero">
        <div className="faq-hub-hero-content">
          <span className="faq-hub-eyebrow">Preguntas Frecuentes</span>
          <h1 className="faq-hub-title">
            Todo lo que necesitás saber sobre reseñas online
          </h1>
          <p className="faq-hub-subtitle">
            Preguntas y respuestas sobre cómo conseguir, gestionar y responder
            reseñas en Google — organizadas por rubro.
          </p>
        </div>
      </section>

      {/* ── Grid de verticales ── */}
      <section id="faq-hub-grid" className="faq-hub-grid-section">
        <div className="faq-hub-grid-inner">
          <h2 className="faq-hub-grid-title">Elegí tu rubro</h2>
          <div className="faq-hub-grid" role="list">
            {verticales.map((v) => (
              <Link
                key={v.slug}
                href={`/faq/resenas/${v.slug}`}
                className="faq-hub-card"
                role="listitem"
              >
                <h3 className="faq-hub-card-name">{v.labelPlural}</h3>
                {v.faqItems?.[0] && (
                  <p className="faq-hub-card-preview">
                    {v.faqItems[0].pregunta}
                  </p>
                )}
                <span className="faq-hub-card-cta">
                  Ver {v.faqItems?.length ?? 0} preguntas →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="faq-hub-cta" className="faq-hub-cta">
        <div className="faq-hub-cta-inner">
          <h2 className="faq-hub-cta-title">
            ¿Cuántas reseñas necesita tu negocio?
          </h2>
          <p className="faq-hub-cta-text">
            Calculá gratis cuántas reseñas de 5 estrellas necesitás para
            superar a tu competencia en Google.
          </p>
          <div className="faq-hub-cta-buttons">
            <Link href="/calculadora/resenas" className="faq-hub-btn-primary">
              Usar la calculadora gratis
            </Link>
            <Link href="/#contact" className="faq-hub-btn-secondary">
              Hablar con un especialista
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
