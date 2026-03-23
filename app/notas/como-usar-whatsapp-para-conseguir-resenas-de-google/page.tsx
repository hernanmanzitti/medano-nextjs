import type { Metadata } from 'next'
import { getPostBySlug } from '@/lib/blog'
import ReadingProgress from './ReadingProgress'
import MedanoCTA from '@/components/blog/MedanoCTA'
import CalculadoraCTA from '@/components/blog/CalculadoraCTA'
import RelatedPost from '@/components/blog/RelatedPost'
import BlogBreadcrumb from '@/components/blog/BlogBreadcrumb'
import './page.css'

const TITLE = 'Como usar WhatsApp para conseguir mas resenas de Google'
const DESCRIPTION = 'WhatsApp tiene 98% de tasa de apertura. Guia practica para convertir esa ventaja en resenas reales: que mensaje mandar, cuando mandarlo y como automatizarlo con tu base de clientes.'
const SLUG = 'como-usar-whatsapp-para-conseguir-resenas-de-google'
const PUBLISHED = '2026-03-27'
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

export default function BlogWhatsappResenas() {
  const related = getPostBySlug('nfc-qr-o-whatsapp-cual-es-la-mejor-forma-de-pedir-resenas')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: TITLE,
    description: DESCRIPTION,
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
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
          <BlogBreadcrumb title={TITLE} />

          <p className="blog-hero__eyebrow">
            <span className="blog-hero__eyebrow-dot" />
            Herramientas · Guia practica
          </p>

          <h1 className="blog-hero__title">
            Como usar <em>WhatsApp</em><br />
            para conseguir mas<br />
            resenas de Google
          </h1>

          <p className="blog-hero__lead">
            El canal con mayor tasa de apertura en America Latina tambien es el mas efectivo para pedir resenas. Aca explicamos como armarlo, que mensaje funciona, cuando mandarlo —y como automatizarlo con tu base de clientes existente.
          </p>

          <div className="blog-hero__meta">
            <span className="blog-hero__meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              8 min de lectura
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
              En America Latina, WhatsApp no es una app de mensajeria mas —es la app de comunicacion. Esta instalada en practicamente todos los telefonos, se abre varias veces al dia, y los mensajes se leen. Eso le da una ventaja estructural enorme sobre cualquier otro canal para pedir resenas.
            </p>

            <p>
              Pero hay una diferencia importante entre <strong>mandarle un mensaje a un cliente pidiendole que deje una resena</strong> y tener un sistema que lo haga de forma consistente, en el momento correcto, con el mensaje correcto. La mayoria de los negocios hace lo primero de vez en cuando. Pocos hacen lo segundo de forma sistematica.
            </p>

            <div className="callout callout--whatsapp">
              <p className="callout__label">Por que WhatsApp gana al email en LATAM</p>
              <p className="callout__text">Email: 20% de tasa de apertura promedio. WhatsApp: 98%. En Argentina, Mexico, Costa Rica y Panama —los mercados donde operamos— WhatsApp es el primer canal que el cliente revisa. Un mensaje de pedido de resena enviado por WhatsApp llega cuando la experiencia todavia esta fresca y el telefono ya esta en la mano.</p>
            </div>

            <h2>El mensaje que funciona (y el que no)</h2>

            <p>
              Antes de hablar de automatizacion, hay que entender que hace que un mensaje de pedido de resena funcione. Porque el canal correcto con el mensaje incorrecto no convierte.
            </p>

            <p>Lo que <strong>no</strong> funciona:</p>

            <ul>
              <li>Mensajes largos con mucho texto antes del link.</li>
              <li>Mensajes que suenan a broadcast masivo (&quot;Estimado cliente...&quot;).</li>
              <li>Pedir explicitamente &quot;5 estrellas&quot; — viola las politicas de Google y genera desconfianza.</li>
              <li>Mandar el mismo mensaje generico a todos los clientes sin personalizacion minima.</li>
            </ul>

            <p>Lo que <strong>si</strong> funciona:</p>

            <div className="wp-chat">
              <p className="wp-chat__label">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--color-whatsapp)"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.531 5.845L0 24l6.335-1.514A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.001-1.369l-.357-.213-3.754.897.934-3.648-.235-.374A9.773 9.773 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z" /></svg>
                Ejemplo de mensaje efectivo
              </p>
              <div className="wp-chat__messages">
                <div className="wp-bubble wp-bubble--sent">
                  Hola Martin, gracias por visitarnos ayer. Si tenes un par de minutos, nos ayudaria mucho que dejes tu opinion aca: <span className="wp-bubble__link">g.page/r/tu-negocio/review</span>
                  <p className="wp-bubble__time">&#x2713;&#x2713; 10:32</p>
                </div>
                <div className="wp-bubble wp-bubble--received">
                  Claro! Ya lo hice
                  <p className="wp-bubble__time">10:47</p>
                </div>
              </div>
              <p className="wp-chat__note">
                Lo que hace que funcione: nombre real, referencia a la visita especifica, link directo, sin pedir &quot;5 estrellas&quot;, sin emojis excesivos, sin texto innecesario.
              </p>
            </div>

            <p>
              La personalizacion minima que necesita el mensaje es el nombre y una referencia temporal (&quot;ayer&quot;, &quot;la semana pasada&quot;, &quot;tu pedido del martes&quot;). Eso es suficiente para que el cliente sienta que es un mensaje real y no un broadcast.
            </p>

            <h2>El timing es tan importante como el mensaje</h2>

            <p>
              Podes tener el mejor mensaje del mundo y arruinar el resultado mandandolo en el momento equivocado. La ventana optima para pedir una resena es corta: <strong>entre las 2 y las 72 horas despues de la experiencia</strong>.
            </p>

            <div className="timing-track">
              <div className="timing-segment timing-segment--ok">
                <span className="timing-segment__time">0–2 hs</span>
                <p className="timing-segment__label">Inmediato post-experiencia</p>
                <span className="timing-segment__badge">Regular</span>
              </div>
              <div className="timing-segment timing-segment--best">
                <span className="timing-segment__time">2–24 hs</span>
                <p className="timing-segment__label">La experiencia esta fresca</p>
                <span className="timing-segment__badge">Optimo</span>
              </div>
              <div className="timing-segment timing-segment--good">
                <span className="timing-segment__time">24–72 hs</span>
                <p className="timing-segment__label">Todavia recuerda bien</p>
                <span className="timing-segment__badge">Bueno</span>
              </div>
              <div className="timing-segment timing-segment--bad">
                <span className="timing-segment__time">+7 dias</span>
                <p className="timing-segment__label">La experiencia ya se diluyo</p>
                <span className="timing-segment__badge">Bajo</span>
              </div>
            </div>

            <p>
              Mandar el mensaje inmediatamente despues del pago (0–2 hs) tiene una tasa de conversion mas baja de lo que se espera, porque el cliente todavia esta en modo transaccional. El momento ideal es cuando ya llego a casa o al dia siguiente —cuando la experiencia se asento y puede escribir con calma.
            </p>

            <div className="callout callout--warning">
              <p className="callout__label">El error de timing mas comun</p>
              <p className="callout__text">Negocios que cargan la base de clientes una vez al mes y mandan todos los mensajes juntos. Si visitaste el local el 3 y te llega el pedido de resena el 28, la experiencia ya no esta fresca y la tasa de conversion cae drasticamente. La frecuencia de carga ideal es semanal o, mejor, diaria.</p>
            </div>

            <h2>Los tres modelos de implementacion</h2>

            <p>
              No todos los negocios tienen el mismo punto de partida. Hay tres formas de implementar WhatsApp para pedir resenas, segun la infraestructura que ya tenes:
            </p>

            <h3>Modelo 1 — Manual con plantilla guardada</h3>
            <p>
              El mas simple. Guardas el mensaje como plantilla en WhatsApp Business y lo mandas manualmente a cada cliente despues de la interaccion. Funciona bien para negocios con bajo volumen (menos de 10 clientes por dia). El punto debil es la consistencia: depende de que alguien lo recuerde hacer todos los dias.
            </p>

            <h3>Modelo 2 — Excel semanal + campana</h3>
            <p>
              Cargas semanalmente un archivo con los datos de clientes de esa semana (nombre, telefono o email, fecha de visita). Desde una plataforma como DataTrackers se disparan los mensajes automaticamente con el nombre y la referencia temporal correcta para cada uno.
            </p>

            <div className="case-real">
              <div className="case-real__header">
                <span className="case-real__badge">Caso real</span>
                <span className="case-real__title">Agencia de viajes · Excel semanal de clientes convertido en campanas de resenas</span>
              </div>
              <div className="case-real__body">
                <p><strong>El contexto:</strong> Una agencia de viajes cargaba semanalmente un Excel con los mails y nombres de los clientes que habian comprado en los ultimos 7 dias. Nos preguntaron si ese archivo servia para hacer campanas de resenas.</p>
                <p><strong>Como funciona:</strong> Cada lunes suben el archivo de la semana anterior. La plataforma procesa los datos y dispara un email o mensaje personalizado a cada cliente con el link directo al perfil de Google. El mensaje incluye el nombre del cliente y la referencia a la compra reciente.</p>
                <p><strong>El resultado clave:</strong> Con una carga semanal consistente, en 60 dias duplicaron la cantidad de resenas mensuales sin ningun cambio en la operacion del negocio. El 70% de las nuevas resenas llego de clientes que nunca habian dejado una espontaneamente.</p>
              </div>
            </div>

            <h3>Modelo 3 — Integracion automatica diaria</h3>
            <p>
              El nivel mas avanzado. El sistema de gestion del negocio (CRM, sistema de turnos, facturacion) genera automaticamente un archivo diario con los clientes atendidos el dia anterior y lo envia a la plataforma de resenas. Sin intervencion manual, sin recordar cargar nada.
            </p>

            <div className="case-real">
              <div className="case-real__header">
                <span className="case-real__badge">Caso real</span>
                <span className="case-real__title">Centro medico · Archivo diario de pacientes integrado con DataTrackers</span>
              </div>
              <div className="case-real__body">
                <p><strong>El contexto:</strong> Una clinica con varias sucursales queria pedir resenas post-consulta pero no tenia integracion directa entre su sistema de gestion y ninguna plataforma externa.</p>
                <p><strong>La solucion:</strong> El equipo de sistemas configuro un proceso automatico que genera cada manana un archivo con los pacientes atendidos el dia anterior —nombre, email, sucursal— y lo envia a DataTrackers. La plataforma procesa el archivo y dispara el mensaje personalizado por sucursal dentro de las 24 horas post-consulta.</p>
                <p><strong>El detalle que mas importo:</strong> El mensaje nunca menciona el motivo de la consulta ni ningun dato de salud. Solo hace referencia a &quot;tu visita de ayer&quot; y pregunta por la atencion recibida. En el rubro salud, la privacidad del paciente es innegociable y una mencion inadecuada puede destruir la confianza de un solo golpe.</p>
                <p><strong>Resultado:</strong> Pasaron de 3–4 resenas mensuales espontaneas a 40+ resenas mensuales en el primer trimestre, con una calificacion promedio que subio de 4.1 a 4.6 porque los pacientes satisfechos que antes no dejaban resena ahora si lo hacian.</p>
              </div>
            </div>

            <h2>Paso a paso para arrancar hoy</h2>

            <ol className="steps-list">
              <li className="steps-list__item">
                <span className="steps-list__number">1</span>
                <p className="steps-list__text">
                  <strong>Consegui el link directo a tu perfil de Google</strong>
                  Entra a tu Google Business Profile &rarr; Compartir &rarr; Copiar link de resenas. Ese link lleva directo a la pantalla de calificacion sin pasos intermedios.
                </p>
              </li>
              <li className="steps-list__item">
                <span className="steps-list__number">2</span>
                <p className="steps-list__text">
                  <strong>Acorta el link y activa el tracking</strong>
                  Usa bit.ly o rebrand.ly para acortar el link y ver cuantas veces fue tocado. Con eso ya tenes metrica basica de conversion sin necesitar ninguna otra herramienta.
                </p>
              </li>
              <li className="steps-list__item">
                <span className="steps-list__number">3</span>
                <p className="steps-list__text">
                  <strong>Escribi el mensaje base de tu negocio</strong>
                  Un texto corto con: nombre del cliente, referencia temporal a la visita, link. Sin pedir &quot;5 estrellas&quot;, sin prometer nada. Guardalo como mensaje rapido en WhatsApp Business.
                </p>
              </li>
              <li className="steps-list__item">
                <span className="steps-list__number">4</span>
                <p className="steps-list__text">
                  <strong>Arma tu base de clientes</strong>
                  Si no tenes una, empeza hoy. Un Excel con nombre, telefono/email y fecha de visita es suficiente. Si ya tenes un sistema de gestion, habla con tu equipo de sistemas para exportar ese dato automaticamente.
                </p>
              </li>
              <li className="steps-list__item">
                <span className="steps-list__number">5</span>
                <p className="steps-list__text">
                  <strong>Defini la frecuencia de envio</strong>
                  Semanal es el minimo razonable. Diario es lo ideal. Lo mas importante es que sea consistente —es mejor mandar semanalmente siempre que diariamente a veces.
                </p>
              </li>
              <li className="steps-list__item">
                <span className="steps-list__number">6</span>
                <p className="steps-list__text">
                  <strong>Medi y ajusta el mensaje en 30 dias</strong>
                  Con el tracking del link acortado, a los 30 dias vas a saber cuantos clientes tocaron el link. Si la tasa es baja, el problema suele ser el timing (muy tarde) o el mensaje (muy largo o generico). Ajusta una variable a la vez.
                </p>
              </li>
            </ol>

            <h2>Que pasa con los clientes que responden negativamente</h2>

            <p>
              Es la pregunta que mas aparece cuando implementamos este sistema. Que pasa si un cliente insatisfecho recibe el mensaje y responde con una queja?
            </p>

            <p>
              La respuesta corta es: <strong>es lo mejor que te puede pasar</strong>. Un cliente insatisfecho que te escribe por WhatsApp es un cliente insatisfecho que todavia no fue a Google a dejar una resena negativa. Esa conversacion privada es la oportunidad de resolver el problema antes de que se vuelva publica.
            </p>

            <p>
              El sistema bien implementado funciona como un filtro natural: los clientes satisfechos van directo a Google, los insatisfechos te escriben a vos primero. Capturas el problema antes de que se convierta en reputacion publica.
            </p>

            <div className="callout">
              <p className="callout__label">Regla de oro</p>
              <p className="callout__text">Nunca configures el sistema para que solo los clientes que calificaron 4 o 5 estrellas reciban el link a Google. Eso viola las politicas de Google y puede resultar en la penalizacion o suspension del perfil. La diferencia esta en el mensaje, no en filtrar quien recibe el link.</p>
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
