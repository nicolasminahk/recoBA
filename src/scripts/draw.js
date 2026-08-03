import gsap from 'gsap';

const SHAPES = 'path, line, polyline, circle, rect';

function shapeLength(el) {
  if (typeof el.getTotalLength === 'function') {
    try {
      return el.getTotalLength();
    } catch {
      /* rect/line en algunos motores antiguos */
    }
  }
  return 600;
}

/** Prepara stroke-dasharray/offset para el efecto "se dibuja". */
export function prepareDraw(svg) {
  svg.querySelectorAll(SHAPES).forEach((el) => {
    const len = shapeLength(el);
    el.style.strokeDasharray = `${len}`;
    el.style.strokeDashoffset = `${len}`;
  });
}

/** Devuelve un tween que dibuja todos los trazos del SVG. */
export function drawIn(svg, { duration = 1.6, stagger = 0.03, ease = 'power2.inOut' } = {}) {
  return gsap.to(svg.querySelectorAll(SHAPES), {
    strokeDashoffset: 0,
    duration,
    stagger,
    ease,
  });
}
