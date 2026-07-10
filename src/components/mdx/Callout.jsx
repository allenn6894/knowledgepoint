import { AlertTriangle, CheckCircle2, Info, Lightbulb } from 'lucide-react';

const VARIANTS = {
  info: {
    icon: Info,
    label: 'Info',
    classes:
      'border-brand-200 bg-brand-50 text-brand-900 dark:border-brand-800/60 dark:bg-brand-950/40 dark:text-brand-100',
    iconClasses: 'text-brand-600 dark:text-brand-400',
  },
  warning: {
    icon: AlertTriangle,
    label: 'Warning',
    classes:
      'border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-800/60 dark:bg-amber-950/40 dark:text-amber-100',
    iconClasses: 'text-amber-600 dark:text-amber-400',
  },
  success: {
    icon: CheckCircle2,
    label: 'Success',
    classes:
      'border-mint-500/30 bg-emerald-50 text-emerald-900 dark:border-emerald-800/60 dark:bg-emerald-950/40 dark:text-emerald-100',
    iconClasses: 'text-mint-600 dark:text-emerald-400',
  },
  tip: {
    icon: Lightbulb,
    label: 'Tip',
    classes:
      'border-accent-200 bg-accent-50 text-accent-900 dark:border-accent-800/60 dark:bg-accent-950/40 dark:text-accent-100',
    iconClasses: 'text-accent-600 dark:text-accent-400',
  },
};

function Callout({ type = 'info', title, children }) {
  const variant = VARIANTS[type] ?? VARIANTS.info;
  const Icon = variant.icon;

  return (
    <div
      role="note"
      className={`not-prose my-3 flex gap-2.5 rounded-lg border p-3 shadow-card ${variant.classes}`}
    >
      <Icon className={`mt-0.5 h-4 w-4 shrink-0 ${variant.iconClasses}`} aria-hidden="true" />
      <div className="min-w-0 text-xs leading-relaxed [&>p]:m-0 [&>p+p]:mt-1.5">
        <p className="mb-0.5 font-semibold">{title ?? variant.label}</p>
        {children}
      </div>
    </div>
  );
}

export default Callout;
