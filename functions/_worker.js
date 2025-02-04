import { next } from '@cloudflare/next-on-pages';

// Export a default object containing the Cloudflare Pages Functions configuration
export default {
  ...next,
  config: {
    compatibility_date: "2024-02-04",
    compatibility_flags: ["nodejs_compat"]
  }
}; 