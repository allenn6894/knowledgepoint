import homeContent from '../content/home.md?raw';
import jobsContent from '../content/jobs.md?raw';
import examsContent from '../content/exams.md?raw';
import pyqContent from '../content/pyq.md?raw';
import calendarContent from '../content/calendar.md?raw';

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
    id: 'calendar',
    title: 'Calendar',
    description: 'Review upcoming exams and important dates in a calendar view.',
    content: calendarContent,
  },
];
