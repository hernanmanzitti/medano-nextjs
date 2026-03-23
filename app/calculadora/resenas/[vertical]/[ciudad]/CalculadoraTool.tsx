"use client"

import { useState } from "react"
import { calcularReviews } from "@/lib/calculadora"
import type { CalculadoraResult } from "@/lib/calculadora"

type Props = {
  defaultReviews: number
  defaultRating: number
}

export function CalculadoraTool({ defaultReviews, defaultRating }: Props) {
  const [reviewsActuales, setReviewsActuales] = useState(String(defaultReviews))
  const [ratingActual, setRatingActual] = useState(String(defaultRating))
  const [ratingObjetivo, setRatingObjetivo] = useState(
    String(Math.min(Math.round((defaultRating + 0.3) * 10) / 10, 4.9))
  )
  const [resultado, setResultado] = useState<CalculadoraResult | null>(null)

  const parseRating = (val: string): number =>
    parseFloat(val.replace(',', '.')) || 0

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const reviews = parseFloat(reviewsActuales) || 0
    const rActual = parseRating(ratingActual)
    const rObj = parseRating(ratingObjetivo)
    const result = calcularReviews({ reviewsActuales: reviews, ratingActual: rActual, ratingObjetivo: rObj })
    setResultado(result)
  }

  return (
    <form className="calc-form" onSubmit={handleSubmit} noValidate>
      <div className="calc-form-fields">
        <div className="calc-field">
          <label htmlFor="calc-reviews" className="calc-label">
            Reseñas actuales
          </label>
          <input
            id="calc-reviews"
            type="number"
            className="calc-input"
            min={0}
            value={reviewsActuales}
            onChange={(e) => setReviewsActuales(e.target.value)}
            onFocus={(e) => e.target.select()}
          />
        </div>

        <div className="calc-field">
          <label htmlFor="calc-rating" className="calc-label">
            Rating actual
          </label>
          <input
            id="calc-rating"
            type="number"
            className="calc-input"
            min={1}
            max={4.9}
            step={0.1}
            value={ratingActual}
            onChange={(e) => setRatingActual(e.target.value)}
            onFocus={(e) => e.target.select()}
          />
        </div>

        <div className="calc-field">
          <label htmlFor="calc-objetivo" className="calc-label">
            Rating objetivo
          </label>
          <input
            id="calc-objetivo"
            type="number"
            className="calc-input"
            min={Math.round((parseRating(ratingActual) + 0.1) * 10) / 10}
            max={4.9}
            step={0.1}
            value={ratingObjetivo}
            onChange={(e) => setRatingObjetivo(e.target.value)}
            onFocus={(e) => e.target.select()}
          />
        </div>
      </div>

      <button type="submit" className="calc-btn">
        Calcular
      </button>

      <div aria-live="polite" className="calc-result-region">
        {resultado && (
          resultado.posible ? (
            <div className="calc-result">
              <p className="calc-result-number">
                {resultado.reviewsNecesarias === 0
                  ? "Ya cumplís tu objetivo"
                  : resultado.reviewsNecesarias}
              </p>
              {resultado.reviewsNecesarias > 0 && (
                <>
                  <p className="calc-result-label">
                    reseñas de 5 estrellas necesarias
                  </p>
                  <p className="calc-result-detail">
                    Rating final estimado: <strong>{resultado.ratingFinal}</strong>
                  </p>
                  <p className="calc-result-note">
                    Asumiendo que todas las nuevas reseñas son de 5 estrellas.
                  </p>
                </>
              )}
            </div>
          ) : (
            <div className="calc-result calc-result-error">
              <p className="calc-result-number">No es posible</p>
              <p className="calc-result-label">
                Un rating de 5.0 es matemáticamente inalcanzable. Intentá con un objetivo menor.
              </p>
            </div>
          )
        )}
      </div>
    </form>
  )
}
