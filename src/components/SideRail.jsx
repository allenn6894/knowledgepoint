import { useNavigate } from 'react-router-dom';

const TONE_STYLES = {
  notifications: {
    header: 'text-coral-600 dark:text-coral-400',
    tag: 'bg-coral-500/10 text-coral-600 dark:bg-coral-500/15 dark:text-coral-400',
  },
  results: {
    header: 'text-mint-600 dark:text-emerald-400',
    tag: 'bg-mint-500/10 text-mint-600 dark:bg-emerald-500/15 dark:text-emerald-400',
  },
  default: {
    header: 'text-brand-600 dark:text-brand-400',
    tag: 'bg-brand-500/10 text-brand-600 dark:bg-brand-500/15 dark:text-brand-400',
  },
};

function SideRail({ title, items, tone }) {
  const navigate = useNavigate();
  const styles = TONE_STYLES[tone] ?? TONE_STYLES.default;

  return (
    <aside className="rounded-2xl border border-slate-200 bg-white p-3.5 shadow-card dark:border-slate-800 dark:bg-slate-900">
      <h3 className={`mb-2.5 px-1 text-sm font-semibold ${styles.header}`}>{title}</h3>

      <div className="scrollbar-thin flex max-h-[calc(100vh-11rem)] flex-col gap-2 overflow-y-auto pr-1">
        {items.map((item) => {
          const isLink = Boolean(item.route);
          const content = (
            <>
              <span className={`mb-1 inline-block rounded-full px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide ${styles.tag}`}>
                {item.tag}
              </span>
              <strong className="block text-sm text-slate-900 dark:text-white">{item.title}</strong>
              <p className="m-0 text-xs leading-snug text-slate-500 dark:text-slate-400">{item.description}</p>
            </>
          );

          if (isLink) {
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => navigate(item.route)}
                className="rounded-xl border border-slate-100 bg-slate-50/70 p-2.5 text-left transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card dark:border-slate-800 dark:bg-slate-800/40 dark:hover:border-brand-800"
              >
                {content}
              </button>
            );
          }

          return (
            <div key={item.id} className="rounded-xl border border-slate-100 bg-slate-50/70 p-2.5 dark:border-slate-800 dark:bg-slate-800/40">
              {content}
            </div>
          );
        })}
      </div>
    </aside>
  );
}

export default SideRail;
