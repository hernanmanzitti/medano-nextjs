interface ArticleJsonLdProps {
  title: string
  description: string
  url: string
  publishedAt: string
  updatedAt?: string
  image?: string
}

const SITE_ORIGIN = 'https://medano.co'

function absolutizeImage(image?: string): string | undefined {
  if (!image) return undefined
  if (image.startsWith('http://') || image.startsWith('https://')) return image
  return `${SITE_ORIGIN}${image.startsWith('/') ? image : `/${image}`}`
}

export default function ArticleJsonLd({
  title,
  description,
  url,
  publishedAt,
  updatedAt,
  image,
}: ArticleJsonLdProps) {
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished: publishedAt,
    dateModified: updatedAt ?? publishedAt,
    author: {
      '@type': 'Person',
      name: 'Hernán Manzitti',
      url: 'https://medano.co',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Médano',
      url: 'https://medano.co',
      logo: {
        '@type': 'ImageObject',
        url: 'https://medano.co/images/logomedanofinal.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    ...(absolutizeImage(image) ? { image: absolutizeImage(image) } : {}),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
    />
  )
}
