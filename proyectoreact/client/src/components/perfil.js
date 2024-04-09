// client/src/components/perfil.js

import React, { useEffect, useState } from "react"; //Con useState y useEffect se pueden manejar estados y efectos en componentes funcionales
import axios from "axios"; //AXIOS permite hacer peticiones HTTP desde el cliente

function Perfil() {
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const id = 1; // Reemplaza esto con el ID del empleado que quieres mostrar
    axios
      .get(`http://localhost:5000/api/empleado/${id}`)
      .then((response) => {
        console.log(response.data);
        setEmployee(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  if (!employee || !employee[0]) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div className="flex items-center justify-between w-1/3 mb-16">
        <h2 className="titulo-textos text-xl font-semibold ">
          Perfil de Empleado
        </h2>
        <img
          src="./images/foto.jpg"
          alt="Foto de perfil"
          className="w-24 h-24 rounded-full object-cover border-4 border-gray-200"
        />
      </div>
      <div className="flex justify-center">
        <table className="w-2/3">
          <tbody>
            <tr>
              <td className="textos-importantes font-semibold p-2">Nombre:</td>
              <td className="p-2">{employee[0].Nombre}</td>
            </tr>
            <tr>
              <td className="textos-importantes font-semibold p-2">Puesto:</td>
              <td className="p-2">{employee[0].Puesto}</td>
            </tr>
            <tr>
              <td className="textos-importantes font-semibold p-2">Correo:</td>
              <td className="p-2">{employee[0].Correo}</td>
            </tr>
            <tr>
              <td className="textos-importantes font-semibold p-2">
                Teléfono:
              </td>
              <td className="p-2">{employee[0].Telefono}</td>
            </tr>
            <tr>
              <td className="textos-importantes font-semibold p-2">
                Antigüedad:
              </td>
              <td className="p-2">{employee[0].Antigüedad}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-center w-full mt-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-14">
          Editar Perfil
        </button>
      </div>
    </div>
  );
}

export default Perfil;
