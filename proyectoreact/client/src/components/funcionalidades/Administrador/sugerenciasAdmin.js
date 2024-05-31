import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

function SugerenciasAdmin() {
  const [sugerencias, setSugerencias] = useState([]);

  //Estados para buscar empleado
  const [search, setSearch] = useState("");
  //Cada vez que se monta el componente, se obtienen las sugerencias de la base de datos
  const fetchSugerencias = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/sugerencias`);
    const data = await response.json();
    setSugerencias(data);
  };

  useEffect(() => {
    fetchSugerencias();
  }, []);

  useEffect(() => {
    
  }, []);

  const handleSearch = async (event) => {
    event.preventDefault();
    console.log("Buscando...");
    if (search) {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/empleado/nombre/${search}` //Falta endpoint para buscar sugerencias por id o nombre
      );
      const data = await response.json();
      console.log(data);
    } 
  };

  const borrarSugerencia = async (sugerenciaId) => {
    try {
      const result = await Swal.fire({
        title: '¿Estás seguro?',
        text: "No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, bórralo!',
        cancelButtonText: 'Cancelar'
      });

      if (result.isConfirmed) {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/sugerencias/delete/${sugerenciaId}`,
          { method: "DELETE" }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        toast.success("Sugerencia eliminada con éxito");
        setSugerencias(sugerencias.filter((sugerencia) => sugerencia.sugerencia_id !== sugerenciaId));
      }

    } catch (error) {
      toast.error("Error al eliminar la sugerencia");
    } finally {
      fetchSugerencias();
    }
  };

  if (!sugerencias || !sugerencias[0]) {
    return <div className="spinner-admin"></div>;
  }

  return (
    <div className="overflow-auto max-h-[500px]">
      <div className="mt-8">
        <h1 className="titulo-textos-admin text-center mb-4">
          Administrar Empleados
        </h1>
      </div>
      <div className="flex items-center justify-center mb-7">
        <div className="w-3/4">
          <form
            className="flex items-center justify-center"
            onSubmit={handleSearch}
          >
            <label htmlFor="search" className="sr-only">
              Buscar Sugerencias por nombre
            </label>
            <input
              type="search"
              id="search"
              name="search"
              placeholder="Buscar a un compañero/a"
              className="w-full px-3 py-2 border rounded-l-md"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              type="submit"
              className="bg-gray-200 text-white font-bold py-2 px-4 rounded-r-md"
            >
              <img src="./images/search.png" alt="Logo" className="w-6 h-6" />
            </button>
          </form>
        </div>
      </div>
      <div className="sugerencias">
        {sugerencias.map((sugerencia, index) => {
          const { nombre, descripcion } = sugerencia;
          return (
            <div key={index} className="sugerencia mb-2 p-2 border rounded w-4/5 mx-auto">
                <p><span className="font-bold">{nombre}: </span> {descripcion}</p>
                <div className="botones-empleados flex justify-end ml-auto items-center">
                  <button
                    className="w-6 h-6 flex items-center justify-center ml-2"
                  >
                    <img
                      src="./images/icons/remove.png"
                      className=""
                      alt="Eliminar"
                      onClick={() => borrarSugerencia(sugerencia.sugerencia_id)}
                    />
                  </button>
        </div>
            </div>            
          );
        })}
        
      </div>
    </div>
  );
}

export default SugerenciasAdmin;
