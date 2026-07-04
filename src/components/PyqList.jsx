import React from 'react';

function PyqList({ papers }) {
  if (!papers || papers.length === 0) {
    return <div className="pyq-empty">No papers found.</div>;
  }

  return (
    <div className="pyq-list">
      <div className="pyq-list-header">
        <div>Exam</div>
        <div>Paper / Subject</div>
        <div>Year</div>
        <div>Shift</div>
        <div>Type</div>
        <div>Size</div>
        <div>Action</div>
      </div>

      {papers.map((p) => (
        <div key={p.id} className="pyq-row fade-in">
          <div className="pyq-cell exam">{p.exam}</div>
          <div className="pyq-cell paper">{p.paper}</div>
          <div className="pyq-cell year">{p.year}</div>
          <div className="pyq-cell shift">{p.shift}</div>
          <div className="pyq-cell type">{p.type}</div>
          <div className="pyq-cell size">{p.size}</div>
          <div className="pyq-cell action">
            <a href={p.link} target="_blank" rel="noreferrer" className="pyq-download">PDF</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PyqList;
