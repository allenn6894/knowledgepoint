import { createHeading } from './Heading';
import Section from './Section';
import { Table, Thead, Tbody, Tr, Th, Td } from './Table';
import Image from './Image';
import Link from './Link';
import Blockquote from './Blockquote';
import { Pre, Code } from './CodeBlock';
import { Ul, Ol, Li } from './List';

export { default as Heading } from './Heading';
export { default as Section } from './Section';
export { Table, Thead, Tbody, Tr, Th, Td } from './Table';
export { default as Image } from './Image';
export { default as Link } from './Link';
export { default as PDFCard } from './PDFCard';
export { default as PDFEmbed } from './PDFEmbed';
export { default as Notice } from './Notice';
export { default as Timeline, TimelineItem } from './Timeline';
export { default as FAQ, FAQItem } from './FAQ';
export { default as InfoCard } from './InfoCard';
export { default as ExamInfoCard } from './ExamInfoCard';
export { default as Callout } from './Callout';
export { default as Blockquote } from './Blockquote';
export { Pre, Code } from './CodeBlock';
export { default as Button } from './Button';
export { Ul, Ol, Li } from './List';

/**
 * Maps plain Markdown/MDX HTML tags to their upgraded component. This is
 * what makes every existing .md file render through the new design system
 * with zero content edits — content authors only need JSX for the
 * MDX-only components (Callout, Timeline, FAQ, InfoCard, ExamInfoCard, ...).
 */
export const mdxComponents = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  section: Section,
  table: Table,
  thead: Thead,
  tbody: Tbody,
  tr: Tr,
  th: Th,
  td: Td,
  img: Image,
  a: Link,
  blockquote: Blockquote,
  pre: Pre,
  code: Code,
  ul: Ul,
  ol: Ol,
  li: Li,
};
