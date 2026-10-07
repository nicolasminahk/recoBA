/**
 * Datos compartidos de la web: contacto, demos y CTA. Un único sitio para
 * cambiar el correo o las URLs de las demos.
 */
import es from '../i18n/es.js';
import en from '../i18n/en.js';

export const EMAIL = 'nicolasminahk@gmail.com';

export const DEMO_PORTAL = 'https://gestion.recoba.casa';
export const DEMO_ADMIN = 'https://gestion.recoba.casa/admin';
export const RADAR = 'https://buscador.recoba.casa';

const mail = { es: es.demoMail, en: en.demoMail };

/** Todos los botones «Pedir una demo» apuntan aquí, con el asunto y el cuerpo en el idioma de la página. */
export function mailtoDemo(lang = 'es') {
  const { subject, body } = mail[lang] ?? mail.es;
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body.join('\n'))}`;
}

export const MAILTO_DEMO = mailtoDemo('es');
