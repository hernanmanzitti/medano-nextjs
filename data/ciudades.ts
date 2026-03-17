export type Ciudad = {
  slug: string
  label: string
  provincia: string
  pais: "argentina" | "costa-rica" | "panama"
  paisLabel: string
  tipo: "comercial" | "turistica"
  verticalesTouristicos?: string[]
}

export const ciudades: Ciudad[] = [
  // ── ARGENTINA ──────────────────────────────────────────────

  // Ciudades comerciales (todos los verticales)
  { slug: "buenos-aires",           label: "Buenos Aires",            provincia: "Buenos Aires",         pais: "argentina",   paisLabel: "Argentina", tipo: "comercial" },
  { slug: "cordoba-capital",        label: "Córdoba",                  provincia: "Córdoba",              pais: "argentina",   paisLabel: "Argentina", tipo: "comercial" },
  { slug: "rosario",                label: "Rosario",                  provincia: "Santa Fe",             pais: "argentina",   paisLabel: "Argentina", tipo: "comercial" },
  { slug: "mendoza",                label: "Mendoza",                  provincia: "Mendoza",              pais: "argentina",   paisLabel: "Argentina", tipo: "comercial" },
  { slug: "san-miguel-de-tucuman",  label: "San Miguel de Tucumán",    provincia: "Tucumán",              pais: "argentina",   paisLabel: "Argentina", tipo: "comercial" },
  { slug: "mar-del-plata",          label: "Mar del Plata",            provincia: "Buenos Aires",         pais: "argentina",   paisLabel: "Argentina", tipo: "comercial" },
  { slug: "salta-capital",          label: "Salta",                    provincia: "Salta",                pais: "argentina",   paisLabel: "Argentina", tipo: "comercial" },
  { slug: "la-plata",               label: "La Plata",                 provincia: "Buenos Aires",         pais: "argentina",   paisLabel: "Argentina", tipo: "comercial" },
  { slug: "neuquen",                label: "Neuquén",                  provincia: "Neuquén",              pais: "argentina",   paisLabel: "Argentina", tipo: "comercial" },
  { slug: "posadas",                label: "Posadas",                  provincia: "Misiones",             pais: "argentina",   paisLabel: "Argentina", tipo: "comercial" },
  { slug: "santa-fe",               label: "Santa Fe",                 provincia: "Santa Fe",             pais: "argentina",   paisLabel: "Argentina", tipo: "comercial" },
  { slug: "parana",                 label: "Paraná",                   provincia: "Entre Ríos",           pais: "argentina",   paisLabel: "Argentina", tipo: "comercial" },
  { slug: "corrientes",             label: "Corrientes",               provincia: "Corrientes",           pais: "argentina",   paisLabel: "Argentina", tipo: "comercial" },
  { slug: "san-juan",               label: "San Juan",                 provincia: "San Juan",             pais: "argentina",   paisLabel: "Argentina", tipo: "comercial" },
  { slug: "la-rioja",               label: "La Rioja",                 provincia: "La Rioja",             pais: "argentina",   paisLabel: "Argentina", tipo: "comercial" },
  { slug: "san-luis",               label: "San Luis",                 provincia: "San Luis",             pais: "argentina",   paisLabel: "Argentina", tipo: "comercial" },
  { slug: "comodoro-rivadavia",     label: "Comodoro Rivadavia",       provincia: "Chubut",               pais: "argentina",   paisLabel: "Argentina", tipo: "comercial" },
  { slug: "rio-gallegos",           label: "Río Gallegos",             provincia: "Santa Cruz",           pais: "argentina",   paisLabel: "Argentina", tipo: "comercial" },
  { slug: "viedma",                 label: "Viedma",                   provincia: "Río Negro",            pais: "argentina",   paisLabel: "Argentina", tipo: "comercial" },
  { slug: "formosa",                label: "Formosa",                  provincia: "Formosa",              pais: "argentina",   paisLabel: "Argentina", tipo: "comercial" },
  { slug: "resistencia",            label: "Resistencia",              provincia: "Chaco",                pais: "argentina",   paisLabel: "Argentina", tipo: "comercial" },
  { slug: "santa-rosa",             label: "Santa Rosa",               provincia: "La Pampa",             pais: "argentina",   paisLabel: "Argentina", tipo: "comercial" },
  { slug: "catamarca",              label: "Catamarca",                provincia: "Catamarca",            pais: "argentina",   paisLabel: "Argentina", tipo: "comercial" },
  { slug: "trelew",                 label: "Trelew",                   provincia: "Chubut",               pais: "argentina",   paisLabel: "Argentina", tipo: "comercial" },
  { slug: "san-salvador-de-jujuy",  label: "San Salvador de Jujuy",    provincia: "Jujuy",                pais: "argentina",   paisLabel: "Argentina", tipo: "comercial" },
  { slug: "tandil",                 label: "Tandil",                   provincia: "Buenos Aires",         pais: "argentina",   paisLabel: "Argentina", tipo: "comercial" },
  { slug: "necochea",               label: "Necochea",                 provincia: "Buenos Aires",         pais: "argentina",   paisLabel: "Argentina", tipo: "comercial" },
  { slug: "gualeguaychu",           label: "Gualeguaychú",             provincia: "Entre Ríos",           pais: "argentina",   paisLabel: "Argentina", tipo: "comercial" },

  // Ciudades turísticas (solo hoteles + restaurantes)
  { slug: "bariloche",              label: "San Carlos de Bariloche",  provincia: "Río Negro",            pais: "argentina",   paisLabel: "Argentina", tipo: "turistica", verticalesTouristicos: ["hoteles", "restaurantes"] },
  { slug: "ushuaia",                label: "Ushuaia",                  provincia: "Tierra del Fuego",     pais: "argentina",   paisLabel: "Argentina", tipo: "turistica", verticalesTouristicos: ["hoteles", "restaurantes"] },
  { slug: "puerto-iguazu",          label: "Puerto Iguazú",            provincia: "Misiones",             pais: "argentina",   paisLabel: "Argentina", tipo: "turistica", verticalesTouristicos: ["hoteles", "restaurantes"] },
  { slug: "el-calafate",            label: "El Calafate",              provincia: "Santa Cruz",           pais: "argentina",   paisLabel: "Argentina", tipo: "turistica", verticalesTouristicos: ["hoteles", "restaurantes"] },
  { slug: "pinamar",                label: "Pinamar",                  provincia: "Buenos Aires",         pais: "argentina",   paisLabel: "Argentina", tipo: "turistica", verticalesTouristicos: ["hoteles", "restaurantes"] },
  { slug: "villa-gesell",           label: "Villa Gesell",             provincia: "Buenos Aires",         pais: "argentina",   paisLabel: "Argentina", tipo: "turistica", verticalesTouristicos: ["hoteles", "restaurantes"] },
  { slug: "san-martin-de-los-andes",label: "San Martín de los Andes",  provincia: "Neuquén",              pais: "argentina",   paisLabel: "Argentina", tipo: "turistica", verticalesTouristicos: ["hoteles", "restaurantes"] },
  { slug: "villa-carlos-paz",       label: "Villa Carlos Paz",         provincia: "Córdoba",              pais: "argentina",   paisLabel: "Argentina", tipo: "turistica", verticalesTouristicos: ["hoteles", "restaurantes"] },
  { slug: "puerto-madryn",          label: "Puerto Madryn",            provincia: "Chubut",               pais: "argentina",   paisLabel: "Argentina", tipo: "turistica", verticalesTouristicos: ["hoteles", "restaurantes"] },
  { slug: "el-chalten",             label: "El Chaltén",               provincia: "Santa Cruz",           pais: "argentina",   paisLabel: "Argentina", tipo: "turistica", verticalesTouristicos: ["hoteles", "restaurantes"] },
  { slug: "merlo-san-luis",         label: "Merlo",                    provincia: "San Luis",             pais: "argentina",   paisLabel: "Argentina", tipo: "turistica", verticalesTouristicos: ["hoteles", "restaurantes"] },
  { slug: "san-rafael",             label: "San Rafael",               provincia: "Mendoza",              pais: "argentina",   paisLabel: "Argentina", tipo: "turistica", verticalesTouristicos: ["hoteles", "restaurantes"] },
  { slug: "cafayate",               label: "Cafayate",                 provincia: "Salta",                pais: "argentina",   paisLabel: "Argentina", tipo: "turistica", verticalesTouristicos: ["hoteles", "restaurantes"] },
  { slug: "purmamarca",             label: "Purmamarca",               provincia: "Jujuy",                pais: "argentina",   paisLabel: "Argentina", tipo: "turistica", verticalesTouristicos: ["hoteles", "restaurantes"] },
  { slug: "tilcara",                label: "Tilcara",                  provincia: "Jujuy",                pais: "argentina",   paisLabel: "Argentina", tipo: "turistica", verticalesTouristicos: ["hoteles", "restaurantes"] },
  { slug: "villa-la-angostura",     label: "Villa La Angostura",       provincia: "Neuquén",              pais: "argentina",   paisLabel: "Argentina", tipo: "turistica", verticalesTouristicos: ["hoteles", "restaurantes"] },
  { slug: "las-grutas",             label: "Las Grutas",               provincia: "Río Negro",            pais: "argentina",   paisLabel: "Argentina", tipo: "turistica", verticalesTouristicos: ["hoteles", "restaurantes"] },
  { slug: "miramar",                label: "Miramar",                  provincia: "Buenos Aires",         pais: "argentina",   paisLabel: "Argentina", tipo: "turistica", verticalesTouristicos: ["hoteles", "restaurantes"] },
  { slug: "mina-clavero",           label: "Mina Clavero",             provincia: "Córdoba",              pais: "argentina",   paisLabel: "Argentina", tipo: "turistica", verticalesTouristicos: ["hoteles", "restaurantes"] },
  { slug: "la-cumbrecita",          label: "La Cumbrecita",            provincia: "Córdoba",              pais: "argentina",   paisLabel: "Argentina", tipo: "turistica", verticalesTouristicos: ["hoteles", "restaurantes"] },
  { slug: "carilo",                 label: "Cariló",                   provincia: "Buenos Aires",         pais: "argentina",   paisLabel: "Argentina", tipo: "turistica", verticalesTouristicos: ["hoteles", "restaurantes"] },
  { slug: "esquel",                 label: "Esquel",                   provincia: "Chubut",               pais: "argentina",   paisLabel: "Argentina", tipo: "turistica", verticalesTouristicos: ["hoteles", "restaurantes"] },

  // ── COSTA RICA ─────────────────────────────────────────────

  // San José: ciudad comercial (todos los verticales)
  { slug: "san-jose-cr",            label: "San José",                 provincia: "San José",             pais: "costa-rica",  paisLabel: "Costa Rica", tipo: "comercial" },
  { slug: "liberia-cr",             label: "Liberia",                  provincia: "Guanacaste",           pais: "costa-rica",  paisLabel: "Costa Rica", tipo: "comercial" },

  // Destinos turísticos CR (solo hoteles + restaurantes)
  { slug: "la-fortuna-arenal",      label: "La Fortuna (Arenal)",      provincia: "Alajuela",             pais: "costa-rica",  paisLabel: "Costa Rica", tipo: "turistica", verticalesTouristicos: ["hoteles", "restaurantes"] },
  { slug: "tamarindo",              label: "Tamarindo",                provincia: "Guanacaste",           pais: "costa-rica",  paisLabel: "Costa Rica", tipo: "turistica", verticalesTouristicos: ["hoteles", "restaurantes"] },
  { slug: "manuel-antonio",         label: "Manuel Antonio",           provincia: "Puntarenas",           pais: "costa-rica",  paisLabel: "Costa Rica", tipo: "turistica", verticalesTouristicos: ["hoteles", "restaurantes"] },
  { slug: "monteverde",             label: "Monteverde",               provincia: "Puntarenas",           pais: "costa-rica",  paisLabel: "Costa Rica", tipo: "turistica", verticalesTouristicos: ["hoteles", "restaurantes"] },
  { slug: "puerto-viejo-talamanca", label: "Puerto Viejo de Talamanca",provincia: "Limón",                pais: "costa-rica",  paisLabel: "Costa Rica", tipo: "turistica", verticalesTouristicos: ["hoteles", "restaurantes"] },
  { slug: "jaco",                   label: "Jacó",                     provincia: "Puntarenas",           pais: "costa-rica",  paisLabel: "Costa Rica", tipo: "turistica", verticalesTouristicos: ["hoteles", "restaurantes"] },
  { slug: "santa-teresa-cr",        label: "Santa Teresa",             provincia: "Puntarenas",           pais: "costa-rica",  paisLabel: "Costa Rica", tipo: "turistica", verticalesTouristicos: ["hoteles", "restaurantes"] },
  { slug: "tortuguero",             label: "Tortuguero",               provincia: "Limón",                pais: "costa-rica",  paisLabel: "Costa Rica", tipo: "turistica", verticalesTouristicos: ["hoteles", "restaurantes"] },

  // ── PANAMÁ ─────────────────────────────────────────────────

  // Ciudad de Panamá y David: comerciales (todos los verticales)
  { slug: "ciudad-de-panama",       label: "Ciudad de Panamá",         provincia: "Panamá",               pais: "panama",      paisLabel: "Panamá", tipo: "comercial" },
  { slug: "david-pa",               label: "David",                    provincia: "Chiriquí",             pais: "panama",      paisLabel: "Panamá", tipo: "comercial" },
  { slug: "colon-pa",               label: "Colón",                    provincia: "Colón",                pais: "panama",      paisLabel: "Panamá", tipo: "comercial" },

  // Destinos turísticos PA (solo hoteles + restaurantes)
  { slug: "bocas-del-toro",         label: "Bocas del Toro",           provincia: "Bocas del Toro",       pais: "panama",      paisLabel: "Panamá", tipo: "turistica", verticalesTouristicos: ["hoteles", "restaurantes"] },
  { slug: "boquete",                label: "Boquete",                  provincia: "Chiriquí",             pais: "panama",      paisLabel: "Panamá", tipo: "turistica", verticalesTouristicos: ["hoteles", "restaurantes"] },
  { slug: "islas-san-blas",         label: "Islas San Blas",           provincia: "Guna Yala",            pais: "panama",      paisLabel: "Panamá", tipo: "turistica", verticalesTouristicos: ["hoteles", "restaurantes"] },
  { slug: "coronado",               label: "Coronado",                 provincia: "Panamá Oeste",         pais: "panama",      paisLabel: "Panamá", tipo: "turistica", verticalesTouristicos: ["hoteles", "restaurantes"] },
  { slug: "el-valle-de-anton",      label: "El Valle de Antón",        provincia: "Coclé",                pais: "panama",      paisLabel: "Panamá", tipo: "turistica", verticalesTouristicos: ["hoteles", "restaurantes"] },
  { slug: "pedasi",                 label: "Pedasí",                   provincia: "Los Santos",           pais: "panama",      paisLabel: "Panamá", tipo: "turistica", verticalesTouristicos: ["hoteles", "restaurantes"] },
  { slug: "santa-catalina-pa",      label: "Santa Catalina",           provincia: "Veraguas",             pais: "panama",      paisLabel: "Panamá", tipo: "turistica", verticalesTouristicos: ["hoteles", "restaurantes"] },
]
