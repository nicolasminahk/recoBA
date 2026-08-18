import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Gráficos SVG hechos a mano: barras que crecen desde 0 con stagger y
 * waterfall que se construye pieza a pieza. Cada gráfico se anima una vez.
 */

function playBars(fig) {
  if (fig.dataset.played) return;
  fig.dataset.played = '1';
  const bars = fig.querySelectorAll('[data-bar]');
  const labels = fig.querySelectorAll('[data-bar-label]');
  gsap.set(labels, { autoAlpha: 0 });
  gsap.fromTo(
    bars,
    { scaleX: 0 },
    {
      scaleX: 1,
      duration: 1.1,
      ease: 'power3.out',
      stagger: 0.12,
      onComplete: () => gsap.to(labels, { autoAlpha: 1, duration: 0.5, stagger: 0.06 }),
    }
  );
}

function playWaterfall(fig) {
  if (fig.dataset.played) return;
  fig.dataset.played = '1';
  const segs = fig.querySelectorAll('[data-wf-seg]');
  const conns = fig.querySelectorAll('[data-wf-conn]');
  const labels = fig.querySelectorAll('[data-wf-label]');
  gsap.set(conns, { autoAlpha: 0 });
  gsap.set(labels, { autoAlpha: 0 });
  gsap
    .timeline()
    .fromTo(segs, { scaleY: 0 }, { scaleY: 1, duration: 0.7, ease: 'power3.out', stagger: 0.16 })
    .to(conns, { autoAlpha: 1, duration: 0.4, stagger: 0.05 }, '-=0.5')
    .to(labels, { autoAlpha: 1, duration: 0.5, stagger: 0.05 }, '-=0.3');
}

export function initCharts() {
  document.querySelectorAll('[data-chart-m2]').forEach((fig) => {
    ScrollTrigger.create({ trigger: fig, start: 'top 82%', once: true, onEnter: () => playBars(fig) });
  });
  document.querySelectorAll('[data-chart-waterfall]').forEach((fig) => {
    ScrollTrigger.create({
      trigger: fig,
      start: 'top 82%',
      once: true,
      onEnter: () => playWaterfall(fig),
    });
  });
}
