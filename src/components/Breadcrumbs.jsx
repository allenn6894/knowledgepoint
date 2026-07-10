import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { routeMap } from '../data/routes';

function Breadcrumbs({ page }) {
  if (!page || page.id === 'home') return null;

  const trail = page.breadcrumb ?? [{ label: page.title, pageId: page.id }];

  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
        <li className="flex items-center gap-1.5">
          <Link to="/" className="flex items-center gap-1 hover:text-brand-600 dark:hover:text-brand-400">
            <Home className="h-3.5 w-3.5" aria-hidden="true" />
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-slate-300 dark:text-slate-600" aria-hidden="true" />
        </li>
        {trail.map((crumb, index) => {
          const isLast = index === trail.length - 1;
          const to = routeMap[crumb.pageId] ?? '/';

          return (
            <li key={`${crumb.pageId}-${crumb.label}`} className="flex items-center gap-1.5">
              {isLast ? (
                <span aria-current="page" className="font-medium text-slate-800 dark:text-slate-200">
                  {crumb.label}
                </span>
              ) : (
                <>
                  <Link to={to} className="hover:text-brand-600 dark:hover:text-brand-400">
                    {crumb.label}
                  </Link>
                  <ChevronRight className="h-3.5 w-3.5 text-slate-300 dark:text-slate-600" aria-hidden="true" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
