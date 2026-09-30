import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initHero } from './hero.js';
import { initReveals } from './reveals.js';
import { initNav, initMagnetic } from './interactions.js';

gsap.registerPlugin(ScrollTrigger);

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Interacción siempre activa (también con reduced motion)
initNav();

if (!reducedMotion) {
  initHero();
  initReveals();
  initMagnetic();
}
