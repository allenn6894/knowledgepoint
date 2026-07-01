import { useMemo, useState } from 'react';
import { menuItems, pages } from './data/pages';
import Navbar from './components/Navbar';
import ContentRenderer from './components/ContentRenderer';

function App() {
  const [selectedPage, setSelectedPage] = useState(menuItems[0].id);
  const page = useMemo(
    () => pages.find((item) => item.id === selectedPage) ?? pages[0],
    [selectedPage]
  );

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="brand">Knowledge Point</div>
        <Navbar items={menuItems} activeId={selectedPage} onSelect={setSelectedPage} />
      </header>

      <main className="app-main">
        <section className="page-heading">
          <h1>{page.title}</h1>
          <p>{page.description}</p>
        </section>
        <ContentRenderer source={page.content} />
      </main>

      <footer className="app-footer">
        <span>Knowledge Point · Quick content management with markdown</span>
      </footer>
    </div>
  );
}

export default App;
