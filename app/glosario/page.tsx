import type { Metadata } from "next"
import Link from "next/link"
import { terminos } from "@/data/terminos"
import "./page.css"

export const metadata: Metadata = {
  title: "Glosario de reputación online",
  description:
    "Definiciones claras de los términos más usados en gestión de reseñas " +
    "y reputación digital. NPS, review gating, response rate, local SEO y más.",
  alternates: {
    canonical: "/glosario",
  },
}

const glosarioHubSchema = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  name: "Glosario de reputación online — médano",
  description:
    "Definiciones de términos clave en gestión de reseñas y reputación digital.",
  url: "https://medano.co/glosario",
}

export default function GlosarioHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(glosarioHubSchema) }}
      />
      <main id="main-content">
        <section id="glosario-hub-hero">
          <h1>Glosario de reputación online</h1>
          <p>
            Términos clave para entender y gestionar la reputación digital
            de tu empresa. Desde NPS hasta review velocity.
          </p>
        </section>

        <section id="glosario-hub-grid">
          <ul>
            {terminos.map((t) => (
              <li key={t.slug}>
                <Link href={`/glosario/${t.slug}`}>
                  <strong>{t.label}</strong>
                  <span>{t.definicion}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  )
}
