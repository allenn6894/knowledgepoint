import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function HeroCarousel({ slides, onSelect }) {
  const [index, setIndex] = useState(0);
  const slide = slides[index];

  const goPrev = () => setIndex((current) => (current - 1 + slides.length) % slides.length);
  const goNext = () => setIndex((current) => (current + 1) % slides.length);

  return (
    <div>
      <div key={index} className="animate-fade-in">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-white/80">{slide.eyebrow}</p>
        <h1 className="mb-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">{slide.title}</h1>
        <p className="max-w-xl text-base leading-relaxed text-white/90">{slide.description}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => onSelect(slide.pageId)}
            className="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-brand-700 shadow-card transition-transform hover:-translate-y-0.5"
          >
            {slide.ctaLabel}
          </button>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous slide"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition-colors hover:bg-white/20"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden="true" />
        </button>

        <div className="flex items-center gap-1.5" role="tablist" aria-label="Hero slides">
          {slides.map((item, i) => (
            <button
              key={item.pageId}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to slide ${i + 1}: ${item.title}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? 'w-6 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={goNext}
          aria-label="Next slide"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition-colors hover:bg-white/20"
        >
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

export default HeroCarousel;
