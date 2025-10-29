
import FullCalendar from '@fullcalendar/react'
import dayGrid from '@fullcalendar/daygrid'
import timeGrid from '@fullcalendar/timegrid'
import list from '@fullcalendar/list'
import esLocale from '@fullcalendar/core/locales/es'

export default function EntrenamientosPage() {
  return (
    <FullCalendar
      plugins={[dayGrid, timeGrid, list]}
      initialView="dayGridMonth"
      locales={[esLocale]}
      locale="es"
      height="auto"
      headerToolbar={{ left: 'prev,next today', center: 'title', right: 'dayGridMonth,timeGridWeek,listWeek' }}
      events={[
        { title: 'Entrenamiento fuerza', start: '2025-11-03T18:00:00' },
        { title: 'Rodaje 10k', start: '2025-11-05' },
      ]}
    />
  );
}

