import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { verticales } from "@/data/verticales"
import { ciudades } from "@/data/ciudades"
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
    title: `Calculadora de Reseñas para ${vertical.labelPlural}`,
    description: `Calculá cuántas reseñas necesita tu ${vertical.label} en tu ciudad para subir de rating. Gratis.`,
    alternates: {
      canonical: `/calculadora/resenas/${vertical.slug}`,
    },
  }
}

export default async function VerticalIndexPage({ params }: Props) {
  const { vertical: vSlug } = await params
  const vertical = verticales.find((v) => v.slug === vSlug)

  if (!vertical) notFound()

  return (
    <>
      {/* ── Hero ── */}
      <section id="calc-vertical-hero" className="calc-vertical-hero" aria-labelledby="calc-vertical-title">
        <div className="calc-vertical-hero-grid" aria-hidden="true" />
        <div className="calc-vertical-hero-content">
          <span className="calc-vertical-eyebrow">
            <span className="calc-vertical-eyebrow-dot" aria-hidden="true" />
            Calculadora Gratuita
          </span>
          <h1 id="calc-vertical-title" className="calc-vertical-title">
            Calculadora de Reseñas para {vertical.labelPlural}
          </h1>
          <p className="calc-vertical-subtitle">{vertical.context}</p>
        </div>
      </section>

      {/* ── Ciudades ── */}
      <section id="calc-vertical-cities" className="calc-vertical-cities" aria-labelledby="calc-vertical-cities-title">
        <div className="calc-vertical-cities-inner">
          <h2 id="calc-vertical-cities-title" className="calc-vertical-cities-title">
            Elegí tu ciudad
          </h2>
          <div className="calc-vertical-cities-grid" role="list">
            {ciudades.map((c) => (
              <Link
                key={c.slug}
                href={`/calculadora/resenas/${vertical.slug}/${c.slug}`}
                className="calc-vertical-city-card"
                role="listitem"
              >
                <span className="calc-vertical-city-name">{c.label}</span>
                <span className="calc-vertical-city-provincia">{c.provincia}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
