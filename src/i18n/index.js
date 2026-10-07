/**
 * Idiomas de la web. El español es el idioma por defecto y vive en `/`;
 * el inglés vive en `/en/`. Todo el texto visible está en es.js y en.js,
 * con la misma estructura: para cambiar una frase, se cambia en los dos.
 */
import es from './es.js';
import en from './en.js';

export const LOCALES = /** @type {const} */ (['es', 'en']);
export const DEFAULT_LOCALE = 'es';

const dictionaries = { es, en };

/** Idioma de la página actual (lo resuelve el i18n de Astro por la ruta). */
export function getLang(astro) {
  const l = astro.currentLocale;
  return l && l in dictionaries ? l : DEFAULT_LOCALE;
}

/** Textos de la página actual. */
export function useT(astro) {
  return dictionaries[getLang(astro)];
}

/** Ruta de la home en cada idioma. */
export function homePath(lang) {
  return lang === DEFAULT_LOCALE ? '/' : `/${lang}/`;
}
