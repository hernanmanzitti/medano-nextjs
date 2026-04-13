import type { Metadata } from "next"
import Link from "next/link"
import { verticales } from "@/data/verticales"
import "./page.css"

export const metadata: Metadata = {
  title: "Cómo conseguir reseñas de Google por rubro — Guías prácticas | médano",
  description:
    "Guías paso a paso para conseguir más reseñas de Google según tu industria. Restaurantes, clínicas, hoteles, gimnasios, inmobiliarias, veterinarias y más.",
  alternates: {
    canonical: "/guia/conseguir-resenas",
  },
  openGraph: {
    title: "Guías para conseguir reseñas de Google por rubro | médano",
    description:
      "Estrategias probadas para aumentar tus reseñas en Google, organizadas por tipo de negocio.",
    url: "https://medano.co/guia/conseguir-resenas",
  },
}

const hubSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio",                      item: "https://medano.co" },
    { "@type": "ListItem", position: 2, name: "Guías — Conseguir reseñas",   item: "https://medano.co/guia/conseguir-resenas" },
  ],
}

export default function GuiaResenasHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hubSchema) }}
      />

      {/* ── Hero ── */}
      <section id="guia-hub-hero" className="guia-hub-hero">
        <div className="guia-hub-hero-content">
          <span className="guia-hub-eyebrow">Guías prácticas</span>
          <h1 className="guia-hub-title">
            Cómo conseguir reseñas de Google para tu negocio
          </h1>
          <p className="guia-hub-subtitle">
            Estrategias probadas, adaptadas a cada rubro. Elegí tu industria y
            encontrá el paso a paso para aumentar tus reseñas en Google.
          </p>
        </div>
      </section>

      {/* ── Grid de verticales ── */}
      <section id="guia-hub-grid" className="guia-hub-grid-section">
        <div className="guia-hub-grid-inner">
          <h2 className="guia-hub-grid-title">Elegí tu rubro</h2>
          <div className="guia-hub-grid" role="list">
            {verticales.map((v) => (
              <Link
                key={v.slug}
                href={`/guia/conseguir-resenas/${v.slug}`}
                className="guia-hub-card"
                role="listitem"
              >
                <h3 className="guia-hub-card-name">{v.labelPlural}</h3>
                <p className="guia-hub-card-preview">{v.context}</p>
                <span className="guia-hub-card-cta">Ver guía →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="guia-hub-cta" className="guia-hub-cta">
        <div className="guia-hub-cta-inner">
          <h2 className="guia-hub-cta-title">
            ¿Cuántas reseñas necesita tu negocio?
          </h2>
          <p className="guia-hub-cta-text">
            Calculá gratis cuántas reseñas de 5 estrellas necesitás para
            superar a tu competencia en Google.
          </p>
          <div className="guia-hub-cta-buttons">
            <Link href="/calculadora/resenas" className="guia-hub-btn-primary">
              Usar la calculadora gratis
            </Link>
            <Link href="/#contact" className="guia-hub-btn-secondary">
              Hablar con un especialista
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
