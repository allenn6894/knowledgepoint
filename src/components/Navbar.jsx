import { useState } from 'react';

function Navbar({ items, activeId, onSelect }) {
  const [openMenu, setOpenMenu] = useState(null);

  const handleSelect = (pageId) => {
    onSelect(pageId);
    setOpenMenu(null);
  };

  const toggleMenu = (itemId) => {
    setOpenMenu((current) => (current === itemId ? null : itemId));
  };

  return (
    <nav className="nav-menu">
      {items.map((item) => {
        const hasChildren = Array.isArray(item.children) && item.children.length > 0;
        const isActive = item.id === activeId || item.children?.some((child) => child.pageId === activeId);

        return (
          <div key={item.id} className={`nav-item ${isActive ? 'active' : ''}`}>
            <button
              className={isActive ? 'nav-button active' : 'nav-button'}
              onClick={() => {
                if (hasChildren) {
                  toggleMenu(item.id);
                } else {
                  handleSelect(item.id);
                }
              }}
            >
              {item.title}
              {hasChildren ? <span className="caret">▾</span> : null}
            </button>

            {hasChildren && openMenu === item.id ? (
              <div className="dropdown-menu">
                {item.children.map((child) => (
                  <button
                    key={child.id}
                    className={child.pageId === activeId ? 'dropdown-item active' : 'dropdown-item'}
                    onClick={() => handleSelect(child.pageId)}
                  >
                    {child.title}
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        );
      })}
    </nav>
  );
}

export default Navbar;
