// Genera las imágenes Open Graph (1200×630) a partir de scripts/og-template.html:
//   public/og.png    → español (texto tal cual está en la plantilla)
//   public/og-en.png → inglés (se sustituyen los textos antes de la captura)
import { chromium } from 'playwright';

const tpl = new URL('./og-template.html', import.meta.url);
const outFor = (name) => new URL(`../public/${name}`, import.meta.url).pathname;

const variants = [
  { file: 'og.png', text: null },
  {
    file: 'og-en.png',
    text: {
      eyebrow: 'Project and investment tracking dashboard',
      h1: 'Every project, every euro and every investor, <em>in one dashboard.</em>',
      sub: "Installed in your company's own accounts, and it's yours. One-off payment, no mandatory subscription.",
    },
  },
];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
for (const v of variants) {
  await page.goto(tpl.href, { waitUntil: 'networkidle' });
  if (v.text) {
    await page.evaluate((t) => {
      document.querySelector('.eyebrow').textContent = t.eyebrow;
      document.querySelector('h1').innerHTML = t.h1;
      document.querySelector('.sub').textContent = t.sub;
    }, v.text);
  }
  await page.waitForTimeout(300);
  const out = outFor(v.file);
  await page.screenshot({ path: out });
  console.log(`OG image generada en ${out}`);
}
await browser.close();
