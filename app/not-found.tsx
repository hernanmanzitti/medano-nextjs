import Link from 'next/link'
import './not-found.css'

const StarFilled = () => (
  <span className="nf-star nf-star-filled">
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M8 1l1.85 3.75L14 5.38l-3 2.92.71 4.13L8 10.25l-3.71 1.95.71-4.13-3-2.92 4.15-.63L8 1z" />
    </svg>
  </span>
)

const StarEmpty = () => (
  <span className="nf-star nf-star-empty">
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M8 1l1.85 3.75L14 5.38l-3 2.92.71 4.13L8 10.25l-3.71 1.95.71-4.13-3-2.92 4.15-.63L8 1z" />
    </svg>
  </span>
)

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-wrapper">

        <span className="not-found-brand" aria-hidden="true">Médano</span>

        <h1 className="not-found-code">404</h1>

        <div className="not-found-card" role="article" aria-label="Reseña de página no encontrada">
          <div className="nf-card-header">
            <div className="nf-avatar" aria-hidden="true">GC</div>
            <div>
              <p className="nf-reviewer-name">Google Crawler</p>
              <p className="nf-reviewer-meta">Reseñó hace unos segundos · 1 reseña</p>
            </div>
          </div>

          <div className="nf-stars" aria-label="1 de 5 estrellas">
            <StarFilled />
            <StarEmpty />
            <StarEmpty />
            <StarEmpty />
            <StarEmpty />
          </div>

          <span className="nf-tag">Página no encontrada</span>

          <p className="nf-review-title">&quot;Esta URL no existe. Muy mala experiencia.&quot;</p>

          <p className="nf-review-body">
            Vine buscando contenido y me encontré con la nada.{' '}
            <strong>No recomiendo esta dirección.</strong> El resto del sitio está
            10 puntos, pero esta página en particular deja mucho que desear.
            Esperemos que el equipo lo resuelva pronto.
          </p>

          <div className="nf-divider" aria-hidden="true" />

          <div className="nf-card-footer">
            <span className="nf-helpful-label">¿Te fue útil esta reseña?</span>
            <button className="nf-helpful-btn" aria-label="No fue útil">
              👍 No
            </button>
          </div>
        </div>

        <div className="nf-cta">
          <p className="nf-cta-hint">Mientras tanto, te llevamos a donde sí hay contenido.</p>
          <Link href="/" className="nf-btn-home">
            Volver al inicio
            <span className="nf-btn-arrow" aria-hidden="true">→</span>
          </Link>
        </div>

      </div>
    </main>
  )
}
