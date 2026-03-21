import type { Post } from '@/types/blog'
import styles from './RelatedPost.module.css'

interface Props {
  post: Post
}

const formattedDate = (iso: string) =>
  new Date(iso).toLocaleDateString('es-AR', { year: 'numeric', month: 'long', day: 'numeric' })

export default function RelatedPost({ post }: Props) {
  return (
    <section id="blog-related-post" className={styles.section}>
      <div className={styles.container}>
        <p className={styles.label}>Segui leyendo</p>
        <a href={`/notas/${post.slug}`} className={styles.card}>
          <span className={styles.category}>{post.category}</span>
          <h3 className={styles.title}>{post.title}</h3>
          <p className={styles.description}>{post.description}</p>
          <span className={styles.meta}>
            {formattedDate(post.publishedAt)} · {post.readingTimeText}
          </span>
        </a>
      </div>
    </section>
  )
}
