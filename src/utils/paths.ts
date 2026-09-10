export function withBase(path = '/') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  let normalized = path.startsWith('/') ? path : `/${path}`;
  const lastSegment = normalized.split('/').pop() || '';
  if (normalized !== '/' && !normalized.endsWith('/') && !lastSegment.includes('.') && !normalized.includes('#')) normalized += '/';
  return `${base}${normalized}` || '/';
}
