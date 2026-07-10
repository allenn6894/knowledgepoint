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
    children: [
      { id: 'exams-upcoming', title: 'Upcoming Exams', pageId: 'exams' },
      { id: 'exams-prep', title: 'Preparation Tips', pageId: 'exams' },
      { id: 'exams-banking', title: 'Banking', pageId: 'banking' },
      { id: 'exams-admin', title: 'Administrative', pageId: 'admin' },
      { id: 'exams-engineering', title: 'Engineering', pageId: 'engineering' },
      { id: 'exams-medical', title: 'Medical', pageId: 'medical' },
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
];
