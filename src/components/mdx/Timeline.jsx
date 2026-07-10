import { Circle } from 'lucide-react';

const STATUS_STYLES = {
  past: {
    dot: 'bg-slate-200 text-slate-500 dark:bg-slate-700 dark:text-slate-400',
    date: 'text-slate-400 dark:text-slate-500',
    badge: 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400',
    label: 'Past',
  },
  near: {
    dot: 'bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400',
    date: 'text-amber-600 dark:text-amber-400',
    badge: 'bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400',
    label: 'Upcoming',
  },
  far: {
    dot: 'bg-brand-100 text-brand-600 dark:bg-brand-500/20 dark:text-brand-400',
    date: 'text-brand-600 dark:text-brand-400',
    badge: 'bg-brand-50 text-brand-600 dark:bg-brand-500/15 dark:text-brand-400',
    label: 'Later',
  },
};

const NEAR_FUTURE_DAYS = 90;

/**
 * Classifies an ISO end-date as 'past' / 'near' (within ~90 days) / 'far',
 * relative to the current date. Lets a Timeline of real-world dates stay
 * accurate without needing manual status updates as time passes.
 */
function getStatus(endDate) {
  if (!endDate) return null;
  const end = new Date(`${endDate}T23:59:59`);
  if (Number.isNaN(end.getTime())) return null;

  const diffDays = (end.getTime() - Date.now()) / (1000 * 60 * 60 * 24);
  if (diffDays < 0) return 'past';
  if (diffDays <= NEAR_FUTURE_DAYS) return 'near';
  return 'far';
}

export function TimelineItem({ date, title, status, children }) {
  const style = STATUS_STYLES[status] ?? STATUS_STYLES.far;

  return (
    <li className="relative pb-8 pl-8 last:pb-0">
      <span className={`absolute left-0 top-1 flex h-5 w-5 items-center justify-center rounded-full ${style.dot}`}>
        <Circle className="h-2 w-2 fill-current" aria-hidden="true" />
      </span>
      <span className="absolute left-2.5 top-6 h-[calc(100%-1.25rem)] w-px bg-slate-200 dark:bg-slate-800" aria-hidden="true" />
      <div className="mb-1 flex flex-wrap items-center gap-1.5">
        {date && (
          <span className={`text-xs font-semibold uppercase tracking-wide ${style.date}`}>{date}</span>
        )}
        {status && (
          <span className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${style.badge}`}>
            {style.label}
          </span>
        )}
      </div>
      <h4 className="mb-1 text-sm font-semibold text-slate-900 dark:text-white">{title}</h4>
      {children && <div className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 [&>p]:m-0">{children}</div>}
    </li>
  );
}

function Timeline({ items, children }) {
  return (
    <ol className="not-prose my-6">
      {items
        ? items.map((item) => (
            <TimelineItem
              key={item.title}
              date={item.date}
              title={item.title}
              status={item.status ?? getStatus(item.endDate)}
            >
              {item.description}
            </TimelineItem>
          ))
        : children}
    </ol>
  );
}

export default Timeline;
