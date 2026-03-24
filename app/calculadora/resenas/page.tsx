import type { Metadata } from "next"
import Link from "next/link"
import { verticales } from "@/data/verticales"
import { ciudades } from "@/data/ciudades"
import { NotasPreview } from "@/app/components/NotasPreview"
import "./page.css"

export const metadata: Metadata = {
  title: "Calculadora de Reseñas Google y TripAdvisor por Rubro | Médano",
  description:
    "Calculá cuántas reseñas de 5 estrellas necesitás para subir tu rating en Google y TripAdvisor. Gratis, por rubro y ciudad.",
  alternates: {
    canonical: "/calculadora/resenas",
  },
  openGraph: {
    title: "Calculadora de Reseñas Google y TripAdvisor | Médano",
    description: "Calculá cuántas reseñas necesitás para subir tu rating. Gratis, por rubro y ciudad.",
    url: "https://medano.co/calculadora/resenas",
    siteName: "Médano",
    type: "website",
  },
}

export default function CalculadoraIndexPage() {
  return (
    <>
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
