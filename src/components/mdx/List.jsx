export function Ul({ children, ...props }) {
  return (
    <ul className="my-3 list-disc space-y-1.5 pl-5 marker:text-brand-500" {...props}>
      {children}
    </ul>
  );
}

export function Ol({ children, ...props }) {
  return (
    <ol
      className="my-3 list-decimal space-y-1.5 pl-5 marker:font-semibold marker:text-brand-600 dark:marker:text-brand-400"
      {...props}
    >
      {children}
    </ol>
  );
}

export function Li({ className, children, ...props }) {
  const isTask = typeof className === 'string' && className.includes('task-list-item');

  return (
    <li
      className={`leading-relaxed text-slate-700 dark:text-slate-300 ${isTask ? 'ml-[-1.25rem] list-none' : ''}`}
      {...props}
    >
      {children}
    </li>
  );
}
