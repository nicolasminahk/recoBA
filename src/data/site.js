/**
 * Datos compartidos de la web: contacto, demos y CTA. Un único sitio para
 * cambiar el correo o las URLs de las demos.
 */
export const EMAIL = 'nicolasminahk@gmail.com';

export const DEMO_PORTAL = 'https://gestion.recoba.casa';
export const DEMO_ADMIN = 'https://gestion.recoba.casa/admin';
export const RADAR = 'https://buscador.recoba.casa';

const body = ['Empresa: ', 'Nombre: ', 'Obras en curso: ', '', 'Me gustaría ver una demo de recoBA.'].join('\n');

/** Todos los botones «Pedir una demo» apuntan aquí. */
export const MAILTO_DEMO = `mailto:${EMAIL}?subject=${encodeURIComponent('Demo recoBA')}&body=${encodeURIComponent(body)}`;
