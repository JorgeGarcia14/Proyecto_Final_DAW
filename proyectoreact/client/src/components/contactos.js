import { useState, useEffect } from "react";
import axios from 'axios';

function Contactos (){
    const [empleados, setEmpleados] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/empleado`)
          .then(response => {
            setEmpleados(response.data);
          })
          .catch(error => {
            console.error('Error:', error);
          });
      }, []);

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="mb-4">Contacta con tus compañeros</h1>
            <div className="grid grid-cols-4 gap-4">
                {empleados.map((empleado, index) => (
                    <div key={index} className="bg-white shadow p-4 w-64 h-64">
                        <p>{empleado.Nombre}</p>
                        <p>{empleado.Puesto}</p>
                        <p>{empleado.Correo}</p>
                        <p>{empleado.Telefono}</p>
                        {/* Muestra aquí los demás datos del empleado */}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Contactos;