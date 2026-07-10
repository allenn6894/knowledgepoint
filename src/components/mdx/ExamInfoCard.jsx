import { CalendarDays, GraduationCap } from 'lucide-react';
import Button from './Button';

/**
 * `facts` is an array of `{ label, value }`, e.g.
 * `[{ label: 'Exam', value: 'SSC CGL 2026' }, { label: 'Tier I', value: 'Q3 2026' }]`.
 */
function ExamInfoCard({ title = 'Exam Information', facts = [], applyHref, applyLabel = 'Official notification' }) {
  return (
    <div className="not-prose my-3 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-card dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center gap-2 bg-gradient-to-r from-brand-600 to-accent-600 px-3.5 py-2.5 text-white">
        <GraduationCap className="h-4 w-4" aria-hidden="true" />
        <h4 className="text-xs font-semibold">{title}</h4>
      </div>
      <dl className="grid grid-cols-1 gap-x-5 gap-y-2 p-3.5 sm:grid-cols-2">
        {facts.map((fact) => (
          <div key={fact.label} className="flex items-start gap-2">
            <CalendarDays className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-500" aria-hidden="true" />
            <div>
              <dt className="text-[11px] font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                {fact.label}
              </dt>
              <dd className="text-xs font-semibold text-slate-800 dark:text-slate-100">{fact.value}</dd>
            </div>
          </div>
        ))}
      </dl>
      {applyHref && (
        <div className="border-t border-slate-100 px-3.5 py-2.5 dark:border-slate-800">
          <Button href={applyHref} size="sm">
            {applyLabel}
          </Button>
        </div>
      )}
    </div>
  );
}

export default ExamInfoCard;
