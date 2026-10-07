// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://recoba.casa',
  output: 'static',
  devToolbar: { enabled: false },
  // Español en `/` (por defecto, sin prefijo) e inglés en `/en/`.
  // Los textos viven en src/i18n/.
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'es', locales: { es: 'es-ES', en: 'en' } },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
