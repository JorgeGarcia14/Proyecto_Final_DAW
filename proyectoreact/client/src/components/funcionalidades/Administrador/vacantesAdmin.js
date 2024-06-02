import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Swal from 'sweetalert2';

function VacantesAdmin() {
  const [descripcion, setDescripcion] = useState("");
  const [titulo, setTitulo] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [salario, setSalario] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [vacantes, setVacantes] = useState([]);

  useEffect(() => {
    fetchVacantes();
  }, []);

  const fetchVacantes = async () => {
    const response = await fetch("http://localhost:5000/api/vacantes");
    const data = await response.json();
    setVacantes(data);
  };

  const borrarVacante = async (id) => {
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: "No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, bórrala!',
      cancelButtonText: 'Cancelar'
    });
  
    if (result.isConfirmed) {
      try {
        const response = await fetch(
          `http://localhost:5000/api/vacantes/${id}`,
          { method: "DELETE" }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log("Vacante eliminada con éxito");
        toast.success("Vacante eliminada con éxito");
      } catch (error) {
        console.error("Error al eliminar la vacante:", error);
        toast.error("Error al eliminar la vacante");
      } finally {
        fetchVacantes();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/vacantes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        titulo: titulo,
        descripcion: descripcion,
        ubicacion: ubicacion,
        salario: salario,
        empresa: empresa,
      }),
    });
    if (response.ok) {
      setDescripcion("");
      setTitulo("");
      setUbicacion("");
      setSalario("");
      setEmpresa("");
      fetchVacantes();
      toast.success("Vacante añadida correctamente");
    } else {
      toast.error("Error al añadir la vacante");
    }
  };

  return (
    <div className="w-full overflow-auto max-h-[500px]">
      <h1 className="titulo-textos-admin text-center mb-4">
        Publicar/Administrar Vacantes
      </h1>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label className="mb-2 textos-importantes-admin">
          Titulo:
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </label>
        <label className="mb-2 textos-importantes-admin">
          Descripción:
          <input
            type="text"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </label>
        <label className="mb-2 textos-importantes-admin">
          Ubicacion:
          <input
            type="text"
            value={ubicacion}
            onChange={(e) => setUbicacion(e.target.value)}
            className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </label>
        <label className="mb-2 textos-importantes-admin">
          Salario:
          <input
            type="number"
            value={salario}
            onChange={(e) => setSalario(e.target.value)}
            className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </label>
        <label className="mb-2 textos-importantes-admin">
          Empresa:
          <input
            type="text"
            value={empresa}
            onChange={(e) => setEmpresa(e.target.value)}
            className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </label>
        <button
          type="submit"
          className="col-span-full px-3 py-2 text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none"
        >
          Añadir vacante
        </button>
      </form>
      <div className="mt-4 space-y-4">
        {vacantes.map((vacante) => (
          <div
            key={vacante.id}
            className="flex flex-row justify-between p-4 bg-white rounded shadow"
          >
            <div>
              <h2 className="mb-2 text-lg font-semibold">
                {vacante.titulo}
              </h2>
              <p className="mb-2 text-sm text-gray-600">
                {vacante.descripcion}
              </p>
            </div>
            <button
              onClick={() => borrarVacante(vacante.id)}
              className="w-6 h-6 flex items-center justify-center ml-2"
            >
              <img
                src="./images/icons/remove.png"
                className=""
                alt="Eliminar"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VacantesAdmin;
