import React from "react";

const Menu = ({ visible, toggleVisibility }) => {

  return (
    <div className="caja-principal fixed left-0 top-0 w-64 h-screen flex flex-col justify-between p-4 z-10 shadow-md bg-gray-500">
      <div className="caja-menu flex flex-col space-y-4">
        <button className="boton-menu btn btn-dark text-left" onClick={() => toggleVisibility('perfil')}>Perfil</button>
        <button className="boton-menu btn btn-dark text-left" onClick={() => toggleVisibility('contactos')}>Contactos</button>
        <button className="boton-menu btn btn-dark text-left" onClick={() => toggleVisibility('horarios')}>Calendario</button>
        <button className="boton-menu btn btn-dark text-left" onClick={() => toggleVisibility('nominas')}>Nóminas</button>
        <button className="boton-menu btn btn-dark text-left" onClick={() => toggleVisibility('sugerencias')}>Sugerencias</button>
        <button className="boton-menu btn btn-dark text-left" onClick={() => toggleVisibility('vacantes')}>Vacantes</button>
        <button className="boton-menu btn btn-dark text-left" onClick={() => toggleVisibility('noticias')}>Noticias</button>
      </div>
      <div className="flex flex-col items-center">
      </div>
    </div>
  );
};

export default Menu;