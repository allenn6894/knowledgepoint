import homeContent from '../content/home.md?raw';
import jobsContent from '../content/jobs.md?raw';
import examsContent from '../content/exams.md?raw';
import pyqContent from '../content/pyq.md?raw';
import calendarContent from '../content/calendar.md?raw';
import resultsContent from '../content/results.md?raw';
import bankingContent from '../content/banking.md?raw';
import adminContent from '../content/admin.md?raw';
import engineeringContent from '../content/engineering.md?raw';
import medicalContent from '../content/medical.md?raw';
import sscCgl2026Content from '../content/exams/ssc-cgl-2026.mdx';
import stateService2026 from '../content/exams/state-service-2026.md?raw';

/**
 * Placeholder content for exam categories that don't have dedicated
 * write-ups yet. Deliberately generic ("coming soon") rather than
 * fabricated exam details.
 */
function comingSoonContent(title) {
  return `# ${title}\n\nWe're actively building out this section. Notifications, eligibility criteria, and preparation resources for **${title}** will be added here soon.\n\n- Check back for updates\n- Browse other categories from the Exams menu in the meantime\n`;
}

export const menuItems = [
  {
    id: 'home',
    title: 'Home',
    children: [
      { id: 'home-overview', title: 'Overview', pageId: 'home' },
      { id: 'home-start', title: 'Getting Started', pageId: 'home' },
    ],
  },
  {
    id: 'jobs',
    title: 'Jobs',
    children: [
      { id: 'jobs-opportunities', title: 'Opportunities', pageId: 'jobs' },
      { id: 'jobs-guidance', title: 'Guidance', pageId: 'jobs' },
    ],
  },
  {
    id: 'exams',
    title: 'Exams',
    megaMenu: true,
    groups: [
      {
        heading: 'Overview',
        items: [{ id: 'exams-upcoming', title: 'Upcoming Exams & Prep Tips', pageId: 'exams' }],
      },
      {
        heading: 'Job Exams',
        items: [
          { id: 'exams-job-private', title: 'Private Job Exams', pageId: 'job-private' },
          { id: 'exams-job-central', title: 'Central Govt', pageId: 'job-central-govt' },
          { id: 'exams-job-state', title: 'State Govt', pageId: 'job-state-govt' },
        ],
      },
      {
        heading: 'Academic Admission',
        items: [
          { id: 'exams-academic-govt', title: 'Govt Institution', pageId: 'academic-govt-institution' },
          { id: 'exams-academic-private', title: 'Private Institution', pageId: 'academic-private-institution' },
          { id: 'exams-academic-state', title: 'State Govt Institution', pageId: 'academic-state-institution' },
        ],
      },
      {
        heading: 'School Exams',
        items: [
          { id: 'exams-school-cbse', title: 'CBSE', pageId: 'school-cbse' },
          { id: 'exams-school-icse', title: 'ICSE', pageId: 'school-icse' },
          { id: 'exams-school-state-board', title: 'State Govt Board Exams', pageId: 'school-state-board' },
        ],
      },
      {
        heading: 'Govt Universities Exams',
        items: [{ id: 'exams-govt-universities', title: 'Explore Govt Universities', pageId: 'govt-universities' }],
      },
      {
        heading: 'International Exams',
        items: [
          { id: 'exams-intl-sat', title: 'SAT', pageId: 'intl-sat' },
          { id: 'exams-intl-gre', title: 'GRE', pageId: 'intl-gre' },
          { id: 'exams-intl-ielts', title: 'IELTS', pageId: 'intl-ielts' },
        ],
      },
      {
        heading: 'Exam Categories',
        items: [
          { id: 'exams-banking', title: 'Banking', pageId: 'banking' },
          { id: 'exams-admin', title: 'Administrative', pageId: 'admin' },
          { id: 'exams-engineering', title: 'Engineering', pageId: 'engineering' },
          { id: 'exams-medical', title: 'Medical', pageId: 'medical' },
        ],
      },
    ],
  },
  {
    id: 'pyq',
    title: 'PYQ',
    children: [
      { id: 'pyq-papers', title: 'Previous Papers', pageId: 'pyq' },
      { id: 'pyq-solutions', title: 'Solutions', pageId: 'pyq' },
    ],
  },
  {
    id: 'results',
    title: 'Results',
    children: [
      { id: 'results-latest', title: 'Latest Results', pageId: 'results' },
    ],
  },
  {
    id: 'calendar',
    title: 'Calendar',
    children: [
      { id: 'calendar-view', title: 'View Calendar', pageId: 'calendar' },
    ],
  },
];

export const pages = [
  {
    id: 'home',
    title: 'Welcome to Knowledge Point',
    description: 'A flexible frontend template for learning resources, career updates, and exam support.',
    content: homeContent,
    quickLinks: [
      { label: 'Explore Jobs', pageId: 'jobs' },
      { label: 'View Exams', pageId: 'exams' },
      { label: 'Check PYQ', pageId: 'pyq' },
    ],
    heroSlides: [
      {
        eyebrow: 'Career Opportunities',
        title: 'Explore Jobs',
        description: 'Find the latest recruitment drives, openings, and career guidance in one place.',
        pageId: 'jobs',
        ctaLabel: 'Explore Jobs',
      },
      {
        eyebrow: 'Exam Preparation',
        title: 'View Exams',
        description: 'Stay on top of upcoming exam notifications, dates, and preparation tips.',
        pageId: 'exams',
        ctaLabel: 'View Exams',
      },
      {
        eyebrow: 'Practice & Revise',
        title: 'Check PYQ',
        description: 'Access previous year questions and solutions to sharpen your preparation.',
        pageId: 'pyq',
        ctaLabel: 'Check PYQ',
      },
    ],
    cards: [
      {
        title: 'Jobs',
        description: 'Find career opportunities, guides, and recruitment updates.',
        pageId: 'jobs',
        icon: '💼',
      },
      {
        title: 'Exams',
        description: 'Discover upcoming exams, dates, and preparation tips.',
        pageId: 'exams',
        icon: '📝',
      },
      {
        title: 'PYQ',
        description: 'Access previous year questions and solutions with ease.',
        pageId: 'pyq',
        icon: '📚',
      },
    ],
  },
  {
    id: 'jobs',
    title: 'Jobs',
    description: 'Browse job-related resources, opportunities, and guidance.',
    content: jobsContent,
  },
  {
    id: 'exams',
    title: 'Exams',
    description: 'Explore exam notifications, preparation tips, and related material.',
    content: examsContent,
  },
  {
    id: 'pyq',
    title: 'PYQ',
    description: 'Access previous year questions and solutions for revision.',
    content: pyqContent,
  },
  {
    id: 'results',
    title: 'Results',
    description: 'Track exam results, admit cards, and recruitment outcomes.',
    content: resultsContent,
  },
  {
    id: 'calendar',
    title: 'Calendar',
    description: 'Review upcoming exams and important dates in a calendar view.',
    content: calendarContent,
  },
  {
    id: 'banking',
    title: 'Banking Exams',
    description: 'Explore banking exam resources, notifications, and preparation support.',
    content: bankingContent,
    breadcrumb: [{ label: 'Exams', pageId: 'exams' }, { label: 'Banking', pageId: 'banking' }],
    related: ['admin', 'engineering', 'medical'],
  },
  {
    id: 'admin',
    title: 'Administrative Exams',
    description: 'Discover administrative and civil service exam updates and study resources.',
    content: adminContent,
    breadcrumb: [{ label: 'Exams', pageId: 'exams' }, { label: 'Administrative', pageId: 'admin' }],
    related: ['admin-ssc-cgl-2026', 'admin-state-service-2026', 'banking'],
  },
  {
    id: 'engineering',
    title: 'Engineering Exams',
    description: 'Track engineering entrance exam information and preparation guidance.',
    content: engineeringContent,
    breadcrumb: [{ label: 'Exams', pageId: 'exams' }, { label: 'Engineering', pageId: 'engineering' }],
    related: ['banking', 'admin', 'medical'],
  },
  {
    id: 'medical',
    title: 'Medical Exams',
    description: 'Browse medical exam preparation notes, updates, and revision material.',
    content: medicalContent,
    breadcrumb: [{ label: 'Exams', pageId: 'exams' }, { label: 'Medical', pageId: 'medical' }],
    related: ['banking', 'admin', 'engineering'],
  },
  {
    id: 'admin-ssc-cgl-2026',
    title: 'SSC CGL 2026',
    description: 'Staff Selection Commission Combined Graduate Level Examination 2026 - important dates and resources.',
    content: sscCgl2026Content,
    breadcrumb: [
      { label: 'Exams', pageId: 'exams' },
      { label: 'Administrative', pageId: 'admin' },
      { label: 'SSC CGL 2026', pageId: 'admin-ssc-cgl-2026' },
    ],
    related: ['admin-state-service-2026', 'admin', 'pyq'],
  },
  {
    id: 'admin-state-service-2026',
    title: 'State Service 2026',
    description: 'State Public Service Commission exams and updates for 2026.',
    content: stateService2026,
    breadcrumb: [
      { label: 'Exams', pageId: 'exams' },
      { label: 'Administrative', pageId: 'admin' },
      { label: 'State Service 2026', pageId: 'admin-state-service-2026' },
    ],
    related: ['admin-ssc-cgl-2026', 'admin', 'pyq'],
  },
  {
    id: 'job-private',
    title: 'Private Job Exams',
    description: 'Recruitment exams and assessments for private-sector roles.',
    content: comingSoonContent('Private Job Exams'),
    breadcrumb: [
      { label: 'Exams', pageId: 'exams' },
      { label: 'Job Exams', pageId: 'exams' },
      { label: 'Private Job Exams', pageId: 'job-private' },
    ],
    related: ['job-central-govt', 'job-state-govt'],
  },
  {
    id: 'job-central-govt',
    title: 'Central Govt Job Exams',
    description: 'Recruitment exams for central government departments and PSUs.',
    content: comingSoonContent('Central Govt Job Exams'),
    breadcrumb: [
      { label: 'Exams', pageId: 'exams' },
      { label: 'Job Exams', pageId: 'exams' },
      { label: 'Central Govt', pageId: 'job-central-govt' },
    ],
    related: ['job-private', 'job-state-govt', 'admin', 'banking'],
  },
  {
    id: 'job-state-govt',
    title: 'State Govt Job Exams',
    description: 'Recruitment exams for state government departments and public sector roles.',
    content: comingSoonContent('State Govt Job Exams'),
    breadcrumb: [
      { label: 'Exams', pageId: 'exams' },
      { label: 'Job Exams', pageId: 'exams' },
      { label: 'State Govt', pageId: 'job-state-govt' },
    ],
    related: ['job-private', 'job-central-govt', 'admin-state-service-2026'],
  },
  {
    id: 'academic-govt-institution',
    title: 'Govt Institution Admission',
    description: 'Entrance exams for admission to government academic institutions.',
    content: comingSoonContent('Govt Institution Admission'),
    breadcrumb: [
      { label: 'Exams', pageId: 'exams' },
      { label: 'Academic Admission', pageId: 'exams' },
      { label: 'Govt Institution', pageId: 'academic-govt-institution' },
    ],
    related: ['academic-private-institution', 'academic-state-institution', 'engineering', 'medical'],
  },
  {
    id: 'academic-private-institution',
    title: 'Private Institution Admission',
    description: 'Entrance exams for admission to private academic institutions.',
    content: comingSoonContent('Private Institution Admission'),
    breadcrumb: [
      { label: 'Exams', pageId: 'exams' },
      { label: 'Academic Admission', pageId: 'exams' },
      { label: 'Private Institution', pageId: 'academic-private-institution' },
    ],
    related: ['academic-govt-institution', 'academic-state-institution'],
  },
  {
    id: 'academic-state-institution',
    title: 'State Govt Institution Admission',
    description: 'Entrance exams for admission to state government academic institutions.',
    content: comingSoonContent('State Govt Institution Admission'),
    breadcrumb: [
      { label: 'Exams', pageId: 'exams' },
      { label: 'Academic Admission', pageId: 'exams' },
      { label: 'State Govt Institution', pageId: 'academic-state-institution' },
    ],
    related: ['academic-govt-institution', 'academic-private-institution'],
  },
  {
    id: 'school-cbse',
    title: 'CBSE Board Exams',
    description: 'Central Board of Secondary Education exam updates and resources.',
    content: comingSoonContent('CBSE Board Exams'),
    breadcrumb: [
      { label: 'Exams', pageId: 'exams' },
      { label: 'School Exams', pageId: 'exams' },
      { label: 'CBSE', pageId: 'school-cbse' },
    ],
    related: ['school-icse', 'school-state-board'],
  },
  {
    id: 'school-icse',
    title: 'ICSE Board Exams',
    description: 'Indian Certificate of Secondary Education exam updates and resources.',
    content: comingSoonContent('ICSE Board Exams'),
    breadcrumb: [
      { label: 'Exams', pageId: 'exams' },
      { label: 'School Exams', pageId: 'exams' },
      { label: 'ICSE', pageId: 'school-icse' },
    ],
    related: ['school-cbse', 'school-state-board'],
  },
  {
    id: 'school-state-board',
    title: 'State Govt Board Exams',
    description: 'State education board exam updates and resources.',
    content: comingSoonContent('State Govt Board Exams'),
    breadcrumb: [
      { label: 'Exams', pageId: 'exams' },
      { label: 'School Exams', pageId: 'exams' },
      { label: 'State Govt Board Exams', pageId: 'school-state-board' },
    ],
    related: ['school-cbse', 'school-icse'],
  },
  {
    id: 'govt-universities',
    title: 'Govt Universities Exams',
    description: 'Entrance and internal exams conducted by government universities.',
    content: comingSoonContent('Govt Universities Exams'),
    breadcrumb: [
      { label: 'Exams', pageId: 'exams' },
      { label: 'Govt Universities Exams', pageId: 'govt-universities' },
    ],
    related: ['academic-govt-institution', 'engineering', 'medical'],
  },
  {
    id: 'intl-sat',
    title: 'SAT',
    description: 'Scholastic Assessment Test — undergraduate admissions in the US and worldwide.',
    content: comingSoonContent('SAT'),
    breadcrumb: [
      { label: 'Exams', pageId: 'exams' },
      { label: 'International Exams', pageId: 'exams' },
      { label: 'SAT', pageId: 'intl-sat' },
    ],
    related: ['intl-gre', 'intl-ielts'],
  },
  {
    id: 'intl-gre',
    title: 'GRE',
    description: 'Graduate Record Examination — graduate school admissions worldwide.',
    content: comingSoonContent('GRE'),
    breadcrumb: [
      { label: 'Exams', pageId: 'exams' },
      { label: 'International Exams', pageId: 'exams' },
      { label: 'GRE', pageId: 'intl-gre' },
    ],
    related: ['intl-sat', 'intl-ielts'],
  },
  {
    id: 'intl-ielts',
    title: 'IELTS',
    description: 'International English Language Testing System — study and immigration abroad.',
    content: comingSoonContent('IELTS'),
    breadcrumb: [
      { label: 'Exams', pageId: 'exams' },
      { label: 'International Exams', pageId: 'exams' },
      { label: 'IELTS', pageId: 'intl-ielts' },
    ],
    related: ['intl-sat', 'intl-gre'],
  },
];
