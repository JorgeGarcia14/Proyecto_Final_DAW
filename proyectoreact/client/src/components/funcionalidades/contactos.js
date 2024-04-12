import { useState, useEffect } from "react";
import axios from "axios";

function Contactos() {
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/empleado`)
      .then((response) => {
        setEmpleados(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <>
      <div className="mt-8">
        <h1 className="titulo-textos text-center mb-4">
          Contacta con tus compañeros/as
        </h1>
      </div>

      <div class="flex items-center justify-center">
        <div class="w-3/4">
          <form class="flex items-center justify-center">
            <label for="search" class="sr-only">
              Buscar compañero
            </label>
            <input
              type="search"
              id="search"
              name="search"
              placeholder="Buscar a un compañero/a"
              class="w-full px-3 py-2 border rounded-l-md"
            />
            <button
              type="submit"
              class="bg-gray-200 text-white font-bold py-2 px-4 rounded-r-md"
            >
              <img src="./images/search.png" alt="Logo" class="w-6 h-6" />
            </button>
          </form>
        </div>
      </div>

      <div className="flex justify-center items-center mt-8">
        <div className="grid grid-cols-3 gap-4 ">
          {empleados.map((empleado, index) => ( //Caja de cada empleado
            <div
              key={index}
              className="bg-white shadow p-4 w-auto h-auto hover:bg-slate-100 transition-colors duration-500"
            >
              <div className="flex justify-between items-center">
                <p>
                  <span className="textos-importantes">Nombre: </span>
                  {empleado.Nombre}
                </p>
                <img src="./images/icons/person.svg" className="w-4 ml-4" />
              </div>
              <div className="flex justify-between items-center">
                <p>
                  <span className="textos-importantes">Puesto: </span>
                  {empleado.Puesto}
                </p>
                <img src="./images/icons/position.svg" className="w-4 ml-4" />
              </div>
              <div className="flex justify-between items-center">
                <p>
                  <span className="textos-importantes">Correo: </span>
                  {empleado.Correo}
                </p>
                <img src="./images/icons/email.svg" className="w-4 ml-4" />
              </div>
              <div className="flex justify-between items-center">
                <p>
                  <span className="textos-importantes">Teléfono: </span>
                  {empleado.Telefono}
                </p>
                <img src="./images/icons/phone.svg" className="w-4 ml-4" />
              </div>
              {/* Muestra aquí los demás datos del empleado */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Contactos;