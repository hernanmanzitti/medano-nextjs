import type { Metadata } from 'next'
import ReadingProgress from './ReadingProgress'
import './page.css'

export const metadata: Metadata = {
  title: 'Como responder resenas negativas (sin arruinar tu reputacion) | DataTrackers',
  description: 'Guia practica con ejemplos reales: como responder a una mala resena de Google sin empeorar la situacion. Plantillas por tipo de queja incluidas.',
}

export default function BlogResponderResenasNegativas() {
  return (
    <>
      <ReadingProgress />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section id="blog-hero">
        <div className="blog-wrapper">
          <p className="blog-hero__eyebrow">
            <span className="blog-hero__eyebrow-dot" />
            Reputacion Online · Guia con Plantillas
          </p>

          <h1 className="blog-hero__title">
            Como responder<br />
            <em>resenas negativas</em><br />
            sin arruinar tu reputacion
          </h1>

          <p className="blog-hero__lead">
            Una mala resena no destruye un negocio. Una mala respuesta si. Guia practica con casos reales y plantillas listas para usar segun el tipo de queja.
          </p>

          <div className="blog-hero__meta">
            <span className="blog-hero__meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              9 min de lectura
            </span>
            <span className="blog-hero__meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
              Marzo 2026
            </span>
            <span className="blog-hero__meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>
              Equipo DataTrackers
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
              Cada semana leemos decenas de resenas negativas junto a nuestros clientes. Y lo que mas nos enseno ese trabajo no es como evitarlas —eso es imposible— sino <strong>como responderlas de una forma que no empeore la situacion</strong>.
            </p>

            <p>
              Porque hay algo que muy pocos duenos de negocio entienden al principio: cuando respondes una resena negativa, no le hablas al cliente que la escribio. <strong>Le hablas a todos los que la van a leer despues</strong>. Y esos lectores futuros van a juzgarte mas por como respondiste que por lo que dijo el cliente.
            </p>

            <div className="callout">
              <p className="callout__label">Dato clave</p>
              <p className="callout__text">El 89% de los consumidores lee las respuestas del negocio a las resenas negativas antes de tomar una decision de compra. Una respuesta bien hecha puede convertir una crisis en una demostracion publica de profesionalismo.</p>
            </div>

            <h2>Lo que nunca hay que hacer (con ejemplos reales)</h2>

            <p>Antes de hablar de lo que funciona, veamos los errores mas comunes que vemos repetirse en todos los rubros:</p>

            <div className="comparison-grid">
              <div className="comparison-card comparison-card--dont">
                <p className="comparison-card__header">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" /></svg>
                  No hagas esto
                </p>
                <p className="comparison-card__quote">&quot;Esta persona nunca estuvo en nuestro local, es competencia desleal y vamos a tomar acciones legales.&quot;</p>
                <p className="comparison-card__note">Atacar al resenador en publico escala el conflicto y hace quedar mal al negocio, aunque tengas razon.</p>
              </div>
              <div className="comparison-card comparison-card--do">
                <p className="comparison-card__header">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10" /><polyline points="9 12 11 14 15 10" /></svg>
                  Hace esto
                </p>
                <p className="comparison-card__quote">&quot;Lamentamos tu experiencia. No encontramos registro de tu visita —escribinos a [mail] para ayudarte a resolver esto.&quot;</p>
                <p className="comparison-card__note">Invitas a resolver en privado. Si es falsa, eso queda demostrado solo. Si es real, tenes la oportunidad de recuperar al cliente.</p>
              </div>
            </div>

            <div className="comparison-grid">
              <div className="comparison-card comparison-card--dont">
                <p className="comparison-card__header">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" /></svg>
                  No hagas esto
                </p>
                <p className="comparison-card__quote">&quot;Gracias por tu comentario! Lamentamos que no hayas tenido la mejor experiencia. Esperamos verte pronto :)&quot;</p>
                <p className="comparison-card__note">Respuesta generica y vacia. El cliente siente que copiaste y pegaste. Los lectores tambien.</p>
              </div>
              <div className="comparison-card comparison-card--do">
                <p className="comparison-card__header">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10" /><polyline points="9 12 11 14 15 10" /></svg>
                  Hace esto
                </p>
                <p className="comparison-card__quote">&quot;Hola [nombre], notamos que la espera del martes fue mas larga de lo normal. Ese dia tuvimos un imprevisto en cocina y debimos haberlo comunicado antes. Lo tomamos en cuenta.&quot;</p>
                <p className="comparison-card__note">Especifica, honesta, sin excusas vagas. Demuestra que leiste y que te importa.</p>
              </div>
            </div>

            <div className="callout callout--error">
              <p className="callout__label">El error mas costoso</p>
              <p className="callout__text">No responder es peor que responder mal. Una resena negativa sin respuesta le dice a cada lector: &quot;al dueno no le importa&quot;. Y eso destruye mas conversiones que la queja original.</p>
            </div>

            <h2>La estructura de una buena respuesta</h2>

            <p>Toda buena respuesta a una resena negativa tiene cuatro partes, en este orden:</p>

            <ol className="steps-list">
              <li className="steps-list__item">
                <span className="steps-list__number">1</span>
                <p className="steps-list__text">
                  <strong>Reconocimiento sin defensiva</strong>
                  Agradece el feedback o reconoce la experiencia descripta. Sin justificarte todavia. &quot;Lamentamos que tu visita del viernes no haya sido lo que esperabas.&quot;
                </p>
              </li>
              <li className="steps-list__item">
                <span className="steps-list__number">2</span>
                <p className="steps-list__text">
                  <strong>Contexto honesto (opcional pero poderoso)</strong>
                  Si hay algo que explicar —no excusar— hacelo brevemente. &quot;Ese dia tuvimos un cambio de personal de ultima hora.&quot; Nunca inventes un contexto que no sea real.
                </p>
              </li>
              <li className="steps-list__item">
                <span className="steps-list__number">3</span>
                <p className="steps-list__text">
                  <strong>Accion concreta o compromiso</strong>
                  Que cambia a partir de esto? Aunque sea algo pequeno. &quot;Ya hablamos con el equipo.&quot; &quot;Ajustamos el proceso de reservas.&quot; No prometas lo que no vas a cumplir.
                </p>
              </li>
              <li className="steps-list__item">
                <span className="steps-list__number">4</span>
                <p className="steps-list__text">
                  <strong>Invitacion a continuar en privado</strong>
                  Siempre cerra dejando una puerta abierta fuera del foro publico. Un mail, un WhatsApp, un &quot;escribinos&quot;. Esto muestra madurez y saca el conflicto de la vista publica.
                </p>
              </li>
            </ol>

            <h2>Plantillas por tipo de situacion</h2>

            <p>Estas plantillas estan basadas en situaciones reales que gestionamos con nuestros clientes. Adapta el tono a tu marca, pero respeta la estructura.</p>

            {/* PLANTILLA 1 */}
            <div className="template-block">
              <div className="template-block__header">
                <span className="template-block__tag">Plantilla 1</span>
                <span className="template-block__situation">Queja por mal servicio / atencion</span>
              </div>
              <div className="template-block__body">
                <p className="template-block__text">Hola <mark>[Nombre]</mark>, gracias por tomarte el tiempo de compartir tu experiencia.{'\n\n'}Lo que describis no refleja el estandar de atencion que queremos ofrecer, y lo tomamos con seriedad. Ya conversamos con el equipo sobre lo sucedido y estamos reforzando <mark>[aspecto especifico que menciono el cliente]</mark>.{'\n\n'}Nos gustaria tener la oportunidad de demostrarte que esto fue un caso aislado. Si queres, podes escribirnos directamente a <mark>[mail o WhatsApp]</mark>.{'\n\n'}Gracias de nuevo por tu honestidad.{'\n'}<mark>[Nombre del negocio]</mark></p>
              </div>
              <div className="template-block__footer">
                <span className="template-block__pill">Reconoce sin excusas</span>
                <span className="template-block__pill">Accion concreta</span>
                <span className="template-block__pill">Invita al privado</span>
              </div>
            </div>

            {/* PLANTILLA 2 */}
            <div className="template-block">
              <div className="template-block__header">
                <span className="template-block__tag">Plantilla 2</span>
                <span className="template-block__situation">Resena negativa con queja legitima y compleja</span>
              </div>
              <div className="template-block__body">
                <p className="template-block__text">Hola <mark>[Nombre]</mark>, lamentamos profundamente la experiencia que describis.{'\n\n'}Entendemos lo incomodo que pudo ser y queremos ser transparentes: <mark>[contexto real y breve del problema]</mark>. Sin embargo, somos conscientes de que eso no justifica lo que viviste.{'\n\n'}Trabajamos activamente para evitar este tipo de situaciones. <mark>[Medida concreta que tomaron]</mark>.{'\n\n'}Valoramos mucho tu feedback y te agradecemos que nos lo hayas senalado. Si queres conversar sobre esto, escribinos a <mark>[contacto]</mark>.{'\n\n'}Gerencia de <mark>[Nombre del negocio]</mark></p>
              </div>
              <div className="template-block__footer">
                <span className="template-block__pill">Admite el problema sin dramatizar</span>
                <span className="template-block__pill">Demuestra que hay seguimiento interno</span>
              </div>
            </div>

            {/* PLANTILLA 3 */}
            <div className="template-block">
              <div className="template-block__header">
                <span className="template-block__tag">Plantilla 3</span>
                <span className="template-block__situation">Resena que parece falsa o de alguien que no fue cliente</span>
              </div>
              <div className="template-block__body">
                <p className="template-block__text">Hola, gracias por tu comentario.{'\n\n'}No encontramos registro de una visita o transaccion asociada a tu nombre en nuestro sistema. Para poder ayudarte y entender mejor lo que ocurrio, te pedimos que nos contactes directamente a <mark>[mail o WhatsApp]</mark>.{'\n\n'}Estamos siempre dispuestos a escuchar y a resolver cualquier situacion con nuestros clientes.{'\n\n'}<mark>[Nombre del negocio]</mark></p>
              </div>
              <div className="template-block__footer">
                <span className="template-block__pill">Neutral y profesional</span>
                <span className="template-block__pill">Deja en evidencia la inconsistencia sin atacar</span>
                <span className="template-block__pill">No acusa de fraude en publico</span>
              </div>
            </div>

            {/* PLANTILLA 4 */}
            <div className="template-block">
              <div className="template-block__header">
                <span className="template-block__tag">Plantilla 4</span>
                <span className="template-block__situation">Ataque coordinado / resenas de odio</span>
              </div>
              <div className="template-block__body">
                <p className="template-block__text">Hola, agradecemos todos los comentarios que nos ayudan a mejorar.{'\n\n'}Sin embargo, notamos que esta resena no describe una experiencia de cliente real en nuestro local. Nuestro equipo esta comprometido con brindar un servicio de calidad a todos los que nos visitan.{'\n\n'}Si hay algo concreto que quieras resolver, estamos disponibles en <mark>[contacto]</mark>.{'\n\n'}<mark>[Nombre del negocio]</mark></p>
              </div>
              <div className="template-block__footer">
                <span className="template-block__pill">No alimenta el conflicto</span>
                <span className="template-block__pill">Deja constancia publica sin escalar</span>
                <span className="template-block__pill">Siempre complementar con denuncia a Google</span>
              </div>
            </div>

            <h2>Casos reales: lo que hicimos cuando las situaciones eran dificiles</h2>

            <p>A veces la teoria no alcanza. Aca van tres situaciones extremas que gestionamos con clientes reales y como las resolvimos:</p>

            {/* CASO 1 */}
            <div className="case-real">
              <div className="case-real__header">
                <span className="case-real__badge">Caso real</span>
                <span className="case-real__title">Restaurante · Queja por presencia de roedores en terraza</span>
              </div>
              <div className="case-real__body">
                <p><strong>El problema:</strong> Un cliente dejo una resena de 1 estrella describiendo que vio un roedor en la terraza VIP. El dueno nos explico que el restaurante esta junto a un rio sin red de cloacas, que hacen control de plagas cada quincena, pero que es imposible erradicarlo completamente.</p>
                <p><strong>El error que querian cometer:</strong> Discutir la veracidad del hecho, o minimizarlo diciendo &quot;es la zona&quot;.</p>
                <p><strong>Lo que hicimos:</strong> Respuesta que reconocia el malestar, explicaba las medidas reales que toman (sin excusas), admitia que el contexto geografico genera desafios, y ademas senalaba que el encargado no manejo bien la situacion en el momento. Invitacion a una proxima visita con compensacion.</p>
                <p><strong>Por que funciona:</strong> La transparencia sobre el contexto real —sin esconderlo— genera mas credibilidad que una respuesta corporativa vacia. Los lectores entienden que hay situaciones fuera del control total del negocio; lo que juzgan es si el negocio es honesto al respecto.</p>
              </div>
            </div>

            {/* CASO 2 */}
            <div className="case-real">
              <div className="case-real__header">
                <span className="case-real__badge">Caso real</span>
                <span className="case-real__title">Clinica dental · Resena de paciente con incidente grave</span>
              </div>
              <div className="case-real__body">
                <p><strong>El problema:</strong> Un paciente dejo una resena detallando un conflicto que termino en una intervencion del personal para desalojar al cliente por agresion fisica. El negocio queria denunciar la resena y no responder.</p>
                <p><strong>Lo que hicimos:</strong> Respuesta que confirmaba que hubo un incidente —sin detallar quien agredio a quien— indicaba que por seguridad del personal se interrumpio la atencion, mencionaba que el material del tratamiento fue entregado, e invitaba a resolver la parte administrativa a traves de un canal especifico.</p>
                <p><strong>Lo que recomendamos tambien:</strong> Que la asistente afectada realizara una denuncia civil como respaldo legal ante una posible escalada del conflicto, y que existiera un guion preparado si el cliente contactaba por WhatsApp para continuar el conflicto.</p>
                <p><strong>Leccion clave:</strong> En situaciones de incidentes graves, la respuesta publica debe ser breve, factual y sin emociones. El detalle se maneja en privado.</p>
              </div>
            </div>

            {/* CASO 3 */}
            <div className="case-real">
              <div className="case-real__header">
                <span className="case-real__badge">Caso real</span>
                <span className="case-real__title">Heladeria · Ataque coordinado de 30+ resenas falsas</span>
              </div>
              <div className="case-real__body">
                <p><strong>El contexto:</strong> Una heladeria argentina en Barcelona recibio mas de 30 resenas negativas coordinadas por un grupo que cuestionaba su politica de atender en castellano (en vez de catalan). Las resenas eran claramente de odio, no de clientes reales.</p>
                <p><strong>El error que querian evitar:</strong> Responder con &quot;vamos a aprender catalan&quot; o ser condescendientes para calmar la situacion —algo que no solo era falso sino que hubiera validado el ataque.</p>
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
              <p className="callout__text">Para resenas negativas: dentro de las 24–48 horas. Google considera el tiempo de respuesta como senal de actividad del perfil. Pero una respuesta apresurada y mal pensada es peor que una respuesta tardia y bien escrita.</p>
            </div>

            <h2>La pregunta que cambia todo</h2>

            <p>
              Antes de publicar cualquier respuesta a una resena negativa, hacete esta pregunta: <strong>esta respuesta convierte a un lector desconocido en cliente, o lo espanta?</strong>
            </p>

            <p>
              Si la respuesta genera dudas, reescribila. Porque ese lector desconocido —que nunca te dejo ni va a dejar una resena— es el que decide si entra o no a tu negocio la proxima semana.
            </p>

          </article>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section id="blog-cta">
        <div className="blog-wrapper">
          <p className="blog-cta__eyebrow">DataTrackers · Gestion de Resenas</p>
          <h2 className="blog-cta__title">Queres que respondamos<br />las resenas por vos?</h2>
          <p className="blog-cta__text">
            En DataTrackers no solo monitoreamos tus resenas en Google, TripAdvisor, Facebook y mas —tambien las respondemos por vos con el tono y la estrategia adecuada para cada situacion. Vos aprobas, nosotros ejecutamos.
          </p>
          <div className="blog-cta__actions">
            <a href="https://wa.me/5491173616189" className="btn-primary" target="_blank" rel="noopener">
              Quiero una demo gratuita
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </a>
            <a href="https://datatrackers.co" className="btn-secondary" target="_blank" rel="noopener">
              Conocer DataTrackers
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
