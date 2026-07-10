import { Megaphone } from 'lucide-react';

function Notice({ children, title = 'Notice' }) {
  return (
    <div className="not-prose my-3 overflow-hidden rounded-xl border border-coral-500/30 bg-gradient-to-r from-coral-500/10 via-amber-500/5 to-transparent shadow-card dark:border-coral-500/30 dark:from-coral-500/10">
      <div className="flex items-start gap-2.5 p-3 sm:p-3.5">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-coral-500/15 text-coral-600 dark:text-coral-400">
          <Megaphone className="h-4 w-4" aria-hidden="true" />
        </span>
        <div className="min-w-0 text-xs leading-relaxed text-slate-700 dark:text-slate-200">
          <p className="mb-0.5 font-semibold text-slate-900 dark:text-white">{title}</p>
          <div className="[&>p]:m-0 [&>p+p]:mt-1.5">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Notice;
