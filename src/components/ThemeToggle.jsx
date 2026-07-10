import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      className="relative inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
    >
      <Sun className={`h-4 w-4 transition-all ${isDark ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`} aria-hidden="true" />
      <Moon
        className={`absolute h-4 w-4 transition-all ${isDark ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
        aria-hidden="true"
      />
    </button>
  );
}

export default ThemeToggle;
