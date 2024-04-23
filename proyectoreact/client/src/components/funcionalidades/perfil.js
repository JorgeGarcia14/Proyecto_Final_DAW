// client/src/components/perfil.js

import React, { useEffect, useState } from "react"; //Con useState y useEffect se pueden manejar estados y efectos en componentes funcionales
import axios from "axios"; //AXIOS permite hacer peticiones HTTP desde el cliente

function Perfil() {
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const id = localStorage.getItem('usuarioId');
    try{
      axios
      .get(`http://localhost:5000/api/empleado/${id}`)
      .then((response) => {
        console.log(response.data);
        setEmployee(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      ;}
      catch(error){
        console.error("Error:", error);
      }
  }, []);

  if (!employee || !employee[0]) {
    return <div className="spinner"></div>;
  }

  return (
    <div className="flex flex-col justify-center items-center h-full mt-8">
      <div className="flex items-center justify-between w-2/3 mb-16 bg-gray-300 rounded-full bg-opacity-25 hover:bg-opacity-100 transition-colors duration-500 shadow-md">
        <div className="w-full p-4">
          <h2 className="titulo-textos text-center text-xl font-semibold">
            Perfil de Empleado
          </h2>
        </div>
        <div className="transform hover:scale-110 hover:-translate-x-2 transition-transform duration-500">
          <img
            src="./images/foto.jpg"
            alt="Foto de perfil"
            className="w-32 h-28 object-cover rounded-full"
          />
        </div>
      </div>

      <div className="flex justify-center mb-20 w-auto text-center hover:bg-gray-100 hover:bg-opacity-40 rounded-3xl transition-colors duration-500 shadow-md">
        <table className="m-8">
          <tbody>
            <tr>
              <td className="textos-importantes font-semibold p-2">Nombre:</td>
              <td className="p-2">{employee[0].nombre}</td>
            </tr>
            <tr>
              <td className="textos-importantes font-semibold p-2">Puesto:</td>
              <td className="p-2">{employee[0].puesto}</td>
            </tr>
            <tr>
              <td className="textos-importantes font-semibold p-2">Correo:</td>
              <td className="p-2">{employee[0].correo}</td>
            </tr>
            <tr>
              <td className="textos-importantes font-semibold p-2">
                Teléfono:
              </td>
              <td className="p-2">{employee[0].telefono}</td>
            </tr>
            <tr>
              <td className="textos-importantes font-semibold p-2">
                Antigüedad:
              </td>
              <td className="p-2">{employee[0].antiguedad}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Perfil;
