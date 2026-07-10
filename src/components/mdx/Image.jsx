import { useEffect, useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

function Lightbox({ src, alt, onClose }) {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt || 'Image preview'}
      className="fixed inset-0 z-50 flex animate-fade-in items-center justify-center bg-slate-950/85 p-6"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
        aria-label="Close preview"
      >
        <X className="h-5 w-5" />
      </button>
      <img
        src={src}
        alt={alt}
        className="max-h-[85vh] max-w-full rounded-lg object-contain shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      />
    </div>
  );
}

function Image({ src, alt, title }) {
  const [open, setOpen] = useState(false);

  return (
    <figure className="not-prose my-6">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative block w-full overflow-hidden rounded-2xl border border-slate-200 shadow-card dark:border-slate-800"
      >
        <img
          src={src}
          alt={alt ?? ''}
          loading="lazy"
          className="w-full transition-transform duration-300 group-hover:scale-[1.02]"
        />
        <span className="absolute inset-0 flex items-center justify-center bg-slate-950/0 opacity-0 transition-all duration-200 group-hover:bg-slate-950/20 group-hover:opacity-100">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-md">
            <ZoomIn className="h-5 w-5" aria-hidden="true" />
          </span>
        </span>
      </button>
      {(title || alt) && (
        <figcaption className="mt-2 text-center text-sm text-slate-500 dark:text-slate-400">
          {title ?? alt}
        </figcaption>
      )}
      {open && <Lightbox src={src} alt={alt} onClose={() => setOpen(false)} />}
    </figure>
  );
}

export default Image;
