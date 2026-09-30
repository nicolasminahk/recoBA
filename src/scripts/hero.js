import gsap from 'gsap';

/**
 * Entrada orquestada del hero: titular línea a línea (clip por overflow),
 * luego sub, CTAs y la captura del panel, que sube levemente.
 */
export function initHero() {
  const title = document.querySelector('[data-hero-title]');
  if (!title) return;

  const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

  tl.to('[data-hero-eyebrow]', { opacity: 1, duration: 0.7 }, 0.1)
    .to('[data-hero-title] .a-line > span', { y: 0, duration: 1.1, stagger: 0.09 }, 0.15)
    .to('[data-hero-sub]', { opacity: 1, duration: 0.9 }, 0.65)
    .to('[data-hero-ctas]', { opacity: 1, duration: 0.9 }, 0.8)
    .fromTo(
      '[data-hero-shot]',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.2, clearProps: 'transform' },
      0.9
    );

  return tl;
}
