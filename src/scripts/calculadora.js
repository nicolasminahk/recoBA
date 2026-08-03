import gsap from 'gsap';
import { fmt } from './format.js';

/**
 * Calculadora de co-inversión sobre el caso metodológico de Recoleta.
 * Cascada: preferente 6% anual (4,33 años efectivos) → capital → 80% de la
 * plusvalía a prorrata del ticket sobre la inversión total (US$ 138.850).
 */
const INVERSION_TOTAL = 138850;
const ANOS_EFECTIVOS = 4.33;
const PREFERENTE = 0.06;
const PLUSVALIAS = [13017, 42081, 78741];
const COBERTURAS = [
  'En escenario conservador, la renta neta cubre 0,81x la preferente: el defecto se acumula (es acumulativa) y se liquida con prioridad en la venta.',
  'En escenario base, la renta neta cubre 1,10x la preferente del conjunto de inversores.',
  'En escenario optimista, la renta neta cubre 1,41x la preferente, con excedente distribuible cada trimestre.',
];

export function initCalculadora(reducedMotion) {
  const slider = document.getElementById('calc-ticket');
  if (!slider) return;

  const out = {
    ticket: document.getElementById('calc-ticket-out'),
    pref: document.getElementById('calc-pref'),
    prefAcum: document.getElementById('calc-pref-acum'),
    plus: document.getElementById('calc-plus'),
    total: document.getElementById('calc-total'),
    cobertura: document.getElementById('calc-cobertura'),
  };
  const escBtns = document.querySelectorAll('[data-esc]');

  const state = { esc: 1 };
  const shown = { pref: 0, prefAcum: 0, plus: 0, total: 0 };

  function compute() {
    const ticket = Number(slider.value);
    const pref = ticket * PREFERENTE;
    const prefAcum = pref * ANOS_EFECTIVOS;
    const plus = 0.8 * PLUSVALIAS[state.esc] * (ticket / INVERSION_TOTAL);
    return { ticket, pref, prefAcum, plus, total: ticket + prefAcum + plus };
  }

  function render(animate = true) {
    const v = compute();
    out.ticket.textContent = fmt(v.ticket);
    out.cobertura.textContent = COBERTURAS[state.esc];
    const targets = { pref: v.pref, prefAcum: v.prefAcum, plus: v.plus, total: v.total };
    if (!animate || reducedMotion) {
      Object.entries(targets).forEach(([k, val]) => {
        shown[k] = val;
        out[k].textContent = fmt(val);
      });
      return;
    }
    gsap.to(shown, {
      ...targets,
      duration: 0.5,
      ease: 'power3.out',
      overwrite: true,
      onUpdate: () => {
        Object.keys(targets).forEach((k) => {
          out[k].textContent = fmt(shown[k]);
        });
      },
    });
  }

  slider.addEventListener('input', () => render());
  escBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      state.esc = Number(btn.dataset.esc);
      escBtns.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
      render();
    });
  });

  render(false);
}
