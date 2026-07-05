function SideRail({ title, items, tone }) {
  return (
    <aside className={`side-rail ${tone || ''}`}>
      <div className="side-rail__header">
        <h3>{title}</h3>
      </div>

      <div className="side-rail__list">
        {items.map((item) => (
          <div key={item.id} className="side-rail__card">
            <span className="side-rail__tag">{item.tag}</span>
            <strong>{item.title}</strong>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default SideRail;
