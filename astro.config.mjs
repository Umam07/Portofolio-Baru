// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://portfolio.dev',
  vite: {
    // @ts-ignore - Vite type version mismatch between Astro and tailwindcss/vite
    plugins: [tailwindcss()],
  },
});

