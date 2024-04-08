import React from "react";
import axios from 'axios';

const Menu = ({ visible, toggleVisibility }) => {
  function getEmployees() {
    fetch('http://localhost:5000/api/empleados')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  }

  return (
    <div className="caja-principal fixed left-0 top-0 w-64 h-screen bg-cyan-950 flex flex-col justify-between p-4 z-10">
      <div className="caja-menu flex flex-col space-y-4">
        <button className="boton-menu btn btn-dark text-left" onClick={() => toggleVisibility('perfil')}>Perfil</button>
        <button className="boton-menu btn btn-dark text-left" onClick={getEmployees}>Contactos</button>
        <button className="boton-menu btn btn-dark text-left">Horarios</button>
        <button className="boton-menu btn btn-dark text-left">Nóminas</button>
        <button className="boton-menu btn btn-dark text-left">Sugerencias</button>
        <button className="boton-menu btn btn-dark text-left">Vacantes</button>
        <button className="boton-menu btn btn-dark text-left">Noticias</button>
      </div>
      <div className="flex flex-col items-center">
      </div>
    </div>
  );
};

export default Menu;