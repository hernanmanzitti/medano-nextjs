export type Ciudad = {
  slug: string
  label: string
  provincia: string
}

export const ciudades: Ciudad[] = [
  { slug: "buenos-aires",  label: "Buenos Aires",  provincia: "Buenos Aires" },
  { slug: "cordoba",       label: "Córdoba",        provincia: "Córdoba" },
  { slug: "rosario",       label: "Rosario",        provincia: "Santa Fe" },
  { slug: "mendoza",       label: "Mendoza",        provincia: "Mendoza" },
  { slug: "tucuman",       label: "Tucumán",        provincia: "Tucumán" },
  { slug: "mar-del-plata", label: "Mar del Plata",  provincia: "Buenos Aires" },
  { slug: "salta",         label: "Salta",          provincia: "Salta" },
  { slug: "la-plata",      label: "La Plata",       provincia: "Buenos Aires" },
]
