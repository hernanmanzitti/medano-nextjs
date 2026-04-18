import type { Metadata } from "next";
import QrTool from "./QrTool";
import "./page.css";

export const metadata: Metadata = {
  title: "Generador de QR para reseñas de Google | Médano",
  description:
    "Creá un código QR gratis que lleva a tus clientes al formulario de Google Reviews. Descargá en PNG o SVG. Sin registro.",
  alternates: { canonical: "https://medano.co/herramientas/qr-resenas" },
  openGraph: {
    title: "Generador de QR para reseñas de Google — Médano",
    description:
      "QR imprimible gratuito para pedir reseñas en tu local. PNG y SVG listos para imprimir.",
    url: "https://medano.co/herramientas/qr-resenas",
    type: "website",
  },
};

const faqs = [
  {
    q: "¿Por qué usar un QR para pedir reseñas?",
    a: "Un QR impreso en la mesa, en el ticket o en el mostrador elimina la fricción de tener que buscarte en Google. En verticales como gastronomía o salud, los locales que usan QR reportan de 3 a 5 veces más reseñas mensuales.",
  },
  {
    q: "¿Dónde encuentro mi URL de Google Reviews?",
    a: "Entrá a tu Google Business Profile, hacé clic en 'Pedir reseñas' y copiá el link corto que te da Google (formato g.page/r/...). También podés usar la URL larga de search.google.com/local/writereview con tu Place ID.",
  },
  {
    q: "¿Qué diferencia hay entre PNG y SVG?",
    a: "El PNG es un archivo de imagen listo para imprimir o subir a redes. El SVG es vectorial: podés escalarlo al tamaño que quieras sin perder calidad, ideal para imprenta o diseño gráfico.",
  },
  {
    q: "¿Puedo agregar mi logo al QR?",
    a: "Esta herramienta genera un QR estándar sin logo. Si querés un QR branded con tu identidad, en Médano diseñamos materiales impresos completos como parte del servicio de gestión de reseñas.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Generador de QR para reseñas",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Herramienta gratuita para generar códigos QR que apuntan al formulario de Google Reviews.",
  url: "https://medano.co/herramientas/qr-resenas",
  provider: { "@type": "Organization", name: "Médano", url: "https://medano.co" },
};

export default function QrResenasPage() {
  return (
    <main className="qr-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section id="qr-hero" className="qr-hero">
        <div className="qr-hero__container">
          <a href="/herramientas" className="qr-hero__back">← Herramientas</a>
          <span className="qr-hero__eyebrow">Herramienta · Gratis · Sin registro</span>
          <h1 className="qr-hero__title">Generador de QR para reseñas</h1>
          <p className="qr-hero__lede">
            Pegá la URL de tu formulario de Google Reviews y descargá un QR listo para imprimir.
            Funciona con cualquier link — también con tu Google Maps o tu sitio.
          </p>
        </div>
      </section>

      <section id="qr-tool" className="qr-tool-section">
        <div className="qr-tool-container">
          <QrTool />
        </div>
      </section>

      <section id="qr-faq" className="qr-faq">
        <div className="qr-faq__container">
          <h2 className="qr-faq__title">Preguntas frecuentes</h2>
          <dl className="qr-faq__list">
            {faqs.map((faq) => (
              <div key={faq.q} className="qr-faq__item">
                <dt className="qr-faq__question">{faq.q}</dt>
                <dd className="qr-faq__answer">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="qr-cta" className="qr-cta">
        <div className="qr-cta__container">
          <h2 className="qr-cta__title">¿Querés escalar esto en todas tus sucursales?</h2>
          <p className="qr-cta__lede">
            Médano se encarga de diseñar, imprimir y distribuir materiales de pedido de reseñas
            para redes de 3 a 30 locales. También automatizamos el pedido por WhatsApp.
          </p>
          <a href="/#contact" className="qr-cta__btn">Hablemos</a>
        </div>
      </section>
    </main>
  );
}
