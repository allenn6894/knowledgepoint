import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

function getCodeText(node) {
  if (typeof node === 'string') return node;
  if (Array.isArray(node)) return node.map(getCodeText).join('');
  if (node?.props?.children != null) return getCodeText(node.props.children);
  return '';
}

export function Pre({ children, ...props }) {
  const [copied, setCopied] = useState(false);
  const codeElement = Array.isArray(children) ? children[0] : children;
  const className = codeElement?.props?.className ?? '';
  const language = className.match(/language-(\w+)/)?.[1];
  const text = getCodeText(children);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API unavailable (e.g. insecure context) — ignore silently.
    }
  };

  return (
    <div className="not-prose my-6 overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-card">
      <div className="flex items-center justify-between border-b border-slate-800 bg-slate-800/60 px-4 py-2">
        <span className="text-xs font-medium uppercase tracking-wide text-slate-400">{language || 'text'}</span>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium text-slate-300 transition-colors hover:bg-slate-700 hover:text-white"
        >
          {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" /> : <Copy className="h-3.5 w-3.5" aria-hidden="true" />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 text-sm leading-relaxed text-slate-100" {...props}>
        {children}
      </pre>
    </div>
  );
}

export function Code({ className, children, ...props }) {
  const isBlock = /language-/.test(className ?? '');

  if (isBlock) {
    return (
      <code className={`font-mono ${className ?? ''}`} {...props}>
        {children}
      </code>
    );
  }

  return (
    <code
      className="rounded bg-brand-50 px-1.5 py-0.5 font-mono text-[0.85em] text-brand-700 dark:bg-brand-500/10 dark:text-brand-300"
      {...props}
    >
      {children}
    </code>
  );
}
