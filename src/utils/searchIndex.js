import Fuse from 'fuse.js';
import stripMarkdown from './stripMarkdown';

function extractText(page) {
  if (typeof page.content === 'string') {
    return stripMarkdown(page.content).slice(0, 4000);
  }
  return '';
}

export function buildSearchEntries(pages) {
  return pages.map((page) => ({
    pageId: page.id,
    title: page.title,
    description: page.description ?? '',
    text: extractText(page),
  }));
}

export function createSearchIndex(pages) {
  const entries = buildSearchEntries(pages);
  return new Fuse(entries, {
    keys: [
      { name: 'title', weight: 0.5 },
      { name: 'description', weight: 0.3 },
      { name: 'text', weight: 0.2 },
    ],
    threshold: 0.35,
    minMatchCharLength: 2,
    ignoreLocation: true,
  });
}
