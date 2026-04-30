import type { Metadata } from 'next'
import { getPostBySlug } from '@/lib/blog'
import ReadingProgress from './ReadingProgress'
import MedanoCTA from '@/components/blog/MedanoCTA'
import CalculadoraCTA from '@/components/blog/CalculadoraCTA'
import RelatedPost from '@/components/blog/RelatedPost'
import BlogBreadcrumb from '@/components/blog/BlogBreadcrumb'
import ArticleJsonLd from '@/app/components/ArticleJsonLd'
import './page.css'

const TITLE = 'Como verificar tu negocio en Google en 2026'
const DESCRIPTION = 'Guia paso a paso para verificar tu negocio en Google Maps. Todos los metodos explicados: video, llamada, codigo postal y PIN. Con soluciones a los errores mas comunes.'
const SLUG = 'como-verificar-tu-negocio-en-google-business-2026'
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

export default function BlogVerificarGoogle() {
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
            Google Business &middot; Guia paso a paso
          </p>

          <h1 className="blog-hero__title">
            Como <em>verificar tu negocio</em><br />
            en Google en 2026
          </h1>

          <p className="blog-hero__lead">
            Sin verificacion no podes responder resenas, no podes editar informacion, y Google no confia del todo en tu perfil. Guia completa con todos los metodos.
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
              Trabajamos con negocios en Argentina, Costa Rica y Panama, y en casi todos los onboardings nos encontramos con la misma historia: el dueno tiene un perfil en Google Maps, aparece en busquedas, tiene algunas resenas &mdash;pero nunca verifico el perfil formalmente.
            </p>

            <p>
              Sin verificacion no podes responder resenas, no podes editar informacion, no podes acceder a las estadisticas, y Google no confia del todo en tu perfil. <strong>Es la base de todo lo demas.</strong>
            </p>

            <div className="callout">
              <p className="callout__label">Que cambia cuando verificas</p>
              <p className="callout__text">Un perfil verificado te da control total: podes responder resenas, subir fotos, editar horarios, publicar novedades y acceder a las estadisticas de busqueda. Sin verificacion, cualquier persona puede sugerir cambios en tu perfil y Google puede aceptarlos sin consultarte.</p>
            </div>

            {/* ── LOS 4 METODOS ─────────────────────────────── */}
            <h2>Los 4 metodos de verificacion que ofrece Google</h2>

            <p>
              Google no siempre ofrece todos los metodos para todos los negocios. Depende del tipo de actividad, la ubicacion y el historial del perfil. Estos son los cuatro que existen actualmente:
            </p>

            <div className="methods-grid">
              <div className="method-card">
                <p className="method-card__emoji">&#127909;</p>
                <p className="method-card__name">Video</p>
                <p className="method-card__time">2&ndash;5 dias habiles</p>
                <p className="method-card__desc">Grabas un video corto mostrando el exterior del negocio, la direccion visible y el interior operativo. Google lo revisa manualmente.</p>
              </div>
              <div className="method-card">
                <p className="method-card__emoji">&#128222;</p>
                <p className="method-card__name">Llamada</p>
                <p className="method-card__time">Inmediato</p>
                <p className="method-card__desc">Google llama al numero del perfil y te dicta un PIN de verificacion. Tenes que estar disponible para atender en el momento.</p>
              </div>
              <div className="method-card">
                <p className="method-card__emoji">&#9993;</p>
                <p className="method-card__name">Codigo postal</p>
                <p className="method-card__time">5&ndash;14 dias</p>
                <p className="method-card__desc">Google envia una tarjeta postal fisica a la direccion del negocio con un codigo de verificacion. Es el metodo mas lento pero funciona en casi todos los casos.</p>
              </div>
              <div className="method-card">
                <p className="method-card__emoji">&#128231;</p>
                <p className="method-card__name">Email</p>
                <p className="method-card__time">Inmediato</p>
                <p className="method-card__desc">Google envia un codigo al email asociado al perfil. Solo esta disponible para algunos tipos de negocio y no siempre aparece como opcion.</p>
              </div>
            </div>

            {/* ── PASO A PASO ───────────────────────────────── */}
            <h2>Paso a paso: como iniciar la verificacion</h2>

            <p>
              El proceso empieza desde el panel de Google Business. Esta es la ruta exacta para llegar a la opcion de verificacion:
            </p>

            <div className="path-block">
              <span>business.google.com</span>
              <span className="path-block__sep">&rarr;</span>
              <span>Ver mi perfil</span>
              <span className="path-block__sep">&rarr;</span>
              <span>tres puntos</span>
              <span className="path-block__sep">&rarr;</span>
              <span>Configuracion del perfil empresarial</span>
              <span className="path-block__sep">&rarr;</span>
              <span>Personas y acceso</span>
              <span className="path-block__sep">&rarr;</span>
              <span>Verificar</span>
            </div>

            <ol className="steps-list">
              <li className="steps-list__item">
                <span className="steps-list__number">1</span>
                <p className="steps-list__text">
                  <strong>Entra con la cuenta correcta</strong>
                  Asegurate de estar logueado con la cuenta de Google que es propietaria del perfil. Si usas varias cuentas, verifica cual tiene el acceso antes de empezar.
                </p>
              </li>
              <li className="steps-list__item">
                <span className="steps-list__number">2</span>
                <p className="steps-list__text">
                  <strong>Verifica que la informacion sea correcta</strong>
                  Antes de pedir la verificacion, revisa que el nombre, la direccion, el telefono y la categoria del negocio esten bien. Si hay errores, Google puede rechazar la verificacion.
                </p>
              </li>
              <li className="steps-list__item">
                <span className="steps-list__number">3</span>
                <p className="steps-list__text">
                  <strong>Elegi el metodo que te ofrece Google</strong>
                  No siempre podes elegir. Google decide que metodos estan disponibles para tu negocio. Si solo te ofrece video, no hay forma de forzar la llamada o el codigo postal.
                </p>
              </li>
              <li className="steps-list__item">
                <span className="steps-list__number">4</span>
                <p className="steps-list__text">
                  <strong>Completa el proceso sin cerrar la sesion</strong>
                  Si elegiste video, graba y subi el video en la misma sesion. Si elegiste llamada, tene el telefono a mano. Cerrar la sesion o cambiar de cuenta puede reiniciar el proceso.
                </p>
              </li>
              <li className="steps-list__item">
                <span className="steps-list__number">5</span>
                <p className="steps-list__text">
                  <strong>Espera la confirmacion y revisa el estado</strong>
                  Dependiendo del metodo, la confirmacion puede ser inmediata o tardar hasta 14 dias. Revisa el estado desde el mismo panel de Google Business.
                </p>
              </li>
            </ol>

            {/* ── VERIFICACION POR VIDEO ────────────────────── */}
            <h2>La verificacion por video: guia detallada</h2>

            <p>
              El metodo de video es el que Google esta empujando con mas fuerza desde 2025. No es complicado, pero tiene reglas especificas que si no seguis te van a rechazar el video.
            </p>

            <p>
              El video tiene que ser continuo (sin cortes), mostrar el exterior del negocio con la direccion visible, el interior operativo y alguna referencia que confirme que estas ahi fisicamente. Google lo revisa una persona, no un algoritmo.
            </p>

            <h3>Que debe incluir el video</h3>

            <div className="video-tips">
              <div className="video-tip">
                <span className="video-tip__check">&#10003;</span>
                <span className="video-tip__text">Exterior con direccion visible</span>
              </div>
              <div className="video-tip">
                <span className="video-tip__check">&#10003;</span>
                <span className="video-tip__text">Transito peatonal o contexto de calle</span>
              </div>
              <div className="video-tip">
                <span className="video-tip__check">&#10003;</span>
                <span className="video-tip__text">Interior operativo</span>
              </div>
              <div className="video-tip">
                <span className="video-tip__check">&#10003;</span>
                <span className="video-tip__text">Sin cortes ni edicion</span>
              </div>
              <div className="video-tip">
                <span className="video-tip__check">&#10003;</span>
                <span className="video-tip__text">Buena iluminacion y sin movimiento brusco</span>
              </div>
              <div className="video-tip">
                <span className="video-tip__check">&#10003;</span>
                <span className="video-tip__text">Personas del equipo presentes si es posible</span>
              </div>
            </div>

            <div className="callout callout--warning">
              <p className="callout__label">Si el video se rechaza dos veces</p>
              <p className="callout__text">Despues de dos rechazos, Google puede bloquear el metodo de video temporalmente y pedirte que uses otro. Antes de grabar, asegurate de cumplir todos los requisitos. Si te rechazan una vez, lee el motivo especifico que te da Google antes de volver a intentar.</p>
            </div>

            {/* ── PROBLEMAS FRECUENTES ──────────────────────── */}
            <h2>Problemas frecuentes y como resolverlos</h2>

            <div className="problems-list">

              <div className="problem-card">
                <div className="problem-card__header">
                  <span className="problem-card__icon">?</span>
                  <p className="problem-card__question">No puedo acceder porque el perfil tiene un 2FA en un celular que ya no tengo</p>
                </div>
                <div className="problem-card__body">
                  <p>Vas a tener que recuperar la cuenta de Google primero. Anda a accounts.google.com/signin/recovery y segui el proceso de recuperacion. Si no funciona, contacta al soporte de Google directamente. No hay forma de verificar un perfil si no podes acceder a la cuenta propietaria.</p>
                </div>
              </div>

              <div className="problem-card">
                <div className="problem-card__header">
                  <span className="problem-card__icon">?</span>
                  <p className="problem-card__question">Quiero dar acceso a una agencia sin perder el control</p>
                </div>
                <div className="problem-card__body">
                  <p>Desde el panel de Google Business podes agregar usuarios con rol de &quot;Administrador&quot; o &quot;Colaborador&quot; sin transferir la propiedad. El propietario siempre tiene el control final. Nunca compartas las credenciales de la cuenta &mdash;usa el sistema de roles de Google.</p>
                </div>
              </div>

              <div className="problem-card">
                <div className="problem-card__header">
                  <span className="problem-card__icon">?</span>
                  <p className="problem-card__question">El perfil esta verificado pero no aparecen resenas en algunas sucursales</p>
                </div>
                <div className="problem-card__body">
                  <p>Cada sucursal necesita su propia verificacion. Que la sede principal este verificada no significa que las demas lo esten. Revisa cada perfil individualmente desde el panel de Google Business y verifica cada ubicacion por separado.</p>
                </div>
              </div>

              <div className="problem-card">
                <div className="problem-card__header">
                  <span className="problem-card__icon">?</span>
                  <p className="problem-card__question">Complete la verificacion pero sigue marcado como no verificado</p>
                </div>
                <div className="problem-card__body">
                  <p>Si usaste el metodo de video, la revision puede tardar hasta 5 dias habiles. Si usaste codigo postal, verifica que ingresaste el codigo correcto y que no haya expirado (los codigos vencen despues de 30 dias). Si ya paso el tiempo estimado, contacta al soporte de Google Business desde el panel.</p>
                </div>
              </div>

              <div className="problem-card">
                <div className="problem-card__header">
                  <span className="problem-card__icon">?</span>
                  <p className="problem-card__question">La tarjeta postal no llego</p>
                </div>
                <div className="problem-card__body">
                  <p>Las tarjetas postales pueden tardar entre 5 y 14 dias dependiendo del pais. En Latinoamerica es comun que tarden mas. Si pasaron mas de 14 dias, podes solicitar un nuevo codigo desde el panel. No cambies la direccion del negocio mientras esperas, porque eso invalida el codigo enviado.</p>
                </div>
              </div>

            </div>

            {/* ── CUANDO NO ES SUFICIENTE ───────────────────── */}
            <h2>Cuando la verificacion no es suficiente</h2>

            <p>
              Verificar el perfil es el primer paso, pero no es lo unico. Si trabajas con una agencia o tenes un equipo que gestiona las resenas, necesitas configurar los accesos correctamente. La verificacion confirma que el negocio es real &mdash;los roles de acceso definen quien puede hacer que.
            </p>

            <p>
              Para agregar personas al perfil sin compartir tu contrasena, segui esta ruta:
            </p>

            <div className="path-block">
              <span>business.google.com</span>
              <span className="path-block__sep">&rarr;</span>
              <span>Ver mi perfil</span>
              <span className="path-block__sep">&rarr;</span>
              <span>tres puntos</span>
              <span className="path-block__sep">&rarr;</span>
              <span>Configuracion del perfil empresarial</span>
              <span className="path-block__sep">&rarr;</span>
              <span>Personas y acceso</span>
              <span className="path-block__sep">&rarr;</span>
              <span>Agregar</span>
            </div>

            <div className="callout callout--error">
              <p className="callout__label">Error frecuente &mdash; nunca compartas tu contrasena</p>
              <p className="callout__text">Si una agencia o colaborador te pide la contrasena de tu cuenta de Google para gestionar tu perfil, eso es una senal de alerta. Google tiene un sistema de roles especificamente disenado para esto. Siempre usa el sistema de &quot;Personas y acceso&quot; para dar permisos sin compartir credenciales.</p>
            </div>

            {/* ── CHECKLIST ─────────────────────────────────── */}
            <h2>Checklist de verificacion completa</h2>

            <p>
              Antes de dar por terminado el proceso, revisa que hayas completado cada uno de estos puntos:
            </p>

            <ul className="checklist">
              <li className="checklist__item">
                <span className="checklist__check">&#10003;</span>
                <span className="checklist__text">Estas logueado con la cuenta propietaria del perfil</span>
              </li>
              <li className="checklist__item">
                <span className="checklist__check">&#10003;</span>
                <span className="checklist__text">El nombre del negocio coincide con el nombre real</span>
              </li>
              <li className="checklist__item">
                <span className="checklist__check">&#10003;</span>
                <span className="checklist__text">La direccion es correcta y coincide con la ubicacion fisica</span>
              </li>
              <li className="checklist__item">
                <span className="checklist__check">&#10003;</span>
                <span className="checklist__text">El telefono es el numero principal del negocio</span>
              </li>
              <li className="checklist__item">
                <span className="checklist__check">&#10003;</span>
                <span className="checklist__text">La categoria principal es la correcta</span>
              </li>
              <li className="checklist__item">
                <span className="checklist__check">&#10003;</span>
                <span className="checklist__text">Completaste el metodo de verificacion que te ofrecio Google</span>
              </li>
              <li className="checklist__item">
                <span className="checklist__check">&#10003;</span>
                <span className="checklist__text">El estado del perfil muestra &quot;Verificado&quot;</span>
              </li>
              <li className="checklist__item">
                <span className="checklist__check">&#10003;</span>
                <span className="checklist__text">Configuraste los roles de acceso para tu equipo o agencia</span>
              </li>
              <li className="checklist__item">
                <span className="checklist__check">&#10003;</span>
                <span className="checklist__text">Cada sucursal tiene su propia verificacion (si aplica)</span>
              </li>
            </ul>

            <p>
              La verificacion es el primer paso para tener un perfil de Google que realmente trabaje para tu negocio. Sin ella, todo lo demas &mdash;responder resenas, publicar novedades, analizar estadisticas&mdash; queda bloqueado o limitado. Es un proceso que se hace una vez y despues no hay que volver a tocarlo.
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
