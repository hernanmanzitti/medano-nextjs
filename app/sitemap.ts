import { MetadataRoute } from 'next'
import { verticales } from '@/data/verticales'
import { ciudades } from '@/data/ciudades'
import { getAllPosts } from '@/lib/blog'

const BASE_URL = 'https://medano.co'

export default function sitemap(): MetadataRoute.Sitemap {
  const rutas: MetadataRoute.Sitemap = []

  // ── Páginas estáticas ──────────────────────────────────────
  const estaticas = [
    { url: '/',                   priority: 1.0,  changeFrequency: 'monthly' },
    { url: '/resenas',            priority: 0.9,  changeFrequency: 'monthly' },
    { url: '/publicidad-digital', priority: 0.9,  changeFrequency: 'monthly' },
    { url: '/nosotros',           priority: 0.7,  changeFrequency: 'yearly'  },
    { url: '/calculadora/resenas',priority: 0.8,  changeFrequency: 'monthly' },
    { url: '/whatsapp-resenas',   priority: 0.8,  changeFrequency: 'monthly' },
  ] as const

  estaticas.forEach(({ url, priority, changeFrequency }) => {
    rutas.push({
      url: `${BASE_URL}${url}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    })
  })

  // ── Índice por vertical (/calculadora/resenas/[vertical]) ──
  verticales.forEach((vertical) => {
    rutas.push({
      url: `${BASE_URL}/calculadora/resenas/${vertical.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  })

  // ── Páginas calculadora [vertical]/[ciudad] ────────────────
  for (const ciudad of ciudades) {
    for (const vertical of verticales) {
      const esValida =
        ciudad.tipo === 'comercial' ||
        ciudad.verticalesTouristicos?.includes(vertical.slug)

      if (esValida) {
        rutas.push({
          url: `${BASE_URL}/calculadora/resenas/${vertical.slug}/${ciudad.slug}`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.6,
        })
      }
    }
  }

  // ── FAQ hub (/faq/resenas) ─────────────────────────────────
  rutas.push({
    url: `${BASE_URL}/faq/resenas`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  })

  // ── FAQ por vertical (/faq/resenas/[vertical]) ─────────────
  verticales.forEach((vertical) => {
    if (vertical.faqItems && vertical.faqItems.length > 0) {
      rutas.push({
        url: `${BASE_URL}/faq/resenas/${vertical.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      })
    }
  })

  // ── Hub guías (/guia/conseguir-resenas) ───────────────────────
  rutas.push({
    url: `${BASE_URL}/guia/conseguir-resenas`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  })

  // ── Guías por vertical (/guia/conseguir-resenas/[vertical]) ───
  verticales.forEach((vertical) => {
    rutas.push({
      url: `${BASE_URL}/guia/conseguir-resenas/${vertical.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  })

  // ── Índice del blog (/notas) ────────────────────────────────
  rutas.push({
    url: `${BASE_URL}/notas`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  })

  // ── Posts del blog (/notas/[slug]) ─────────────────────────
  const posts = getAllPosts()
  posts.forEach((post) => {
    rutas.push({
      url: `${BASE_URL}/notas/${post.slug}`,
      lastModified: new Date(post.updatedAt ?? post.publishedAt),
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  })

  return rutas
}
