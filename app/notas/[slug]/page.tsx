import { notFound } from 'next/navigation'
import { getAllSlugs, getPostBySlug, getRelatedPost } from '@/lib/blog'
import type { Metadata } from 'next'
import BlogPostContent from '@/components/blog/BlogPostContent'
import RelatedPost from '@/components/blog/RelatedPost'
import MedanoCTA from '@/components/blog/MedanoCTA'
import CalculadoraCTA from '@/components/blog/CalculadoraCTA'
import ArticleJsonLd from '@/app/components/ArticleJsonLd'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  const url = `https://www.medano.co/notas/${slug}`

  return {
    title: `${post.title} | Medano`,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      siteName: 'Medano',
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: ['https://www.medano.co'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const related = getRelatedPost(slug, post.relatedSlug)
  const url = `https://www.medano.co/notas/${slug}`

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://www.medano.co' },
      { '@type': 'ListItem', position: 2, name: 'Notas', item: 'https://www.medano.co/notas' },
      { '@type': 'ListItem', position: 3, name: post.title, item: url },
    ],
  }

  return (
    <>
      <ArticleJsonLd
        title={post.title}
        description={post.description}
        url={url}
        publishedAt={post.publishedAt}
        updatedAt={post.updatedAt}
        image={post.heroImage}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <BlogPostContent post={post} />
      <MedanoCTA />
      <CalculadoraCTA vertical={post.calculadoraVertical} />
      {related && <RelatedPost post={related} />}
    </>
  )
}
