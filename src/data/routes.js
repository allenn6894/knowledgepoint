export const routeMap = {
  home: '/',
  jobs: '/jobs',
  exams: '/exams',
  banking: '/exams/banking',
  admin: '/exams/admin',
  engineering: '/exams/engineering',
  medical: '/exams/medical',
  'admin-ssc-cgl-2026': '/exams/admin/ssc-cgl-2026',
  'admin-state-service-2026': '/exams/admin/state-service-2026',
  pyq: '/pyq',
  results: '/results',
  calendar: '/calendar',
};

/**
 * Linear "article" reading order used for Previous/Next navigation.
 * Home, PYQ and Calendar have bespoke layouts and are excluded.
 */
export const readingOrder = [
  'jobs',
  'exams',
  'banking',
  'admin',
  'engineering',
  'medical',
  'admin-ssc-cgl-2026',
  'admin-state-service-2026',
];

export function resolvePageIdFromPath(pathname) {
  const path = pathname.replace(/^\/|\/$/g, '');
  const pageId = Object.entries(routeMap).find(([, route]) => route === `/${path || ''}`)?.[0];
  return pageId ?? 'home';
}
