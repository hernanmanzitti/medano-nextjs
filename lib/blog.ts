import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import type { Post } from '@/types/blog'

const POSTS_DIR = path.join(process.cwd(), 'content/notas')

/* Dedicated pages under app/notas/ that are not MDX files.
   They need manual entries here so they appear in the /notas index. */
const DEDICATED_POSTS: Post[] = [
  {
    title: 'Como usar WhatsApp para conseguir mas resenas de Google',
    slug: 'como-usar-whatsapp-para-conseguir-resenas-de-google',
    description: 'El canal con mayor tasa de apertura en America Latina tambien es el mas efectivo para pedir resenas.',
    publishedAt: '2026-03-27',
    category: 'herramientas',
    tags: ['whatsapp', 'resenas google', 'pedir resenas', 'tasa de apertura'],
    readingTime: 8,
    readingTimeText: '8 min de lectura',
    content: '',
    calculadoraVertical: 'restaurantes',
  },
  {
    title: 'NFC, QR o WhatsApp: cual es la mejor forma de pedir resenas',
    slug: 'nfc-qr-o-whatsapp-cual-es-la-mejor-forma-de-pedir-resenas',
    description: 'Comparamos los tres metodos para pedir resenas a clientes: NFC, codigo QR y WhatsApp. Cuando usar cada uno y que dice la experiencia real.',
    publishedAt: '2026-03-20',
    category: 'herramientas',
    tags: ['nfc', 'qr', 'whatsapp', 'resenas google', 'comparativa'],
    readingTime: 8,
    readingTimeText: '8 min de lectura',
    content: '',
    calculadoraVertical: 'restaurantes',
  },
  {
    title: 'Que es el response rate y por que Google te penaliza si ignoras las resenas',
    slug: 'que-es-el-response-rate-y-por-que-google-te-penaliza-si-ignoras-las-resenas',
    description: 'El response rate mide que porcentaje de resenas respondes y en cuanto tiempo. Explicamos como funciona, por que baja de golpe, y que hacer para mejorarlo.',
    publishedAt: '2026-04-03',
    category: 'google',
    tags: ['response rate', 'tasa de respuesta resenas', 'google business profile', 'reputacion online'],
    readingTime: 7,
    readingTimeText: '7 min de lectura',
    content: '',
    calculadoraVertical: 'restaurantes',
  },
]

export function getAllSlugs(): string[] {
  const files = fs.readdirSync(POSTS_DIR)
  return files
    .filter(f => f.endsWith('.mdx'))
    .map(f => f.replace('.mdx', ''))
}

export function getPostBySlug(slug: string): Post | null {
  // Check dedicated pages first
  const dedicated = DEDICATED_POSTS.find(p => p.slug === slug)
  if (dedicated) return dedicated

  try {
    const filePath = path.join(POSTS_DIR, `${slug}.mdx`)
    const raw = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(raw)
    const rt = readingTime(content)
    return {
      ...(data as Post),
      slug,
      content,
      readingTimeText: `${Math.ceil(rt.minutes)} min de lectura`,
      readingTime: Math.ceil(rt.minutes),
    }
  } catch {
    return null
  }
}

export function getAllPosts(): Post[] {
  const mdxPosts = getAllSlugs()
    .map(slug => getPostBySlug(slug))
    .filter(Boolean) as Post[]

  return [...mdxPosts, ...DEDICATED_POSTS].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

export function getRelatedPost(currentSlug: string, relatedSlug?: string): Post | null {
  if (relatedSlug) return getPostBySlug(relatedSlug)
  const all = getAllPosts()
  return all.find(p => p.slug !== currentSlug) ?? null
}
