// client/src/components/perfil.js

import React, { useEffect, useState } from 'react'; //Con useState y useEffect se pueden manejar estados y efectos en componentes funcionales
import axios from 'axios'; //AXIOS permite hacer peticiones HTTP desde el cliente

function Perfil() {
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const id = 1; // Reemplaza esto con el ID del empleado que quieres mostrar
    axios.get(`http://localhost:5000/api/empleado/${id}`)
      .then(response => {
        console.log(response.data);
        setEmployee(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  if (!employee || !employee[0]) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="fixed bottom-4 right-4">
      <div className="caja-perfil bg-white rounded-lg shadow-md p-40">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Perfil de Empleado</h2>
          <img
            src="./images/foto.jpg"
            alt="Foto de perfil"
            className="w-24 h-24 rounded-full object-cover border-4 border-gray-200"
          />
        </div>
        <table className="w-full mb-6">
          <tbody>
            <tr>
              <td className="font-semibold">Nombre:</td>
              <td>{employee[0].Nombre}</td>
            </tr>
            <tr>
              <td className="font-semibold">Puesto:</td>
              <td>Desarrollador Web</td>
            </tr>
            <tr>
              <td className="font-semibold">Correo:</td>
              <td>{employee[0].Correo}</td>
            </tr>
            <tr>
              <td className="font-semibold">Teléfono:</td>
              <td>{employee[0].Telefono}</td>
            </tr>
            <tr>
              <td className="font-semibold">Antigüedad:</td>
              <td>12/08/2018</td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Editar Perfil
          </button>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
