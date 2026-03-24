export type Vertical = {
  slug: string
  label: string
  labelPlural: string
  avgReviews: number
  avgRating: number
  context: string
  plataformasRelevantes?: string[]
  descripcion?: string
  beneficiosClave?: string[]
  faqItems?: { pregunta: string; respuesta: string }[]
}

export const verticales: Vertical[] = [
  {
    slug: "restaurantes",
    label: "Restaurante",
    labelPlural: "Restaurantes",
    avgReviews: 85,
    avgRating: 4.2,
    context: "En el rubro gastronómico, las reseñas son el factor #1 de decisión de compra.",
    descripcion: "En gastronomía, el 94% de los comensales revisa reseñas antes de elegir dónde comer. Un punto más de rating puede significar hasta un 9% más de ingresos por sucursal.",
    beneficiosClave: [
      "Más visibilidad en Google Maps y búsquedas locales",
      "Mayor conversión de búsqueda a reserva",
      "Detección temprana de problemas de servicio por sucursal",
      "Respuestas profesionales que construyen reputación de marca",
    ],
    faqItems: [
      { pregunta: "¿Cuántas reseñas necesita un restaurante para rankear en Google Maps?", respuesta: "Un restaurante necesita al menos 50 reseñas con un promedio de 4.2 o más para aparecer de forma consistente en el top 3 del pack local de Google." },
      { pregunta: "¿Cómo pido reseñas a mis clientes sin violar las políticas de Google?", respuesta: "Podés invitar a tus clientes a dejar una reseña via QR, WhatsApp o email post-visita, siempre que no condiciones la solicitud a una calificación positiva. Eso se llama 'review gating' y está prohibido por Google." },
      { pregunta: "¿Qué hago con una reseña negativa en mi restaurante?", respuesta: "Respondé siempre, en menos de 24 horas, de forma empática y sin confrontar. Una respuesta profesional a una reseña negativa genera más confianza que diez reseñas positivas sin respuesta." },
    ]
  },
  {
    slug: "clinicas",
    label: "Clínica",
    labelPlural: "Clínicas",
    avgReviews: 42,
    avgRating: 4.1,
    context: "Los pacientes consultan reseñas antes de elegir cualquier prestador de salud.",
    descripcion: "El 72% de los pacientes busca información online antes de elegir un médico o centro de salud. En salud, la reputación digital es el primer filtro de confianza.",
    beneficiosClave: [
      "Mayor captación de nuevos pacientes vía búsquedas locales",
      "Sistema de alerta ante reseñas críticas antes de que se viralicen",
      "Protocolo de respuesta empática adaptado al sector salud",
      "Comparativa de reputación entre sucursales en tiempo real",
    ],
    faqItems: [
      { pregunta: "¿Es legal pedir reseñas a pacientes en una clínica?", respuesta: "Sí, podés invitar a tus pacientes a compartir su experiencia en Google, siempre respetando la privacidad y sin revelar datos de salud. La solicitud debe ser voluntaria y no condicionar la atención." },
      { pregunta: "¿Cómo gestiono reseñas negativas sobre un médico específico?", respuesta: "La clave es responder institucionalmente, reconociendo la experiencia del paciente sin entrar en detalles clínicos. Escalá internamente el caso antes de responder en público." },
      { pregunta: "¿Con qué frecuencia debo monitorear las reseñas de mi clínica?", respuesta: "En salud recomendamos monitoreo en tiempo real con alertas inmediatas. Una reseña crítica sin respuesta por más de 24 horas puede generar un efecto cascada en pacientes que la ven." },
    ]
  },
  {
    slug: "hoteles",
    label: "Hotel",
    labelPlural: "Hoteles",
    avgReviews: 130,
    avgRating: 4.3,
    context: "El 93% de los viajeros revisa reseñas antes de reservar un alojamiento.",
    descripcion: "El 93% de los viajeros revisa reseñas antes de reservar. En hotelería, cada décima de estrella en TripAdvisor o Booking.com impacta directamente en la tasa de ocupación.",
    beneficiosClave: [
      "Mejor posicionamiento en TripAdvisor, Booking y Google Hotels",
      "Aumento de reservas directas reduciendo comisiones de OTAs",
      "Respuestas en múltiples idiomas para huéspedes internacionales",
      "Análisis comparativo por propiedad para cadenas hoteleras",
    ],
    faqItems: [
      { pregunta: "¿Cómo genero más reseñas en TripAdvisor para mi hotel?", respuesta: "El momento más efectivo es el post-checkout: un email o WhatsApp a las 2-4 horas de la salida del huésped tiene una tasa de conversión 3x mayor que la solicitud en el momento del check-out." },
      { pregunta: "¿Qué peso tienen las reseñas en el algoritmo de Booking.com?", respuesta: "Booking.com usa el Genius Score, que pondera volumen, recencia y calificación promedio. Hoteles con más de 50 reseñas recientes y promedio superior a 8.0 reciben mayor visibilidad en los resultados." },
      { pregunta: "¿Vale la pena responder reseñas positivas en mi hotel?", respuesta: "Sí. Responder reseñas positivas aumenta el engagement y la percepción de hospitalidad. Además, TripAdvisor premia a los establecimientos con alta tasa de respuesta con el Management Response Badge." },
    ]
  },
  {
    slug: "gimnasios",
    label: "Gimnasio",
    labelPlural: "Gimnasios",
    avgReviews: 38,
    avgRating: 4.0,
    context: "Las reseñas positivas son el principal canal de captación de nuevos socios.",
    descripcion: "El 68% de las personas que buscan un gimnasio nuevo lo hacen en Google Maps. Las reseñas son el principal diferenciador en un mercado con alta competencia local.",
    beneficiosClave: [
      "Mayor visibilidad en búsquedas 'gimnasio cerca de mí'",
      "Captación de nuevos socios con menor inversión en publicidad",
      "Detección de puntos de fuga (horarios, instructores, equipamiento)",
      "Comparativa de reputación entre sedes de la misma cadena",
    ],
    faqItems: [
      { pregunta: "¿Cuándo es el mejor momento para pedir una reseña a un socio del gimnasio?", respuesta: "Los primeros 30 días de membresía son el momento de mayor entusiasmo. Automatizar la solicitud al día 7 o 14 genera tasas de respuesta de hasta el 25%." },
      { pregunta: "¿Cómo manejan los grandes gimnasios las reseñas negativas sobre instructores?", respuesta: "La práctica recomendada es reconocer la experiencia, disculparse si corresponde, y derivar la situación a un canal privado. Nunca debatir en público ni identificar al instructor en la respuesta." },
      { pregunta: "¿Las reseñas afectan mi ranking en búsquedas de Google Maps?", respuesta: "Sí. El algoritmo de Google Maps pondera cantidad de reseñas, rating promedio, recencia y tasa de respuesta del propietario. Un gimnasio con 100 reseñas y 4.3 estrellas supera a uno con 20 y 4.8 en visibilidad." },
    ]
  },
  {
    slug: "inmobiliarias",
    label: "Inmobiliaria",
    labelPlural: "Inmobiliarias",
    avgReviews: 25,
    avgRating: 4.1,
    context: "La reputación online es decisiva en un rubro donde la confianza lo es todo.",
    descripcion: "El 87% de los compradores y locatarios busca referencias online antes de contactar a una inmobiliaria. En un rubro donde la confianza lo es todo, la reputación digital define el primer contacto.",
    beneficiosClave: [
      "Diferenciación en un mercado donde todas las agencias parecen iguales",
      "Mayor conversión de visitas web a consultas",
      "Gestión de expectativas: reseñas que explican el proceso de compra/alquiler",
      "Reputación unificada para agencias con múltiples oficinas",
    ],
    faqItems: [
      { pregunta: "¿Cuándo pido reseña a un cliente en una inmobiliaria?", respuesta: "El momento ideal es al cierre de la operación, cuando la satisfacción está en su punto máximo. Un seguimiento a los 30 días también funciona bien para operaciones de alquiler donde el cliente ya está instalado." },
      { pregunta: "¿Cómo gestiono reseñas negativas sobre operaciones que no se cerraron?", respuesta: "Respondé con empatía, agradecé el feedback y explicá brevemente el proceso sin entrar en detalles de la negociación. Nunca respondas emocionalmente ni justifiques decisiones comerciales en público." },
      { pregunta: "¿Las reseñas de Google impactan en los portales inmobiliarios?", respuesta: "No directamente, pero impactan en las búsquedas de marca: cuando alguien busca 'Inmobiliaria X opiniones', las reseñas de Google son lo primero que ve. Un buen perfil de Google My Business es complementario a los portales." },
    ]
  },
  {
    slug: "veterinarias",
    label: "Veterinaria",
    labelPlural: "Veterinarias",
    avgReviews: 55,
    avgRating: 4.4,
    context: "Los dueños de mascotas eligen veterinarias casi exclusivamente por recomendaciones online.",
    descripcion: "Los dueños de mascotas eligen veterinaria casi exclusivamente por recomendaciones: el 89% consulta reseñas antes de la primera visita. Es uno de los rubros con mayor lealtad post-primera-experiencia.",
    beneficiosClave: [
      "Alta tasa de conversión: quien elige por reseñas tiende a quedarse",
      "Comunidad online activa que amplifica el boca a boca digital",
      "Diferenciación por especialidades (exóticos, cirugía, urgencias)",
      "Gestión empática de situaciones sensibles (pérdida de mascotas)",
    ],
    faqItems: [
      { pregunta: "¿Cómo pido reseñas en una veterinaria sin que se sienta forzado?", respuesta: "El contexto ideal es post-consulta exitosa: un mensaje de WhatsApp preguntando cómo sigue la mascota, y al final una invitación natural a compartir la experiencia. La autenticidad es clave en este rubro." },
      { pregunta: "¿Cómo respondo una reseña negativa sobre la muerte de una mascota?", respuesta: "Con máxima empatía y sin defensas técnicas. Reconocé el dolor del cliente, agradecé la confianza depositada en la clínica, y ofrece una conversación privada. Nunca entres en detalles clínicos en la respuesta pública." },
      { pregunta: "¿Vale la pena tener reseñas en plataformas además de Google?", respuesta: "En veterinaria, Google Maps es el canal dominante. Facebook sigue siendo relevante en comunidades locales. TripAdvisor no aplica. Recomendamos concentrar los esfuerzos en Google y tener un perfil activo en Facebook." },
    ]
  },
  {
    slug: "hospitales",
    label: "Hospital",
    labelPlural: "Hospitales",
    avgReviews: 95,
    avgRating: 3.9,
    context: "La reputación digital impacta directamente en la elección de centro médico.",
    plataformasRelevantes: ["google-maps", "google-mi-negocio"],
    descripcion: "La reputación digital de un hospital impacta directamente en la derivación de pacientes y en la percepción institucional. El 76% de los pacientes consulta reseñas antes de elegir dónde atenderse.",
    beneficiosClave: [
      "Mejor posicionamiento en búsquedas de alta intención ('mejor hospital para...')",
      "Monitoreo centralizado de reseñas por guardia, especialidad y sede",
      "Protocolo institucional de respuesta alineado con comunicación médica",
      "Alertas en tiempo real para gestión de crisis de reputación",
    ],
    faqItems: [
      { pregunta: "¿Cómo gestiona un hospital sus reseñas sin violar la privacidad del paciente?", respuesta: "Respondiendo siempre en términos generales, sin confirmar ni negar tratamientos ni condiciones médicas. La respuesta debe ser empática e institucional, derivando a canales privados para resolver casos específicos." },
      { pregunta: "¿Qué hace un hospital cuando recibe una reseña que menciona un error médico?", respuesta: "El protocolo recomendado es no responder con defensas técnicas en público, derivar inmediatamente al área de atención al paciente, y publicar una respuesta empática que demuestre que el caso fue tomado en serio." },
      { pregunta: "¿Con qué frecuencia debe auditarse la reputación digital de un hospital?", respuesta: "Recomendamos monitoreo en tiempo real con alertas por guardia y especialidad, y auditorías mensuales de reputación por área. En hospitales con múltiples sedes, la comparativa entre unidades es clave para la gestión directiva." },
    ]
  },
  {
    slug: "farmacias",
    label: "Farmacia",
    labelPlural: "Farmacias",
    avgReviews: 30,
    avgRating: 4.2,
    context: "Las farmacias con más reseñas positivas capturan más búsquedas locales.",
    plataformasRelevantes: ["google-maps", "google-mi-negocio"],
    descripcion: "Las farmacias compiten principalmente por conveniencia y confianza. Las reseñas en Google Maps son el factor decisivo para capturar búsquedas de proximidad como 'farmacia cerca de mí'.",
    beneficiosClave: [
      "Mayor captación en búsquedas de proximidad en Google Maps",
      "Diferenciación por atención y disponibilidad de stock",
      "Gestión de reseñas para cadenas con decenas de sucursales",
      "Alertas ante menciones de problemas de stock o atención",
    ],
    faqItems: [
      { pregunta: "¿Cómo genero más reseñas en una farmacia de alto tráfico?", respuesta: "El QR en el mostrador al momento del pago es el método más efectivo para farmacias. Con un cartel que diga 'Tu opinión nos ayuda a mejorar' se logran tasas de participación del 8-12% en hora pico." },
      { pregunta: "¿Qué importancia tienen las reseñas para una cadena de farmacias?", respuesta: "En cadenas, el promedio consolidado afecta la percepción de marca, pero el ranking en Google Maps es por sucursal. Una farmacia con 4.5 estrellas y 80 reseñas supera a otra con 4.8 y 10 reseñas en visibilidad local." },
      { pregunta: "¿Cómo manejo reseñas sobre problemas de stock o precios en mi farmacia?", respuesta: "Respondé reconociendo el inconveniente, explicá brevemente la situación si es sistémica (ej: desabastecimiento de mercado), y ofrece alternativas. Evitá justificar precios en respuestas públicas." },
    ]
  },
  {
    slug: "supermercados",
    label: "Supermercado",
    labelPlural: "Supermercados",
    avgReviews: 120,
    avgRating: 3.8,
    context: "Un rating alto en Google Maps posiciona mejor en búsquedas de proximidad.",
    plataformasRelevantes: ["google-maps", "google-mi-negocio"],
    descripcion: "En supermercados, el rating en Google Maps es el primer filtro para capturar clientes nuevos que se mudan o buscan opciones cercanas. La reputación online impacta directamente en el tráfico de sucursal.",
    beneficiosClave: [
      "Mayor visibilidad en búsquedas de proximidad",
      "Detección de problemas operativos por sucursal (limpieza, colas, stock)",
      "Benchmarking de reputación entre sucursales de la cadena",
      "Respuesta institucional a quejas que demuestra gestión activa",
    ],
    faqItems: [
      { pregunta: "¿Cómo genera reseñas un supermercado sin molestar a sus clientes?", respuesta: "Los tickets de compra con QR y los programas de fidelidad son los canales más efectivos. Un supermercado con app propia puede incluir la invitación a reseñar como parte del flujo post-compra." },
      { pregunta: "¿Qué tipo de quejas son más comunes en reseñas de supermercados?", respuesta: "En orden de frecuencia: tiempos de espera en cajas, disponibilidad de productos, limpieza e higiene, y actitud del personal. Monitorear estas categorías permite detectar problemas operativos antes de que escalen." },
      { pregunta: "¿Vale la pena responder todas las reseñas de un supermercado de alto volumen?", respuesta: "Sí, pero con plantillas personalizables por categoría de comentario. Un supermercado con 500 reseñas no puede responder cada una manualmente — DataTrackers permite automatizar respuestas con variables dinámicas." },
    ]
  },
]
