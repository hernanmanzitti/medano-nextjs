import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { terminos } from "@/data/terminos"
import "./page.css"

type Props = {
  params: Promise<{ termino: string }>
}

export async function generateStaticParams() {
  return terminos.map((t) => ({ termino: t.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { termino: tSlug } = await params
  const termino = terminos.find((t) => t.slug === tSlug)

  if (!termino) return {}

  return {
    title: `¿Qué es ${termino.label}? Definición y guía práctica`,
    description: termino.definicion,
    alternates: {
      canonical: `/glosario/${termino.slug}`,
    },
  }
}

export default async function GlosarioTerminoPage({ params }: Props) {
  const { termino: tSlug } = await params
  const termino = terminos.find((t) => t.slug === tSlug)

  if (!termino) notFound()

  const terminosRelacionados = termino.relacionadoCon
    ?.map((slug) => terminos.find((t) => t.slug === slug))
    .filter(Boolean) ?? []

  const glosarioSchema = [
    {
      "@context": "https://schema.org",
      "@type": "DefinedTerm",
      name: termino.label,
      description: termino.definicion,
      inDefinedTermSet: {
        "@type": "DefinedTermSet",
        name: "Glosario de reputación online — médano",
        url: "https://medano.co/glosario",
      },
      url: `https://medano.co/glosario/${termino.slug}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://medano.co" },
        { "@type": "ListItem", position: 2, name: "Glosario", item: "https://medano.co/glosario" },
        { "@type": "ListItem", position: 3, name: termino.label, item: `https://medano.co/glosario/${termino.slug}` },
      ],
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(glosarioSchema) }}
      />

      <article>
        <section id="glosario-hero" className="glosario-hero">
          <div className="glosario-hero-content">
            <span className="glosario-eyebrow">Glosario de reputación online</span>
            <h1 className="glosario-title">¿Qué es {termino.label}?</h1>
            <p className="glosario-definicion">{termino.definicion}</p>
          </div>
        </section>

        <section id="glosario-descripcion" className="glosario-descripcion">
          <div className="glosario-descripcion-inner">
            <h2 className="glosario-section-title">{termino.label} — guía completa</h2>
            <p className="glosario-texto">{termino.descripcionLarga}</p>
          </div>
        </section>

        {terminosRelacionados.length > 0 && (
          <section id="glosario-relacionados" className="glosario-relacionados">
            <div className="glosario-relacionados-inner">
              <h2 className="glosario-section-title">Términos relacionados</h2>
              <ul className="glosario-relacionados-list">
                {terminosRelacionados.map((t) => t && (
                  <li key={t.slug}>
                    <Link href={`/glosario/${t.slug}`} className="glosario-related-link">
                      <span className="glosario-related-label">{t.label}</span>
                      <span className="glosario-related-def">{t.definicion}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <section id="glosario-cta" className="glosario-cta">
          <h2 className="glosario-section-title">¿Necesitás gestionar la reputación online de tu empresa?</h2>
          <p>Médano ayuda a empresas con múltiples sucursales a mejorar sus reseñas en Google, TripAdvisor y 20+ plataformas.</p>
          <div className="glosario-cta-grupo">
            <Link href="/#contact" className="glosario-cta-primary">Quiero un diagnóstico gratuito</Link>
            <Link href="/calculadora/resenas" className="glosario-cta-secondary">Calculadora de reseñas gratuita</Link>
          </div>
        </section>
      </article>
    </>
  )
}
