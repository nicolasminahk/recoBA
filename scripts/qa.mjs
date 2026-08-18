// QA funcional: animaciones, timeline, waterfall, menú móvil y consola limpia.
import { chromium } from 'playwright';

const base = process.argv[2] ?? 'http://localhost:4321';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

const errors = [];
page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
page.on('pageerror', (e) => errors.push(String(e)));

await page.goto(base, { waitUntil: 'networkidle' });
await page.waitForTimeout(2500);

const results = {};

// 1. Hero
results.heroLine = await page.evaluate(
  () => getComputedStyle(document.querySelector('[data-hero-title] .a-line > span')).transform
);
results.heroStatsOpacity = await page.evaluate(
  () => getComputedStyle(document.querySelector('[data-hero-stats]')).opacity
);
results.heroCountups = await page.evaluate(() =>
  [...document.querySelectorAll('[data-countup]')].slice(0, 6).map((e) => e.textContent)
);

// 2. Timeline del proceso: pin activo
await page.locator('#proceso').scrollIntoViewIfNeeded();
await page.waitForTimeout(700);
results.pinSpacer = await page.evaluate(() => !!document.querySelector('.pin-spacer'));

// 3. Gráfico m²
await page.locator('[data-chart-m2]').scrollIntoViewIfNeeded();
await page.waitForTimeout(1800);
results.m2BarScale = await page.evaluate(
  () => getComputedStyle(document.querySelector('[data-chart-m2] [data-bar]')).transform
);

// 4. Waterfall del caso
await page.locator('[data-chart-waterfall]').scrollIntoViewIfNeeded();
await page.waitForTimeout(1800);
results.wfSegScale = await page.evaluate(
  () => getComputedStyle(document.querySelector('[data-wf-seg]')).transform
);
results.wfTotal = await page.evaluate(() =>
  [...document.querySelectorAll('[data-wf-label]')].at(-1)?.textContent.trim()
);

// 5. Herramientas visibles
await page.locator('#herramientas').scrollIntoViewIfNeeded();
await page.waitForTimeout(1500);
results.toolCards = await page.evaluate(() => ({
  count: document.querySelectorAll('[data-tool-card]').length,
  firstOpacity: getComputedStyle(document.querySelector('[data-tool-card]')).opacity,
}));

// 6. Secciones presentes / eliminadas
results.sections = await page.evaluate(() =>
  [...document.querySelectorAll('main > section')].map((s) => s.id)
);

// 7. Menú móvil
const mob = await browser.newPage({ viewport: { width: 390, height: 844 } });
await mob.goto(base, { waitUntil: 'networkidle' });
await mob.click('#menu-btn');
results.mobileMenuOpen = await mob.evaluate(
  () => !document.getElementById('mobile-menu').classList.contains('hidden')
);
await mob.click('[data-menu-link]');
await mob.waitForTimeout(500);
results.mobileMenuCloses = await mob.evaluate(() =>
  document.getElementById('mobile-menu').classList.contains('hidden')
);
results.mobileOverflowX = await mob.evaluate(
  () => document.documentElement.scrollWidth > window.innerWidth
);

results.consoleErrors = errors;
console.log(JSON.stringify(results, null, 2));
await browser.close();
