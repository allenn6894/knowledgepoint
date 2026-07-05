import { useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { menuItems, pages } from './data/pages';
import Navbar from './components/Navbar';
import ContentRenderer from './components/ContentRenderer';
import CalendarView from './components/CalendarView';
import ExamDetails from './components/ExamDetails';
import PyqPage from './components/PyqPage';
import SideRail from './components/SideRail';
import { calendarEvents, examDetails } from './data/calendarData';
import { notifications } from './data/notifications';
import { results } from './data/results';
import ContentIndex from './components/ContentIndex';

const routeMap = {
  home: '/',
  jobs: '/jobs',
  exams: '/exams',
  banking: '/exams/banking',
  admin: '/exams/admin',
  engineering: '/exams/engineering',
  medical: '/exams/medical',
  'admin-ssc-cgl-2026': '/exams/admin/ssc-cgl-2026',
  'admin-state-service-2026': '/exams/admin/state-service-2026',
  pyq: '/pyq',
  calendar: '/calendar',
};

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPageId = useMemo(() => {
    const path = location.pathname.replace(/^\/|\/$/g, '');
    const pageId = Object.entries(routeMap).find(([, route]) => route === `/${path || ''}`)?.[0];
    return pageId ?? 'home';
  }, [location.pathname]);

  const page = useMemo(
    () => pages.find((item) => item.id === currentPageId) ?? pages[0],
    [currentPageId]
  );

  const isHomePage = page.id === 'home';
  const isStandaloneSectionPage = ['jobs', 'exams', 'pyq', 'banking', 'admin', 'engineering', 'medical'].includes(page.id);

  const handleSelectPage = (pageId) => {
    navigate(routeMap[pageId] ?? '/');
  };

  const openExamSection = (slug) => {
    navigate(slug ? `/exams#${slug}` : '/exams');
  };

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (!hash) {
      return;
    }

    // Try to scroll to an element with the matching id for any page.
    window.setTimeout(() => {
      const target = document.getElementById(hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }

      // Fallback: if it's an exam detail slug, try to find it in examDetails
      const matchingExam = examDetails.find((exam) => exam.slug === hash);
      if (matchingExam) {
        const fallback = document.getElementById(hash);
        if (fallback) {
          fallback.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }, 120);
  }, [location.hash, location.pathname]);

  const renderContent = () => {
    if (page.id === 'calendar') {
      return (
        <div className="calendar-page">
          <ContentRenderer source={page.content} />
          <CalendarView events={calendarEvents} onSelectExam={openExamSection} />
        </div>
      );
    }

    if (page.id === 'exams') {
      return (
        <div className="exam-page">
          <ContentRenderer source={page.content} />
          <ExamDetails exams={examDetails} />
        </div>
      );
    }

    if (page.id === 'pyq') {
      return <PyqPage />;
    }

    if (page.id === 'jobs') {
      return (
        <div className="standalone-section-page">
          <ContentRenderer source={page.content} />
        </div>
      );
    }

    return <ContentRenderer source={page.content} />;
  };

  return (
    <div className="app-shell">
      <header className="app-header">
        <button type="button" className="brand" onClick={() => handleSelectPage('home')}>
          <img src="/images/logo.svg" alt="Knowledge Point" />
        </button>
        <Navbar items={menuItems} activeId={currentPageId} onSelect={handleSelectPage} />
      </header>

      <main className="app-main">
        <div className="app-content-grid">
          <aside className="left-column">
            <SideRail title="Latest Notifications" items={notifications} tone="notifications" />
            {location.pathname.startsWith('/exams') && (
              <div className="index-card">
                <ContentIndex />
              </div>
            )}
          </aside>

          <div className="page-center">
            {isHomePage ? (
              <>
                <section className="hero-card fade-in">
                  <div className="hero-copy">
                    <p className="eyebrow">Job • Exam • PYQ Hub</p>
                    <h1>{page.title}</h1>
                    <p>{page.description}</p>
                    <div className="hero-actions">
                      {page.quickLinks?.map((link) => (
                        <button key={link.pageId} onClick={() => handleSelectPage(link.pageId)}>
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
                    <button key={card.pageId} className="resource-card fade-in" onClick={() => handleSelectPage(card.pageId)}>
                      <span className="resource-art" />
                      <div>
                        <span className="resource-icon">{card.icon}</span>
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                      </div>
                    </button>
                  ))}
                </section>
              </>
            ) : isStandaloneSectionPage ? (
              <section className="page-heading standalone-page-heading fade-in">
                <h1>{page.title}</h1>
                <p>{page.description}</p>
              </section>
            ) : (
              <section className="page-heading fade-in">
                <h1>{page.title}</h1>
                <p>{page.description}</p>
              </section>
            )}

            <section className="content-card">{renderContent()}</section>
          </div>

          <SideRail title="Latest Results" items={results} tone="results" />
        </div>
      </main>

      <footer className="app-footer">
        <span>Knowledge Point · Structured for jobs, exams and PYQ learning</span>
      </footer>
    </div>
  );
}

export default App;
