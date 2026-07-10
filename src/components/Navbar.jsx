import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

function Navbar({ items, activeId, onSelect, className = '' }) {
  const [openMenu, setOpenMenu] = useState(null);
  const navRef = useRef(null);

  const handleSelect = (pageId) => {
    onSelect(pageId);
    setOpenMenu(null);
  };

  const toggleMenu = (itemId) => {
    setOpenMenu((current) => (current === itemId ? null : itemId));
  };

  useEffect(() => {
    const onClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  return (
    <nav ref={navRef} className={`flex flex-wrap items-center gap-1 ${className}`}>
      {items.map((item) => {
        const hasChildren = Array.isArray(item.children) && item.children.length > 0;
        const isActive = item.id === activeId || item.children?.some((child) => child.pageId === activeId);

        return (
          <div key={item.id} className="relative">
            <button
              type="button"
              onClick={() => {
                if (hasChildren) {
                  toggleMenu(item.id);
                } else {
                  handleSelect(item.id);
                }
              }}
              className={`inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-all duration-150 sm:px-4 ${
                isActive
                  ? 'bg-gradient-to-r from-brand-600 to-accent-600 text-white shadow-card'
                  : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
              }`}
              aria-expanded={hasChildren ? openMenu === item.id : undefined}
              aria-haspopup={hasChildren ? 'menu' : undefined}
            >
              {item.title}
              {hasChildren && (
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform ${openMenu === item.id ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              )}
            </button>

            {hasChildren && openMenu === item.id && (
              <div
                role="menu"
                className="absolute left-0 top-[calc(100%+0.4rem)] z-30 flex min-w-[190px] animate-fade-in flex-col gap-0.5 rounded-xl border border-slate-200 bg-white p-1.5 shadow-soft dark:border-slate-700 dark:bg-slate-800"
              >
                {item.children.map((child) => (
                  <button
                    key={child.id}
                    role="menuitem"
                    type="button"
                    onClick={() => handleSelect(child.pageId)}
                    className={`rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                      child.pageId === activeId
                        ? 'bg-brand-50 font-semibold text-brand-700 dark:bg-brand-500/10 dark:text-brand-400'
                        : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700'
                    }`}
                  >
                    {child.title}
                  </button>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}

export default Navbar;
