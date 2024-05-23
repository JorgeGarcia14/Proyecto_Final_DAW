import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Swal from 'sweetalert2';

function Contactos() {
  const [empleados, setEmpleados] = useState([]);

  //Estados para buscar empleado
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const fetchEmpleados = async () => {
    const response = await fetch("http://localhost:5000/api/empleado");
    const data = await response.json();

    setEmpleados(data);
    setResults(data);
  };

  useEffect(() => {
    fetchEmpleados();
  }, []);

  const handleSearch = async (event) => {
    event.preventDefault();
    console.log("Buscando...");
    if (search) {
      const response = await fetch(
        `http://localhost:5000/api/empleado/nombre/${search}`
      );
      const data = await response.json();
      console.log(data);
      setResults(data);
    } else {
      setResults(empleados);
    }
  };

  const borrarEmpleado = async (empleadoId) => {
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
      try {
        const response = await fetch(
          `http://localhost:5000/api/empleado/delete/${empleadoId}`,
          { method: "DELETE" }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log("Usuario eliminado con éxito");
        toast.success("Usuario eliminado con éxito");
        setEmpleados(empleados.filter((empleado) => empleado.id !== empleadoId));
      } catch (error) {
        console.error("Error al eliminar el empleado:", error);
        toast.error("Error al eliminar el empleado");
      } finally {
        fetchEmpleados();
      }
    }
  };

  if (!empleados || !empleados[0]) {
    return <div className="spinner-admin"></div>;
  }

  const displayedEmpleados = search ? results : empleados;

  return (
    <div className="overflow-auto max-h-[500px]">
      <div className="mt-8">
        <h1 className="titulo-textos-admin text-center mb-4">
          Administrar Empleados
        </h1>
      </div>

      <div className="flex items-center justify-center">
        <div className="w-3/4">
          <form
            className="flex items-center justify-center"
            onSubmit={handleSearch}
          >
            <label htmlFor="search" className="sr-only">
              Buscar compañero
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

      <div className="flex justify-center items-center mt-8">
        <div className="grid gap-4 w-3/4">
          {Array.isArray(displayedEmpleados) &&
            displayedEmpleados.map((empleado, index) => (
              <div
                key={empleado.empleado_id}
                className="bg-white shadow p-4 w-auto h-auto hover:bg-slate-100 transition-colors duration-500 flex items-center"
                id={empleado.empleado_id}
              >
                <div className="flex items-center mr-6">
                  <img
                    src="./images/foto.jpg"
                    className="w-11 h-11 rounded-full"
                    alt="Eliminar"
                  />
                </div>
                <div className="flex items-center mr-11">
                  <p>
                    <span className="textos-importantes-admin">Nombre: </span>
                    {` ${empleado.nombre} ${empleado.apellido1} ${empleado.apellido2}`}
                  </p>
                </div>
                <div className="flex items-center mr-11">
                  <p>
                    <span className="textos-importantes-admin">DNI: </span>
                    {empleado.dni}
                  </p>
                </div>
                <div className="botones-empleados flex justify-end ml-auto items-center">
                  <button className="w-6 h-6 flex items-center justify-center">
                    <img
                      src="./images/icons/edit.png"
                      className=""
                      alt="Editar"
                    />
                  </button>
                  <button
                    className="w-6 h-6 flex items-center justify-center ml-2"
                    onClick={() => borrarEmpleado(empleado.empleado_id)}
                  >
                    <img
                      src="./images/icons/remove.png"
                      className=""
                      alt="Eliminar"
                    />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Contactos;
