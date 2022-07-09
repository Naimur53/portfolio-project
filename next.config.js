/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: false,
  reactStrictMode: true,
  experimental: { images: { layoutRaw: true }, externalDir: true },
  distDir: "build",
  images: {
    domains: ["i.ibb.co", 'lh3.googleusercontent.com'],
  },
}

module.exports = nextConfig
