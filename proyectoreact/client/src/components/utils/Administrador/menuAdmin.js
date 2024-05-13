import React from "react";

const MenuAdmin = ({ visible, toggleVisibility }) => {

  return (
    <div className="caja-principal fixed left-0 top-0 w-64 h-screen flex flex-col justify-between p-4 z-10 shadow-md bg-purple-600">
      <div className="caja-menu flex flex-col space-y-4">
        <button className="boton-menu btn btn-dark text-left" onClick={() => toggleVisibility('crearEmpleado')}>Añadir Empleado</button>
        <button className="boton-menu btn btn-dark text-left" onClick={() => toggleVisibility('empleadosAdmin')}>Administrar Empleados</button>
        <button className="boton-menu btn btn-dark text-left" onClick={() => toggleVisibility('horariosAdmin')}>Administrar Calendario</button>
        <button className="boton-menu btn btn-dark text-left" onClick={() => toggleVisibility('nominasAdmin')}>Nóminas de Empleados</button>
        <button className="boton-menu btn btn-dark text-left" onClick={() => toggleVisibility('sugerenciasAdmin')}>Administrar Sugerencias</button>
        <button className="boton-menu btn btn-dark text-left" onClick={() => toggleVisibility('vacantesAdmin')}>Administrar Vacantes</button>
        <button className="boton-menu btn btn-dark text-left" onClick={() => toggleVisibility('noticiasAdmin')}>Publicar Noticias</button>
      </div>
      <div className="flex flex-col items-center">
      </div>
    </div>
  );
};

export default MenuAdmin;