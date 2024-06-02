import React, { useEffect, useState } from "react";
import axios from "axios";

function Perfil() {
  const images = ['foto.jpg', 'foto2.jpg', 'foto3.jpg', 'fotomujer1.jpg', 'fotomujer2.jpg']; 
  const [employee, setEmployee] = useState(null);
  const [selectedImage] = useState(() => {
    // Selecciona la imagen una sola vez cuando el componente se monta
    let image = localStorage.getItem('selectedImage');
    if (!image) {
      image = images[Math.floor(Math.random() * images.length)];
      localStorage.setItem('selectedImage', image);
    }
    return image;
  });

  useEffect(() => {
    const id = localStorage.getItem('usuarioId');
    
    axios
      .get(`${process.env.REACT_APP_API_URL}/empleado/${id}`)
      .then((response) => {
        console.log(response.data);
        setEmployee(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []); 

  if (!employee) {
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
            src={`./images/${selectedImage}`}
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
              <td className="p-2">{`${employee.nombre} ${employee.apellido1} ${employee.apellido2}`}</td>
            </tr>
            <tr>
              <td className="textos-importantes font-semibold p-2">Puesto:</td>
              <td className="p-2">{employee.puesto}</td>
            </tr>
            <tr>
              <td className="textos-importantes font-semibold p-2">Correo:</td>
              <td className="p-2">{employee.correo}</td>
            </tr>
            <tr>
              <td className="textos-importantes font-semibold p-2">
                Teléfono:
              </td>
              <td className="p-2">{employee.telefono}</td>
            </tr>
            <tr>
              <td className="textos-importantes font-semibold p-2">
                Antigüedad:
              </td>
              <td className="p-2">{employee.antiguedad}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Perfil;
