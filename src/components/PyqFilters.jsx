import { Search } from 'lucide-react';

function SearchInput({ value, onChange, className = '' }) {
  return (
    <div className={`relative ${className}`}>
      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden="true" />
      <input
        placeholder="Search papers, exam, year..."
        value={value}
        onChange={onChange}
        className="w-full rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:ring-brand-500/20"
      />
    </div>
  );
}

function YearSelect({ years, value, onChange, className = '' }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className={`rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:focus:ring-brand-500/20 ${className}`}
    >
      {years.map((y) => (
        <option key={y} value={y}>
          {y}
        </option>
      ))}
    </select>
  );
}

function Chip({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
        active
          ? 'bg-brand-600 text-white shadow-card'
          : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
      }`}
    >
      {children}
    </button>
  );
}

function PyqFilters({ groups, group, setGroup, years, yearFilter, setYearFilter, query, setQuery, inline }) {
  if (inline) {
    return (
      <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-card dark:border-slate-800 dark:bg-slate-900 sm:flex-row sm:flex-wrap sm:items-center">
        <SearchInput value={query} onChange={(e) => setQuery(e.target.value)} className="sm:w-72" />

        <div className="flex flex-wrap gap-2">
          <Chip active={group === 'all'} onClick={() => setGroup('all')}>
            All
          </Chip>
          {groups.map((g) => (
            <Chip key={g.id} active={group === g.id} onClick={() => setGroup(g.id)}>
              {g.label} <span className="opacity-70">{g.count}</span>
            </Chip>
          ))}
        </div>

        <YearSelect years={years} value={yearFilter} onChange={(e) => setYearFilter(e.target.value)} className="sm:ml-auto" />
      </div>
    );
  }

  return (
    <aside className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-card dark:border-slate-800 dark:bg-slate-900">
      <SearchInput value={query} onChange={(e) => setQuery(e.target.value)} />

      <div>
        <h4 className="mb-2 text-sm font-semibold text-slate-700 dark:text-slate-200">Exam Group</h4>
        <ul className="flex flex-col gap-0.5">
          <li>
            <button
              type="button"
              onClick={() => setGroup('all')}
              className={`w-full rounded-lg px-2.5 py-1.5 text-left text-sm ${
                group === 'all' ? 'bg-brand-50 font-semibold text-brand-700 dark:bg-brand-500/10 dark:text-brand-400' : 'text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800'
              }`}
            >
              All
            </button>
          </li>
          {groups.map((g) => (
            <li key={g.id}>
              <button
                type="button"
                onClick={() => setGroup(g.id)}
                className={`flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-left text-sm ${
                  group === g.id ? 'bg-brand-50 font-semibold text-brand-700 dark:bg-brand-500/10 dark:text-brand-400' : 'text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800'
                }`}
              >
                <span>{g.label}</span>
                <span className="text-xs opacity-70">{g.count}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="mb-2 text-sm font-semibold text-slate-700 dark:text-slate-200">Year</h4>
        <YearSelect years={years} value={yearFilter} onChange={(e) => setYearFilter(e.target.value)} className="w-full" />
      </div>
    </aside>
  );
}

export default PyqFilters;
