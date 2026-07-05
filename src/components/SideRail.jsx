import { useNavigate } from 'react-router-dom';

function SideRail({ title, items, tone }) {
  const navigate = useNavigate();

  return (
    <aside className={`side-rail ${tone || ''}`}>
      <div className="side-rail__header">
        <h3>{title}</h3>
      </div>

      <div className="side-rail__list">
        {items.map((item) => {
          const isLink = Boolean(item.route);
          const key = item.id;

          if (isLink) {
            return (
              <button
                key={key}
                type="button"
                className={`side-rail__card clickable`}
                onClick={() => navigate(item.route)}
              >
                <span className="side-rail__tag">{item.tag}</span>
                <strong>{item.title}</strong>
                <p>{item.description}</p>
              </button>
            );
          }

          return (
            <div key={key} className="side-rail__card">
              <span className="side-rail__tag">{item.tag}</span>
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </aside>
  );
}

export default SideRail;
