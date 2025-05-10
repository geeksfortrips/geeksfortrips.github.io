/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/geeksfortrips.github.io',
  eslint: {
    ignoreDuringBuilds: true,
  },
  distDir: 'dist',
}

module.exports = nextConfig 