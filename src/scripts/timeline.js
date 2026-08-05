import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Diagrama del ciclo con bifurcación (desktop): el tronco común se dibuja,
 * los hitos aparecen y las dos ramas (exprés y paciente) se trazan a la vez
 * con pin + scrub. En móvil la versión vertical usa los reveals genéricos.
 */
export function initTimeline(mm) {
  const wrap = document.querySelector('[data-fork]');
  if (!wrap) return;

  mm.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
    const trunk = wrap.querySelector('[data-fork-trunk]');
    const expres = wrap.querySelector('[data-fork-expres]');
    const paciente = wrap.querySelector('[data-fork-paciente]');
    const nodes = gsap.utils.toArray('[data-fork-node]', wrap);
    const nodesE = gsap.utils.toArray('[data-fork-node-e]', wrap);
    const nodesP = gsap.utils.toArray('[data-fork-node-p]', wrap);

    [trunk, expres, paciente].forEach((p) => {
      const len = p.getTotalLength();
      p.style.strokeDasharray = `${len}`;
      p.style.strokeDashoffset = `${len}`;
    });
    gsap.set([...nodes, ...nodesE, ...nodesP], {
      autoAlpha: 0,
      y: 12,
      transformOrigin: 'center center',
    });

    const tl = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: wrap,
        start: 'center 60%',
        end: '+=1100',
        pin: true,
        scrub: 0.6,
      },
    });

    tl.to(trunk, { strokeDashoffset: 0, duration: 2.2 }, 0)
      .to(nodes[0], { autoAlpha: 1, y: 0, duration: 0.5 }, 0.1)
      .to(nodes[1], { autoAlpha: 1, y: 0, duration: 0.5 }, 1.1)
      .to(nodes[2], { autoAlpha: 1, y: 0, duration: 0.5 }, 2.1)
      // las dos ramas se dibujan en paralelo: la decisión, visualizada
      .to([expres, paciente], { strokeDashoffset: 0, duration: 3 }, 2.5)
      .to(nodesE[0], { autoAlpha: 1, y: 0, duration: 0.5 }, 3.6)
      .to(nodesP[0], { autoAlpha: 1, y: 0, duration: 0.5 }, 3.8)
      .to(nodesP[1], { autoAlpha: 1, y: 0, duration: 0.5 }, 4.6)
      .to(nodesE[1], { autoAlpha: 1, y: 0, duration: 0.5 }, 5.0)
      .to(nodesP[2], { autoAlpha: 1, y: 0, duration: 0.5 }, 5.2);

    return () => tl.scrollTrigger?.kill();
  });
}
