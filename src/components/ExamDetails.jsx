import { ArrowUpRight, CalendarDays } from 'lucide-react';

function ExamDetails({ exams }) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {exams.map((exam) => (
        <section
          key={exam.slug}
          id={exam.slug}
          className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 shadow-card dark:border-slate-800 dark:bg-slate-900"
        >
          <div className="mb-2 flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-2.5 py-1 text-xs font-bold text-brand-700 dark:bg-brand-500/10 dark:text-brand-400">
              <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
              {exam.start}
            </span>
            <h3 className="text-base font-semibold text-slate-900 dark:text-white">{exam.title}</h3>
          </div>

          <p className="mb-1 leading-relaxed text-slate-600 dark:text-slate-300">{exam.description}</p>
          {exam.details && <p className="mb-3 leading-relaxed text-slate-500 dark:text-slate-400">{exam.details}</p>}

          <a
            className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:underline dark:text-brand-400"
            href={exam.link}
            target="_blank"
            rel="noreferrer"
          >
            Open official link
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </section>
      ))}
    </div>
  );
}

export default ExamDetails;
