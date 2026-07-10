import { Children, cloneElement, isValidElement, useId, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQItem({ question, children, isOpen, onToggle }) {
  const panelId = useId();

  return (
    <div className="border-b border-slate-200 last:border-0 dark:border-slate-800">
      <h4 className="not-prose m-0">
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="flex w-full items-center justify-between gap-3 py-3 text-left text-xs font-semibold text-slate-900 transition-colors hover:text-brand-600 dark:text-white dark:hover:text-brand-400"
        >
          {question}
          <ChevronDown
            className={`h-3.5 w-3.5 shrink-0 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            aria-hidden="true"
          />
        </button>
      </h4>
      <div
        id={panelId}
        role="region"
        className={`grid overflow-hidden text-xs leading-relaxed text-slate-600 transition-all duration-200 dark:text-slate-400 ${
          isOpen ? 'grid-rows-[1fr] pb-3 opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="min-h-0 [&>p]:m-0">{children}</div>
      </div>
    </div>
  );
}

function FAQ({ items, children, allowMultiple = false }) {
  const [openIndexes, setOpenIndexes] = useState(() => new Set());

  const toggle = (index) => {
    setOpenIndexes((current) => {
      const next = allowMultiple ? new Set(current) : new Set();
      if (current.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const resolvedChildren = items
    ? items.map((item, index) => (
        <FAQItem key={item.question} question={item.question} isOpen={openIndexes.has(index)} onToggle={() => toggle(index)}>
          {item.answer}
        </FAQItem>
      ))
    : Children.map(children, (child, index) =>
        isValidElement(child)
          ? cloneElement(child, { isOpen: openIndexes.has(index), onToggle: () => toggle(index) })
          : child
      );

  return (
    <div className="not-prose my-3 rounded-xl border border-slate-200 bg-white px-3.5 shadow-card dark:border-slate-800 dark:bg-slate-900">
      {resolvedChildren}
    </div>
  );
}

export default FAQ;
