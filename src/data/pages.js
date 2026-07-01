import homeContent from '../content/home.md?raw';
import blogsContent from '../content/blogs.md?raw';
import videosContent from '../content/videos.md?raw';
import aboutContent from '../content/about.md?raw';

export const menuItems = [
  { id: 'home', title: 'Home' },
  { id: 'blogs', title: 'Blogs' },
  { id: 'videos', title: 'Videos' },
  { id: 'about', title: 'About' },
];

export const pages = [
  {
    id: 'home',
    title: 'Welcome to Knowledge Point',
    description: 'A flexible frontend template for blogs, videos, and learning resources.',
    content: homeContent,
  },
  {
    id: 'blogs',
    title: 'Knowledge Blogs',
    description: 'Browse and manage your latest knowledge posts in markdown.',
    content: blogsContent,
  },
  {
    id: 'videos',
    title: 'Video Resources',
    description: 'Curated video links for quick learning and reference.',
    content: videosContent,
  },
  {
    id: 'about',
    title: 'About Knowledge Point',
    description: 'A generic frontend shell for knowledge-sharing websites.',
    content: aboutContent,
  },
];
