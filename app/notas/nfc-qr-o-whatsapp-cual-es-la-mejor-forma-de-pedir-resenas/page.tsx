import type { Metadata } from 'next'
import { getPostBySlug } from '@/lib/blog'
import ReadingProgress from './ReadingProgress'
import MedanoCTA from '@/components/blog/MedanoCTA'
import CalculadoraCTA from '@/components/blog/CalculadoraCTA'
import RelatedPost from '@/components/blog/RelatedPost'
import BlogBreadcrumb from '@/components/blog/BlogBreadcrumb'
import ArticleJsonLd from '@/app/components/ArticleJsonLd'
import './page.css'

const TITLE = 'NFC, QR o WhatsApp: cual es la mejor forma de pedir resenas'
const DESCRIPTION = 'Comparamos los tres metodos para pedir resenas a clientes: NFC, codigo QR y WhatsApp. Cuando usar cada uno, como medir los resultados y que dice la experiencia real con restaurantes y clinicas.'
const SLUG = 'nfc-qr-o-whatsapp-cual-es-la-mejor-forma-de-pedir-resenas'
const PUBLISHED = '2026-03-20'
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

export default function BlogNfcQrWhatsapp() {
  const related = getPostBySlug('como-conseguir-mas-resenas-en-google')

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
            Herramientas · Comparativa practica
          </p>

          <h1 className="blog-hero__title">
            NFC, QR o WhatsApp:<br />
            <em>cual es la mejor forma</em><br />
            de pedir resenas
          </h1>

          <p className="blog-hero__lead">
            Tres metodos, tres contextos distintos. Antes de imprimir un QR o comprar un soporte NFC, conviene entender cuando funciona cada uno —y cuando no— para no desperdiciar el momento en que el cliente esta dispuesto a dejar su resena.
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
              Cuando un cliente termina una buena experiencia —saliendo de un restaurante, cerrando un turno en una clinica, recibiendo un pedido— hay una ventana de tiempo muy corta en la que esta dispuesto a dejar una resena. Si en ese momento el proceso le resulta dificil o lento, la resena no ocurre.
            </p>

            <p>
              El metodo que usas para pedir la resena determina cuanto de esa friccion existe. QR, NFC y WhatsApp tienen fricciones distintas, velocidades distintas y contextos donde funcionan mejor. <strong>No hay un ganador universal</strong> —hay un metodo correcto para cada situacion.
            </p>

            <div className="callout">
              <p className="callout__label">Por que importa reducir la friccion</p>
              <p className="callout__text">Cada paso adicional que el cliente tiene que dar reduce la tasa de conversion a resena aproximadamente un 30%. Un metodo que requiere 2 pasos convierte el doble que uno que requiere 4.</p>
            </div>

            <h2>Los tres metodos: comparativa directa</h2>

            <div className="methods-compare">

              {/* QR */}
              <div className="method-col method-col--qr">
                <div className="method-col__header">
                  <span className="method-col__emoji">&#x2B1A;</span>
                  <p className="method-col__name">QR</p>
                  <p className="method-col__tagline">El mas versatil</p>
                </div>
                <div className="method-col__body">
                  <div className="method-col__row">
                    <span className="method-col__row-label">Pasos</span>
                    <span className="method-col__row-val">Escanear &rarr; tocar link &rarr; escribir</span>
                  </div>
                  <div className="method-col__row">
                    <span className="method-col__row-label">Costo</span>
                    <span className="method-col__row-val"><span className="badge badge--green">Gratuito</span></span>
                  </div>
                  <div className="method-col__row">
                    <span className="method-col__row-label">Trazabilidad</span>
                    <span className="method-col__row-val"><span className="badge badge--yellow">Parcial</span></span>
                  </div>
                  <div className="method-col__row">
                    <span className="method-col__row-label">Fisico</span>
                    <span className="method-col__row-val">Sticker, mesa, packaging, factura</span>
                  </div>
                  <div className="method-col__row">
                    <span className="method-col__row-label">Mejor para</span>
                    <span className="method-col__row-val">Restaurantes, comercios, packaging</span>
                  </div>
                </div>
              </div>

              {/* NFC */}
              <div className="method-col method-col--nfc">
                <div className="method-col__header">
                  <span className="method-col__emoji">&#x1F4E1;</span>
                  <p className="method-col__name">NFC</p>
                  <p className="method-col__tagline">El mas rapido</p>
                </div>
                <div className="method-col__body">
                  <div className="method-col__row">
                    <span className="method-col__row-label">Pasos</span>
                    <span className="method-col__row-val">Acercar telefono &rarr; escribir</span>
                  </div>
                  <div className="method-col__row">
                    <span className="method-col__row-label">Costo</span>
                    <span className="method-col__row-val"><span className="badge badge--yellow">$3–$15 por soporte</span></span>
                  </div>
                  <div className="method-col__row">
                    <span className="method-col__row-label">Trazabilidad</span>
                    <span className="method-col__row-val"><span className="badge badge--gray">Baja</span></span>
                  </div>
                  <div className="method-col__row">
                    <span className="method-col__row-label">Fisico</span>
                    <span className="method-col__row-val">Tarjeta, soporte de mostrador, sticker</span>
                  </div>
                  <div className="method-col__row">
                    <span className="method-col__row-label">Mejor para</span>
                    <span className="method-col__row-val">Mostrador, recepcion, checkout presencial</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="method-col method-col--wp">
                <div className="method-col__header">
                  <span className="method-col__emoji">&#x1F4AC;</span>
                  <p className="method-col__name">WhatsApp</p>
                  <p className="method-col__tagline">El mas medible</p>
                </div>
                <div className="method-col__body">
                  <div className="method-col__row">
                    <span className="method-col__row-label">Pasos</span>
                    <span className="method-col__row-val">Recibir mensaje &rarr; tocar link &rarr; escribir</span>
                  </div>
                  <div className="method-col__row">
                    <span className="method-col__row-label">Costo</span>
                    <span className="method-col__row-val"><span className="badge badge--yellow">API o manual</span></span>
                  </div>
                  <div className="method-col__row">
                    <span className="method-col__row-label">Trazabilidad</span>
                    <span className="method-col__row-val"><span className="badge badge--green">Alta</span></span>
                  </div>
                  <div className="method-col__row">
                    <span className="method-col__row-label">Fisico</span>
                    <span className="method-col__row-val">Solo digital, requiere numero del cliente</span>
                  </div>
                  <div className="method-col__row">
                    <span className="method-col__row-label">Mejor para</span>
                    <span className="method-col__row-val">Delivery, servicios, clinicas, agencias</span>
                  </div>
                </div>
              </div>

            </div>

            <h2>QR: el caballo de trabajo</h2>

            <p>
              El QR es el metodo mas flexible porque funciona en casi cualquier soporte fisico: una pegatina en la mesa, el reverso de la factura, una tarjeta en la caja, o incluso impreso en el packaging del producto. No requiere conexion especial, no cuesta nada generarlo, y el cliente solo necesita la camara del telefono.
            </p>

            <p>
              Su principal limitacion es la <strong>trazabilidad</strong>. Un QR generico que lleva directo al perfil de Google no distingue si la resena vino de la mesa 5, del packaging, o de la tarjeta que le diste al cliente al irse. Eso se resuelve con QRs diferenciados por punto de contacto.
            </p>

            <div className="case-real">
              <div className="case-real__header">
                <span className="case-real__badge">Caso real</span>
                <span className="case-real__title">Cadena de sushi · QR por mesero para medir performance individual</span>
              </div>
              <div className="case-real__body">
                <p><strong>El pedido:</strong> Un restaurante nos pregunto si era posible tener un QR por mesero, de forma que pudieran ver el promedio de calificaciones de cada uno individualmente —no solo el del local.</p>
                <p><strong>Como se implemento:</strong> Cada mesero tiene su propio QR que lleva a una microencuesta con su nombre pre-cargado. Las respuestas se consolidan en el dashboard por empleado. Las resenas 5 estrellas se redirigen a Google; las de 3 o menos se capturan internamente para gestion interna antes de que lleguen al perfil publico.</p>
                <p><strong>Resultado:</strong> El gerente puede ver en tiempo real que meseros generan mas resenas positivas y cuales acumulan quejas recurrentes, sin exponer los datos negativos directamente en Google.</p>
              </div>
            </div>

            <h3>La pregunta del QR directo vs. landing intermedia</h3>

            <p>
              Esta duda aparecio textualmente en uno de nuestros grupos de clientes: <em>&quot;No seria mejor tener el QR que directamente te lleva al comentario en Google, sin landing?&quot;</em>
            </p>

            <p>
              La respuesta es: <strong>depende de lo que queres medir</strong>.
            </p>

            <ul>
              <li><strong>QR directo a Google:</strong> menos friccion, mas resenas en total, pero sin filtro ni datos de quien llego.</li>
              <li><strong>QR a landing intermedia:</strong> un paso mas, pero captas quien escaneo, podes filtrar experiencias negativas antes de que lleguen a Google, y tenes trazabilidad completa del funnel.</li>
            </ul>

            <p>
              Para negocios que empiezan a pedir resenas, el QR directo funciona bien. Para negocios con volumen o que necesitan medir por sucursal o empleado, la landing vale la pena.
            </p>

            <div className="callout callout--warning">
              <p className="callout__label">Un detalle tecnico importante</p>
              <p className="callout__text">Google detecta patrones inusuales de resenas. Si de un dia para otro tu negocio recibe 40 resenas porque pusiste el QR en un packaging masivo, el algoritmo puede marcarlas como sospechosas. Activa el QR de forma gradual y consistente, no en una sola oleada.</p>
            </div>

            <h2>NFC: el metodo mas rapido cuando el cliente esta enfrente</h2>

            <p>
              NFC (Near Field Communication) es la misma tecnologia que usas cuando pagas sin contacto. Un soporte NFC programado con el link de tu perfil de Google se activa cuando el cliente acerca el telefono —sin escanear, sin abrir la camara. Es literalmente un paso menos que el QR.
            </p>

            <p>
              El problema es el contexto: <strong>NFC requiere que el cliente este fisicamente delante del soporte y tenga NFC habilitado</strong>. Funciona muy bien en un mostrador o en una recepcion donde el empleado puede invitar activamente al cliente a acercarse. No funciona en packaging, en una mesa de restaurante sin atencion directa, ni en ningun formato remoto.
            </p>

            <p>
              Tampoco ofrece trazabilidad por si solo —todos los toques llevan al mismo destino, sin distinguir origen. Para trazabilidad con NFC necesitas multiples soportes con distintos links de destino, lo que aumenta el costo y la complejidad.
            </p>

            <h3>Cuando conviene invertir en NFC?</h3>

            <ul>
              <li>Negocios con atencion en mostrador o recepcion donde el empleado puede hacer el pedido cara a cara.</li>
              <li>Hoteles, spas o experiencias de alta gama donde la presentacion fisica del soporte suma a la imagen de marca.</li>
              <li>Locales con alta rotacion y poco tiempo —el cliente paga y se va rapido, no va a sacar el telefono para escanear un QR.</li>
            </ul>

            <h2>WhatsApp: el metodo mas medible y el mas subestimado</h2>

            <p>
              WhatsApp tiene una tasa de apertura del 98% contra el 20% del email. Eso solo ya lo hace el canal mas efectivo para pedir resenas en America Latina —donde WhatsApp es la app de comunicacion dominante.
            </p>

            <p>
              La logica es simple: despues de una compra, turno, o servicio, el cliente recibe un mensaje de WhatsApp con un link directo al perfil de Google. El mensaje llega cuando la experiencia todavia esta fresca, el cliente ya tiene el telefono en la mano, y el link lleva directamente a la pantalla de calificacion.
            </p>

            <div className="case-real">
              <div className="case-real__header">
                <span className="case-real__badge">Caso real</span>
                <span className="case-real__title">Agencia de viajes · Base de emails reconvertida a campana de resenas</span>
              </div>
              <div className="case-real__body">
                <p><strong>El contexto:</strong> Una agencia de viajes tenia una base de clientes activos pero nunca habia pedido resenas sistematicamente. Nos preguntaron si el Excel con mails de ventas que cargaban semanalmente servia para hacer campanas de resenas.</p>
                <p><strong>Como funciona:</strong> Cada semana cargan los mails de clientes que compraron en los ultimos 7 dias. Desde DataTrackers se dispara automaticamente un email (y opcionalmente un WhatsApp) con el link al perfil de Google, personalizado con el nombre del cliente.</p>
                <p><strong>El resultado clave:</strong> El momento de envio es critico. Enviado a las 48–72 horas post-compra, la tasa de conversion a resena es 3–4x mas alta que si se envia despues de una semana.</p>
              </div>
            </div>

            <div className="case-real">
              <div className="case-real__header">
                <span className="case-real__badge">Caso real</span>
                <span className="case-real__title">Centro medico · Integracion con archivo diario de pacientes</span>
              </div>
              <div className="case-real__body">
                <p><strong>El pedido:</strong> Una clinica con varias sucursales queria pedir resenas a los pacientes despues de cada consulta, pero su sistema de gestion no tenia integracion directa.</p>
                <p><strong>La solucion:</strong> El equipo de sistemas genera diariamente un archivo con los datos de los pacientes atendidos el dia anterior —nombre, email, sucursal— y lo envia automaticamente a DataTrackers. La plataforma procesa el archivo y dispara el mensaje de pedido de resena personalizado por sucursal.</p>
                <p><strong>Un detalle importante para el rubro salud:</strong> el mensaje nunca menciona el motivo de la consulta ni ningun dato medico. Solo hace referencia a &quot;tu visita de ayer&quot; y pregunta por la atencion recibida. La privacidad del paciente es innegociable.</p>
              </div>
            </div>

            <h2>Como combinar los tres metodos sin duplicar pedidos</h2>

            <p>
              El error mas comun es activar los tres canales al mismo tiempo sin coordinacion, terminando en que el mismo cliente recibe un QR en la mesa, un sticker NFC en la caja y un WhatsApp al dia siguiente. Eso genera friccion por exceso, no por falta.
            </p>

            <p>La logica de combinacion correcta es por momento del journey del cliente:</p>

            <table className="context-table">
              <thead>
                <tr>
                  <th>Momento</th>
                  <th>Canal recomendado</th>
                  <th>Por que</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Durante la experiencia (mesa, sala de espera)</td>
                  <td>QR en soporte fisico</td>
                  <td>El cliente tiene tiempo, esta en el lugar, la experiencia todavia no termino</td>
                </tr>
                <tr>
                  <td>Al momento del pago / salida</td>
                  <td>NFC en mostrador</td>
                  <td>Interaccion cara a cara, el empleado puede hacer el pedido verbal + fisico simultaneamente</td>
                </tr>
                <tr>
                  <td>Post-servicio (24–72 hs despues)</td>
                  <td>WhatsApp o email</td>
                  <td>El cliente ya proceso la experiencia, esta en su contexto habitual, la tasa de respuesta es mas alta</td>
                </tr>
                <tr>
                  <td>Packaging / delivery</td>
                  <td>QR impreso</td>
                  <td>Unico canal viable para experiencias sin presencia fisica simultanea</td>
                </tr>
              </tbody>
            </table>

            <p>
              La regla de oro: <strong>un canal por touchpoint, no todos los canales en todos los touchpoints</strong>. Elegis uno para el momento en persona y otro para el seguimiento post-servicio. Rara vez necesitas los tres activos al mismo tiempo.
            </p>

            <h2>Como configurar el pedido de resenas paso a paso</h2>

            <ol className="steps-list">
              <li className="steps-list__item">
                <span className="steps-list__number">1</span>
                <p className="steps-list__text">
                  <strong>Consegui el link directo a tu perfil de Google</strong>
                  Entra a tu Google Business Profile &rarr; Compartir &rarr; Copiar link de resenas. Ese link lleva directamente a la pantalla de calificacion, sin pasos extras.
                </p>
              </li>
              <li className="steps-list__item">
                <span className="steps-list__number">2</span>
                <p className="steps-list__text">
                  <strong>Acorta el link</strong>
                  El link de Google es largo. Usa un acortador con tracking (bit.ly, rebrand.ly) para tener un link corto y ver cuantas veces fue tocado. Esto te da trazabilidad basica sin necesidad de landing.
                </p>
              </li>
              <li className="steps-list__item">
                <span className="steps-list__number">3</span>
                <p className="steps-list__text">
                  <strong>Genera el QR a partir del link acortado</strong>
                  Cualquier generador de QR gratuito sirve (qr-code-generator.com, canva). Descargalo en alta resolucion para impresion.
                </p>
              </li>
              <li className="steps-list__item">
                <span className="steps-list__number">4</span>
                <p className="steps-list__text">
                  <strong>Si usas NFC, programa el chip con el mismo link</strong>
                  Chips NFC NTAG213 cuestan menos de $1 en MercadoLibre. Con la app NFC Tools (Android/iOS) escribis el link en el chip en menos de un minuto.
                </p>
              </li>
              <li className="steps-list__item">
                <span className="steps-list__number">5</span>
                <p className="steps-list__text">
                  <strong>Para WhatsApp, arma un mensaje corto y personal</strong>
                  &quot;Hola [nombre], gracias por tu visita de ayer. Si tenes 2 minutos, nos ayudaria mucho que dejes tu opinion aca: [link]. Gracias!&quot; — nada mas. Sin emojis excesivos, sin texto largo.
                </p>
              </li>
              <li className="steps-list__item">
                <span className="steps-list__number">6</span>
                <p className="steps-list__text">
                  <strong>Medi el resultado por canal</strong>
                  Si usas links distintos por canal (QR mesa / QR packaging / WhatsApp), podes ver exactamente de donde viene cada resena. Con ese dato, en 30 dias sabes cual canal te funciona mejor y cual podes simplificar.
                </p>
              </li>
            </ol>

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
