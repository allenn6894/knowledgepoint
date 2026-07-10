function Section({ children, ...props }) {
  return (
    <section
      {...props}
      className="not-prose group/section my-3.5 rounded-xl border border-slate-200 bg-white p-3.5 shadow-card transition-shadow hover:shadow-soft dark:border-slate-800 dark:bg-slate-900 sm:p-4"
    >
      <div className="prose prose-sm prose-slate max-w-none dark:prose-invert prose-headings:mt-0">
        {children}
      </div>
    </section>
  );
}

export default Section;
