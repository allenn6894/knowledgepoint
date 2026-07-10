const HEADING_TAGS = new Set(['h2']);

/**
 * Wraps each h2-delimited run of siblings in a `<section>` node so plain
 * Markdown/MDX content gets card-based sections without any content edits.
 * Content before the first h2 (an intro paragraph, etc.) is left unwrapped.
 */
export default function rehypeSectionize() {
  return (tree) => {
    const children = tree.children ?? [];
    const output = [];
    let currentSection = null;

    for (const node of children) {
      const isHeading = node.type === 'element' && HEADING_TAGS.has(node.tagName);

      if (isHeading) {
        currentSection = {
          type: 'element',
          tagName: 'section',
          properties: { className: ['mdx-section'] },
          children: [node],
        };
        output.push(currentSection);
        continue;
      }

      if (currentSection) {
        currentSection.children.push(node);
      } else {
        output.push(node);
      }
    }

    tree.children = output;
  };
}
