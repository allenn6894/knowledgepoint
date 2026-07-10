import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function ResultsList({ items }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <Link
          key={item.id}
          to={item.route}
          className="group flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-5 shadow-card transition-all hover:-translate-y-1 hover:shadow-soft dark:border-slate-800 dark:bg-slate-900"
        >
          <span className="inline-flex w-fit items-center rounded-full bg-mint-500/10 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-mint-600 dark:bg-emerald-500/15 dark:text-emerald-400">
            {item.tag}
          </span>
          <h3 className="flex items-center justify-between gap-2 text-base font-semibold text-slate-900 dark:text-white">
            {item.title}
            <ArrowUpRight
              className="h-4 w-4 shrink-0 text-slate-400 transition-colors group-hover:text-brand-600 dark:group-hover:text-brand-400"
              aria-hidden="true"
            />
          </h3>
          <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">{item.description}</p>
        </Link>
      ))}
    </div>
  );
}

export default ResultsList;
