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
  'job-private': '/exams/job/private-job-exams',
  'job-central-govt': '/exams/job/central-govt',
  'job-state-govt': '/exams/job/state-govt',
  'academic-govt-institution': '/exams/academic-admission/govt-institution',
  'academic-private-institution': '/exams/academic-admission/private-institution',
  'academic-state-institution': '/exams/academic-admission/state-govt-institution',
  'school-cbse': '/exams/school/cbse',
  'school-icse': '/exams/school/icse',
  'school-state-board': '/exams/school/state-board',
  'govt-universities': '/exams/govt-universities',
  'intl-sat': '/exams/international/sat',
  'intl-gre': '/exams/international/gre',
  'intl-ielts': '/exams/international/ielts',
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
  'job-private',
  'job-central-govt',
  'job-state-govt',
  'academic-govt-institution',
  'academic-private-institution',
  'academic-state-institution',
  'school-cbse',
  'school-icse',
  'school-state-board',
  'govt-universities',
  'intl-sat',
  'intl-gre',
  'intl-ielts',
];

export function resolvePageIdFromPath(pathname) {
  const path = pathname.replace(/^\/|\/$/g, '');
  const pageId = Object.entries(routeMap).find(([, route]) => route === `/${path || ''}`)?.[0];
  return pageId ?? 'home';
}
