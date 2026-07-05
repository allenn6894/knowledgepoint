import { isValidElement } from 'react';
import ReactMarkdown from 'react-markdown';
import { MDXProvider } from '@mdx-js/react';
import slugify from '../utils/slugify';

function HeadingFactory(Tag) {
  return ({ node, ...props }) => {
    const text = Array.isArray(props.children) ? props.children.join('') : props.children;
    const id = slugify(text);
    return <Tag id={id} {...props} />;
  };
}

const mdxComponents = {
  h1: HeadingFactory('h1'),
  h2: HeadingFactory('h2'),
  h3: HeadingFactory('h3'),
  h4: HeadingFactory('h4'),
};

function ContentRenderer({ source }) {
  if (typeof source === 'function' || isValidElement(source)) {
    const MdxComponent = source;
    return (
      <article className="content-body">
        <MDXProvider components={mdxComponents}>
          {typeof source === 'function' ? <MdxComponent /> : source}
        </MDXProvider>
      </article>
    );
  }

  return (
    <article className="content-body">
      <ReactMarkdown
        components={mdxComponents}
      >
        {source ?? ''}
      </ReactMarkdown>
    </article>
  );
}

export default ContentRenderer;
