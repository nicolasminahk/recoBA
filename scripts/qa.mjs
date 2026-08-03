// QA funcional: animaciones, tabs, calculadora y errores de consola.
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

// 1. Hero: líneas del titular visibles tras la animación
results.heroLineY = await page.evaluate(() => {
  const s = document.querySelector('[data-hero-title] .a-line > span');
  return getComputedStyle(s).transform;
});
results.heroStatsOpacity = await page.evaluate(
  () => getComputedStyle(document.querySelector('[data-hero-stats]')).opacity
);
results.heroCountup = await page.evaluate(
  () => document.querySelector('[data-countup][data-to="27800"]').textContent
);

// 2. Scroll al gráfico m² y comprobar barras a escala 1
await page.locator('[data-chart-m2]').scrollIntoViewIfNeeded();
await page.waitForTimeout(2000);
results.m2BarScale = await page.evaluate(() => {
  const b = document.querySelector('[data-chart-m2] [data-bar]');
  return getComputedStyle(b).transform;
});

// 3. Timeline pin: la sección modelo genera pin-spacer
await page.locator('#modelo').scrollIntoViewIfNeeded();
await page.waitForTimeout(500);
results.pinSpacer = await page.evaluate(() => !!document.querySelector('.pin-spacer'));

// 4. Waterfall del caso visible
await page.locator('[data-chart-waterfall]').first().scrollIntoViewIfNeeded();
await page.waitForTimeout(2000);
results.wfSegScale = await page.evaluate(() => {
  const s = document.querySelector('[data-panel="camargo"] [data-wf-seg]');
  return getComputedStyle(s).transform;
});

// 5. Tabs: cambiar a Recoleta
await page.click('[data-tab="recoleta"]');
await page.waitForTimeout(1600);
results.tabRecoletaVisible = await page.evaluate(() => {
  const p = document.querySelector('[data-panel="recoleta"]');
  return !p.classList.contains('hidden') && getComputedStyle(p).opacity === '1';
});
results.tabCamargoHidden = await page.evaluate(() =>
  document.querySelector('[data-panel="camargo"]').classList.contains('hidden')
);
results.wfRecoletaTotal = await page.evaluate(() =>
  [...document.querySelectorAll('[data-panel="recoleta"] [data-wf-label]')].at(-1)?.textContent.trim()
);

// 6. Calculadora
await page.locator('#co-inversion').scrollIntoViewIfNeeded();
await page.waitForTimeout(800);
await page.locator('#calc-ticket').fill('50000');
await page.click('[data-esc="2"]');
await page.waitForTimeout(900);
results.calc50kOptimista = await page.evaluate(() => ({
  ticket: document.getElementById('calc-ticket-out').textContent,
  pref: document.getElementById('calc-pref').textContent,
  prefAcum: document.getElementById('calc-pref-acum').textContent,
  plus: document.getElementById('calc-plus').textContent,
  total: document.getElementById('calc-total').textContent,
  cobertura: document.getElementById('calc-cobertura').textContent.slice(0, 40),
}));

// 7. Menú móvil
const mob = await browser.newPage({ viewport: { width: 390, height: 844 } });
await mob.goto(base, { waitUntil: 'networkidle' });
await mob.click('#menu-btn');
results.mobileMenuOpen = await mob.evaluate(
  () => !document.getElementById('mobile-menu').classList.contains('hidden')
);
await mob.click('[data-menu-link]');
await mob.waitForTimeout(600);
results.mobileMenuClosesOnClick = await mob.evaluate(() =>
  document.getElementById('mobile-menu').classList.contains('hidden')
);

results.consoleErrors = errors;
console.log(JSON.stringify(results, null, 2));
await browser.close();
