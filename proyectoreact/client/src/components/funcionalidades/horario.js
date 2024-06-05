import React, { useState, useEffect } from "react";
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

  // Cargar eventos desde LocalStorage al iniciar
  useEffect(() => {
    const localEvents = localStorage.getItem('events');
    if (localEvents) {
      setEvents(JSON.parse(localEvents));
    }
  }, []);

  const handleDateSelect = async (selectInfo) => {
    const { value: eventName } = await MySwal.fire({
      title: 'Nombre del evento',
      input: 'text',
      inputPlaceholder: 'Introduce el nombre del evento'
    });
  
    if (eventName) {
      const newEvent = {
        id: Math.random().toString(36).substr(2, 9),
        title: eventName,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        id_recurso: selectInfo.resource ? selectInfo.resource.id : null,
        classnames: [eventType],
        color: eventType === 'evento' ? '#258aef' : eventType === 'nota' ? '#6fd782' : '#d16969' // Agrega esta línea
      };
  
      const newEvents = [...events, newEvent];
      setEvents(newEvents);
      localStorage.setItem('events', JSON.stringify(newEvents));
    }
  };
  
  const handleEventClick = async (clickInfo) => {
    const result = await MySwal.fire({
      title: '¿Estás seguro?',
      text: "No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, bórralo!'
    });
  
    if (result.isConfirmed) {
      const newEvents = events.filter(event => event.id !== clickInfo.event.id); // Asegúrate de que estás accediendo al id del evento correctamente
      setEvents(newEvents);
      localStorage.setItem('events', JSON.stringify(newEvents));
    }
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