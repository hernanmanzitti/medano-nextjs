import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image'
import type { Post } from '@/types/blog'
import styles from './BlogPostContent.module.css'

interface Props {
  post: Post
}

const formattedDate = (iso: string) =>
  new Date(iso).toLocaleDateString('es-AR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

export default function BlogPostContent({ post }: Props) {
  return (
    <article id="blog-post-content" className={styles.article}>
      <div className={styles.container}>

        {/* Breadcrumb */}
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <a href="/">Inicio</a>
          <span aria-hidden="true">&#8250;</span>
          <a href="/notas">Notas</a>
          <span aria-hidden="true">&#8250;</span>
          <span>{post.title}</span>
        </nav>

        {/* Header */}
        <header className={styles.header}>
          <span className={styles.category}>{post.category}</span>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.description}>{post.description}</p>
          <div className={styles.meta}>
            <time dateTime={post.publishedAt}>
              {formattedDate(post.publishedAt)}
            </time>
            <span className={styles.metaDot} aria-hidden="true">&#183;</span>
            <span>{post.readingTimeText}</span>
          </div>
        </header>

        {post.heroImage && (
          <div className={styles.heroImage}>
            <Image
              src={post.heroImage}
              alt={post.title}
              width={1200}
              height={630}
              priority
              className={styles.heroImg}
            />
          </div>
        )}

        {/* Body */}
        <div className={styles.body}>
          <MDXRemote source={post.content} />
        </div>

      </div>
    </article>
  )
}
