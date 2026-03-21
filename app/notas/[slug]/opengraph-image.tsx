import { ImageResponse } from 'next/og'
import { getPostBySlug } from '@/lib/blog'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '64px',
          background: 'linear-gradient(135deg, #00246b 0%, #1a4793 60%, #646caa 100%)',
        }}
      >
        <div style={{ fontSize: 16, color: '#b4b7d9', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.2em' }}>
          medano.co · notas
        </div>
        <div style={{ fontSize: 56, fontWeight: 700, color: '#ffffff', lineHeight: 1.15, maxWidth: 900 }}>
          {post?.title ?? 'Medano Notas'}
        </div>
      </div>
    ),
    size
  )
}
