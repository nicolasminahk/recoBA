import gsap from 'gsap';
import { prepareDraw, drawIn } from './draw.js';

/**
 * Entrada orquestada del hero: titular línea a línea (clip por overflow),
 * luego sub, CTAs y stats; la fachada se dibuja con stroke-dashoffset.
 */
export function initHero() {
  const title = document.querySelector('[data-hero-title]');
  if (!title) return;

  const facade = document.querySelector('[data-hero-facade]');
  if (facade) prepareDraw(facade);

  const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

  tl.to('[data-hero-eyebrow]', { opacity: 1, duration: 0.7 }, 0.1)
    .to(
      '[data-hero-title] .a-line > span',
      { y: 0, duration: 1.1, stagger: 0.09 },
      0.15
    )
    .to('[data-hero-sub]', { opacity: 1, duration: 0.9 }, 0.65)
    .to('[data-hero-ctas]', { opacity: 1, duration: 0.9 }, 0.8)
    .to('[data-hero-stats]', { opacity: 1, duration: 0.9 }, 0.95);

  if (facade) {
    tl.add(drawIn(facade, { duration: 1.8, stagger: 0.028 }), 0.4);
    // Parallax leve de la ilustración al hacer scroll
    gsap.to(facade, {
      yPercent: -6,
      ease: 'none',
      scrollTrigger: {
        trigger: '#top',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }

  return tl;
}
