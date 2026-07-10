import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { routeMap } from '../data/routes';

function RelatedContent({ page, pages }) {
  if (!page?.related?.length) return null;

  const relatedPages = page.related.map((id) => pages.find((p) => p.id === id)).filter(Boolean);
  if (relatedPages.length === 0) return null;

  return (
    <section aria-label="Related content" className="mt-10">
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
        Related content
      </h3>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {relatedPages.map((related) => (
          <Link
            key={related.id}
            to={routeMap[related.id]}
            className="group flex flex-col gap-1.5 rounded-2xl border border-slate-200 bg-white p-4 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-soft dark:border-slate-800 dark:bg-slate-900"
          >
            <span className="flex items-center justify-between gap-2">
              <span className="text-sm font-semibold text-slate-900 dark:text-white">{related.title}</span>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-400 transition-colors group-hover:text-brand-600 dark:group-hover:text-brand-400" aria-hidden="true" />
            </span>
            <span className="line-clamp-2 text-xs text-slate-500 dark:text-slate-400">{related.description}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default RelatedContent;
