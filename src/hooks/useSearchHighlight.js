import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function unwrapMarks(root) {
  root.querySelectorAll('mark[data-search-highlight]').forEach((mark) => {
    const parent = mark.parentNode;
    if (!parent) return;
    while (mark.firstChild) parent.insertBefore(mark.firstChild, mark);
    parent.removeChild(mark);
    parent.normalize();
  });
}

function highlightTextNodes(root, regex) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue) return NodeFilter.FILTER_REJECT;
      if (node.parentElement?.closest('mark[data-search-highlight], script, style')) {
        return NodeFilter.FILTER_REJECT;
      }
      regex.lastIndex = 0;
      return regex.test(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    },
  });

  const targets = [];
  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    targets.push(node);
  }

  targets.forEach((textNode) => {
    const text = textNode.nodeValue;
    regex.lastIndex = 0;
    const frag = document.createDocumentFragment();
    let lastIndex = 0;
    let match = regex.exec(text);
    while (match) {
      if (match.index > lastIndex) {
        frag.appendChild(document.createTextNode(text.slice(lastIndex, match.index)));
      }
      const mark = document.createElement('mark');
      mark.setAttribute('data-search-highlight', 'true');
      mark.textContent = match[0];
      frag.appendChild(mark);
      lastIndex = match.index + match[0].length;
      match = regex.exec(text);
    }
    frag.appendChild(document.createTextNode(text.slice(lastIndex)));
    textNode.parentNode?.replaceChild(frag, textNode);
  });
}

/**
 * If the URL has ?highlight=term, wraps matching text inside the given
 * container ref in <mark> once content has rendered. DOM-based (like the
 * TOC's heading scan) so it works identically for react-markdown and
 * compiled MDX output.
 */
export default function useSearchHighlight(ref, deps = []) {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('highlight');

  useEffect(() => {
    const root = ref.current;
    if (!root) return undefined;

    const timer = window.setTimeout(() => {
      unwrapMarks(root);
      const trimmed = query?.trim();
      if (!trimmed || trimmed.length < 2) return;

      const regex = new RegExp(escapeRegExp(trimmed), 'gi');
      highlightTextNodes(root, regex);
      root.querySelector('mark[data-search-highlight]')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 60);

    return () => window.clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, ref, ...deps]);
}
