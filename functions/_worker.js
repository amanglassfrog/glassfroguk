export default {
  async fetch(request, env, ctx) {
    return new Response('Hello World!');
  },
};

export const config = {
  compatibility_date: "2024-02-04",
  compatibility_flags: ["nodejs_compat"]
}; 