import { ArrowRight, Info } from 'lucide-react';
import Button from './Button';

function InfoCard({ icon: Icon = Info, title, children, href, ctaLabel = 'Learn more' }) {
  return (
    <div className="not-prose my-3 flex flex-col gap-2 rounded-xl border border-slate-200 bg-white p-3.5 shadow-card dark:border-slate-800 dark:bg-slate-900 sm:max-w-sm">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </span>
      <div>
        <h4 className="mb-0.5 text-sm font-semibold text-slate-900 dark:text-white">{title}</h4>
        <div className="text-xs leading-relaxed text-slate-600 dark:text-slate-400 [&>p]:m-0">{children}</div>
      </div>
      {href && (
        <Button href={href} variant="ghost" size="sm" className="-ml-2 self-start px-2">
          {ctaLabel}
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Button>
      )}
    </div>
  );
}

export default InfoCard;
