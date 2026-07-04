import React from 'react';

function PyqFilters({ groups, group, setGroup, years, yearFilter, setYearFilter, query, setQuery, inline }) {
  if (inline) {
    return (
      <div className="pyq-filters inline">
        <div className="pyq-search-inline">
          <input
            placeholder="Search papers, exam, year..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="pyq-chips">
          <button className={`chip ${group === 'all' ? 'active' : ''}`} onClick={() => setGroup('all')}>All</button>
          {groups.map((g) => (
            <button key={g.id} className={`chip ${group === g.id ? 'active' : ''}`} onClick={() => setGroup(g.id)}>
              {g.label} <span className="count">{g.count}</span>
            </button>
          ))}
        </div>

        <div className="pyq-year-inline">
          <select value={yearFilter} onChange={(e) => setYearFilter(e.target.value)}>
            {years.map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </div>
      </div>
    );
  }

  return (
    <aside className="pyq-filters">
      <div className="pyq-search">
        <input
          placeholder="Search papers, exam, year..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="pyq-group-list">
        <h4>Exam Group</h4>
        <ul>
          <li className={group === 'all' ? 'active' : ''} onClick={() => setGroup('all')}>All</li>
          {groups.map((g) => (
            <li key={g.id} className={group === g.id ? 'active' : ''} onClick={() => setGroup(g.id)}>
              {g.label} <span className="count">{g.count}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pyq-year-filter">
        <h4>Year</h4>
        <select value={yearFilter} onChange={(e) => setYearFilter(e.target.value)}>
          {years.map((y) => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>
      </div>
    </aside>
  );
}

export default PyqFilters;
