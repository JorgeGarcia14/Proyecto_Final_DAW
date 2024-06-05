import React from "react";

export default function Header() {

  const cerrarSesion = () => {
    const events = localStorage.getItem('events'); // Guarda los eventos
    localStorage.clear(); // Borra todo en el LocalStorage
    if (events) {
      localStorage.setItem('events', events); // Restaura los eventos
    }
    window.location.reload();
  };

  const rol = localStorage.getItem("usuarioRol");
  
  return (
    <header className = {`fixed top-0 w-full z-50 ${ rol === 'Admin' ? 'bg-violet-200' : 'bg-white h-30'}`}>
      <div className="container-xl flex justify-between items-center px-4 py-2 mx-auto relative z-10 shadow-md p-40">
        <div className="flex items-center">
          <img src="./images/icono.svg" alt="Logo" className="h-20 w-auto mr-4" /> 
          <h3 className={rol === 'Admin' ? 'titulo-admin' : 'titulo'}>
            {rol === 'Admin' ? <>Workzen <span className=" text-sm">Admin</span></> : "WorkZen"}
          </h3>
        </div>
        <div className="flex items-center">
          <button className={`logout ${rol === 'Admin' ? 'boton-header-admin' : 'boton-header'} text-white font-bold py-1 px-3 rounded h-8`} onClick={cerrarSesion}>
            Cerrar Sesión
          </button>
        </div>
      </div>
    </header>
  );
}
