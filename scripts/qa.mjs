// QA funcional y visual de la home.
// Uso: node scripts/qa.mjs [urlBase]
//  - comprueba secciones, anclas del menú, CTAs mailto, acordeón, menú móvil,
//    scroll horizontal y errores de consola a 375, 768, 1280 y 1440 px
//  - guarda capturas de página completa en qa/
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';

const base = process.argv[2] ?? 'http://localhost:4321';
const outDir = new URL('../qa/', import.meta.url).pathname;
mkdirSync(outDir, { recursive: true });

const widths = [375, 768, 1280, 1440];
const browser = await chromium.launch();
const results = { widths: {}, consoleErrors: [] };

for (const width of widths) {
  const page = await browser.newPage({
    viewport: { width, height: 900 },
    reducedMotion: 'reduce', // layout estable, sin estados intermedios de animación
  });
  page.on('console', (m) => m.type() === 'error' && results.consoleErrors.push(`${width}: ${m.text()}`));
  page.on('pageerror', (e) => results.consoleErrors.push(`${width}: ${String(e)}`));

  await page.goto(base, { waitUntil: 'networkidle' });

  // Forzar la carga de las imágenes en diferido antes de la captura completa
  // (loading="lazy" no se dispara fuera del viewport)
  await page.evaluate(() => {
    document.querySelectorAll('img[loading="lazy"]').forEach((i) => {
      i.loading = 'eager';
    });
  });
  await page.waitForFunction(() => [...document.images].every((i) => i.complete), null, { timeout: 60000 });
  await page.waitForTimeout(400);

  const r = {};
  r.overflowX = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  r.sections = await page.evaluate(() => [...document.querySelectorAll('main > section')].map((s) => s.id));

  // Anclas del menú: todas apuntan a un id existente
  r.brokenAnchors = await page.evaluate(() =>
    [...document.querySelectorAll('a[href^="#"]')]
      .map((a) => a.getAttribute('href'))
      .filter((h) => h !== '#' && !document.querySelector(h))
  );

  // CTAs de demo
  r.demoCtas = await page.evaluate(
    () => document.querySelectorAll('a[href^="mailto:nicolasminahk@gmail.com?subject=Demo"]').length
  );

  // Imágenes: todas con alt y dimensiones
  r.imgsSinAlt = await page.evaluate(() => [...document.images].filter((i) => !i.alt).length);
  r.imgsSinDimensiones = await page.evaluate(
    () => [...document.images].filter((i) => !i.getAttribute('width') || !i.getAttribute('height')).length
  );

  // Acordeón accesible
  const faq = page.locator('#preguntas details').first();
  await faq.locator('summary').click();
  r.faqAbre = await faq.evaluate((d) => d.open);

  // Menú móvil
  if (width < 1024) {
    await page.click('#menu-btn');
    r.mobileMenuOpen = await page.evaluate(
      () => !document.getElementById('mobile-menu').classList.contains('hidden')
    );
    await page.click('[data-menu-link]');
    await page.waitForTimeout(300);
    r.mobileMenuCloses = await page.evaluate(() =>
      document.getElementById('mobile-menu').classList.contains('hidden')
    );
    await page.evaluate(() => window.scrollTo(0, 0));
  }

  await page.screenshot({ path: `${outDir}home-${width}.png`, fullPage: true });
  results.widths[width] = r;
  await page.close();
}

// Textos del modelo anterior que no deben aparecer
const page = await browser.newPage();
await page.goto(base, { waitUntil: 'networkidle' });
const html = (await page.content()).toLowerCase();
results.restosFlipping = ['camargo', 'fideicomiso', 'us$', 'cnmv', 'co-inversión', 'coinversión en flipping'].filter(
  (t) => html.includes(t)
);
await page.close();

console.log(JSON.stringify(results, null, 2));
await browser.close();
console.log(`Capturas guardadas en qa/ (${widths.map((w) => `home-${w}.png`).join(', ')})`);
