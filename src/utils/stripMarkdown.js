/**
 * Strips common Markdown syntax down to plain, searchable text.
 * Intentionally simple — good enough for building a search index,
 * not a full Markdown parser.
 */
export default function stripMarkdown(markdown) {
  if (typeof markdown !== 'string') return '';

  return markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/[*_~>#-]/g, ' ')
    .replace(/\|/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}
