/**
 * Build an absolute path with the configured base prefix applied.
 * Use this for ALL internal links so the site works whether deployed
 * at root (e.g. returntoform.com) or under a subpath (e.g. github.io/rtf-static-test).
 */
export function bp(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${normalizedBase}${normalizedPath}`;
}
