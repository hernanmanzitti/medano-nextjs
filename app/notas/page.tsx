import { getAllPosts } from '@/lib/blog'
import type { Metadata } from 'next'
import styles from './notas.module.css'

export const metadata: Metadata = {
  title: 'Notas sobre Reputacion Online y Resenas | Medano',
  description: 'Articulos practicos sobre gestion de resenas, reputacion online y crecimiento digital para negocios en Argentina.',
  alternates: { canonical: 'https://www.medano.co/notas' },
}

export default function NotasPage() {
  const posts = getAllPosts()
  return (
    <main id="blog-index">
      <section id="blog-index-hero" className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Notas</h1>
          <p className={styles.heroSub}>
            Estrategias de reputacion online, gestion de resenas y crecimiento digital.
          </p>
        </div>
      </section>

      <section id="blog-index-grid" className={styles.grid}>
        <div className={styles.gridInner}>
          {posts.map(post => (
            <a key={post.slug} href={`/notas/${post.slug}`} className={styles.card}>
              <span className={styles.cardCategory}>{post.category}</span>
              <h2 className={styles.cardTitle}>{post.title}</h2>
              <p className={styles.cardDesc}>{post.description}</p>
              <span className={styles.cardMeta}>
                {new Date(post.publishedAt).toLocaleDateString('es-AR', { year: 'numeric', month: 'long', day: 'numeric' })}
                {' · '}{post.readingTimeText}
              </span>
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}
