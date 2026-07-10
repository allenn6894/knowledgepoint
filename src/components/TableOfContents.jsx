import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { List } from 'lucide-react';

function TableOfContents() {
  const navigate = useNavigate();
  const location = useLocation();
  const [items, setItems] = useState([]);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const headings = Array.from(
        document.querySelectorAll('#article-content h2[id], #article-content h3[id], #article-content h4[id]')
      );
      setItems(
        headings.map((heading) => ({
          level: Number(heading.tagName.slice(1)),
          text: heading.textContent,
          slug: heading.id,
        }))
      );
    }, 80);

    return () => window.clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    if (items.length === 0) return undefined;

    const headingEls = items
      .map((item) => document.getElementById(item.slug))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-96px 0px -70% 0px', threshold: 0 }
    );

    headingEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav aria-label="On this page" className="text-sm">
      <div className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
        <List className="h-3.5 w-3.5" aria-hidden="true" />
        On this page
      </div>
      <ol className="scrollbar-thin max-h-[calc(100vh-16rem)] space-y-0.5 overflow-y-auto border-l border-slate-200 dark:border-slate-800">
        {items.map((item) => {
          const isActive = item.slug === activeId;
          return (
            <li key={item.slug} style={{ paddingLeft: `${(item.level - 2) * 0.75 + 0.75}rem` }}>
              <a
                href={`#${item.slug}`}
                onClick={(event) => {
                  event.preventDefault();
                  navigate(`${location.pathname}#${item.slug}`);
                  document.getElementById(item.slug)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className={`-ml-px block border-l-2 py-1 pl-3 leading-snug transition-colors ${
                  isActive
                    ? 'border-brand-600 font-medium text-brand-700 dark:border-brand-400 dark:text-brand-400'
                    : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-800 dark:text-slate-400 dark:hover:border-slate-600 dark:hover:text-slate-200'
                }`}
              >
                {item.text}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default TableOfContents;
