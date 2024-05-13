import React from "react";

export default function Header() {

  const cerrarSesion = () => { //Al cerrar sesion borra el localstorage y recarga la pagina
    localStorage.clear();
    window.location.reload();
  };

  const rol = localStorage.getItem("usuarioRol");
  
  return (
    <header className = {`fixed top-0 w-full z-50 ${ rol === 'Admin' ? 'bg-violet-200' : 'bg-white h-30'}`}>
      <div className="container-xl flex justify-between items-center px-4 py-2 mx-auto relative z-10 shadow-md p-40">
        <div className="flex items-center">
          <img src="./images/logo.png" alt="Logo" className="h-20 w-auto mr-4" /> 
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
