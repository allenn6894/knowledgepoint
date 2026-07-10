import { isValidElement, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { MDXProvider } from '@mdx-js/react';
import { mdxComponents } from './mdx';
import rehypeSectionize from '../utils/rehypeSectionize';
import useSearchHighlight from '../hooks/useSearchHighlight';

function ContentRenderer({ source }) {
  const articleRef = useRef(null);
  useSearchHighlight(articleRef, [source]);

  if (typeof source === 'function' || isValidElement(source)) {
    const MdxComponent = source;
    return (
      <article id="article-content" ref={articleRef} className="prose prose-sm prose-slate max-w-none dark:prose-invert">
        <MDXProvider components={mdxComponents}>
          {typeof source === 'function' ? <MdxComponent /> : source}
        </MDXProvider>
      </article>
    );
  }

  return (
    <article id="article-content" ref={articleRef} className="prose prose-sm prose-slate max-w-none dark:prose-invert">
      <ReactMarkdown components={mdxComponents} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSectionize]}>
        {source ?? ''}
      </ReactMarkdown>
    </article>
  );
}

export default ContentRenderer;
