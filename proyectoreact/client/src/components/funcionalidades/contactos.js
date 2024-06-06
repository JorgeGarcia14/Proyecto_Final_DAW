import { useState, useEffect } from "react";

function Contactos() {
  const [empleados, setEmpleados] = useState([]);

  // Estados para buscar empleado
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchEmpleados = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/empleado`);
      const data = await response.json();

      setEmpleados(data);
      setResults(data);
    };

    fetchEmpleados();
  }, []);

  // Función para normalizar las cadenas eliminando tildes y convirtiendo a minúsculas
  const normalizeString = (str) => {
    return str
      .normalize("NFD") // Descompone los caracteres acentuados en caracteres base y marcas de acento
      .replace(/[\u0300-\u036f]/g, "") // Elimina las marcas de acento
      .toLowerCase(); // Convierte a minúsculas
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log("Buscando...");
    if (search) {
      const lowercasedSearch = normalizeString(search);
      const filteredResults = empleados.filter((empleado) =>
        normalizeString(
          `${empleado.nombre} ${empleado.apellido1} ${empleado.apellido2}`
        ).includes(lowercasedSearch)
      );
      setResults(filteredResults);
    } else {
      setResults(empleados);
    }
  };

  if (!empleados || !empleados[0]) {
    return <div className="spinner"></div>;
  }

  const displayedEmpleados = search ? results : empleados;

  return (
    <div className="w-full h-full overflow-auto">
      <div className="mt-8">
        <h1 className="titulo-textos text-center mb-4">
          Contacta con tus compañeros/as
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
        <div className="grid grid-cols-3 gap-4">
          {Array.isArray(displayedEmpleados) &&
            displayedEmpleados.map((empleado, index) => (
              <div
                key={index}
                className="bg-white shadow p-4 w-auto h-auto hover:bg-slate-100 transition-colors duration-500"
              >
                <div className="flex justify-between items-center">
                  <p>
                    <span className="textos-importantes">Nombre: </span>
                    {` ${empleado.nombre} ${empleado.apellido1} ${empleado.apellido2}`}
                  </p>
                  <img
                    src="./images/icons/person.svg"
                    className="w-4 ml-4"
                    alt="Persona"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <p>
                    <span className="textos-importantes">Puesto: </span>
                    {empleado.puesto}
                  </p>
                  <img
                    src="./images/icons/position.svg"
                    className="w-4 ml-4"
                    alt="Posicion"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <p>
                    <span className="textos-importantes">Correo: </span>
                    {empleado.correo}
                  </p>
                  <img
                    src="./images/icons/email.svg"
                    className="w-4 ml-4"
                    alt="email"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <p>
                    <span className="textos-importantes">Teléfono: </span>
                    {empleado.telefono}
                  </p>
                  <img
                    src="./images/icons/phone.svg"
                    className="w-4 ml-4"
                    alt="telefono"
                  />
                </div>
                {/* Muestra aquí los demás datos del empleado */}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Contactos;