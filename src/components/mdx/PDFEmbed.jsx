import { ExternalLink } from 'lucide-react';

function PDFEmbed({ src, title = 'PDF preview', height = 560 }) {
  return (
    <div className="not-prose my-6 overflow-hidden rounded-2xl border border-slate-200 shadow-card dark:border-slate-800">
      <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 py-2.5 text-sm dark:border-slate-800 dark:bg-slate-800/60">
        <span className="truncate font-medium text-slate-700 dark:text-slate-200">{title}</span>
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-brand-600 hover:underline dark:text-brand-400"
        >
          Open in new tab
          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
      <iframe src={src} title={title} style={{ height }} className="w-full bg-white" loading="lazy" />
    </div>
  );
}

export default PDFEmbed;
