export type Vertical = {
  slug: string
  label: string
  labelPlural: string
  avgReviews: number
  avgRating: number
  context: string
  plataformasRelevantes?: string[]
}

export const verticales: Vertical[] = [
  {
    slug: "restaurantes",
    label: "Restaurante",
    labelPlural: "Restaurantes",
    avgReviews: 85,
    avgRating: 4.2,
    context: "En el rubro gastronómico, las reseñas son el factor #1 de decisión de compra."
  },
  {
    slug: "clinicas",
    label: "Clínica",
    labelPlural: "Clínicas",
    avgReviews: 42,
    avgRating: 4.1,
    context: "Los pacientes consultan reseñas antes de elegir cualquier prestador de salud."
  },
  {
    slug: "hoteles",
    label: "Hotel",
    labelPlural: "Hoteles",
    avgReviews: 130,
    avgRating: 4.3,
    context: "El 93% de los viajeros revisa reseñas antes de reservar un alojamiento."
  },
  {
    slug: "gimnasios",
    label: "Gimnasio",
    labelPlural: "Gimnasios",
    avgReviews: 38,
    avgRating: 4.0,
    context: "Las reseñas positivas son el principal canal de captación de nuevos socios."
  },
  {
    slug: "inmobiliarias",
    label: "Inmobiliaria",
    labelPlural: "Inmobiliarias",
    avgReviews: 25,
    avgRating: 4.1,
    context: "La reputación online es decisiva en un rubro donde la confianza lo es todo."
  },
  {
    slug: "veterinarias",
    label: "Veterinaria",
    labelPlural: "Veterinarias",
    avgReviews: 55,
    avgRating: 4.4,
    context: "Los dueños de mascotas eligen veterinarias casi exclusivamente por recomendaciones online."
  },
  {
    slug: "hospitales",
    label: "Hospital",
    labelPlural: "Hospitales",
    avgReviews: 95,
    avgRating: 3.9,
    context: "La reputación digital impacta directamente en la elección de centro médico.",
    plataformasRelevantes: ["google-maps", "google-mi-negocio"]
  },
  {
    slug: "farmacias",
    label: "Farmacia",
    labelPlural: "Farmacias",
    avgReviews: 30,
    avgRating: 4.2,
    context: "Las farmacias con más reseñas positivas capturan más búsquedas locales.",
    plataformasRelevantes: ["google-maps", "google-mi-negocio"]
  },
  {
    slug: "supermercados",
    label: "Supermercado",
    labelPlural: "Supermercados",
    avgReviews: 120,
    avgRating: 3.8,
    context: "Un rating alto en Google Maps posiciona mejor en búsquedas de proximidad.",
    plataformasRelevantes: ["google-maps", "google-mi-negocio"]
  },
]
