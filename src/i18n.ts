/*
 * English / Romanian switch. English is the source everywhere; Romanian comes from
 * ro-content.json (all plan, place and tip texts, keyed by the English text) and from
 * t('English', 'Română') for the interface. Anything without a translation stays English.
 */
import RO from './ro-content.json';

export type Lang = 'en' | 'ro';
const KEY = 'taiwan-lang';

function load(): Lang {
  try {
    return localStorage.getItem(KEY) === 'ro' ? 'ro' : 'en';
  } catch {
    return 'en';
  }
}

export let lang: Lang = load();

export function setLang(l: Lang) {
  lang = l;
  try {
    localStorage.setItem(KEY, l);
  } catch {
    /* private mode: the choice just isn't remembered */
  }
  document.documentElement.lang = l;
}
document.documentElement.lang = lang;

const ro = RO as Record<string, string>;
/** Translate a content string (plan, places, tips…) */
export const tr = (s: string) => (lang === 'ro' ? (ro[s] ?? s) : s);
/** Interface text: English and Romanian side by side */
export const t = (en: string, roText: string) => (lang === 'ro' ? roText : en);
export const locale = () => (lang === 'ro' ? 'ro-RO' : 'en-GB');
