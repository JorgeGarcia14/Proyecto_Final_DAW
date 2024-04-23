// client/src/components/perfil.js

import React, { useEffect, useState } from "react"; //Con useState y useEffect se pueden manejar estados y efectos en componentes funcionales
import axios from "axios"; //AXIOS permite hacer peticiones HTTP desde el cliente

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

  if (!horario || !horario[0] || !datosEmple || !datosEmple[0]) {
    return <div className="spinner"></div>;
  }

  return (
    <div>
        
            <p>Hola {datosEmple[0].nombre} {horario[0].dia}</p>
        

     
            {horario[0].horassemanalestotales}
        

    </div>
  );
}

export default Horario;