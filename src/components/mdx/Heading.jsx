import { Hash } from 'lucide-react';
import slugify from '../../utils/slugify';

const LEVEL_CLASSES = {
  1: 'text-2xl sm:text-3xl font-extrabold tracking-tight',
  2: 'text-lg sm:text-xl font-bold tracking-tight',
  3: 'text-base sm:text-lg font-semibold',
  4: 'text-sm sm:text-base font-semibold',
  5: 'text-sm font-semibold',
  6: 'text-sm font-semibold',
};

function getText(children) {
  if (Array.isArray(children)) return children.map(getText).join('');
  if (children == null || typeof children === 'boolean') return '';
  if (typeof children === 'object' && children.props?.children) return getText(children.props.children);
  return String(children);
}

export function createHeading(level) {
  const Tag = `h${level}`;

  function HeadingLevel({ children, id: providedId, ...props }) {
    const text = getText(children);
    const id = providedId || slugify(text);

    return (
      <Tag
        id={id}
        className={`group relative scroll-mt-24 ${LEVEL_CLASSES[level] ?? LEVEL_CLASSES[6]}`}
        {...props}
      >
        {children}
        <a
          href={`#${id}`}
          className="not-prose absolute -left-6 top-1/2 hidden -translate-y-1/2 items-center pr-2 text-slate-300 opacity-0 transition-opacity duration-150 hover:text-brand-500 group-hover:opacity-100 dark:text-slate-600 lg:inline-flex"
          aria-label={`Link to ${text || 'section'}`}
        >
          <Hash className="h-4 w-4" aria-hidden="true" />
        </a>
      </Tag>
    );
  }

  HeadingLevel.displayName = `Heading${level}`;
  return HeadingLevel;
}

function Heading({ level = 2, children, ...props }) {
  const Component = createHeading(level);
  return <Component {...props}>{children}</Component>;
}

export default Heading;
