import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { menuItems, pages } from './data/pages';
import { readingOrder, resolvePageIdFromPath, routeMap } from './data/routes';
import Navbar from './components/Navbar';
import ContentRenderer from './components/ContentRenderer';
import CalendarView from './components/CalendarView';
import ExamDetails from './components/ExamDetails';
import PyqPage from './components/PyqPage';
import ResultsList from './components/ResultsList';
import SideRail from './components/SideRail';
import Breadcrumbs from './components/Breadcrumbs';
import TableOfContents from './components/TableOfContents';
import PrevNextNav from './components/PrevNextNav';
import RelatedContent from './components/RelatedContent';
import SearchBar from './components/SearchBar';
import ThemeToggle from './components/ThemeToggle';
import { calendarEvents, examDetails } from './data/calendarData';
import { notifications } from './data/notifications';
import { results } from './data/results';
import useDocumentMeta from './hooks/useDocumentMeta';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const currentPageId = useMemo(() => resolvePageIdFromPath(location.pathname), [location.pathname]);
  const page = useMemo(() => pages.find((item) => item.id === currentPageId) ?? pages[0], [currentPageId]);

  useDocumentMeta({ title: page.title, description: page.description });

  const isHomePage = page.id === 'home';
  const showTableOfContents = location.pathname.startsWith('/exams');
  const showPrevNext = readingOrder.includes(page.id);

  const handleSelectPage = (pageId) => {
    navigate(routeMap[pageId] ?? '/');
    setMobileMenuOpen(false);
  };

  const openExamSection = (slug) => {
    navigate(slug ? `/exams#${slug}` : '/exams');
  };

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

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
        <div className="flex flex-col gap-6">
          <ContentRenderer source={page.content} />
          <CalendarView events={calendarEvents} onSelectExam={openExamSection} />
        </div>
      );
    }

    if (page.id === 'exams') {
      return (
        <div className="flex flex-col gap-6">
          <ContentRenderer source={page.content} />
          <ExamDetails exams={examDetails} />
        </div>
      );
    }

    if (page.id === 'pyq') {
      return <PyqPage />;
    }

    if (page.id === 'results') {
      return (
        <div className="flex flex-col gap-6">
          <ContentRenderer source={page.content} />
          <ResultsList items={results} />
        </div>
      );
    }

    return <ContentRenderer source={page.content} />;
  };

  return (
    <div className={`flex min-h-screen flex-col ${isHomePage ? 'app-bg--home' : 'app-bg'}`}>
      <header className="sticky top-0 z-30 border-b border-brand-100 bg-brand-50/90 backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/85">
        <div className="mx-auto flex max-w-[1800px] items-center gap-3 px-4 py-3 sm:px-6 lg:px-8 xl:px-10">
          <button
            type="button"
            onClick={() => handleSelectPage('home')}
            className="flex shrink-0 items-center gap-2 font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            <img src="/images/logo.svg" alt="Knowledge Point" className="h-9 w-auto" />
          </button>

          <Navbar items={menuItems} activeId={currentPageId} onSelect={handleSelectPage} className="hidden lg:flex" />

          <div className="ml-auto flex items-center gap-2">
            <SearchBar pages={pages} className="hidden w-64 sm:block xl:w-80" />
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 dark:border-slate-700 dark:text-slate-300 lg:hidden"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="animate-fade-in border-t border-brand-100 bg-brand-50 px-4 py-3 dark:border-slate-800 dark:bg-slate-950 lg:hidden">
            <SearchBar pages={pages} className="mb-3 sm:hidden" />
            <Navbar items={menuItems} activeId={currentPageId} onSelect={handleSelectPage} className="flex-col items-stretch" />
          </div>
        )}
      </header>

      <main className="mx-auto w-full max-w-[1800px] flex-1 px-4 py-6 sm:px-6 sm:py-8 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-[240px_minmax(0,1fr)_240px] xl:grid-cols-[270px_minmax(0,1fr)_270px] xl:gap-8">
          <aside className="flex flex-col gap-4 lg:sticky lg:top-20">
            <SideRail title="Latest Notifications" items={notifications} tone="notifications" />
            {showTableOfContents && (
              <div className="rounded-2xl border border-slate-200 bg-white p-3.5 shadow-card dark:border-slate-800 dark:bg-slate-900">
                <TableOfContents />
              </div>
            )}
          </aside>

          <div className="flex min-w-0 flex-col gap-4">
            <Breadcrumbs page={page} />

            {isHomePage ? (
              <>
                <section className="animate-fade-in relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-brand-800 to-brand-600 p-6 text-white shadow-soft sm:p-10">
                  <div className="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-[1.5fr_1fr]">
                    <div>
                      <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-white/80">Job · Exam · PYQ Hub</p>
                      <h1 className="mb-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">{page.title}</h1>
                      <p className="max-w-xl text-base leading-relaxed text-white/90">{page.description}</p>
                      <div className="mt-6 flex flex-wrap gap-3">
                        {page.quickLinks?.map((link) => (
                          <button
                            key={link.pageId}
                            onClick={() => handleSelectPage(link.pageId)}
                            className="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-brand-700 shadow-card transition-transform hover:-translate-y-0.5"
                          >
                            {link.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 self-center sm:flex-nowrap">
                      <div className="flex min-w-[100px] flex-1 flex-col justify-center rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                        <strong className="text-xl">4+</strong>
                        <span className="text-sm text-white/80">Sections</span>
                      </div>
                      <div className="flex min-w-[100px] flex-1 flex-col justify-center rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                        <strong className="text-xl">Live</strong>
                        <span className="text-sm text-white/80">Career Updates</span>
                      </div>
                      <div className="flex min-w-[100px] flex-1 flex-col justify-center rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                        <strong className="text-xl">Easy</strong>
                        <span className="text-sm text-white/80">Navigation</span>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {page.cards?.map((card) => (
                    <button
                      key={card.pageId}
                      onClick={() => handleSelectPage(card.pageId)}
                      className="animate-fade-in flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-card transition-all hover:-translate-y-1 hover:shadow-soft dark:border-slate-800 dark:bg-slate-900"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-xl dark:bg-brand-500/10">
                        {card.icon}
                      </span>
                      <div>
                        <h3 className="mb-1 text-base font-semibold text-slate-900 dark:text-white">{card.title}</h3>
                        <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">{card.description}</p>
                      </div>
                    </button>
                  ))}
                </section>
              </>
            ) : (
              <section className="animate-fade-in relative pb-2">
                <h1 className="mb-1.5 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                  {page.title}
                </h1>
                <p className="max-w-2xl text-sm leading-relaxed text-slate-500 dark:text-slate-400">{page.description}</p>
                <span className="mt-2.5 block h-1 w-16 rounded-full bg-gradient-to-r from-accent-600 to-brand-600" />
              </section>
            )}

            <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-card dark:border-slate-800 dark:bg-slate-900 sm:p-5">
              {renderContent()}
              {showPrevNext && <PrevNextNav pageId={page.id} pages={pages} />}
              <RelatedContent page={page} pages={pages} />
            </section>
          </div>

          <div className="lg:sticky lg:top-20">
            <SideRail title="Latest Results" items={results} tone="results" />
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-200 bg-gradient-to-b from-brand-500/5 to-transparent py-5 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
        Knowledge Point · Structured for jobs, exams and PYQ learning
      </footer>
    </div>
  );
}

export default App;
