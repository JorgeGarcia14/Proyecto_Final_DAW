// client/src/components/funcionalidades/vacantes.js

import React, { useState } from "react";
import Swal from "sweetalert2";

function Vacantes() {
  const [vacancies] = useState([
    {
      id: 1,
      title: "Desarrollador Frontend",
      description: "Desarrollador con experiencia en React y Tailwind CSS.",
      location: "Ciudad de México",
      salary: "50,000 MXN",
      company: "Tech Solutions",
    },
    {
      id: 2,
      title: "Diseñador UX/UI",
      description: "Diseñador con experiencia en Figma y Adobe XD.",
      location: "Guadalajara",
      salary: "45,000 MXN",
      company: "Creative Minds",
    },
    {
      id: 3,
      title: "Analista de Datos",
      description: "Analista con experiencia en SQL y Python.",
      location: "Monterrey",
      salary: "55,000 MXN",
      company: "Data Insights",
    },
  ]);

  const handleApply = (vacancy) => {
    Swal.fire({
      title: '¿Quieres aplicar a esta vacante?',
      text: `Aplicar a la posición de ${vacancy.title} en ${vacancy.company}.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, aplicar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Aplicado',
          `Has aplicado con éxito a la vacante de ${vacancy.title}.`,
          'success'
        );
      }
    });
  };

  return (
    <div className="w-full h-full overflow-auto">
      <div >
        <div className="w-full p-4">
          <h2 className="titulo-textos text-center text-xl font-semibold">
            Vacantes Disponibles
          </h2>
        </div>
      </div>

      <div className="flex flex-col justify-center mb-20 w-auto text-center hover:bg-gray-100 hover:bg-opacity-40 rounded-3xl transition-colors duration-500 shadow-md">
        {vacancies.map((vacancy) => (
          <div key={vacancy.id} className="m-8 p-4 border-b">
            <h3 className="textos-importantes font-semibold p-2">
              {vacancy.title}
            </h3>
            <p className="p-2">{vacancy.description}</p>
            <p className="p-2">
              <span className="font-semibold">Ubicación:</span> {vacancy.location}
            </p>
            <p className="p-2">
              <span className="font-semibold">Salario:</span> {vacancy.salary}
            </p>
            <p className="p-2">
              <span className="font-semibold">Empresa:</span> {vacancy.company}
            </p>
            <div
              
              onClick={() => handleApply(vacancy)}
              className="text-blue-500 hover:underline p-2"
            >
              Aplicar a esta vacante
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Vacantes;
