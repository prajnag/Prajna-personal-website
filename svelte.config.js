import preprocess from "svelte-preprocess";
import adapter from '@sveltejs/adapter-netlify';

export default {
  kit: {
    adapter: adapter(),
    browser: {
      hydrate: true,
      router: true
    },
  },
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
}