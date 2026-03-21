export interface PostFrontmatter {
  title: string
  slug: string
  description: string
  publishedAt: string      // ISO 8601: "2024-05-14"
  updatedAt?: string
  category: string         // "reseñas" | "google" | "estrategia" | "herramientas"
  tags: string[]
  readingTime?: number     // minutos — calculado automáticamente
  relatedSlug?: string     // slug del post relacionado sugerido
  calculadoraVertical?: string  // si corresponde: "restaurantes" | "hoteles" | etc.
  heroImage?: string
}

export interface Post extends PostFrontmatter {
  content: string
  readingTimeText: string
}
