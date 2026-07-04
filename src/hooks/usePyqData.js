import { useMemo, useState } from 'react';
import { pyqGroups, pyqPapers } from '../data/pyqData';

export default function usePyqData(initialGroup = 'ssc') {
  const [group, setGroup] = useState(initialGroup);
  const [query, setQuery] = useState('');
  const [yearFilter, setYearFilter] = useState('All');

  const groups = useMemo(() => pyqGroups, []);

  const years = useMemo(() => {
    const y = new Set(pyqPapers.map((p) => p.year));
    return ['All', ...Array.from(y).sort((a, b) => b - a)];
  }, []);

  const filtered = useMemo(() => {
    return pyqPapers.filter((p) => {
      if (group && group !== 'all' && p.group !== group) return false;
      if (yearFilter !== 'All' && p.year !== Number(yearFilter)) return false;
      if (query) {
        const q = query.toLowerCase();
        return (
          p.exam.toLowerCase().includes(q) ||
          p.paper.toLowerCase().includes(q) ||
          String(p.year).includes(q)
        );
      }
      return true;
    });
  }, [group, query, yearFilter]);

  return {
    groups,
    papers: filtered,
    years,
    group,
    setGroup,
    query,
    setQuery,
    yearFilter,
    setYearFilter,
  };
}
