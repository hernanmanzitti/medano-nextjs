import type { Metadata } from "next"
import Link from "next/link"
import { verticales } from "@/data/verticales"
import "./page.css"

export const metadata: Metadata = {
  title: "Gestión de reseñas por industria",
  description:
    "Estrategias de reputación online especializadas por rubro. " +
    "Restaurantes, hoteles, clínicas, gimnasios y más. " +
    "Soluciones para empresas con múltiples sucursales.",
  alternates: {
    canonical: "/industria",
  },
}

const industriaHubSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://medano.co" },
    { "@type": "ListItem", position: 2, name: "Industrias", item: "https://medano.co/industria" },
  ],
}

export default function IndustriaHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(industriaHubSchema) }}
      />
      <main id="main-content">
        <section id="industria-hub-hero">
          <h1>Gestión de reseñas por industria</h1>
          <p>
            Cada rubro tiene sus propias plataformas, sus propios clientes y
            sus propios desafíos de reputación. Estas son las estrategias
            que aplicamos según tu industria.
          </p>
        </section>

        <section id="industria-hub-grid">
          <ul>
            {verticales.map((v) => (
              <li key={v.slug}>
                <Link href={`/industria/${v.slug}`}>
                  <strong>{v.labelPlural}</strong>
                  <span>{v.context}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section id="industria-hub-cta">
          <h2>¿Tu industria no está en la lista?</h2>
          <p>
            Trabajamos con cualquier negocio que tenga presencia en plataformas
            de reseñas y quiera mejorar su reputación online.
          </p>
          <Link href="/#contact">Hablar con un especialista</Link>
        </section>
      </main>
    </>
  )
}
