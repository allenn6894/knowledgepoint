function Navbar({ items, activeId, onSelect }) {
  return (
    <nav className="nav-menu">
      {items.map((item) => (
        <button
          key={item.id}
          className={item.id === activeId ? 'nav-button active' : 'nav-button'}
          onClick={() => onSelect(item.id)}
        >
          {item.title}
        </button>
      ))}
    </nav>
  );
}

export default Navbar;
