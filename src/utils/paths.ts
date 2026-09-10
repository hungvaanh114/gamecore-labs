export function withBase(path = '/') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  let normalized = path.startsWith('/') ? path : `/${path}`;
  const lastSegment = normalized.split('/').pop() || '';
  if (normalized !== '/' && !normalized.endsWith('/') && !lastSegment.includes('.') && !normalized.includes('#')) normalized += '/';
  return `${base}${normalized}` || '/';
}

export type Locale = 'en' | 'vi';

export function localizedPath(path = '/', locale: Locale = 'en') {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return withBase(locale === 'vi' ? `/vi${normalized === '/' ? '/' : normalized}` : normalized);
}

export function localeAlternatePath(pathname: string, locale: Locale) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  let relative = pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  if (!relative.startsWith('/')) relative = `/${relative}`;
  relative = relative.replace(/^\/vi(?=\/|$)/, '') || '/';
  return localizedPath(relative, locale);
}
