/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: false,
  reactStrictMode: true,
  experimental: { images: { layoutRaw: true }, externalDir: true },

  images: {
    domains: ["i.ibb.co", 'lh3.googleusercontent.com'],
  },
}

module.exports = nextConfig
