import type { Metadata } from "next"
import Link from "next/link"
import { verticales } from "@/data/verticales"
import { ciudades } from "@/data/ciudades"
import { NotasPreview } from "@/app/components/NotasPreview"
import "./page.css"

export const metadata: Metadata = {
  title: "Calculadora de reseñas — ¿Cuántas necesitás?",
  description:
    "Calculá cuántas reseñas positivas necesita tu negocio para superar a la competencia. " +
    "Herramienta gratuita por vertical e industria en toda Argentina, Costa Rica y Panamá.",
  alternates: {
    canonical: "/calculadora/resenas",
  },
  openGraph: {
    title: "Calculadora de reseñas — ¿Cuántas necesitás? | médano",
    description: "Herramienta gratuita para calcular cuántas reseñas necesita tu negocio.",
    url: "https://medano.co/calculadora/resenas",
  },
}

const calcSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://medano.co' },
    { '@type': 'ListItem', position: 2, name: 'Calculadora de reseñas', item: 'https://medano.co/calculadora/resenas' },
  ],
}

export default function CalculadoraIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calcSchema) }}
      />
      {/* ── Hero ── */}
      <section id="calc-index-hero" className="calc-index-hero" aria-labelledby="calc-index-title">
        <div className="calc-index-grid-bg" aria-hidden="true" />
        <div className="calc-index-hero-content">
          <h1 id="calc-index-title" className="calc-index-title">
            ¿Cuántas reseñas necesitás para subir tu rating?
          </h1>
          <p className="calc-index-subtitle">
            Calculadora gratuita para Google y TripAdvisor — por rubro y ciudad.
          </p>
        </div>
      </section>

      {/* ── Grid de verticales ── */}
      <section id="calc-index-body" className="calc-index-body" aria-labelledby="calc-index-body-title">
        <div className="calc-index-body-inner">
          <h2 id="calc-index-body-title" className="sr-only">
            Rubros disponibles
          </h2>
          <div className="calc-index-verticals" role="list">
            {verticales.map((v) => (
              <div key={v.slug} className="calc-index-vertical-card" role="listitem">
                <h3 className="calc-index-vertical-name">{v.labelPlural}</h3>
                <div className="calc-index-ciudad-links">
                  {ciudades
                    .filter((c) =>
                      c.tipo === "comercial" || c.verticalesTouristicos?.includes(v.slug)
                    )
                    .map((c) => (
                    <Link
                      key={c.slug}
                      href={`/calculadora/resenas/${v.slug}/${c.slug}`}
                      className="calc-index-ciudad-link"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NotasPreview />
    </>
  )
}
