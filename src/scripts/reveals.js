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

  // Cards de herramientas: entran escalonadas con leve elevación
  const toolCards = gsap.utils.toArray('[data-tool-card]');
  if (toolCards.length) {
    gsap.from(toolCards, {
      autoAlpha: 0,
      y: 36,
      scale: 0.98,
      duration: 0.95,
      ease: 'power3.out',
      stagger: 0.12,
      scrollTrigger: { trigger: toolCards[0], start: 'top 82%', once: true },
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

  // Cards de riesgo: entran escalonadas (sin desplazamiento lateral, que
  // provocaba overflow horizontal transitorio en móvil)
  const riskCards = gsap.utils.toArray('[data-riesgo-card]');
  if (riskCards.length) {
    gsap.from(riskCards, {
      autoAlpha: 0,
      y: 30,
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.1,
      scrollTrigger: { trigger: riskCards[0], start: 'top 86%', once: true },
    });
  }

  // SVGs sueltos que se dibujan al entrar (plano, arco del CTA, iconos)
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
