export function Table({ children, ...props }) {
  return (
    <div className="not-prose my-3 overflow-x-auto rounded-lg border border-slate-200 shadow-card dark:border-slate-800">
      <table className="w-full min-w-[480px] border-collapse text-left text-xs" {...props}>
        {children}
      </table>
    </div>
  );
}

export function Thead({ children, ...props }) {
  return (
    <thead
      className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-600 dark:bg-slate-800 dark:text-slate-300"
      {...props}
    >
      {children}
    </thead>
  );
}

export function Tbody({ children, ...props }) {
  return (
    <tbody className="divide-y divide-slate-100 dark:divide-slate-800" {...props}>
      {children}
    </tbody>
  );
}

export function Tr({ children, ...props }) {
  return (
    <tr className="odd:bg-white even:bg-slate-50/60 dark:odd:bg-slate-900 dark:even:bg-slate-800/40" {...props}>
      {children}
    </tr>
  );
}

export function Th({ children, ...props }) {
  return (
    <th className="whitespace-nowrap px-3 py-2" {...props}>
      {children}
    </th>
  );
}

export function Td({ children, ...props }) {
  return (
    <td className="px-3 py-2 text-slate-700 dark:text-slate-300" {...props}>
      {children}
    </td>
  );
}
