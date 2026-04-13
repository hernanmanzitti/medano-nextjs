import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

const withMDX = createMDX()

const nextConfig: NextConfig = {
  trailingSlash: false,
  pageExtensions: ['ts', 'tsx', 'mdx'],
  async redirects() {
    return [
      {
        source: '/calculadora-resenas-google-tripadvisor',
        destination: '/calculadora/resenas',
        permanent: true,
      },
      {
        source: '/en-us/paid-media',
        destination: '/publicidad-digital',
        permanent: true,
      },
      {
        source: '/en-us/resenas',
        destination: '/resenas',
        permanent: true,
      },
      {
        source: '/notas/:slug/',
        destination: '/notas/:slug',
        permanent: true,
      },
      {
        source: '/paid-media',
        destination: '/publicidad-digital',
        permanent: true,
      },
      {
        source: '/contacto',
        destination: '/',
        permanent: true,
      },
      {
        source: '/en-us/contacto',
        destination: '/',
        permanent: true,
      },
      {
        source: '/resenas-y-seo',
        destination: '/resenas',
        permanent: true,
      },
      {
        source: '/notas-de-interes',
        destination: '/notas',
        permanent: true,
      },
      {
        source: '/insights',
        destination: '/notas',
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
