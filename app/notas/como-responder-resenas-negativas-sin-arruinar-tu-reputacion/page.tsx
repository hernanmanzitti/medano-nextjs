import type { Metadata } from 'next'
import { getPostBySlug } from '@/lib/blog'
import ReadingProgress from './ReadingProgress'
import MedanoCTA from '@/components/blog/MedanoCTA'
import CalculadoraCTA from '@/components/blog/CalculadoraCTA'
import RelatedPost from '@/components/blog/RelatedPost'
import BlogBreadcrumb from '@/components/blog/BlogBreadcrumb'
import ArticleJsonLd from '@/app/components/ArticleJsonLd'
import './page.css'

const TITLE = 'Como responder resenas negativas sin arruinar tu reputacion'
const DESCRIPTION = 'Guia practica con ejemplos reales: como responder a una mala resena de Google sin empeorar la situacion. Plantillas por tipo de queja incluidas.'
const SLUG = 'como-responder-resenas-negativas-sin-arruinar-tu-reputacion'
const PUBLISHED = '2026-03-05'
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

export default function BlogResponderNegativas() {
  const related = getPostBySlug('como-responder-resenas')

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
            Resenas &middot; Guia practica
          </p>

          <h1 className="blog-hero__title">
            Como responder <em>resenas negativas</em><br />
            sin arruinar tu reputacion
          </h1>

          <p className="blog-hero__lead">
            Una mala respuesta hace mas dano que la resena original. Guia practica con plantillas reales para cada tipo de situacion.
          </p>

          <div className="blog-hero__meta">
            <span className="blog-hero__meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              9 min de lectura
            </span>
            <span className="blog-hero__meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
              Marzo 2026
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
              Cada semana leemos decenas de resenas negativas junto a nuestros clientes. Y lo que mas nos enseno ese trabajo no es como evitarlas &mdash;eso es imposible&mdash; sino <strong>como responderlas de una forma que no empeore la situacion</strong>.
            </p>

            <p>
              Porque hay algo que muy pocos duenos de negocio entienden al principio: cuando respondes una resena negativa, no le hablas al cliente que la escribio. <strong>Le hablas a todos los que la van a leer despues</strong>. Y esos lectores futuros van a juzgarte mas por como respondiste que por lo que dijo el cliente.
            </p>

            <div className="callout">
              <p className="callout__label">Dato clave</p>
              <p className="callout__text">El 89% de los consumidores lee las respuestas del negocio a las resenas negativas antes de tomar una decision de compra. Una respuesta bien hecha puede convertir una crisis en una demostracion publica de profesionalismo.</p>
            </div>

            <h2>Lo que nunca hay que hacer (con ejemplos reales)</h2>

            <p>
              Antes de hablar de lo que funciona, veamos los errores mas comunes que vemos repetirse en todos los rubros:
            </p>

            <div className="comparison-grid">
              <div className="comparison-col comparison-col--dont">
                <div className="comparison-col__header">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                  NO hagas esto
                </div>
                <div className="comparison-col__body">
                  <div className="comparison-col__example">
                    &ldquo;Esta persona nunca estuvo en nuestro local, es competencia desleal y vamos a tomar acciones legales.&rdquo;
                  </div>
                  <div className="comparison-col__example">
                    &ldquo;Gracias por tu comentario! Lamentamos que no hayas tenido la mejor experiencia. Esperamos verte pronto :)&rdquo;
                  </div>
                </div>
              </div>

              <div className="comparison-col comparison-col--do">
                <div className="comparison-col__header">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                  Hace esto
                </div>
                <div className="comparison-col__body">
                  <div className="comparison-col__example">
                    &ldquo;Lamentamos tu experiencia. No encontramos registro de tu visita &mdash;escribinos a [mail] para ayudarte a resolver esto.&rdquo;
                  </div>
                  <div className="comparison-col__example">
                    &ldquo;Hola [nombre], notamos que la espera del martes fue mas larga de lo normal. Ese dia tuvimos un imprevisto en cocina y debimos haberlo comunicado antes.&rdquo;
                  </div>
                </div>
              </div>
            </div>

            <div className="callout callout--error">
              <p className="callout__label">El error mas costoso</p>
              <p className="callout__text">No responder es peor que responder mal. Una resena negativa sin respuesta le dice a cada lector: &ldquo;al dueno no le importa&rdquo;. Y eso destruye mas conversiones que la queja original.</p>
            </div>

            <h2>La estructura de una buena respuesta</h2>

            <p>
              Toda buena respuesta a una resena negativa tiene cuatro partes, en este orden:
            </p>

            <ol className="steps-list">
              <li className="steps-list__item">
                <span className="steps-list__number">1</span>
                <p className="steps-list__text">
                  <strong>Reconocimiento sin defensiva.</strong>
                  Agradece el feedback o reconoce la experiencia descripta. Sin justificarte todavia. &ldquo;Lamentamos que tu visita del viernes no haya sido lo que esperabas.&rdquo;
                </p>
              </li>
              <li className="steps-list__item">
                <span className="steps-list__number">2</span>
                <p className="steps-list__text">
                  <strong>Contexto honesto (opcional pero poderoso).</strong>
                  Si hay algo que explicar &mdash;no excusar&mdash; hacelo brevemente. &ldquo;Ese dia tuvimos un cambio de personal de ultima hora.&rdquo; Nunca inventes un contexto que no sea real.
                </p>
              </li>
              <li className="steps-list__item">
                <span className="steps-list__number">3</span>
                <p className="steps-list__text">
                  <strong>Accion concreta o compromiso.</strong>
                  Que cambia a partir de esto? Aunque sea algo pequeno. &ldquo;Ya hablamos con el equipo.&rdquo; &ldquo;Ajustamos el proceso de reservas.&rdquo; No prometas lo que no vas a cumplir.
                </p>
              </li>
              <li className="steps-list__item">
                <span className="steps-list__number">4</span>
                <p className="steps-list__text">
                  <strong>Invitacion a continuar en privado.</strong>
                  Siempre cerra dejando una puerta abierta fuera del foro publico. Un mail, un WhatsApp, un &ldquo;escribinos&rdquo;. Esto muestra madurez y saca el conflicto de la vista publica.
                </p>
              </li>
            </ol>

            <h2>Plantillas por tipo de situacion</h2>

            <p>
              Estas plantillas estan basadas en situaciones reales que gestionamos con nuestros clientes. Adapta el tono a tu marca, pero respeta la estructura.
            </p>

            {/* ── PLANTILLA 1 ──────────────────────────────────── */}
            <div className="template-block">
              <div className="template-block__header">
                <span className="template-block__number">1</span>
                <span className="template-block__title">Queja por mal servicio / atencion</span>
              </div>
              <div className="template-block__body">
                <blockquote>
                  <p>Hola <strong>[Nombre]</strong>, gracias por tomarte el tiempo de compartir tu experiencia.</p>
                  <p>Lo que describis no refleja el estandar de atencion que queremos ofrecer, y lo tomamos con seriedad. Ya conversamos con el equipo sobre lo sucedido y estamos reforzando <strong>[aspecto especifico que menciono el cliente]</strong>.</p>
                  <p>Nos gustaria tener la oportunidad de demostrarte que esto fue un caso aislado. Si queres, podes escribirnos directamente a <strong>[mail o WhatsApp]</strong>.</p>
                  <p>Gracias de nuevo por tu honestidad.<br /><strong>[Nombre del negocio]</strong></p>
                </blockquote>
              </div>
              <div className="template-block__pills">
                <span className="template-pill">Reconoce sin excusas</span>
                <span className="template-pill">Accion concreta</span>
                <span className="template-pill">Invita al privado</span>
              </div>
            </div>

            {/* ── PLANTILLA 2 ──────────────────────────────────── */}
            <div className="template-block">
              <div className="template-block__header">
                <span className="template-block__number">2</span>
                <span className="template-block__title">Resena negativa con queja legitima y compleja</span>
              </div>
              <div className="template-block__body">
                <blockquote>
                  <p>Hola <strong>[Nombre]</strong>, lamentamos profundamente la experiencia que describis.</p>
                  <p>Entendemos lo incomodo que pudo ser y queremos ser transparentes: <strong>[contexto real y breve del problema]</strong>. Sin embargo, somos conscientes de que eso no justifica lo que viviste.</p>
                  <p>Trabajamos activamente para evitar este tipo de situaciones. <strong>[Medida concreta que tomaron]</strong>.</p>
                  <p>Valoramos mucho tu feedback y te agradecemos que nos lo hayas senalado. Si queres conversar sobre esto, escribinos a <strong>[contacto]</strong>.</p>
                  <p>Gerencia de <strong>[Nombre del negocio]</strong></p>
                </blockquote>
              </div>
              <div className="template-block__pills">
                <span className="template-pill">Admite el problema</span>
                <span className="template-pill">Seguimiento interno</span>
              </div>
            </div>

            {/* ── PLANTILLA 3 ──────────────────────────────────── */}
            <div className="template-block">
              <div className="template-block__header">
                <span className="template-block__number">3</span>
                <span className="template-block__title">Resena que parece falsa o de alguien que no fue cliente</span>
              </div>
              <div className="template-block__body">
                <blockquote>
                  <p>Hola, gracias por tu comentario.</p>
                  <p>No encontramos registro de una visita o transaccion asociada a tu nombre en nuestro sistema. Para poder ayudarte y entender mejor lo que ocurrio, te pedimos que nos contactes directamente a <strong>[mail o WhatsApp]</strong>.</p>
                  <p>Estamos siempre dispuestos a escuchar y a resolver cualquier situacion con nuestros clientes.</p>
                  <p><strong>[Nombre del negocio]</strong></p>
                </blockquote>
              </div>
              <div className="template-block__pills">
                <span className="template-pill">Neutral y profesional</span>
                <span className="template-pill">Evidencia la inconsistencia</span>
                <span className="template-pill">No acusa en publico</span>
              </div>
            </div>

            {/* ── PLANTILLA 4 ──────────────────────────────────── */}
            <div className="template-block">
              <div className="template-block__header">
                <span className="template-block__number">4</span>
                <span className="template-block__title">Ataque coordinado / resenas de odio</span>
              </div>
              <div className="template-block__body">
                <blockquote>
                  <p>Hola, agradecemos todos los comentarios que nos ayudan a mejorar.</p>
                  <p>Sin embargo, notamos que esta resena no describe una experiencia de cliente real en nuestro local. Nuestro equipo esta comprometido con brindar un servicio de calidad a todos los que nos visitan.</p>
                  <p>Si hay algo concreto que quieras resolver, estamos disponibles en <strong>[contacto]</strong>.</p>
                  <p><strong>[Nombre del negocio]</strong></p>
                </blockquote>
              </div>
              <div className="template-block__pills">
                <span className="template-pill">No alimenta el conflicto</span>
                <span className="template-pill">Constancia publica</span>
                <span className="template-pill">Complementar con denuncia</span>
              </div>
            </div>

            <h2>Casos reales: lo que hicimos cuando las situaciones eran dificiles</h2>

            <p>
              A veces la teoria no alcanza. Aca van tres situaciones extremas que gestionamos con clientes reales y como las resolvimos:
            </p>

            {/* ── CASO REAL 1 ──────────────────────────────────── */}
            <div className="case-real">
              <div className="case-real__header">
                <span className="case-real__badge">Caso real</span>
                <span className="case-real__title">Restaurante &mdash; Queja por presencia de roedores en terraza</span>
              </div>
              <div className="case-real__body">
                <p><strong>El problema:</strong> Un cliente dejo una resena de 1 estrella describiendo que vio un roedor en la terraza VIP. El dueno nos explico que el restaurante esta junto a un rio sin red de cloacas, que hacen control de plagas cada quincena, pero que es imposible erradicarlo completamente.</p>
                <p><strong>El error que querian cometer:</strong> Discutir la veracidad del hecho, o minimizarlo diciendo &ldquo;es la zona&rdquo;.</p>
                <p><strong>Lo que hicimos:</strong> Respuesta que reconocia el malestar, explicaba las medidas reales que toman (sin excusas), admitia que el contexto geografico genera desafios, y ademas senalaba que el encargado no manejo bien la situacion en el momento. Invitacion a una proxima visita con compensacion.</p>
                <p><strong>Por que funciona:</strong> La transparencia sobre el contexto real &mdash;sin esconderlo&mdash; genera mas credibilidad que una respuesta corporativa vacia. Los lectores entienden que hay situaciones fuera del control total del negocio; lo que juzgan es si el negocio es honesto al respecto.</p>
              </div>
            </div>

            {/* ── CASO REAL 2 ──────────────────────────────────── */}
            <div className="case-real">
              <div className="case-real__header">
                <span className="case-real__badge">Caso real</span>
                <span className="case-real__title">Clinica dental &mdash; Resena de paciente con incidente grave</span>
              </div>
              <div className="case-real__body">
                <p><strong>El problema:</strong> Un paciente dejo una resena detallando un conflicto que termino en una intervencion del personal para desalojar al cliente por agresion fisica. El negocio queria denunciar la resena y no responder.</p>
                <p><strong>Lo que hicimos:</strong> Respuesta que confirmaba que hubo un incidente &mdash;sin detallar quien agredio a quien&mdash; indicaba que por seguridad del personal se interrumpio la atencion, mencionaba que el material del tratamiento fue entregado, e invitaba a resolver la parte administrativa a traves de un canal especifico.</p>
                <p><strong>Lo que recomendamos tambien:</strong> Que la asistente afectada realizara una denuncia civil como respaldo legal ante una posible escalada del conflicto, y que existiera un guion preparado si el cliente contactaba por WhatsApp para continuar el conflicto.</p>
                <p><strong>Leccion clave:</strong> En situaciones de incidentes graves, la respuesta publica debe ser breve, factual y sin emociones. El detalle se maneja en privado.</p>
              </div>
            </div>

            {/* ── CASO REAL 3 ──────────────────────────────────── */}
            <div className="case-real">
              <div className="case-real__header">
                <span className="case-real__badge">Caso real</span>
                <span className="case-real__title">Heladeria &mdash; Ataque coordinado de 30+ resenas falsas</span>
              </div>
              <div className="case-real__body">
                <p><strong>El contexto:</strong> Una heladeria argentina en Barcelona recibio mas de 30 resenas negativas coordinadas por un grupo que cuestionaba su politica de atender en castellano (en vez de catalan). Las resenas eran claramente de odio, no de clientes reales.</p>
                <p><strong>El error que querian evitar:</strong> Responder con &ldquo;vamos a aprender catalan&rdquo; o ser condescendientes para calmar la situacion &mdash;algo que no solo era falso sino que hubiera validado el ataque.</p>
                <p><strong>Lo que hicimos:</strong> Respuestas firmes y asertivas que defendian el derecho a atender en castellano (lengua oficial co-igual en Cataluna), reconocian sin disculparse, y mantenian el tono de la identidad del negocio. Para las resenas claramente fuera de politica de Google, denuncia simultanea.</p>
                <p><strong>Leccion clave:</strong> No todas las resenas negativas merecen el mismo tratamiento. Un ataque coordinado con motivacion politica se gestiona de forma muy distinta a una queja de servicio genuina. Confundirlos es un error costoso.</p>
              </div>
            </div>

            <h2>Cuando NO responder (si, existe esa opcion)</h2>

            <p>
              Hay situaciones donde responder publicamente hace mas dano que bien. La regla es simple: si la respuesta va a escalar el conflicto o exponer informacion que no deberia ser publica, <strong>no respondas en el foro</strong>. Resolve en privado primero, y solo responde publicamente una vez que el conflicto esta cerrado o manejado.
            </p>

            <p>Casos donde es mejor no responder inmediatamente:</p>

            <ul>
              <li>Cuando estas enojado. Espera 24 horas antes de escribir cualquier cosa.</li>
              <li>Cuando la respuesta requiere revelar informacion del cliente (medica, legal, financiera).</li>
              <li>Cuando hay una demanda legal en curso relacionada con el incidente.</li>
              <li>Cuando el resenador claramente busca provocar y cualquier respuesta va a alimentar mas resenas.</li>
            </ul>

            <div className="callout callout--warning">
              <p className="callout__label">Tiempo de respuesta ideal</p>
              <p className="callout__text">Para resenas negativas: dentro de las 24&ndash;48 horas. Google considera el tiempo de respuesta como senal de actividad del perfil. Pero una respuesta apresurada y mal pensada es peor que una respuesta tardia y bien escrita.</p>
            </div>

            <h2>La pregunta que cambia todo</h2>

            <p>
              Antes de publicar cualquier respuesta a una resena negativa, hacete esta pregunta: <strong>esta respuesta convierte a un lector desconocido en cliente, o lo espanta?</strong>
            </p>

            <p>
              Si la respuesta genera dudas, reescribila. Porque ese lector desconocido &mdash;que nunca te dejo ni va a dejar una resena&mdash; es el que decide si entra o no a tu negocio la proxima semana.
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
