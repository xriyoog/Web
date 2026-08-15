/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Crucial for Docker/Railway deployment
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
    ],
  },
};
module.exports = nextConfig;
