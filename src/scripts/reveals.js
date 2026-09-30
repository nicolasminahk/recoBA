import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prepareDraw, drawIn } from './draw.js';

/**
 * Reveals de scroll sobrios: máscara vertical en titulares, entrada
 * escalonada de tarjetas y dibujado de iconos SVG. Todo se ejecuta una vez
 * y sin estilos inline residuales, para que el contenido quede íntegro.
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

  // Tarjetas: se agrupan por sección para escalonarlas entre sí
  document.querySelectorAll('section').forEach((section) => {
    const cards = gsap.utils.toArray(section.querySelectorAll('[data-card]'));
    if (!cards.length) return;
    gsap.from(cards, {
      autoAlpha: 0,
      y: 30,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.08,
      scrollTrigger: { trigger: cards[0], start: 'top 86%', once: true },
      clearProps: 'all',
    });
  });

  // Capturas del producto: entran con leve elevación
  gsap.utils.toArray('.prod-media, #propiedad .shot').forEach((el) => {
    gsap.from(el, {
      autoAlpha: 0,
      y: 40,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      clearProps: 'all',
    });
  });

  // Iconos SVG que se dibujan al entrar
  document.querySelectorAll('svg.a-draw').forEach((svg) => {
    prepareDraw(svg);
    ScrollTrigger.create({
      trigger: svg,
      start: 'top 88%',
      once: true,
      onEnter: () => drawIn(svg, { duration: 1.2, stagger: 0.05 }),
    });
  });
}
