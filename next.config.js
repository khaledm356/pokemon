/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  compiler: {
    styledComponents: true,
  },
    images: {
    domains: ['raw.githubusercontent.com'],
  },
}

module.exports = nextConfig
