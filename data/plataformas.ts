export type Plataforma = {
  slug: string
  label: string
  descripcion: string
  tips: string[]
  relevantePara: string[]
}

export const plataformas: Plataforma[] = [
  {
    slug: "google-maps",
    label: "Google Maps",
    descripcion: "Google Maps es la plataforma de reseñas más importante para negocios locales. Las reseñas impactan directamente en tu posición en el Local Pack de búsqueda.",
    tips: [
      "Respondé todas las reseñas, positivas y negativas, dentro de las 24 horas.",
      "Compartí el link directo a tu perfil de Google Maps por WhatsApp post-visita.",
      "Agregá una placa con QR en mostrador que lleve directo a dejar reseña.",
      "Usá DataTrackers para automatizar el pedido de reseña por email o SMS."
    ],
    relevantePara: ["restaurantes", "clinicas", "hoteles", "gimnasios", "inmobiliarias", "veterinarias", "hospitales", "farmacias", "supermercados"]
  },
  {
    slug: "google-mi-negocio",
    label: "Google Mi Negocio",
    descripcion: "Google Business Profile controla cómo aparece tu negocio en Google Search y Maps. Optimizarlo es el paso cero del SEO local.",
    tips: [
      "Completá el 100% de tu perfil: horarios, fotos, categoría principal y secundaria.",
      "Publicá actualizaciones semanales desde el panel de Google Business.",
      "Activá el chat de Google Business para responder consultas en tiempo real.",
      "Usá las palabras clave de tu vertical en la descripción del negocio."
    ],
    relevantePara: ["restaurantes", "clinicas", "hoteles", "gimnasios", "inmobiliarias", "veterinarias", "hospitales", "farmacias", "supermercados"]
  },
  {
    slug: "tripadvisor",
    label: "TripAdvisor",
    descripcion: "TripAdvisor es la plataforma líder para turismo y gastronomía. Un ranking alto genera tráfico orgánico de alta intención de compra.",
    tips: [
      "Respondé cada reseña con el nombre del cliente y detalles específicos de su visita.",
      "Pedí reseñas en el momento de mayor satisfacción: al finalizar la comida o el check-out.",
      "Subí fotos profesionales del local: los negocios con más fotos reciben más reseñas.",
      "Activá el widget de TripAdvisor en tu sitio web para facilitar el acceso."
    ],
    relevantePara: ["restaurantes", "hoteles"]
  },
  {
    slug: "uber-eats",
    label: "Uber Eats",
    descripcion: "En Uber Eats, el rating determina tu posición en los listados. Un restaurante con 4.5+ estrellas recibe hasta 3x más pedidos que uno con 3.8.",
    tips: [
      "Respondé los comentarios negativos dentro de la plataforma para mostrar compromiso.",
      "Incluí una tarjeta en cada pedido pidiendo una reseña con link QR.",
      "Mantené tiempos de entrega precisos: el 60% de las reseñas negativas mencionan demoras.",
      "Usá fotos profesionales de tus productos más vendidos para mejorar conversión."
    ],
    relevantePara: ["restaurantes"]
  },
]
