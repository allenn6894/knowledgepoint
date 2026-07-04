import examsMarkdown from '../content/exams.md?raw';
import { parseCalendarEvents, parseExamDetails } from '../utils/markdownEvents';

export const calendarEvents = parseCalendarEvents(examsMarkdown);
export const examDetails = parseExamDetails(examsMarkdown);
