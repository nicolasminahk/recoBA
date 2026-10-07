// QA funcional y visual de la home, en español (/) y en inglés (/en/).
// Uso: node scripts/qa.mjs [urlBase]
//  - comprueba secciones, anclas del menú, CTAs mailto, acordeón, menú móvil,
//    selector de idioma, scroll horizontal y errores de consola a 375, 768,
//    1280 y 1440 px
//  - guarda capturas de página completa en qa/ (home-es-375.png, home-en-375.png…)
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';

const base = (process.argv[2] ?? 'http://localhost:4321').replace(/\/$/, '');
const langs = [
  { code: 'es', path: '/', htmlLang: 'es-ES' },
  { code: 'en', path: '/en/', htmlLang: 'en' },
];
const outDir = new URL('../qa/', import.meta.url).pathname;
mkdirSync(outDir, { recursive: true });

const widths = [375, 768, 1280, 1440];
const browser = await chromium.launch();
const results = { es: {}, en: {}, consoleErrors: [] };

for (const lang of langs) for (const width of widths) {
  const page = await browser.newPage({
    viewport: { width, height: 900 },
    reducedMotion: 'reduce', // layout estable, sin estados intermedios de animación
  });
  const tag = `${lang.code} ${width}`;
  page.on('console', (m) => m.type() === 'error' && results.consoleErrors.push(`${tag}: ${m.text()}`));
  page.on('pageerror', (e) => results.consoleErrors.push(`${tag}: ${String(e)}`));

  await page.goto(base + lang.path, { waitUntil: 'networkidle' });

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
  r.htmlLang = (await page.getAttribute('html', 'lang')) === lang.htmlLang;
  // Selector de idioma: visible, con los dos idiomas y el actual marcado
  r.langSwitch = await page.evaluate((code) => {
    const links = [...document.querySelectorAll('[data-lang-link]')];
    const current = links.find((a) => a.getAttribute('aria-current') === 'true');
    const visible = links.every((a) => a.getBoundingClientRect().width > 0);
    return links.length === 2 && visible && current?.dataset.langLink === code;
  }, lang.code);
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
    () => document.querySelectorAll('a[href^="mailto:nicolasminahk@gmail.com?subject="]').length
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

  await page.screenshot({ path: `${outDir}home-${lang.code}-${width}.png`, fullPage: true });
  results[lang.code][width] = r;
  await page.close();
}

// Textos del modelo anterior que no deben aparecer
const page = await browser.newPage();
await page.goto(base + '/', { waitUntil: 'networkidle' });
const html = (await page.content()).toLowerCase();
results.restosFlipping = ['camargo', 'fideicomiso', 'us$', 'cnmv', 'co-inversión', 'coinversión en flipping'].filter(
  (t) => html.includes(t)
);

// Español que se haya colado en la versión inglesa (texto visible y alt/aria)
await page.goto(base + '/en/', { waitUntil: 'networkidle' });
results.espanolEnIngles = await page.evaluate(() => {
  const attrs = [...document.querySelectorAll('[alt],[aria-label]')]
    .map((e) => `${e.getAttribute('alt') ?? ''} ${e.getAttribute('aria-label') ?? ''}`)
    .join(' ');
  const text = `${document.body.innerText} ${attrs}`.replace(/Español/g, '');
  return ['obra', 'inversor', 'Pedir', 'Precios', 'Preguntas', 'Cámara', ' sus ', 'datos de', 'demostración'].filter(
    (w) => text.includes(w)
  );
});
await page.close();

console.log(JSON.stringify(results, null, 2));
await browser.close();
console.log(`Capturas guardadas en qa/ (home-{es,en}-{${widths.join(',')}}.png)`);
