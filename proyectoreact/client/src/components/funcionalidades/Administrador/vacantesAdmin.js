import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

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
    const response = await fetch(`${process.env.REACT_APP_API_URL}/vacantes`);
    const data = await response.json();
    setVacantes(data);
  };

  const borrarVacante = async (id) => {
    const result = await Swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, bórrala!",
      cancelButtonText: "Cancelar",
    });

    if (result.isConfirmed) {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/vacantes/${id}`,
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
    const response = await fetch(`${process.env.REACT_APP_API_URL}/vacantes`, {
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
        <label className="mb-2 textos-importantes-admin">Titulo:</label>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
        />
        <label className="mb-2 textos-importantes-admin">Descripción:</label>
        <input
          type="text"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
        />
        <label className="mb-2 textos-importantes-admin">Ubicacion:</label>
        <input
          type="text"
          value={ubicacion}
          onChange={(e) => setUbicacion(e.target.value)}
          className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
        />
        <label className="mb-2 textos-importantes-admin">Salario:</label>
        <input
          type="number"
          value={salario}
          onChange={(e) => setSalario(e.target.value)}
          className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
        />
        <label className="mb-2 textos-importantes-admin">Empresa:</label>
        <input
          type="text"
          value={empresa}
          onChange={(e) => setEmpresa(e.target.value)}
          className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
        />
        <button
          type="submit"
          className="col-span-full px-3 py-2 text-white bg-orange-400 rounded-md hover:bg-orange-500 focus:outline-none mt-4"
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
              <h2 className="mb-2 text-lg font-semibold">{vacante.titulo}</h2>
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
                className="botones-hover"
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
