import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import remarkGfm from 'remark-gfm';
import rehypeSectionize from './src/utils/rehypeSectionize.js';

export default defineConfig({
  plugins: [
    react(),
    mdx({
      mdExtensions: [],
      mdxExtensions: ['.mdx'],
      providerImportSource: '@mdx-js/react',
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSectionize],
    }),
  ],
  server: {
    port: 4173,
  },
});
