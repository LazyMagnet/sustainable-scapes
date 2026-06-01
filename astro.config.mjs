// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://sustainablescapes.lazymagnet.com',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  },
  redirects: {
    // Old GHL URLs -> new structure (real 301s via Cloudflare Bulk Redirects at cutover)
    '/home': '/',
    '/services/astroturf-972505': '/astroturf-installation-gisborne',
    '/services/astroturf': '/astroturf-installation-gisborne',
  },
});
