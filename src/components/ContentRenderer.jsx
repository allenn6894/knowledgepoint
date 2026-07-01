import ReactMarkdown from 'react-markdown';

function ContentRenderer({ source }) {
  return (
    <article className="content-body">
      <ReactMarkdown>{source}</ReactMarkdown>
    </article>
  );
}

export default ContentRenderer;
