import { Link as RouterLink } from 'react-router-dom';

const VARIANTS = {
  primary:
    'bg-brand-600 text-white shadow-card hover:bg-brand-700 focus-visible:outline-brand-600',
  secondary:
    'bg-brand-50 text-brand-700 hover:bg-brand-100 dark:bg-brand-500/10 dark:text-brand-300 dark:hover:bg-brand-500/20',
  ghost:
    'bg-transparent text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800',
};

const SIZES = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-5 py-2.5 text-base',
};

function Button({ href, variant = 'primary', size = 'md', className = '', children, ...props }) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-150 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${VARIANTS[variant] ?? VARIANTS.primary} ${SIZES[size] ?? SIZES.md} ${className}`;

  if (href) {
    const isInternal = href.startsWith('/');
    if (isInternal) {
      return (
        <RouterLink to={href} className={classes} {...props}>
          {children}
        </RouterLink>
      );
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;
