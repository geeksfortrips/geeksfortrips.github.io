/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    unoptimized: true,
  },
  basePath: '/geeksfortrips.github.io',
  assetPrefix: '/geeksfortrips.github.io',
  trailingSlash: true,
  experimental: {
    serverActions: {},
  },
};

module.exports = nextConfig;
