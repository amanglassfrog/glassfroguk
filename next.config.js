/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your existing config here
  experimental: {
    serverActions: true,
  },
  // Configure for Cloudflare Pages
  env: {
    NEXT_RUNTIME: 'edge'
  }
}

module.exports = nextConfig 