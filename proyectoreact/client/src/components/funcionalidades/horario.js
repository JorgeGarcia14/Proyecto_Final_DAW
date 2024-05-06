// client/src/components/perfil.js
import React, { useEffect, useState} from "react"; //Con useState y useEffect se pueden manejar estados y efectos en componentes funcionales
import axios from "axios"; //AXIOS permite hacer peticiones HTTP desde el cliente
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

function Horario() {
  const [horario, setHorario] = useState(null);
  const [datosEmple, setDatosEmple] = useState(null);

  useEffect(() => {
    const id = localStorage.getItem('usuarioId');
  
    const fetchData = async () => {
      try {
        const responseHorario = await axios.get(`http://localhost:5000/api/horario/${id}`);
        console.log(responseHorario.data);
        setHorario(responseHorario.data);
  
        const responseEmple = await fetch(`http://localhost:5000/api/empleado/${id}`); // Datos del empleado para ese horario
        const datos = await responseEmple.json();
        setDatosEmple(datos);
        console.log(datos);
      } catch (error) {
        console.error("Error:", error);
      }
    };
  
    fetchData();
  }, []);

  const events = [
    { title: 'Meeting', start: new Date() }
  ]
  

  function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }

  if (!horario || !horario[0] || !datosEmple || !datosEmple[0]) {
    return <div className="spinner"></div>;
  }

  return (
    <div className="w-full h-full overflow-auto">
      <div className="p-4 bg-white rounded shadow-md overflow-hidden">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView='dayGridMonth'
          weekends={false}
          events={events}
          eventContent={renderEventContent}
          className="overflow-hidden"
          height="auto"
          selectable="true"   
          locale="ES"
        />
      </div>
    </div>
  );
}

export default Horario;