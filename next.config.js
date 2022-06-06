/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { images: { layoutRaw: true } },
  images: {
    domains: ["i.ibb.co", 'lh3.googleusercontent.com'],
  },
}

module.exports = nextConfig
