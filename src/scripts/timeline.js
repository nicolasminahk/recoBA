import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Timeline del modelo: en desktop se ancla (pin) y la línea se dibuja con
 * scrub mientras los hitos se activan en secuencia; en móvil, línea vertical
 * con scrub suave sin pin.
 */
export function initTimeline(mm) {
  const wrap = document.querySelector('[data-timeline]');
  if (!wrap) return;

  const progress = wrap.querySelector('[data-timeline-progress]');
  const items = gsap.utils.toArray('[data-timeline-item]', wrap);
  const dots = gsap.utils.toArray('[data-timeline-dot]', wrap);

  mm.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
    gsap.set(items, { autoAlpha: 0.25, y: 18 });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrap,
        start: 'top 55%',
        end: '+=1200',
        pin: true,
        pinSpacing: true,
        scrub: 0.6,
      },
    });
    tl.fromTo(progress, { scaleX: 0 }, { scaleX: 1, ease: 'none', duration: 5 }, 0);
    items.forEach((item, i) => {
      tl.to(item, { autoAlpha: 1, y: 0, duration: 0.7, ease: 'none' }, i * 0.95 + 0.2);
      tl.to(
        dots[i],
        { backgroundColor: '#C2603D', borderColor: '#C2603D', duration: 0.25, ease: 'none' },
        i * 0.95 + 0.2
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
        scrollTrigger: {
          trigger: wrap,
          start: 'top 70%',
          end: 'bottom 55%',
          scrub: 0.6,
        },
      }
    );
    items.forEach((item, i) => {
      gsap.from(item, {
        autoAlpha: 0,
        y: 26,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: item, start: 'top 85%', once: true },
        onComplete: () => {
          dots[i]?.style.setProperty('background-color', '#C2603D');
          dots[i]?.style.setProperty('border-color', '#C2603D');
        },
      });
    });
    return () => st.scrollTrigger?.kill();
  });
}
