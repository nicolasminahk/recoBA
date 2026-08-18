import gsap from 'gsap';

/** Estado de la barra de navegación al hacer scroll + menú móvil. */
export function initNav() {
  const nav = document.getElementById('nav');
  const scrolledClasses = [
    'bg-paper/60',
    'backdrop-blur-xl',
    'border-ink/10',
    'shadow-[0_1px_0_rgba(22,24,29,0.04)]',
  ];
  const onScroll = () => {
    const scrolled = window.scrollY > 40;
    scrolledClasses.forEach((c) => nav.classList.toggle(c, scrolled));
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    const close = () => {
      menu.classList.add('hidden');
      btn.setAttribute('aria-expanded', 'false');
      btn.setAttribute('aria-label', 'Abrir menú');
    };
    btn.addEventListener('click', () => {
      const open = menu.classList.toggle('hidden') === false;
      btn.setAttribute('aria-expanded', String(open));
      btn.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    });
    menu.querySelectorAll('[data-menu-link]').forEach((a) => a.addEventListener('click', close));
  }
}

/** Hover magnético sutil en botones (solo puntero fino, sin reduced motion). */
export function initMagnetic() {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  document.querySelectorAll('[data-magnetic]').forEach((el) => {
    const xTo = gsap.quickTo(el, 'x', { duration: 0.4, ease: 'power3.out' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.4, ease: 'power3.out' });
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      xTo(((e.clientX - r.left) / r.width - 0.5) * 8);
      yTo(((e.clientY - r.top) / r.height - 0.5) * 6);
    });
    el.addEventListener('mouseleave', () => {
      xTo(0);
      yTo(0);
    });
  });
}
