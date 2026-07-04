import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

function CalendarView({ events, onSelectExam }) {
  const calendarEvents = events.map((event) => ({
    id: event.id,
    title: event.title,
    start: event.start,
    description: event.description,
    backgroundColor: event.color,
    borderColor: event.color,
    extendedProps: {
      slug: event.slug,
      description: event.description,
    },
  }));

  return (
    <div className="calendar-section">
      <div className="calendar-shell">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,dayGridWeek',
          }}
          events={calendarEvents}
          eventDisplay="block"
          displayEventTime={false}
          dayMaxEventRows={3}
          height="auto"
          contentHeight={520}
          eventClick={(info) => {
            info.jsEvent.preventDefault();
            info.jsEvent.stopPropagation();

            const slug = info.event.extendedProps?.slug;
            if (slug) {
              onSelectExam(slug);
            }
          }}
        />
      </div>
    </div>
  );
}

export default CalendarView;
