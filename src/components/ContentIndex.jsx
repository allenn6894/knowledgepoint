import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function ContentIndex() {
  const navigate = useNavigate();
  const location = useLocation();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const headings = Array.from(
        document.querySelectorAll('.content-card h2[id], .content-card h3[id], .content-card h4[id]')
      );
      setItems(
        headings.map((heading) => ({
          level: Number(heading.tagName.slice(1)),
          text: heading.textContent,
          slug: heading.id,
        }))
      );
    }, 0);

    return () => window.clearTimeout(timer);
  }, [location.pathname]);

  if (items.length === 0) return null;

  return (
    <nav className="content-index" aria-label="On this page">
      <h4 className="content-index__title">On this page</h4>
      <ol className="content-index__list">
        {items.map((it, idx) => (
          <li key={it.slug} className={`content-index__item level-${it.level}`}>
            <a
              href={`#${it.slug}`}
              onClick={(e) => {
                e.preventDefault();
                navigate(`${location.pathname}#${it.slug}`);
              }}
            >
              <span className="content-index__num">{idx + 1}.</span> {it.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default ContentIndex;
