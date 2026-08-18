import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initHero } from './hero.js';
import { initReveals, initCountups } from './reveals.js';
import { initCharts } from './charts.js';
import { initTimeline } from './timeline.js';
import { initNav, initMagnetic } from './interactions.js';

gsap.registerPlugin(ScrollTrigger);

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Interacción siempre activa (también con reduced motion)
initNav();

if (!reducedMotion) {
  const mm = gsap.matchMedia();
  initHero();
  initReveals();
  initCountups();
  initCharts();
  initTimeline(mm);
  initMagnetic();
}
