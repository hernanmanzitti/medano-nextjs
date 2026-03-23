import type { Metadata } from 'next'
import ReadingProgress from './ReadingProgress'
import './page.css'

export const metadata: Metadata = {
  title: 'Por que Google borra resenas (y como recuperarlas) | DataTrackers',
  description: 'Tus resenas de Google Maps desaparecieron de golpe? Explicamos por que pasa, que esta haciendo Google al respecto y que podes hacer para recuperarlas.',
}

export default function BlogGoogleBorraResenas() {
  return (
    <>
      <ReadingProgress />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section id="blog-hero">
        <div className="blog-wrapper">
          <p className="blog-hero__eyebrow">
            <span className="blog-hero__eyebrow-dot" />
            Reputacion Online · Guia Practica
          </p>

          <h1 className="blog-hero__title">
            Por que Google <em>borra tus resenas</em><br />
            (y como recuperarlas)
          </h1>

          <p className="blog-hero__lead">
            Abris el panel de Google Business y ves que 30, 50, o hasta 200 resenas desaparecieron de un dia para otro. Antes de entrar en panico, hay una explicacion —y en la mayoria de los casos, una solucion.
          </p>

          <div className="blog-hero__meta">
            <span className="blog-hero__meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              7 min de lectura
            </span>
            <span className="blog-hero__meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
              Actualizado: Febrero 2026
            </span>
            <span className="blog-hero__meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
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
              Llego a nuestro equipo de soporte decenas de veces. Un cliente de restaurante en Costa Rica perdio 50 resenas en un mes. Una clinica dental vio como desaparecian resenas de pacientes reales que tardaron anos en acumular. Un hotel en Buenos Aires nos escribio desesperado un lunes a la manana: <strong>&quot;que hicieron con mis resenas?&quot;</strong>
            </p>

            <p>
              La respuesta corta: nosotros no hicimos nada. Fue Google.
            </p>

            <p>
              Y si te esta pasando a vos, probablemente tampoco hiciste nada malo. Explicamos que esta pasando, por que, y que podes hacer al respecto.
            </p>

            {/* Stats Grid */}
            <div className="stats-grid">
              <div className="stats-grid__card">
                <span className="stats-grid__number">+20</span>
                <span className="stats-grid__label">clientes afectados en nuestra red solo en enero 2026</span>
              </div>
              <div className="stats-grid__card">
                <span className="stats-grid__number">94%</span>
                <span className="stats-grid__label">de las resenas eliminadas por error fueron restauradas</span>
              </div>
              <div className="stats-grid__card">
                <span className="stats-grid__number">4–6<br />sem</span>
                <span className="stats-grid__label">tiempo promedio de restitucion segun soporte de Google</span>
              </div>
            </div>

            <h2>Que esta pasando realmente?</h2>

            <p>
              Google viene implementando un sistema de revision antifraude basado en inteligencia artificial. El objetivo es legitimo: eliminar resenas falsas compradas, resenas de cuentas automatizadas, y ataques coordinados de competidores o grupos organizados.
            </p>

            <p>
              El problema es que <strong>la IA comete errores</strong>. Al detectar patrones sospechosos (muchas resenas en un periodo corto, cuentas con poca actividad, resenas que llegaron desde una campana de email), el sistema puede marcar y eliminar resenas que son completamente legitimas.
            </p>

            <div className="callout">
              <p className="callout__label">Lo que confirmo Google</p>
              <p className="callout__text">&quot;Google is aware of this problem, it is a massive error all over the world. If you have lost more than 10 reviews, then you are part of this problem.&quot; — Comunicado oficial de soporte de Google, enero 2026.</p>
            </div>

            <p>
              En Norteamerica este fenomeno empezo a reportarse masivamente en 2025. En America Latina el pico llego en enero y febrero de 2026, aunque casos aislados venian ocurriendo desde mediados de 2024.
            </p>

            <h2>Las 3 causas mas comunes de eliminacion de resenas</h2>

            <p>No todas las eliminaciones son iguales. Es importante distinguirlas porque cada una tiene una solucion diferente:</p>

            <h3>1. El algoritmo antifraude de Google (la mas frecuente hoy)</h3>
            <p>
              Es la causa que describimos arriba. Google detecta &quot;anomalias&quot; en el patron de resenas y las elimina preventivamente. Puede afectar a negocios completamente honestos que simplemente tuvieron un buen mes, implementaron una campana de pedido de resenas, o estan en una zona geografica donde el fraude es alto.
            </p>
            <p>
              <strong>Senal caracteristica:</strong> baja abrupta de muchas resenas al mismo tiempo, no solo una o dos.
            </p>

            <h3>2. El usuario que dejo la resena la elimino</h3>
            <p>
              Cualquier usuario de Google puede eliminar sus propias resenas en cualquier momento, sin avisar. Esto pasa mas de lo que parece, especialmente si el cliente resolvio su problema despues de dejar una resena negativa, o si simplemente limpio su historial de actividad en Google.
            </p>
            <p>
              <strong>Senal caracteristica:</strong> desaparece una sola resena, generalmente de una cuenta activa. En DataTrackers esto aparece etiquetado como <strong>&quot;removed&quot;</strong> con la fecha exacta.
            </p>

            <h3>3. Google detecto que la cuenta que dejo la resena es falsa o fue vulnerada</h3>
            <p>
              Cuando actores maliciosos vulneran el sistema de captcha de Google para inflar artificialmente los ratings de un negocio, Google eventualmente detecta esas cuentas y elimina todas sus resenas —incluyendo las del negocio atacado positivamente. Es una consecuencia involuntaria de un ataque que no generaste vos.
            </p>

            <div className="callout callout--warning">
              <p className="callout__label">Lo que NO podes hacer</p>
              <p className="callout__text">Google no restaura resenas a pedido de un negocio individual. El proceso es institucional: si el sistema detecto un error masivo, restaura en lotes. No hay una &quot;papelera de reciclaje&quot; de resenas a la que tengas acceso.</p>
            </div>

            <h2>Timeline: como se desarrolla una ola de eliminaciones</h2>

            <div className="timeline">
              <div className="timeline__item">
                <p className="timeline__date">Dia 0</p>
                <p className="timeline__text">El algoritmo antifraude de Google marca un grupo de resenas como &quot;sospechosas&quot;. El negocio no recibe ninguna notificacion.</p>
              </div>
              <div className="timeline__item">
                <p className="timeline__date">Dias 1–7</p>
                <p className="timeline__text">Las resenas empiezan a desaparecer en tandas. El dueno del negocio lo nota cuando ve que el contador bajo. En DataTrackers aparece en el reporte diario como resenas &quot;removed&quot;.</p>
              </div>
              <div className="timeline__item">
                <p className="timeline__date">Semanas 2–4</p>
                <p className="timeline__text">Google revisa internamente el error y comienza la restauracion progresiva. Las resenas vuelven a aparecer en el perfil, pero pueden tardar 24–48 hs adicionales en reflejarse en plataformas de monitoreo.</p>
              </div>
              <div className="timeline__item">
                <p className="timeline__date">Mes 1–2</p>
                <p className="timeline__text">La mayoria de las resenas legitimas quedan restauradas. En DataTrackers las podes identificar con la etiqueta <strong>&quot;restored&quot;</strong> y ver exactamente que fechas tuvieron actividad.</p>
              </div>
            </div>

            <h2>Que podes hacer cuando te pasa?</h2>

            <ol className="steps-list">
              <li className="steps-list__item">
                <span className="steps-list__number">1</span>
                <p className="steps-list__text">
                  <strong>No entres en panico ni hagas nada apresurado</strong>
                  Responder con campanas masivas de pedido de resenas cuando el algoritmo ya te tiene en la mira es contraproducente. Puede empeorar la situacion.
                </p>
              </li>
              <li className="steps-list__item">
                <span className="steps-list__number">2</span>
                <p className="steps-list__text">
                  <strong>Documenta el dano con precision</strong>
                  Anota la fecha en que empezaste a notar la baja, cuantas resenas tenias antes y cuantas tenes ahora. Esta informacion es necesaria para el reclamo a Google.
                </p>
              </li>
              <li className="steps-list__item">
                <span className="steps-list__number">3</span>
                <p className="steps-list__text">
                  <strong>Reportalo en Google Business Profile</strong>
                  Entra a tu panel de Google Business — Soporte — Informar un problema. Menciona especificamente &quot;resenas eliminadas por error&quot; y el periodo aproximado.
                </p>
              </li>
              <li className="steps-list__item">
                <span className="steps-list__number">4</span>
                <p className="steps-list__text">
                  <strong>Solicita una revision en el Foro de Soporte de Google</strong>
                  Los Gestores de Producto de Google monitorean activamente el foro oficial (support.google.com/business). Los casos con evidencia clara tienen mayor tasa de resolucion.
                </p>
              </li>
              <li className="steps-list__item">
                <span className="steps-list__number">5</span>
                <p className="steps-list__text">
                  <strong>Espera y monitorea</strong>
                  Si el error es masivo, Google lo restaura sin intervencion individual. Lo mas importante es tener visibilidad del proceso: cuantas se fueron, cuantas volvieron, y cuales todavia faltan.
                </p>
              </li>
            </ol>

            <h2>Como evitar que el algoritmo te marque falsamente</h2>

            <p>No hay garantia total, pero estas practicas reducen significativamente el riesgo:</p>

            <ul>
              <li><strong>Pedi resenas de forma consistente, no en explosiones.</strong> 20 resenas en una semana activa el radar mas que 5 resenas por semana durante un mes.</li>
              <li><strong>Diversifica las plataformas.</strong> Un negocio con resenas en Google, TripAdvisor, y Facebook tiene un perfil de credibilidad mas solido que uno concentrado solo en Google.</li>
              <li><strong>No compres resenas, nunca.</strong> No solo viola las politicas de Google, sino que tambien expone a tus resenas legitimas a eliminaciones cuando Google detecta la actividad fraudulenta y barre el entorno.</li>
              <li><strong>Responde las resenas regularmente.</strong> Los perfiles activos —donde el dueno responde— tienen menor tasa de intervencion algoritmica.</li>
              <li><strong>Monitorea cambios anormales.</strong> Detectar una baja a tiempo permite actuar mas rapido. Un sistema de alertas automaticas te avisa antes de que el dano sea mayor.</li>
            </ul>

            <h2>La senal que nadie quiere ver: la etiqueta &quot;restored&quot;</h2>

            <p>
              Si usas una herramienta de monitoreo de resenas, vas a empezar a ver algunas resenas etiquetadas como <strong>&quot;restored&quot;</strong>. No te asustes. Eso es una buena senal: significa que Google reconocio el error y devolvio la resena al perfil.
            </p>

            <p>
              La fecha que aparece en &quot;restored&quot; es la fecha en que Google la restituyo —no la fecha original de la resena. Por eso vas a ver en tus reportes resenas del ano pasado que &quot;aparecen nuevas&quot; en el periodo actual. Es normal, es parte del proceso de restauracion.
            </p>

            <div className="callout">
              <p className="callout__label">Dato practico</p>
              <p className="callout__text">En DataTrackers podes ver el log completo de cada resena: cuando fue publicada, cuando fue removida, y cuando fue restaurada. Eso te da la trazabilidad exacta para saber cuanto perdiste y cuanto ya recuperaste.</p>
            </div>

            <h2>Y si las resenas nunca vuelven?</h2>

            <p>
              En un porcentaje menor de casos —estimamos alrededor del 6% basado en nuestra red de clientes— las resenas no se restauran automaticamente. En esos casos, las opciones son limitadas pero existen:
            </p>

            <ul>
              <li>Escalada al equipo de soporte premium de Google Business (disponible para cuentas verificadas con alto volumen).</li>
              <li>Contacto a traves del programa Google Business para agencias (las agencias de marketing digital pueden gestionar casos con acceso directo a soporte especializado).</li>
              <li>Reiniciar la acumulacion de resenas con una estrategia consistente. En negocios con buena operacion, recuperar el volumen toma entre 3 y 6 meses.</li>
            </ul>

            <p>
              La perdida de resenas duele —especialmente cuando llevas anos construyendo esa reputacion— pero no es irreversible. La clave esta en tener visibilidad del problema en tiempo real y actuar con informacion, no con desesperacion.
            </p>

          </article>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section id="blog-cta">
        <div className="blog-wrapper">
          <p className="blog-cta__eyebrow">DataTrackers · Monitoreo de Reputacion</p>
          <h2 className="blog-cta__title">Queres saber si hoy te<br />faltan resenas?</h2>
          <p className="blog-cta__text">
            DataTrackers monitorea tus resenas en Google, TripAdvisor, Facebook y mas —y te avisa al instante cuando algo cambia. Ves exactamente cuales se removieron, cuales se restauraron y cuantas te quedan pendientes.
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
