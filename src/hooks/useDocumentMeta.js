import { useEffect } from 'react';

function upsertMetaDescription(content) {
  let tag = document.querySelector('meta[name="description"]');
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', 'description');
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

export default function useDocumentMeta({ title, description }) {
  useEffect(() => {
    if (title) {
      document.title = `${title} · Knowledge Point`;
    }
    if (description) {
      upsertMetaDescription(description);
    }
  }, [title, description]);
}
