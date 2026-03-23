import type { Metadata } from "next"
import Link from "next/link"
import { verticales } from "@/data/verticales"
import { ciudades } from "@/data/ciudades"
import { NotasPreview } from "@/app/components/NotasPreview"
import "./page.css"

export const metadata: Metadata = {
  title: "Calculadora de Reseñas por Rubro y Ciudad",
  description:
    "Calculá cuántas reseñas de 5 estrellas necesita tu negocio para subir de rating en Google. Gratis, por rubro y ciudad.",
  alternates: {
    canonical: "/calculadora/resenas",
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
            Calculadora de Reseñas por Rubro y Ciudad
          </h1>
          <p className="calc-index-subtitle">
            Elegí tu rubro y ciudad para calcular cuántas reseñas de 5 estrellas necesitás para
            alcanzar el rating que querés.
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
