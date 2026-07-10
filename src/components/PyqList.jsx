import { Download, FileText } from 'lucide-react';

function PyqList({ papers }) {
  if (!papers || papers.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-400">
        No papers found.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-card dark:border-slate-800">
      {/* Table layout for sm+ screens */}
      <div className="hidden overflow-x-auto sm:block">
        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
          <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-600 dark:bg-slate-800 dark:text-slate-300">
            <tr>
              <th className="px-4 py-3">Exam</th>
              <th className="px-4 py-3">Paper / Subject</th>
              <th className="px-4 py-3">Year</th>
              <th className="px-4 py-3">Shift</th>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">Size</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {papers.map((p) => (
              <tr key={p.id} className="animate-fade-in odd:bg-white even:bg-slate-50/60 dark:odd:bg-slate-900 dark:even:bg-slate-800/40">
                <td className="px-4 py-3 font-medium text-slate-800 dark:text-slate-100">{p.exam}</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{p.paper}</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{p.year}</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{p.shift}</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{p.type}</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{p.size}</td>
                <td className="px-4 py-3">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-lg bg-brand-600 px-2.5 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-brand-700"
                  >
                    <Download className="h-3.5 w-3.5" aria-hidden="true" />
                    PDF
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Stacked cards on mobile */}
      <div className="divide-y divide-slate-100 bg-white dark:divide-slate-800 dark:bg-slate-900 sm:hidden">
        {papers.map((p) => (
          <div key={p.id} className="flex animate-fade-in items-start gap-3 p-4">
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400">
              <FileText className="h-4 w-4" aria-hidden="true" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-slate-900 dark:text-white">{p.exam}</p>
              <p className="truncate text-xs text-slate-500 dark:text-slate-400">{p.paper}</p>
              <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
                {p.year} · {p.shift} · {p.type} · {p.size}
              </p>
            </div>
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="mt-0.5 inline-flex shrink-0 items-center gap-1 rounded-lg bg-brand-600 px-2.5 py-1.5 text-xs font-semibold text-white"
            >
              <Download className="h-3.5 w-3.5" aria-hidden="true" />
              PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PyqList;
