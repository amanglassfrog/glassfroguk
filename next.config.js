/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React Server Components
  experimental: {
    serverActions: {
      allowedOrigins: ['*.pages.dev', '*.glassfroguk.pages.dev']
    }
  },

  // Configure for Cloudflare Pages
  output: 'standalone',

  // Cloudflare Pages specific settings
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  }
}

module.exports = nextConfig 