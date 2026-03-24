import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

const withMDX = createMDX()

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  async redirects() {
    return [
      {
        source: '/calculadora-resenas-google-tripadvisor',
        destination: '/calculadora/resenas',
        permanent: true,
      },
    ]
  },
}

export default withMDX(nextConfig)
