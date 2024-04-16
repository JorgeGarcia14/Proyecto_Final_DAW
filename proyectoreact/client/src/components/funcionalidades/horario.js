// client/src/components/perfil.js

import React, { useEffect, useState } from "react"; //Con useState y useEffect se pueden manejar estados y efectos en componentes funcionales
import axios from "axios"; //AXIOS permite hacer peticiones HTTP desde el cliente

function Horario() {
  const [horario, setHorario] = useState(null);

  useEffect(() => {
    const id = localStorage.getItem('usuarioId');
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
        
            {horario[0].dia}
        

     
            {horario[0].horassemanalestotales}
        

    </div>
  );
}

export default Horario;