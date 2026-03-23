import Link from "next/link"
import "./notas-preview.css"

const notas = [
  {
    tag: "Google",
    tagMod: "",
    min: 7,
    href: "/notas/por-que-desaparecen-tus-resenas-de-google",
    title: "Por que desaparecen tus resenas de Google (y como recuperarlas)",
    desc: "El algoritmo antifraude de Google borro resenas legitimas de mas de 20 de nuestros clientes en enero 2026. Explicamos que paso y que hacer.",
  },
  {
    tag: "Herramientas",
    tagMod: "resenas-nota-tag--green",
    min: 8,
    href: "/notas/como-usar-whatsapp-para-conseguir-resenas-de-google",
    title: "Como usar WhatsApp para conseguir mas resenas de Google",
    desc: "WhatsApp tiene 98% de tasa de apertura. Guia practica con el mensaje exacto, el timing correcto y como automatizarlo con tu base de clientes.",
  },
  {
    tag: "Resenas",
    tagMod: "resenas-nota-tag--red",
    min: 9,
    href: "/notas/como-responder-resenas-negativas-sin-arruinar-tu-reputacion",
    title: "Como responder resenas negativas sin arruinar tu reputacion",
    desc: "Una mala respuesta hace mas dano que la resena original. Plantillas reales para cada tipo de situacion: quejas legitimas, ataques y resenas falsas.",
  },
]

const ArrowIcon = () => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

export function NotasPreview() {
  return (
    <section id="resenas-notas" aria-labelledby="notas-preview-title">
      <div className="container">

        <div className="resenas-section-header reveal">
          <div className="resenas-section-header-text">
            <span className="section-label">Guias y estrategia</span>
            <h2 id="notas-preview-title" className="section-heading">
              Aprende a gestionar<br />tu reputacion
            </h2>
          </div>
          <div className="resenas-section-counter" aria-hidden="true">N</div>
        </div>

        <div className="resenas-notas-grid">
          {notas.map((nota) => (
            <Link
              key={nota.href}
              href={nota.href}
              className="resenas-nota-card reveal"
            >
              <div className="resenas-nota-card-top">
                <span className={`resenas-nota-tag ${nota.tagMod}`.trim()}>
                  {nota.tag}
                </span>
                <span className="resenas-nota-time">{nota.min} min</span>
              </div>
              <h3 className="resenas-nota-title">{nota.title}</h3>
              <p className="resenas-nota-desc">{nota.desc}</p>
              <div className="resenas-nota-footer">
                <span className="resenas-nota-cta">
                  Leer nota
                  <ArrowIcon />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="resenas-notas-footer reveal">
          <Link href="/notas" className="resenas-notas-all-link">
            Ver todas las notas
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>

      </div>
    </section>
  )
}
