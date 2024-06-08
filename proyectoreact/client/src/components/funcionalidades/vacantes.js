import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

function Vacantes() {

  const [vacantes, setVacantes] = useState([]);
  const [cargando, setCargando] = useState(true);
  
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/vacantes`)
      .then(response => response.json())
      .then(data => {
        setVacantes(data);
        setCargando(false);
      });
  }, []);

  const [appliedVacancies, setAppliedVacancies] = useState([]);

  const handleApply = (vacante) => {
    Swal.fire({
      title: '¿Quieres aplicar a esta vacante?',
      text: `Aplicar a la posición de ${vacante.titulo} en ${vacante.empresa}.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, aplicar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        setAppliedVacancies([...appliedVacancies, vacante.id]);
        Swal.fire(
          'Aplicado',
          `Has aplicado con éxito a la vacante de ${vacante.titulo}.`,
          'success'
        );
      }
    });
  };

  if (cargando) {
    return <div className="spinner"></div>;
  }

  return (
    <div className="w-full h-full overflow-auto">
      <div>
        <div className="w-full p-4">
          <h2 className="titulo-textos text-center text-xl font-semibold">
            Vacantes Disponibles
          </h2>
        </div>
      </div>

      <div className="flex flex-col justify-center mb-20 w-auto text-center hover:bg-gray-100 hover:bg-opacity-40 rounded-3xl transition-colors duration-500 shadow-md mt-5">
        {vacantes.length > 0 ? (
          vacantes.map((vacante) => (
            <div key={vacante.id} className=" p-4 border-b">
              <h3 className="textos-importantes font-semibold p-2">
                {vacante.titulo}
              </h3>
              <p className="p-2">{vacante.descripcion}</p>
              <p className="p-2">
                <span className="font-semibold">Ubicación:</span> {vacante.ubicacion}
              </p>
              <p className="p-2">
                <span className="font-semibold">Salario:</span> {vacante.salario}
              </p>
              <p className="p-2">
                <span className="font-semibold">Empresa:</span> {vacante.empresa}
              </p>
              {appliedVacancies.includes(vacante.id) ? (
                <div className="text-green-500 p-2">Ya has aplicado a esta vacante</div>
              ) : (
                <div
                  onClick={() => handleApply(vacante)}
                  className="text-blue-500 hover:underline p-2 cursor-pointer"
                >
                  Aplicar a esta vacante
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="m-8 p-4 text-center text-gray-500">
            No hay vacantes disponibles en este momento. Por favor, vuelve más tarde.
          </div>
        )}
      </div>
    </div>
  );
}

export default Vacantes;
