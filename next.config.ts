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
      {
        source: '/en-us/resenas',
        destination: '/resenas',
        permanent: true,
      },
      {
        source: '/en-us/:path*',
        destination: '/:path*',
        permanent: true,
      },
    ]
  },
}

export default withMDX(nextConfig)
