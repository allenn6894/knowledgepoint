import { useEffect, useMemo, useState } from 'react';
import { menuItems, pages } from './data/pages';
import Navbar from './components/Navbar';
import ContentRenderer from './components/ContentRenderer';
import CalendarView from './components/CalendarView';
import ExamDetails from './components/ExamDetails';
import { calendarEvents, examDetails } from './data/calendarData';

function App() {
  const [selectedPage, setSelectedPage] = useState(menuItems[0].id);
  const page = useMemo(
    () => pages.find((item) => item.id === selectedPage) ?? pages[0],
    [selectedPage]
  );

  const isHomePage = page.id === 'home';
  const isStandaloneSectionPage = ['jobs', 'exams', 'pyq'].includes(page.id);

  const openExamSection = (slug) => {
    setSelectedPage('exams');
    const nextUrl = slug ? `#${slug}` : '#exams';
    window.history.pushState({}, '', nextUrl);

    window.setTimeout(() => {
      const target = document.getElementById(slug);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 80);
  };

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (!hash) {
      return;
    }

    const matchingExam = examDetails.find((exam) => exam.slug === hash);
    if (matchingExam) {
      setSelectedPage('exams');
      window.setTimeout(() => {
        const target = document.getElementById(hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 120);
    }
  }, []);

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="brand">Knowledge Point</div>
        <Navbar items={menuItems} activeId={selectedPage} onSelect={setSelectedPage} />
      </header>

      <main className="app-main">
        {isHomePage ? (
          <>
            <section className="hero-card">
              <div className="hero-copy">
                <p className="eyebrow">Job • Exam • PYQ Hub</p>
                <h1>{page.title}</h1>
                <p>{page.description}</p>
                <div className="hero-actions">
                  {page.quickLinks?.map((link) => (
                    <button key={link.pageId} onClick={() => setSelectedPage(link.pageId)}>
                      {link.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="hero-stats">
                <div className="stat-box">
                  <strong>4+</strong>
                  <span>Sections</span>
                </div>
                <div className="stat-box">
                  <strong>Live</strong>
                  <span>Career Updates</span>
                </div>
                <div className="stat-box">
                  <strong>Easy</strong>
                  <span>Navigation</span>
                </div>
              </div>
            </section>

            <section className="resource-grid">
              {page.cards?.map((card) => (
                <button key={card.pageId} className="resource-card" onClick={() => setSelectedPage(card.pageId)}>
                  <span className="resource-icon">{card.icon}</span>
                  <div>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </div>
                </button>
              ))}
            </section>
          </>
        ) : isStandaloneSectionPage ? (
          <section className="page-heading standalone-page-heading">
            <h1>{page.title}</h1>
            <p>{page.description}</p>
          </section>
        ) : (
          <section className="page-heading">
            <h1>{page.title}</h1>
            <p>{page.description}</p>
          </section>
        )}

        <section className="content-card">
          {page.id === 'calendar' ? (
            <div className="calendar-page">
              <ContentRenderer source={page.content} />
              <CalendarView events={calendarEvents} onSelectExam={openExamSection} />
            </div>
          ) : page.id === 'exams' ? (
            <div className="exam-page">
              <ContentRenderer source={page.content} />
              <ExamDetails exams={examDetails} />
            </div>
          ) : page.id === 'jobs' || page.id === 'pyq' ? (
            <div className="standalone-section-page">
              <ContentRenderer source={page.content} />
            </div>
          ) : (
            <ContentRenderer source={page.content} />
          )}
        </section>
      </main>

      <footer className="app-footer">
        <span>Knowledge Point · Structured for jobs, exams and PYQ learning</span>
      </footer>
    </div>
  );
}

export default App;
