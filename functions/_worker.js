import { next } from '@cloudflare/next-on-pages'

// Export the Pages Functions configuration
export const onRequest = next({
  // Optional: Provide custom configuration
  config: {
    compatibility_date: "2024-02-04",
    compatibility_flags: ["nodejs_compat"]
  }
});

export default {
  async fetch(request, env, ctx) {
    const nextjsHandler = next.fetch(request, env, ctx);
    return nextjsHandler;
  }
}; 