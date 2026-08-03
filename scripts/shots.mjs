// Screenshots de autoevaluación por sección (1440px y 390px).
// Uso: node scripts/shots.mjs [urlBase]  →  guarda en shots/
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';

const base = process.argv[2] ?? 'http://localhost:4321';
const outDir = new URL('../shots/', import.meta.url).pathname;
mkdirSync(outDir, { recursive: true });

const sections = [
  ['hero', '#top'],
  ['flipping', '#flipping'],
  ['por-que-ahora', '#por-que-ahora'],
  ['modelo', '#modelo'],
  ['casos', '#casos'],
  ['co-inversion', '#co-inversion'],
  ['compara', '#compara'],
  ['riesgos', '#riesgos'],
  ['roadmap', '#hoja-de-ruta'],
  ['footer', 'footer'],
];

const browser = await chromium.launch();

for (const [device, width, height] of [
  ['desktop', 1440, 900],
  ['mobile', 390, 844],
]) {
  const page = await browser.newPage({
    viewport: { width, height },
    reducedMotion: 'reduce', // capturas de layout estables, sin estados intermedios
  });
  await page.goto(base, { waitUntil: 'networkidle' });
  for (const [name, sel] of sections) {
    const el = page.locator(sel).first();
    await el.scrollIntoViewIfNeeded();
    await page.waitForTimeout(350);
    await el.screenshot({ path: `${outDir}${device}-${name}.png` }).catch(async () => {
      await page.screenshot({ path: `${outDir}${device}-${name}.png` });
    });
  }
  // página completa
  await page.screenshot({ path: `${outDir}${device}-full.png`, fullPage: true });
  await page.close();
}

await browser.close();
console.log('Screenshots guardados en shots/');
