import type { Metadata } from "next";
import "./page.css";

export const metadata: Metadata = {
  title: "Herramientas gratuitas para gestionar reseñas | Médano",
  description:
    "Calculadora de ROI, generador de QR, plantillas de respuesta y más. Herramientas gratuitas construidas por Médano para negocios con múltiples sucursales.",
  alternates: { canonical: "https://medano.co/herramientas" },
  openGraph: {
    title: "Herramientas gratuitas para gestionar reseñas online",
    description:
      "Seis utilidades gratis para medir, responder y escalar la reputación online de tu negocio.",
    url: "https://medano.co/herramientas",
    type: "website",
  },
};

type Status = "live" | "soon";
type Tool = {
  index: string;
  status: Status;
  title: string;
  desc: string;
  href: string;
  cta: string;
};

const tools: Tool[] = [
  {
    index: "01",
    status: "live",
    title: "Calculadora de ROI por reseñas",
    desc: "Cuánto dinero estás dejando en la mesa según tu rating actual y volumen de reseñas.",
    href: "/calculadora/resenas",
    cta: "Usar calculadora",
  },
  {
    index: "02",
    status: "live",
    title: "Generador de QR para reseñas",
    desc: "Un código QR imprimible que lleva a tus clientes directo al formulario de Google Reviews.",
    href: "/herramientas/qr-resenas",
    cta: "Generar QR",
  },
  {
    index: "03",
    status: "soon",
    title: "Auditor de Google Business Profile",
    desc: "Pegá tu URL y te devolvemos rating, últimas reseñas, tasa de respuesta y score de salud.",
    href: "/#contact",
    cta: "Avisame cuando esté listo",
  },
  {
    index: "04",
    status: "soon",
    title: "Plantillas de respuesta",
    desc: "Respuestas profesionales para reseñas negativas por vertical. Copiá, editá, pegá.",
    href: "/#contact",
    cta: "Avisame cuando esté listo",
  },
  {
    index: "05",
    status: "soon",
    title: "Benchmark por industria",
    desc: "Comparate contra el promedio de tu vertical: rating, volumen mensual, tasa de respuesta.",
    href: "/#contact",
    cta: "Avisame cuando esté listo",
  },
  {
    index: "06",
    status: "live",
    title: "Auditoría gratuita de reputación",
    desc: "Un especialista de Médano audita tu presencia digital y te envía un PDF con findings y plan.",
    href: "/#contact",
    cta: "Solicitar auditoría",
  },
];

export default function HerramientasPage() {
  return (
    <main className="herramientas-page">
      <section id="tools-hero" className="tools-hero">
        <div className="tools-hero__container">
          <span className="tools-hero__eyebrow">Herramientas · Gratis · Sin registro</span>
          <h1 className="tools-hero__title">
            Todo lo que necesitás<br />
            para gestionar tus reseñas.
          </h1>
          <p className="tools-hero__lede">
            Seis utilidades construidas por Médano para dueños de negocios con múltiples
            sucursales. Abiertas, sin costo, sin fricción.
          </p>
        </div>
      </section>

      <section id="tools-grid" className="tools-grid-section">
        <div className="tools-grid-container">
          <ul className="tools-grid" role="list">
            {tools.map((tool) => (
              <li
                key={tool.index}
                className={`tool-card${tool.status === "soon" ? " tool-card--soon" : ""}`}
              >
                <span className="tool-card__index">{tool.index}</span>
                <span
                  className={`tool-card__status tool-card__status--${tool.status}`}
                >
                  {tool.status === "live" ? "Disponible" : "Próximamente"}
                </span>
                <h2 className="tool-card__title">{tool.title}</h2>
                <p className="tool-card__desc">{tool.desc}</p>
                <a
                  href={tool.href}
                  className={`tool-card__cta${
                    tool.status === "soon" ? " tool-card__cta--muted" : ""
                  }`}
                >
                  {tool.cta}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path
                      d="M3 7h8m-3-4 4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
