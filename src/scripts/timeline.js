import gsap from 'gsap';

/**
 * Línea del proceso: se traza con scrub mientras los pasos se activan en
 * secuencia. Desktop: horizontal con pin. Móvil: vertical sin pin.
 */
export function initTimeline(mm) {
  const wrap = document.querySelector('[data-proceso]');
  if (!wrap) return;

  const progress = wrap.querySelector('[data-proceso-progress]');
  const steps = gsap.utils.toArray('[data-proceso-step]', wrap);
  const dots = gsap.utils.toArray('[data-proceso-dot]', wrap);

  mm.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
    gsap.set(steps, { autoAlpha: 0.25, y: 16 });
    const tl = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: wrap,
        start: 'center 62%',
        end: '+=900',
        pin: true,
        scrub: 0.6,
      },
    });
    tl.fromTo(progress, { scaleX: 0 }, { scaleX: 1, duration: 4 }, 0);
    steps.forEach((step, i) => {
      tl.to(step, { autoAlpha: 1, y: 0, duration: 0.6 }, i * 0.95 + 0.15);
      tl.to(
        dots[i],
        { backgroundColor: '#C2603D', borderColor: '#C2603D', duration: 0.25 },
        i * 0.95 + 0.15
      );
    });
    return () => tl.scrollTrigger?.kill();
  });

  mm.add('(max-width: 1023px) and (prefers-reduced-motion: no-preference)', () => {
    const st = gsap.fromTo(
      progress,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: { trigger: wrap, start: 'top 70%', end: 'bottom 60%', scrub: 0.6 },
      }
    );
    steps.forEach((step, i) => {
      gsap.from(step, {
        autoAlpha: 0,
        y: 26,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: step, start: 'top 85%', once: true },
        onComplete: () => {
          dots[i]?.style.setProperty('background-color', '#C2603D');
          dots[i]?.style.setProperty('border-color', '#C2603D');
        },
      });
    });
    return () => st.scrollTrigger?.kill();
  });
}
