import { cloneElement, isValidElement } from 'react';
import Callout from './Callout';

const MARKER_RE = /^\s*\[!(INFO|WARNING|SUCCESS|TIP)\]\s*/i;

/**
 * Recursively looks at the first text leaf of a blockquote's children for a
 * GitHub-style `[!INFO]` / `[!WARNING]` / `[!SUCCESS]` / `[!TIP]` marker.
 * Lets plain Markdown authors (no MDX/JSX needed) opt into a Callout by
 * writing e.g. `> [!TIP]\n> Some advice`.
 */
function extractMarker(children) {
  const arr = Array.isArray(children) ? children : [children];
  if (arr.length === 0) return null;
  const [first, ...restSiblings] = arr;

  if (typeof first === 'string') {
    const match = first.match(MARKER_RE);
    if (!match) return null;
    const type = match[1].toLowerCase();
    const remainder = first.slice(match[0].length);
    const newChildren = remainder ? [remainder, ...restSiblings] : restSiblings;
    return { type, children: newChildren };
  }

  if (isValidElement(first) && first.props?.children != null) {
    const nested = extractMarker(first.props.children);
    if (!nested) return null;
    const newFirst = cloneElement(first, {}, ...nested.children);
    return { type: nested.type, children: [newFirst, ...restSiblings] };
  }

  return null;
}

function Blockquote({ children }) {
  const marker = extractMarker(children);

  if (marker) {
    return <Callout type={marker.type}>{marker.children}</Callout>;
  }

  return (
    <blockquote className="not-prose my-3 rounded-r-lg border-l-4 border-brand-300 bg-slate-50 px-3.5 py-2 text-xs italic text-slate-600 dark:border-brand-700 dark:bg-slate-800/50 dark:text-slate-300 [&>p]:m-0 [&>p+p]:mt-1.5">
      {children}
    </blockquote>
  );
}

export default Blockquote;
