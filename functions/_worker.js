import { next } from '@cloudflare/next-on-pages'

// Export the Pages Functions configuration
export const onRequest = next();

export default {
  async fetch(request, env, ctx) {
    const nextjsHandler = next.fetch(request, env, ctx);
    return nextjsHandler;
  }
}; 