import React from "react";

export default function Header() {
  return (
    <header className="relative bg-white h-30">
      <div className="container-xl flex justify-between items-center px-4 py-2 mx-auto relative z-10">
        <div className="flex items-center">
          <img src="./images/logo.png" alt="Logo" className="h-20 w-auto mr-4" /> 
        </div>
        <div className="flex">

          <button><img src="./images/search.png" className="h-8 mr-3.5" alt="" /></button>
          <button className=" login boton-header bg-gray-500 text-white font-bold py-1 mr-3.5 px-3 rounded h-8">
            Iniciar Sesión
          </button>
          <button className=" logout boton-header bg-gray-500 text-white font-bold py-1 px-3 rounded h-8">
            Cerrar Sesión
          </button>
        </div>
      </div>
    </header>
  );
}
