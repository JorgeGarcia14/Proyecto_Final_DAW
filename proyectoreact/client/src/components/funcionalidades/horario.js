// client/src/components/perfil.js

import React, { useEffect, useState } from "react"; //Con useState y useEffect se pueden manejar estados y efectos en componentes funcionales
import axios from "axios"; //AXIOS permite hacer peticiones HTTP desde el cliente

function Horario() {
  const [horario, setHorario] = useState(null);

  useEffect(() => {
    const id = 1; // Reemplaza esto con el ID del empleado que quieres mostrar
    axios
      .get(`http://localhost:5000/api/horario/${id}`)
      .then((response) => {
        console.log(response.data);
        setHorario(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  if (!horario || !horario[0]) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
        
            {horario[0].Dia}
        

     
            {horario[0].HorasSemanalesTotales}
        

    </div>
  );
}

export default Horario;