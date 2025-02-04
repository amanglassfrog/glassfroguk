import { next } from '@cloudflare/next-on-pages/handlers'

// Export a default object containing the Cloudflare Pages Functions configuration
export const onRequest = next({
  // Optional: Provide custom configuration
  config: {
    compatibility_date: "2024-02-04",
    compatibility_flags: ["nodejs_compat"]
  }
}); 