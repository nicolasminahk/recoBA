import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prepareDraw, drawIn } from './draw.js';
import { fmt } from './format.js';

/**
 * Reveals de scroll variados: máscaras clip-path, desplazamientos y dibujado
 * de SVGs. Nada de fade-up genérico uniforme.
 */
export function initReveals() {
  // Titulares y bloques de texto: máscara vertical + leve desplazamiento
  document.querySelectorAll('[data-reveal]').forEach((el) => {
    gsap.fromTo(
      el,
      { clipPath: 'inset(0 0 100% 0)', y: 24 },
      {
        clipPath: 'inset(0 0 -8% 0)',
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 86%', once: true },
        onComplete: () => {
          el.style.clipPath = 'none';
        },
      }
    );
  });

  // Cards de estrategia: se separan desde el centro (exprés ← · → paciente)
  const strategyCards = gsap.utils.toArray('[data-strategy-card]');
  if (strategyCards.length) {
    strategyCards.forEach((card) => {
      const dir = card.dataset.strategyCard === 'left' ? -1 : 1;
      gsap.from(card, {
        autoAlpha: 0,
        x: 44 * dir,
        scale: 0.97,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: strategyCards[0], start: 'top 78%', once: true },
      });
    });
  }

  // Data-cards de la sección tinta: elevación secuencial
  const dataCards = gsap.utils.toArray('[data-data-card]');
  if (dataCards.length) {
    gsap.from(dataCards, {
      autoAlpha: 0,
      y: 34,
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.09,
      scrollTrigger: { trigger: dataCards[0], start: 'top 85%', once: true },
    });
  }

  // Cards de riesgo: entran alternando dirección
  const riskCards = gsap.utils.toArray('[data-riesgo-card]');
  riskCards.forEach((el, i) => {
    gsap.from(el, {
      autoAlpha: 0,
      x: i % 2 ? 32 : -32,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
    });
  });

  // Pasos de la cascada: se apilan de arriba hacia abajo
  const cascada = gsap.utils.toArray('[data-cascada-step]');
  if (cascada.length) {
    gsap.from(cascada, {
      autoAlpha: 0,
      y: 40,
      duration: 0.85,
      ease: 'power3.out',
      stagger: 0.18,
      scrollTrigger: { trigger: '[data-cascada]', start: 'top 80%', once: true },
    });
  }

  // SVGs sueltos que se dibujan al entrar (plano, arco del CTA, iconos co-inversión)
  document
    .querySelectorAll('svg.a-draw:not([data-hero-facade])')
    .forEach((svg) => {
      prepareDraw(svg);
      ScrollTrigger.create({
        trigger: svg,
        start: 'top 88%',
        once: true,
        onEnter: () => drawIn(svg, { duration: 1.4, stagger: 0.05 }),
      });
    });
}

/** Count-up de cifras clave: una sola vez, easing power4.out. */
export function initCountups() {
  document.querySelectorAll('[data-countup]').forEach((el) => {
    const to = parseFloat(el.dataset.to);
    if (Number.isNaN(to)) return;
    const state = { v: 0 };
    ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      once: true,
      onEnter: () =>
        gsap.to(state, {
          v: to,
          duration: 1.6,
          ease: 'power4.out',
          onUpdate: () => {
            el.textContent = fmt(state.v);
          },
        }),
    });
  });
}
