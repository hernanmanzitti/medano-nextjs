import type { Metadata } from 'next'
import { getPostBySlug } from '@/lib/blog'
import ReadingProgress from './ReadingProgress'
import MedanoCTA from '@/components/blog/MedanoCTA'
import CalculadoraCTA from '@/components/blog/CalculadoraCTA'
import RelatedPost from '@/components/blog/RelatedPost'
import BlogBreadcrumb from '@/components/blog/BlogBreadcrumb'
import ArticleJsonLd from '@/app/components/ArticleJsonLd'
import './page.css'

const TITLE = 'Que es el response rate y por que Google te penaliza si ignoras las resenas'
const DESCRIPTION = 'El response rate mide que porcentaje de resenas respondes y en cuanto tiempo. Explicamos como funciona, por que baja de golpe, y que hacer para mejorarlo sin entrar en panico.'
const SLUG = 'que-es-el-response-rate-y-por-que-google-te-penaliza-si-ignoras-las-resenas'
const PUBLISHED = '2026-04-03'
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
    authors: ['https://www.medano.co'],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
}

export default function BlogResponseRate() {
  const related = getPostBySlug('como-responder-resenas-negativas-sin-arruinar-tu-reputacion')

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
      <ArticleJsonLd
        title={TITLE}
        description={DESCRIPTION}
        url={URL}
        publishedAt={PUBLISHED}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <ReadingProgress />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section id="blog-hero">
        <div className="blog-wrapper">
          <BlogBreadcrumb title={TITLE} />

          <p className="blog-hero__eyebrow">
            <span className="blog-hero__eyebrow-dot" />
            Google Business &middot; Metricas explicadas
          </p>

          <h1 className="blog-hero__title">
            Que es el <em>response rate</em><br />
            y por que importa mas<br />
            de lo que crees
          </h1>

          <p className="blog-hero__lead">
            Tu response rate bajo y no sabes por que. O subio al 98% pero el reporte dice que estas peor que el mes anterior. Explicamos exactamente como funciona esta metrica, que la mueve, y como leerla sin entrar en panico.
          </p>

          <div className="blog-hero__meta">
            <span className="blog-hero__meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              7 min de lectura
            </span>
            <span className="blog-hero__meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
              Abril 2026
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
              Una de las confusiones mas frecuentes que vemos en nuestros clientes: abren el reporte mensual, ven que el response rate bajo o que el tiempo de respuesta promedio es de varios dias, y entran en panico creyendo que algo esta fallando en la gestion de sus resenas.
            </p>

            <p>
              A veces tienen razon. Pero la mayoria de las veces el numero esta distorsionado por como funciona la metrica, no por un problema real. <strong>Saber leer el response rate correctamente ahorra muchos malentendidos.</strong>
            </p>

            <h2>Que mide exactamente el response rate</h2>

            <p>
              El response rate no es una sola metrica &mdash;son dos cosas distintas que a menudo se confunden:
            </p>

            <div className="metrics-split">
              <div className="metric-card metric-card--rate">
                <p className="metric-card__number">%</p>
                <p className="metric-card__name">Tasa de respuesta</p>
                <p className="metric-card__desc">Que porcentaje de las resenas recibidas tienen una respuesta del negocio. Una tasa del 100% significa que respondiste todas las resenas.</p>
                <p className="metric-card__formula">resenas respondidas &divide; total de resenas &times; 100</p>
              </div>
              <div className="metric-card metric-card--time">
                <p className="metric-card__number">&middot;</p>
                <p className="metric-card__name">Tiempo de respuesta</p>
                <p className="metric-card__desc">Cuanto tiempo tardas en promedio en responder desde que llega la resena. Se calcula como la diferencia entre la fecha de la resena y la fecha de tu respuesta.</p>
                <p className="metric-card__formula">fecha respuesta &minus; fecha resena = dias de demora</p>
              </div>
            </div>

            <p>
              El problema esta en el <strong>tiempo de respuesta</strong>: si respondes hoy una resena que llego hace dos anos, el sistema cuenta esos dos anos como tu tiempo de respuesta para esa resena. Eso infla el promedio de forma radical aunque estes respondiendo todo lo nuevo el mismo dia.
            </p>

            <div className="callout">
              <p className="callout__label">El caso mas comun</p>
              <p className="callout__text">Cuando un negocio empieza a usar DataTrackers, una de las primeras tareas es responder el historial de resenas antiguas que nunca tuvieron respuesta. Eso dispara el tiempo de respuesta promedio durante ese mes. No es un problema &mdash;es el efecto transitorio de ponerse al dia.</p>
            </div>

            <h2>En que rango deberia estar tu tasa de respuesta</h2>

            <div className="gauge-block">
              <p className="gauge-block__title">Tasa de respuesta &mdash; referencia por nivel</p>
              <div className="gauge-bar" />
              <div className="gauge-bar__labels">
                <span>0%</span>
                <span>50%</span>
                <span>75%</span>
                <span>90%</span>
                <span>100%</span>
              </div>
              <div className="gauge-levels">
                <div className="gauge-level gauge-level--critical">
                  <span className="gauge-level__dot" />
                  <span className="gauge-level__range">0&ndash;50%</span>
                  <span className="gauge-level__desc">Critico. Mas de la mitad de tus clientes no reciben respuesta. Google lo considera senal de negocio inactivo.</span>
                </div>
                <div className="gauge-level gauge-level--low">
                  <span className="gauge-level__dot" />
                  <span className="gauge-level__range">50&ndash;75%</span>
                  <span className="gauge-level__desc">Bajo. Hay resenas sin responder acumulandose. Impacta negativamente en la percepcion de futuros clientes.</span>
                </div>
                <div className="gauge-level gauge-level--good">
                  <span className="gauge-level__dot" />
                  <span className="gauge-level__range">75&ndash;95%</span>
                  <span className="gauge-level__desc">Bueno. Estas respondiendo la gran mayoria. Las que faltan suelen ser resenas antiguas o de plataformas con acceso limitado.</span>
                </div>
                <div className="gauge-level gauge-level--great">
                  <span className="gauge-level__dot" />
                  <span className="gauge-level__range">95&ndash;100%</span>
                  <span className="gauge-level__desc">Excelente. Respondes casi todo. Google favorece perfiles activos en los rankings de busqueda local.</span>
                </div>
              </div>
            </div>

            <h2>Por que el numero puede parecer raro aunque todo este bien</h2>

            <p>
              Hay cuatro situaciones especificas que distorsionan el response rate y que vemos repetidamente en nuestros clientes:
            </p>

            <div className="causes-list">

              <div className="cause-card">
                <div className="cause-card__header">
                  <span className="cause-card__number">1</span>
                  <p className="cause-card__title">Respondiste resenas muy antiguas ese mes</p>
                </div>
                <div className="cause-card__body">
                  <p>Si en enero respondes 200 resenas del ano 2022, el tiempo de respuesta promedio de enero va a mostrar una demora de 2&ndash;3 anos aunque cada resena nueva del mes la hayas respondido en 24 horas. El sistema toma la fecha original de la resena, no cuando empezaste a gestionarla.</p>
                  <div className="cause-card__fix">Como leerlo: ignora el tiempo de respuesta ese mes y mira solo la tasa. Si la tasa subio, estas en el camino correcto.</div>
                </div>
              </div>

              <div className="cause-card">
                <div className="cause-card__header">
                  <span className="cause-card__number">2</span>
                  <p className="cause-card__title">Hay resenas de plataformas que respondes por fuera del sistema</p>
                </div>
                <div className="cause-card__body">
                  <p>Algunos canales como Uber Eats o TripAdvisor requieren que respondas directamente en su plataforma, no desde DataTrackers. Cuando lo haces asi, el sistema registra la respuesta pero con un desfase de horas o incluso dias segun cuando sincroniza cada plataforma. Eso infla el tiempo de respuesta sin que hayas tardado realmente.</p>
                  <div className="cause-card__fix">Como leerlo: el reporte del 1 del mes nunca esta completo si respondes por fuera. Descarga reportes el 3 o 4 del mes siguiente para tener los datos correctos.</div>
                </div>
              </div>

              <div className="cause-card">
                <div className="cause-card__header">
                  <span className="cause-card__number">3</span>
                  <p className="cause-card__title">Hay plataformas conectadas que todavia no tienen acceso administrador</p>
                </div>
                <div className="cause-card__body">
                  <p>Si OpenTable, Facebook u otra plataforma aparece en tu dashboard pero no otorgaste acceso administrador, el sistema ve las resenas pero no puede responderlas. Esas resenas entran al denominador del calculo pero nunca al numerador, bajando la tasa.</p>
                  <div className="cause-card__fix">Como detectarlo: en el dashboard aparecen resenas con el icono de &quot;sin acceso para responder&quot;. Cada una de esas es un punto que baja tu tasa.</div>
                </div>
              </div>

              <div className="cause-card">
                <div className="cause-card__header">
                  <span className="cause-card__number">4</span>
                  <p className="cause-card__title">Llegaron resenas de golpe de una plataforma nueva que acabas de conectar</p>
                </div>
                <div className="cause-card__body">
                  <p>Cuando conectas una plataforma por primera vez, el sistema importa todo el historial &mdash;puede ser meses o anos de resenas sin respuesta. Eso baja la tasa de golpe aunque hayas respondido todo correctamente en otras plataformas.</p>
                  <div className="cause-card__fix">Como manejarlo: en el primer mes despues de conectar una plataforma nueva, la tasa va a estar distorsionada. Planea 2&ndash;4 semanas de trabajo para ponerse al dia con el historial.</div>
                </div>
              </div>

            </div>

            <div className="case-real">
              <div className="case-real__header">
                <span className="case-real__badge">Caso real</span>
                <span className="case-real__title">Restaurante &middot; &quot;Respondimos 567 resenas y el response rate dice 98%&quot;</span>
              </div>
              <div className="case-real__body">
                <p><strong>La situacion:</strong> El equipo de un restaurante en Costa Rica termino un mes intenso de trabajo: respondieron 567 resenas incluyendo todo el historial desde 2022. El reporte mostraba 98% de tasa de respuesta y un tiempo de respuesta promedio altisimo.</p>
                <p><strong>La confusion:</strong> El cliente pregunto por que el tiempo de respuesta era tan alto si habian respondido todo ese mes. La respuesta: porque el sistema tomo la fecha original de cada resena &mdash;algunas del 2022&mdash; y calculo cuantos dias pasaron hasta la respuesta de enero 2026.</p>
                <p><strong>Que significaba realmente:</strong> El 98% de tasa era excelente. El tiempo de respuesta alto era el precio transitorio de ponerse al dia con anos de historial sin responder. El mes siguiente, con solo resenas nuevas entrando, el tiempo de respuesta volvio a la normalidad.</p>
                <p><strong>La recomendacion que dimos:</strong> Configurar el reporte automatico para que se envie el dia 4 del mes (no el 1), de manera que Uber Eats y TripAdvisor &mdash;que sincronizan con demora&mdash; ya tengan los datos actualizados y el reporte sea preciso.</p>
              </div>
            </div>

            <h2>Como mejorar el response rate si esta bajo</h2>

            <ol className="steps-list">
              <li className="steps-list__item">
                <span className="steps-list__number">1</span>
                <p className="steps-list__text">
                  <strong>Identifica cuantas resenas sin respuesta tenes y de donde vienen</strong>
                  Antes de ponerte a responder todo de golpe, entende el volumen. Si son 500 resenas antiguas, planea hacerlo en semanas, no en un dia &mdash;un spike de actividad inusual puede llamar la atencion del algoritmo de Google.
                </p>
              </li>
              <li className="steps-list__item">
                <span className="steps-list__number">2</span>
                <p className="steps-list__text">
                  <strong>Prioriza las resenas negativas sin respuesta</strong>
                  Una resena negativa sin respuesta hace mas dano que cien positivas respondidas. Empeza siempre por las negativas, especialmente las que tienen mas de 3 meses sin respuesta.
                </p>
              </li>
              <li className="steps-list__item">
                <span className="steps-list__number">3</span>
                <p className="steps-list__text">
                  <strong>Verifica el acceso administrador en todas las plataformas conectadas</strong>
                  Si una plataforma aparece en el dashboard pero no podes responder desde ahi, tenes que otorgar acceso. Revisa Google, Facebook, TripAdvisor, OpenTable y Uber Eats &mdash;son los cinco que mas resenas generan en restaurantes.
                </p>
              </li>
              <li className="steps-list__item">
                <span className="steps-list__number">4</span>
                <p className="steps-list__text">
                  <strong>Establece una rutina de respuesta diaria</strong>
                  El tiempo de respuesta promedio solo mejora si respondes las resenas nuevas rapido. Una revision diaria de 15 minutos es mas efectiva que una sesion semanal de dos horas.
                </p>
              </li>
              <li className="steps-list__item">
                <span className="steps-list__number">5</span>
                <p className="steps-list__text">
                  <strong>Configura el reporte automatico para el dia 3&ndash;4 del mes</strong>
                  No el dia 1. Las plataformas que sincronizas por fuera del sistema (Uber Eats, TripAdvisor) tardan entre 24 y 72 horas en actualizar los datos. Un reporte del dia 1 siempre esta incompleto.
                </p>
              </li>
            </ol>

            <h2>Por que Google le presta atencion a esta metrica</h2>

            <p>
              Google no publica exactamente como pondera el response rate en su algoritmo de busqueda local, pero si confirmo que los <strong>perfiles activos</strong> &mdash;que responden resenas, actualizan informacion y publican novedades&mdash; tienen mejor posicionamiento en Google Maps y en las busquedas locales.
            </p>

            <p>
              La logica es simple: un negocio que responde sus resenas demuestra que esta operativo y que le importa la experiencia del cliente. Eso es exactamente lo que Google quiere mostrarle a alguien que busca un restaurante o una clinica cerca suyo.
            </p>

            <div className="callout callout--error">
              <p className="callout__label">El peor escenario</p>
              <p className="callout__text">Un perfil con muchas resenas negativas sin respuesta es el peor estado posible: el algoritmo lo penaliza, los clientes potenciales lo ven como senal de abandono, y cada resena negativa sin respuesta es una objecion publica sin refutar. Es mas facil mejorar una calificacion baja con buenas respuestas que acumular resenas positivas sin responder las negativas.</p>
            </div>

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
