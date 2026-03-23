import type { Metadata } from 'next'
import { getPostBySlug } from '@/lib/blog'
import ReadingProgress from './ReadingProgress'
import MedanoCTA from '@/components/blog/MedanoCTA'
import CalculadoraCTA from '@/components/blog/CalculadoraCTA'
import RelatedPost from '@/components/blog/RelatedPost'
import './page.css'

const TITLE = 'Por que Google borra tus resenas (y como recuperarlas)'
const DESCRIPTION = 'Tus resenas de Google Maps desaparecieron de golpe? Explicamos por que pasa, que esta haciendo Google al respecto y que podes hacer para recuperarlas.'
const SLUG = 'por-que-desaparecen-tus-resenas-de-google'
const PUBLISHED = '2026-02-10'
const UPDATED = '2026-02-28'
const URL = `https://www.medano.co/notas/${SLUG}`

export const metadata: Metadata = {
  title: `${TITLE} | Medano`,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: 'Medano',
    type: 'article',
    publishedTime: PUBLISHED,
    modifiedTime: UPDATED,
    authors: ['https://www.medano.co'],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
}

export default function BlogDesaparecenResenas() {
  const related = getPostBySlug('como-responder-resenas-negativas-sin-arruinar-tu-reputacion')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: TITLE,
    description: DESCRIPTION,
    datePublished: PUBLISHED,
    dateModified: UPDATED,
    author: { '@type': 'Organization', name: 'Medano', url: 'https://www.medano.co' },
    publisher: { '@type': 'Organization', name: 'Medano', url: 'https://www.medano.co' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': URL },
  }

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://www.medano.co' },
      { '@type': 'ListItem', position: 2, name: 'Notas', item: 'https://www.medano.co/notas' },
      { '@type': 'ListItem', position: 3, name: TITLE, item: URL },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <ReadingProgress />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section id="blog-hero">
        <div className="blog-wrapper">
          <p className="blog-hero__eyebrow">
            <span className="blog-hero__eyebrow-dot" />
            Resenas &middot; Guia practica
          </p>

          <h1 className="blog-hero__title">
            Por que Google <em>borra tus resenas</em><br />
            y como recuperarlas
          </h1>

          <p className="blog-hero__lead">
            Tus resenas de Google Maps desaparecieron de golpe? Explicamos por que pasa, que esta haciendo Google al respecto y que podes hacer para recuperarlas.
          </p>

          <div className="blog-hero__meta">
            <span className="blog-hero__meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              8 min de lectura
            </span>
            <span className="blog-hero__meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
              Febrero 2026
            </span>
            <span className="blog-hero__meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>
              Equipo Medano
            </span>
          </div>

          <div className="blog-hero__divider" />
        </div>
      </section>

      {/* ── CONTENIDO ────────────────────────────────────────── */}
      <section id="blog-content">
        <div className="blog-wrapper">
          <article className="blog-content__body">

            <p>
              Llego a nuestro equipo de soporte decenas de veces. Un cliente de restaurante en Costa Rica perdio 50 resenas en un mes. Una clinica dental vio como desaparecian resenas de pacientes reales que tardaron anos en acumular. Un hotel en Buenos Aires nos escribio desesperado un lunes a la manana: &quot;que hicieron con mis resenas?&quot;
            </p>

            <p>
              La respuesta corta: nosotros no hicimos nada. Fue Google.
            </p>

            <p>
              Y si te esta pasando a vos, probablemente tampoco hiciste nada malo. Explicamos que esta pasando, por que, y que podes hacer al respecto.
            </p>

            <h2>Que esta pasando realmente?</h2>

            <p>
              Google viene implementando un sistema de revision antifraude basado en inteligencia artificial. El objetivo es legitimo: eliminar resenas falsas compradas, resenas de cuentas automatizadas, y ataques coordinados de competidores o grupos organizados.
            </p>

            <p>
              El problema es que la IA comete errores. Al detectar patrones sospechosos (muchas resenas en un periodo corto, cuentas con poca actividad, resenas que llegaron desde una campana de email), el sistema puede marcar y eliminar resenas que son completamente legitimas.
            </p>

            <div className="callout">
              <p className="callout__label">Google confirmo el problema</p>
              <p className="callout__text">&quot;Google is aware of this problem, it is a massive error all over the world. If you have lost more than 10 reviews, then you are part of this problem.&quot;</p>
            </div>

            <p>
              En Norteamerica este fenomeno empezo a reportarse masivamente en 2025. En America Latina el pico llego en enero y febrero de 2026.
            </p>

            {/* ── Stats Grid ───────────────────────────────────── */}
            <div className="stats-grid">
              <div className="stat-card">
                <p className="stat-card__number">+20</p>
                <p className="stat-card__label">Clientes afectados</p>
                <p className="stat-card__desc">Solo en enero 2026 en nuestra red</p>
              </div>
              <div className="stat-card">
                <p className="stat-card__number">94%</p>
                <p className="stat-card__label">Restauradas</p>
                <p className="stat-card__desc">Promedio de resenas que Google devolvio</p>
              </div>
              <div className="stat-card">
                <p className="stat-card__number">4-6 sem</p>
                <p className="stat-card__label">Tiempo promedio</p>
                <p className="stat-card__desc">Desde la eliminacion hasta la restauracion</p>
              </div>
            </div>

            <h2>Las 3 causas mas comunes de eliminacion de resenas</h2>

            <h3>1. El algoritmo antifraude de Google (la mas frecuente hoy)</h3>

            <p>
              Es la causa que describimos arriba. Google detecta &quot;anomalias&quot; en el patron de resenas y las elimina preventivamente.
            </p>

            <p>
              <strong>Senal caracteristica:</strong> baja abrupta de muchas resenas al mismo tiempo.
            </p>

            <h3>2. El usuario que dejo la resena la elimino</h3>

            <p>
              Cualquier usuario puede eliminar sus propias resenas en cualquier momento. Pasa mas de lo que parece.
            </p>

            <p>
              <strong>Senal caracteristica:</strong> desaparece una sola resena de una cuenta activa.
            </p>

            <h3>3. Google detecto que la cuenta es falsa o fue vulnerada</h3>

            <p>
              Cuando actores maliciosos vulneran captcha para inflar ratings, Google elimina todas las resenas de esas cuentas.
            </p>

            <div className="callout callout--warning">
              <p className="callout__label">Lo que NO podes hacer</p>
              <p className="callout__text">Google no restaura resenas a pedido individual. El proceso es institucional. No existe un formulario para pedir que te devuelvan una resena especifica. La restauracion ocurre cuando Google reconoce el error de forma masiva.</p>
            </div>

            <h2>Timeline: como se desarrolla una ola de eliminaciones</h2>

            {/* ── Timeline ─────────────────────────────────────── */}
            <div className="timeline">
              <div className="timeline__item">
                <div className="timeline__marker" />
                <div className="timeline__content">
                  <p className="timeline__time">Dia 0</p>
                  <p className="timeline__text">El algoritmo marca resenas como sospechosas. Sin notificacion.</p>
                </div>
              </div>
              <div className="timeline__item">
                <div className="timeline__marker" />
                <div className="timeline__content">
                  <p className="timeline__time">Dias 1&ndash;7</p>
                  <p className="timeline__text">Las resenas desaparecen en tandas. En DataTrackers aparece como &quot;removed&quot;.</p>
                </div>
              </div>
              <div className="timeline__item">
                <div className="timeline__marker" />
                <div className="timeline__content">
                  <p className="timeline__time">Semanas 2&ndash;4</p>
                  <p className="timeline__text">Google revisa y restaura progresivamente. 24&ndash;48 hs adicionales en plataformas.</p>
                </div>
              </div>
              <div className="timeline__item">
                <div className="timeline__marker" />
                <div className="timeline__content">
                  <p className="timeline__time">Mes 1&ndash;2</p>
                  <p className="timeline__text">Mayoria de resenas restauradas. Etiqueta &quot;restored&quot; en DataTrackers.</p>
                </div>
              </div>
            </div>

            <h2>Que podes hacer cuando te pasa?</h2>

            {/* ── Steps List ───────────────────────────────────── */}
            <ol className="steps-list">
              <li className="steps-list__item">
                <span className="steps-list__number">1</span>
                <p className="steps-list__text">
                  <strong>No entres en panico ni hagas nada apresurado</strong>
                  Lo peor que podes hacer es comprar resenas para &quot;compensar&quot; la perdida, o pedirle a todos tus clientes que dejen una resena al mismo tiempo. Ambas cosas van a empeorar la situacion porque el algoritmo las va a detectar como actividad sospechosa.
                </p>
              </li>
              <li className="steps-list__item">
                <span className="steps-list__number">2</span>
                <p className="steps-list__text">
                  <strong>Documenta el dano con precision</strong>
                  Anota cuantas resenas perdiste, de que fecha eran, y en que plataforma. Si usas DataTrackers, el log de cambios te muestra exactamente que resenas fueron eliminadas y cuando.
                </p>
              </li>
              <li className="steps-list__item">
                <span className="steps-list__number">3</span>
                <p className="steps-list__text">
                  <strong>Reportalo en Google Business Profile</strong>
                  Entra a tu perfil de Google Business y usa la opcion de soporte para reportar la perdida de resenas. Incluye la cantidad, fechas aproximadas, y aclara que son resenas de clientes reales.
                </p>
              </li>
              <li className="steps-list__item">
                <span className="steps-list__number">4</span>
                <p className="steps-list__text">
                  <strong>Solicita una revision en el Foro de Soporte</strong>
                  El Google Business Profile Community Forum tiene hilos activos sobre este tema. Publicar ahi aumenta la visibilidad del problema y los Product Experts de Google pueden escalar tu caso.
                </p>
              </li>
              <li className="steps-list__item">
                <span className="steps-list__number">5</span>
                <p className="steps-list__text">
                  <strong>Espera y monitorea</strong>
                  En la mayoria de los casos, Google restaura las resenas en un plazo de 4 a 6 semanas. Monitorea tu perfil regularmente para confirmar que las resenas vuelven.
                </p>
              </li>
            </ol>

            <h2>Como evitar que el algoritmo te marque falsamente</h2>

            <ul>
              <li>Pedi resenas de forma consistente, no en explosiones.</li>
              <li>Diversifica las plataformas.</li>
              <li>No compres resenas, nunca.</li>
              <li>Responde las resenas regularmente.</li>
              <li>Monitorea cambios anormales.</li>
            </ul>

            <h2>La senal que nadie quiere ver: la etiqueta &quot;restored&quot;</h2>

            <p>
              Si usas una herramienta de monitoreo, vas a ver resenas etiquetadas como &quot;restored&quot;. Es buena senal: Google reconocio el error y devolvio la resena.
            </p>

            <div className="callout">
              <p className="callout__label">Dato practico</p>
              <p className="callout__text">En DataTrackers, el log de cambios registra cada resena que fue eliminada y cada una que fue restaurada, con fecha y hora. Eso te permite tener un registro preciso para reportar a Google o para tu propia documentacion interna.</p>
            </div>

            <h2>Y si las resenas nunca vuelven?</h2>

            <p>
              En aproximadamente el 6% de los casos, las resenas no se restauran. Cuando eso pasa, hay tres caminos:
            </p>

            <ul>
              <li><strong>Escalada a soporte premium:</strong> si tenes acceso a soporte premium de Google Business, podes escalar el caso directamente.</li>
              <li><strong>Contacto via programa de agencias:</strong> las agencias certificadas de Google tienen canales de comunicacion directos que pueden acelerar la revision.</li>
              <li><strong>Reiniciar la acumulacion:</strong> en el peor escenario, vas a tener que volver a construir tu base de resenas. Con una estrategia consistente, se pueden recuperar en 3 a 6 meses.</li>
            </ul>

            <p>
              La perdida de resenas duele pero no es irreversible. La clave esta en tener visibilidad del problema en tiempo real.
            </p>

          </article>
        </div>
      </section>

      {/* ── COMPONENTES DEL FLUJO ────────────────────────────── */}
      <MedanoCTA />
      <CalculadoraCTA vertical="restaurantes" />
      {related && <RelatedPost post={related} />}
    </>
  )
}
