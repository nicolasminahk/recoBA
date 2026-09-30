import gsap from 'gsap';

/**
 * Hero: titular línea a línea, luego sub y CTAs; la escena 3D entra por
 * capas desde el fondo y después responde al ratón (inclinación y parallax
 * por profundidad), flota en reposo y se aplana suavemente al hacer scroll.
 */
export function initHero() {
  const title = document.querySelector('[data-hero-title]');
  if (!title) return;

  const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

  tl.to('[data-hero-eyebrow]', { opacity: 1, duration: 0.7 }, 0.1)
    .to('[data-hero-title] .a-line > span', { y: 0, duration: 1.1, stagger: 0.09 }, 0.15)
    .to('[data-hero-sub]', { opacity: 1, duration: 0.9 }, 0.65)
    .to('[data-hero-ctas]', { opacity: 1, duration: 0.9 }, 0.8);

  initScene(tl);
  return tl;
}

function initScene(tl) {
  const stage = document.querySelector('[data-hero-stage]');
  if (!stage) return;
  const tilt = stage.querySelector('[data-stage-tilt]');
  const inner = stage.querySelector('[data-stage-inner]');
  const base = stage.querySelector('.layer-base');
  const cards = gsap.utils.toArray(stage.querySelectorAll('.card'));
  const floats = gsap.utils.toArray(stage.querySelectorAll('[data-float]'));

  // Inclinación inicial = la del CSS en cada ancho, para que no haya salto
  const mq = (q) => window.matchMedia(q).matches;
  const REST = mq('(min-width: 1024px)')
    ? { rotateX: 12, rotateY: 10 }
    : mq('(min-width: 640px)')
      ? { rotateX: 10, rotateY: -6 }
      : { rotateX: 8, rotateY: -3 };
  gsap.set(tilt, REST);
  gsap.set(stage, { opacity: 1 });

  // Entrada: el panel sube desde el fondo; las tarjetas emergen por capas
  tl.fromTo(base, { autoAlpha: 0, z: -260, y: 60 }, { autoAlpha: 1, z: 0, y: 0, duration: 1.4 }, 0.75);
  cards.forEach((card, i) => {
    const z = parseFloat(getComputedStyle(card).getPropertyValue('--z')) || 80;
    tl.fromTo(
      card,
      { autoAlpha: 0, z: z - 220, y: 30 },
      { autoAlpha: 1, z, y: 0, duration: 1.2, ease: 'power3.out' },
      1.05 + i * 0.12
    );
  });

  // Flotación en reposo: cada tarjeta con su ritmo
  tl.add(() => {
    floats.forEach((el, i) => {
      gsap.to(el, {
        y: i % 2 ? 7 : -7,
        duration: 3 + i * 0.6,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });
    });
  }, 1.6);

  // Se aplana al hacer scroll: de la inclinación de reposo a casi frontal
  gsap.to(tilt, {
    rotateX: 3,
    rotateY: REST.rotateY > 0 ? 2 : -2,
    ease: 'none',
    scrollTrigger: { trigger: stage, start: 'top 80%', end: 'bottom 20%', scrub: 0.6 },
  });

  // Parallax por profundidad con el puntero (solo puntero fino)
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  const rx = gsap.quickTo(inner, 'rotateX', { duration: 0.8, ease: 'power3.out' });
  const ry = gsap.quickTo(inner, 'rotateY', { duration: 0.8, ease: 'power3.out' });
  const movers = cards.map((c) => ({
    depth: parseFloat(c.dataset.depth) || 1,
    x: gsap.quickTo(c, 'x', { duration: 0.9, ease: 'power3.out' }),
    y: gsap.quickTo(c, 'y', { duration: 0.9, ease: 'power3.out' }),
  }));
  const section = stage.closest('section') ?? stage;
  section.addEventListener('pointermove', (e) => {
    const r = stage.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width - 0.5;
    const ny = (e.clientY - r.top) / r.height - 0.5;
    rx(-ny * 6);
    ry(nx * 8);
    movers.forEach((m) => {
      m.x(nx * 28 * m.depth);
      m.y(ny * 18 * m.depth);
    });
  });
  section.addEventListener('pointerleave', () => {
    rx(0);
    ry(0);
    movers.forEach((m) => {
      m.x(0);
      m.y(0);
    });
  });
}
