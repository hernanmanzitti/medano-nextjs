import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import type { Post } from '@/types/blog'

const POSTS_DIR = path.join(process.cwd(), 'content/notas')

export function getAllSlugs(): string[] {
  const files = fs.readdirSync(POSTS_DIR)
  return files
    .filter(f => f.endsWith('.mdx'))
    .map(f => f.replace('.mdx', ''))
}

export function getPostBySlug(slug: string): Post | null {
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
  return getAllSlugs()
    .map(slug => getPostBySlug(slug))
    .filter(Boolean)
    .sort((a, b) =>
      new Date(b!.publishedAt).getTime() - new Date(a!.publishedAt).getTime()
    ) as Post[]
}

export function getRelatedPost(currentSlug: string, relatedSlug?: string): Post | null {
  if (relatedSlug) return getPostBySlug(relatedSlug)
  const all = getAllPosts()
  return all.find(p => p.slug !== currentSlug) ?? null
}
