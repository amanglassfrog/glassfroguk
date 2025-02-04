/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your existing config here
  experimental: {
    runtime: 'edge',
    // This enables the edge runtime for all pages
    // You can also enable it per-page basis
  },
}

module.exports = nextConfig 