import { Download, FileText } from 'lucide-react';

function fileNameFromUrl(url) {
  try {
    const { pathname } = new URL(url, window.location.origin);
    return decodeURIComponent(pathname.split('/').pop() || 'Document.pdf');
  } catch {
    return 'Document.pdf';
  }
}

function PDFCard({ href, title, children }) {
  const label = children && typeof children === 'string' ? children : title ?? fileNameFromUrl(href);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="not-prose group my-3 flex items-center gap-2.5 rounded-lg border border-slate-200 bg-white p-3 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-soft dark:border-slate-800 dark:bg-slate-900 sm:max-w-sm"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400">
        <FileText className="h-4 w-4" aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-sm font-semibold text-slate-900 dark:text-white">{label}</span>
        <span className="text-xs text-slate-500 dark:text-slate-400">PDF document</span>
      </span>
      <Download
        className="h-4 w-4 shrink-0 text-slate-400 transition-colors group-hover:text-brand-600 dark:group-hover:text-brand-400"
        aria-hidden="true"
      />
    </a>
  );
}

export default PDFCard;
