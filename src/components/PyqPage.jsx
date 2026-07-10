import PyqFilters from './PyqFilters';
import PyqList from './PyqList';
import usePyqData from '../hooks/usePyqData';

function PyqPage() {
  const { groups, papers, years, group, setGroup, query, setQuery, yearFilter, setYearFilter } = usePyqData('ssc');

  return (
    <div className="flex flex-col gap-4">
      <PyqFilters
        inline
        groups={groups}
        group={group}
        setGroup={setGroup}
        years={years}
        yearFilter={yearFilter}
        setYearFilter={setYearFilter}
        query={query}
        setQuery={setQuery}
      />

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Previous Year Papers</h2>
          <span className="text-sm text-slate-500 dark:text-slate-400">{papers.length} papers</span>
        </div>

        <PyqList papers={papers} />
      </div>
    </div>
  );
}

export default PyqPage;
