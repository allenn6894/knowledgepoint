function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function parseEntries(markdown) {
  const lines = markdown.split(/\r?\n/);
  const entries = [];

  lines.forEach((line, index) => {
    const trimmed = line.trim();

    if (!trimmed.startsWith('- ')) {
      return;
    }

    const parts = trimmed
      .replace(/^[-]\s*/, '')
      .split('|')
      .map((part) => part.trim());

    if (parts.length < 3) {
      return;
    }

    const [date, title] = parts;

    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      return;
    }

    let slug = '';
    let description = '';
    let link = '#';
    let details = '';

    if (parts.length >= 6) {
      slug = parts[2];
      description = parts[3];
      link = parts[4];
      details = parts[5];
    } else if (parts.length === 5) {
      slug = parts[2];
      description = parts[3];
      link = parts[4];
    } else if (parts.length === 4) {
      description = parts[2];
      link = parts[3];
    }

    if (!slug) {
      slug = slugify(title);
    }

    entries.push({
      id: `${date}-${title}-${index}`,
      title,
      start: date,
      slug,
      description,
      link,
      details,
      color: '#2563eb',
    });
  });

  return entries;
}

export function parseCalendarEvents(markdown) {
  return parseEntries(markdown).map((entry) => ({
    id: entry.id,
    title: entry.title,
    start: entry.start,
    description: entry.description,
    url: entry.link,
    color: entry.color,
    slug: entry.slug,
  }));
}

export function parseExamDetails(markdown) {
  return parseEntries(markdown).map((entry) => ({
    id: entry.id,
    title: entry.title,
    start: entry.start,
    slug: entry.slug,
    description: entry.description,
    link: entry.link,
    details: entry.details,
  }));
}
