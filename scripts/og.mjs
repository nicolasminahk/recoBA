// Genera public/og.png (1200×630) a partir de scripts/og-template.html
import { chromium } from 'playwright';

const tpl = new URL('./og-template.html', import.meta.url);
const out = new URL('../public/og.png', import.meta.url).pathname;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.goto(tpl.href, { waitUntil: 'networkidle' });
await page.waitForTimeout(300);
await page.screenshot({ path: out });
await browser.close();
console.log(`OG image generada en ${out}`);
