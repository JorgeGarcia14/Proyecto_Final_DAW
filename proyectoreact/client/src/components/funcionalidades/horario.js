import React, { useState } from "react";
import FullCalendar from '@fullcalendar/react';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import multiMonthPlugin from '@fullcalendar/multimonth';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

function Horario() {
  const [events, setEvents] = useState([]);
  const [eventType, setEventType] = useState('evento'); // Tipo de evento por defecto

  const handleDateSelect = (selectInfo) => {
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (eventType === 'vacaciones') {
      setEvents([...events, {
        id: String(events.length + 1),
        title: 'Vacaciones pedidas',
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        resourceId: selectInfo.resource ? selectInfo.resource.id : null,
        classNames: ['vacaciones-event']
      }]);
    } else {
      MySwal.fire({
        title: 'Ingrese el título del evento:',
        input: 'text',
        showCancelButton: true,
        inputValidator: (value) => {
          if (!value) {
            return '¡Necesitas escribir algo!';
          }
        }
      }).then((result) => {
        if (result.isConfirmed) {
          let classNames;
          switch (eventType) {
            case 'evento':
              classNames = 'evento-event';
              break;
            case 'nota':
              classNames = 'nota-event';
              break;
            default:
              classNames = ''; // Default class, if any
          }

          setEvents([...events, {
            id: String(events.length + 1),
            title: result.value,
            start: selectInfo.startStr,
            end: selectInfo.endStr,
            resourceId: selectInfo.resource ? selectInfo.resource.id : null,
            classNames: [classNames]
          }]);
        }
      });
    }
  };

  const handleEventClick = (clickInfo) => {
    MySwal.fire({
      title: `¿Deseas eliminar el evento '${clickInfo.event.title}'?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        clickInfo.event.remove();
        setEvents(events.filter(event => event.id !== clickInfo.event.id));
        MySwal.fire(
          'Eliminado',
          'El evento ha sido eliminado.',
          'success'
        );
      }
    });
  };

  const handleEventTypeChange = (event) => {
    setEventType(event.target.value);
  };

  return (
    <div className="w-full h-full overflow-auto">
      <div className="p-4 bg-white rounded shadow-md overflow-hidden">
        <div className="select-container">
          <select className="custom-select" value={eventType} onChange={handleEventTypeChange}>
            <option value="evento">Evento</option>
            <option value="nota">Nota</option>
            <option value="vacaciones">Vacaciones</option>
          </select>
          <div className="select-icon">&#9660;</div>
        </div>
        <br></br>
        <br></br>
        <FullCalendar
          plugins={[resourceTimelinePlugin, dayGridPlugin, interactionPlugin, multiMonthPlugin]}
          initialView='dayGridMonth'
          selectable={true}
          select={handleDateSelect}
          eventClick={handleEventClick}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'resourceTimelineWeek,dayGridMonth,multiMonthYear'
          }}
          buttonText={{
            today: 'Hoy',
            month: 'Mes',
            week: 'Semana',
            day: 'Día',
            resourceTimelineWeek: 'Semana (Recursos)',
            multiMonthYear: 'Año'
          }}
          views={{
            multiMonthYear: {
              type: 'multiMonth',
              duration: { years: 1 },
              buttonText: 'Año',
              numberOfMonths: 12 // Configura el número de meses a mostrar
            }
          }}
          resources={[
            { id: 'a', title: 'Room A' },
            { id: 'b', title: 'Room B' },
            { id: 'c', title: 'Room C' }
          ]}
          events={events}
          locale="es" // Cambia el idioma a español
        />
      </div>
    </div>
  );
}

export default Horario;
