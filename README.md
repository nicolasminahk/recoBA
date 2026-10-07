# recoBA — Web oficial

Web de **recoBA — Software de seguimiento de obra e inversión**: panel de
administración y portal del inversor para promotoras, empresas de
compra-reforma-venta, gestoras y family offices en España.

One-page estática construida con **Astro + Tailwind CSS 4 + GSAP (ScrollTrigger)**.
Tipografías [Fontshare](https://www.fontshare.com) self-hosted (Clash Display +
General Sans), capturas reales del producto optimizadas con `astro:assets`
(AVIF + WebP) y animaciones con `prefers-reduced-motion` respetado.

> La versión anterior de la web (co-inversión en flipping en Buenos Aires) está
> etiquetada como `v-flipping-ba`.

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:4321
```

## Build de producción

```bash
npm run build      # genera ./dist (estático)
npm run preview    # sirve ./dist en local
```

## Deploy — Netlify (por Git)

El repo está conectado a Netlify: cada push a `main` construye y publica
automáticamente (build command `npm run build`, publish `dist`). Las ramas
generan un *branch deploy* de previsualización.

Dominio: **recoba.casa**, registrado en GoDaddy, apuntando a Netlify por DNS:

| Tipo | Nombre | Valor |
| --- | --- | --- |
| A | `@` | `75.2.60.5` (apex load balancer de Netlify) |
| CNAME | `www` | `<sitio>.netlify.app` (subdominio Netlify del proyecto) |

La URL canónica vive en `astro.config.mjs` (`site`).

## Scripts auxiliares

| Comando | Qué hace |
| --- | --- |
| `npm run og` | Regenera `public/og.png` y `public/og-en.png` (1200×630) desde `scripts/og-template.html` |
| `npm run qa [url]` | QA con Playwright de `/` y `/en/` a 375, 768, 1280 y 1440 px: secciones, anclas, CTAs, acordeón, menú móvil, selector de idioma, `lang`, scroll horizontal, restos del modelo anterior, español colado en la versión inglesa y errores de consola. Guarda capturas de página completa en `qa/` |

Ambos usan Playwright (`npx playwright install chromium` la primera vez).
Para el QA conviene apuntar a un build de producción (`npm run build && npx astro preview --port 4399` y `npm run qa http://localhost:4399`), porque el servidor de desarrollo genera las imágenes al vuelo.

## Estructura

```
src/
  pages/index.astro         # home en español (/)
  pages/en/index.astro      # home en inglés (/en/)
  components/Home.astro     # la home completa, compartida por los dos idiomas
  i18n/es.js · i18n/en.js   # TODOS los textos visibles, con la misma estructura
  i18n/index.js             # idioma de la página, rutas por idioma
  layouts/Base.astro        # head, SEO, hreflang, OG/Twitter, JSON-LD (Organization + SoftwareApplication)
  data/site.js              # email, mailto de demo (por idioma) y URLs de las demos
  components/               # una sección = un componente (Hero, Problema, Propuesta, Producto…)
  components/Shot.astro     # captura del producto dentro de un marco de navegador (<Picture>)
  assets/shots/             # capturas reales del panel y del portal (PNG a 2x)
  scripts/                  # GSAP por módulos: hero, reveals, interacciones
  styles/global.css         # design tokens (@theme), grano, grid técnico, utilidades
public/fonts/               # woff2 self-hosted (licencia Fontshare)
scripts/                    # og.mjs · qa.mjs (tooling, no se despliega)
```

## Idiomas

La web está en español (`/`, idioma por defecto) e inglés (`/en/`), con el
i18n de Astro. El selector ES/EN de la barra de navegación conserva la sección
(`#ancla`) al cambiar y guarda la elección: quien eligió inglés y vuelve a
`recoba.casa` va directo a `/en/`. Sin elección guardada no hay redirección
automática, para que los buscadores indexen cada idioma en su URL (cada página
declara la otra con `hreflang` y el sitemap también).

- **Cambiar un texto**: en `src/i18n/es.js` y su equivalente en `src/i18n/en.js`.
  Los componentes no llevan texto fijo.
- **Imagen OG**: `npm run og` genera `og.png` (es) y `og-en.png` (en).
- Las capturas y las demos navegables están en español; la versión inglesa
  lo indica en la sección de producto y en las preguntas frecuentes.

## Notas de mantenimiento

- **Contacto y demos**: todo sale de `src/data/site.js`. Los botones «Pedir una
  demo» abren un `mailto:` con asunto y cuerpo prellenados.
- **Precios**: en `src/i18n/es.js` y `src/i18n/en.js` (`precios.paquetes`); el
  JSON-LD de `Base.astro` los toma de ahí.
- **Capturas**: sustituir los PNG de `src/assets/shots/` manteniendo el nombre;
  el build regenera los formatos.
- **Lighthouse** (build de producción, móvil): Performance 98 · Accessibility 100 ·
  Best Practices 100 · SEO 100.
