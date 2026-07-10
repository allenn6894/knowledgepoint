import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { readingOrder, routeMap } from '../data/routes';

function PrevNextNav({ pageId, pages }) {
  const index = readingOrder.indexOf(pageId);
  if (index === -1) return null;

  const prevId = readingOrder[index - 1];
  const nextId = readingOrder[index + 1];
  const prevPage = prevId ? pages.find((p) => p.id === prevId) : null;
  const nextPage = nextId ? pages.find((p) => p.id === nextId) : null;

  if (!prevPage && !nextPage) return null;

  return (
    <nav aria-label="Article navigation" className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
      {prevPage ? (
        <Link
          to={routeMap[prevPage.id]}
          className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-soft dark:border-slate-800 dark:bg-slate-900"
        >
          <ArrowLeft className="h-4 w-4 shrink-0 text-slate-400 transition-colors group-hover:text-brand-600 dark:group-hover:text-brand-400" aria-hidden="true" />
          <span className="min-w-0">
            <span className="block text-xs font-medium uppercase tracking-wide text-slate-400 dark:text-slate-500">Previous</span>
            <span className="block truncate text-sm font-semibold text-slate-800 dark:text-slate-100">{prevPage.title}</span>
          </span>
        </Link>
      ) : (
        <span />
      )}

      {nextPage && (
        <Link
          to={routeMap[nextPage.id]}
          className="group flex items-center justify-end gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-right shadow-card transition-all hover:-translate-y-0.5 hover:shadow-soft dark:border-slate-800 dark:bg-slate-900"
        >
          <span className="min-w-0">
            <span className="block text-xs font-medium uppercase tracking-wide text-slate-400 dark:text-slate-500">Next</span>
            <span className="block truncate text-sm font-semibold text-slate-800 dark:text-slate-100">{nextPage.title}</span>
          </span>
          <ArrowRight className="h-4 w-4 shrink-0 text-slate-400 transition-colors group-hover:text-brand-600 dark:group-hover:text-brand-400" aria-hidden="true" />
        </Link>
      )}
    </nav>
  );
}

export default PrevNextNav;
