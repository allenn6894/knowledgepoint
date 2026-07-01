import homeContent from '../content/home.md?raw';
import blogsContent from '../content/blogs.md?raw';
import videosContent from '../content/videos.md?raw';
import aboutContent from '../content/about.md?raw';

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
    id: 'blogs',
    title: 'Blogs',
    children: [
      { id: 'blogs-library', title: 'Blog Library', pageId: 'blogs' },
      { id: 'blogs-topics', title: 'Popular Topics', pageId: 'blogs' },
    ],
  },
  {
    id: 'videos',
    title: 'Videos',
    children: [
      { id: 'videos-library', title: 'Video Center', pageId: 'videos' },
      { id: 'videos-playlists', title: 'Playlists', pageId: 'videos' },
    ],
  },
  {
    id: 'about',
    title: 'About',
    children: [
      { id: 'about-story', title: 'About Us', pageId: 'about' },
      { id: 'about-contact', title: 'Contact', pageId: 'about' },
    ],
  },
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
