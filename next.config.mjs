import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable experimental features for Cloudflare Pages
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  // Configure images for Cloudflare Pages
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'opengraph.b-cdn.net',
      },
    ],
  },
};

if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}

export default nextConfig;
