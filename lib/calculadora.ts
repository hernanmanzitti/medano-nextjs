export type CalculadoraInput = {
  reviewsActuales: number
  ratingActual: number
  ratingObjetivo: number
}

export type CalculadoraResult = {
  reviewsNecesarias: number
  sumaActual: number
  ratingFinal: number
  posible: boolean
}

export function calcularReviews(input: CalculadoraInput): CalculadoraResult {
  const { reviewsActuales, ratingActual, ratingObjetivo } = input

  if (ratingObjetivo >= 5) {
    return { reviewsNecesarias: 0, sumaActual: 0, ratingFinal: ratingActual, posible: false }
  }

  if (ratingObjetivo <= ratingActual) {
    return {
      reviewsNecesarias: 0,
      sumaActual: reviewsActuales * ratingActual,
      ratingFinal: ratingActual,
      posible: true
    }
  }

  const sumaActual = reviewsActuales * ratingActual
  const reviewsNecesarias = Math.ceil(
    (ratingObjetivo * reviewsActuales - sumaActual) / (5 - ratingObjetivo)
  )

  const ratingFinal =
    (sumaActual + 5 * reviewsNecesarias) / (reviewsActuales + reviewsNecesarias)

  return {
    reviewsNecesarias,
    sumaActual,
    ratingFinal: Math.round(ratingFinal * 100) / 100,
    posible: true,
  }
}
