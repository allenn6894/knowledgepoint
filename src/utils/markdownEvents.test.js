import { describe, expect, it } from 'vitest';
import { parseCalendarEvents, parseExamDetails } from './markdownEvents';

describe('parseCalendarEvents', () => {
  it('extracts event metadata from markdown bullet lines', () => {
    const markdown = `# Exams

## Upcoming Exams
- 2026-08-15 | SSC CGL 2026 | Tier 1 exam | https://example.com/ssc
- 2026-09-20 | UPSC Prelims 2026 | Civil Services preliminary exam | https://example.com/upsc
`;

    const events = parseCalendarEvents(markdown);

    expect(events).toHaveLength(2);
    expect(events[0]).toMatchObject({
      title: 'SSC CGL 2026',
      start: '2026-08-15',
      description: 'Tier 1 exam',
      url: 'https://example.com/ssc',
    });
  });

  it('extracts exam detail sections with slugs and extra details from markdown', () => {
    const markdown = `# Exams

## Exam Details
- 2026-08-15 | SSC CGL 2026 | ssc-cgl-2026 | Tier 1 exam | https://example.com/ssc | National exam for graduates.
`;

    const details = parseExamDetails(markdown);

    expect(details).toHaveLength(1);
    expect(details[0]).toMatchObject({
      title: 'SSC CGL 2026',
      slug: 'ssc-cgl-2026',
      description: 'Tier 1 exam',
      link: 'https://example.com/ssc',
      details: 'National exam for graduates.',
    });
  });
});
