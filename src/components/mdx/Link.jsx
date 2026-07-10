import { Link as RouterLink } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import PDFCard from './PDFCard';

function isPdfHref(href) {
  if (!href) return false;
  const clean = href.split('#')[0].split('?')[0];
  return clean.toLowerCase().endsWith('.pdf');
}

function isInternal(href) {
  return typeof href === 'string' && href.startsWith('/') && !href.startsWith('//');
}

function isSamePageAnchor(href) {
  return typeof href === 'string' && href.startsWith('#');
}

function isProtocolLink(href) {
  return typeof href === 'string' && (href.startsWith('mailto:') || href.startsWith('tel:'));
}

function Link({ href, children, ...props }) {
  if (isPdfHref(href)) {
    return <PDFCard href={href}>{children}</PDFCard>;
  }

  if (isSamePageAnchor(href) || isProtocolLink(href)) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }

  if (isInternal(href)) {
    return (
      <RouterLink to={href} {...props}>
        {children}
      </RouterLink>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
      <ExternalLink className="ml-0.5 inline-block h-3.5 w-3.5 align-[-2px]" aria-hidden="true" />
    </a>
  );
}

export default Link;
