# recoBA — Web oficial

Web de **recoBA — Real Estate Buenos Aires**: firma boutique de house flipping +
renta temporal en Buenos Aires para co-inversores españoles.

One-page estática construida con **Astro 5 + Tailwind CSS 4 + GSAP (ScrollTrigger)**.
Tipografías [Fontshare](https://www.fontshare.com) self-hosted (Clash Display +
General Sans), gráficos SVG inline hechos a mano y animaciones con
`prefers-reduced-motion` respetado.

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

## Deploy — Cloudflare Pages (en un comando)

```bash
npm run deploy
```

Requiere una cuenta de Cloudflare (el primer `wrangler` te pedirá login). Crea el
proyecto `recova` si no existe y publica `dist/`.

Alternativa por Git: conecta el repo en el dashboard de Cloudflare Pages con
build command `npm run build` y output `dist`. (En Vercel funcionaría igual:
framework preset «Astro».)

> **Dominio**: la URL canónica está en `astro.config.mjs` (`site`). Cámbiala por
> el dominio definitivo antes del primer deploy para que sitemap, OG y canonical
> apunten bien.

## Scripts auxiliares

| Comando | Qué hace |
| --- | --- |
| `npm run og` | Regenera `public/og.png` (1200×630) desde `scripts/og-template.html` |
| `npm run shots` | Screenshots por sección (1440 px y 390 px) en `shots/` para autoevaluación de diseño |
| `npm run qa` | QA funcional headless: animaciones, tabs, calculadora, menú móvil, errores de consola |

Los tres usan Playwright (`npx playwright install chromium` la primera vez).

## Estructura

```
src/
  layouts/Base.astro        # head, SEO, OG/Twitter, fuentes
  components/               # una sección = un componente
  scripts/                  # GSAP por módulos: hero, reveals, charts, timeline…
  styles/global.css         # design tokens (@theme), grano, grid técnico, utilidades
public/fonts/               # woff2 self-hosted (licencia Fontshare)
scripts/                    # og.mjs · shots.mjs · qa.mjs (tooling, no se despliega)
```

## Notas de mantenimiento

- **Cifras**: todos los importes van escritos como literales en los componentes
  (formato español: `138.850`). La calculadora vive en
  `src/scripts/calculadora.js` (constantes del caso Recoleta al inicio).
- **Fotos de obra**: no hay stock a propósito. Los huecos para fotografía real
  usan la clase `.ph` (placeholder documentado) — sustituir por `<img>` cuando
  existan fotos.
- **Lighthouse** (build de producción): Performance 98 · Accessibility 100 ·
  Best Practices 100 · SEO 100.
# recoBA
