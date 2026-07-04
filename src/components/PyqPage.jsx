import React from 'react';
import PyqFilters from './PyqFilters';
import PyqList from './PyqList';
import usePyqData from '../hooks/usePyqData';

function PyqPage() {
  const { groups, papers, years, group, setGroup, query, setQuery, yearFilter, setYearFilter } = usePyqData('ssc');

  return (
    <div className="pyq-page">
      <div className="pyq-container">
        <div className="pyq-filters-row">
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
        </div>

        <div className="pyq-results">
          <div className="pyq-results-top">
            <h2>Previous Year Papers</h2>
            <div className="pyq-stats">{papers.length} papers</div>
          </div>

          <PyqList papers={papers} />
        </div>
      </div>
    </div>
  );
}

export default PyqPage;
