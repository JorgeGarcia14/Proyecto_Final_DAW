import React, { useState } from "react";
import { toast } from "react-toastify";

const NominasAdmin = () => {
  // Inicializar estados con valores por defecto
  const [empleado_id_fk, setEmpleadoId] = useState("");
  const [mes, setMes] = useState("");
  const [total_bruto, setTotalBruto] = useState("");
  const [horas_extra, setHorasExtra] = useState("");
  const [bonificaciones, setBonificaciones] = useState("");
  const [deducciones, setDeducciones] = useState("");
  const [total_neto, setTotalNeto] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Verificar que todos los campos estén rellenados
    if (
      !empleado_id_fk ||
      !mes ||
      !total_bruto ||
      !horas_extra ||
      !bonificaciones ||
      !deducciones ||
      !total_neto
    ) {
      toast.error("Todos los campos son requeridos");
      return;
    }

    // Crear el objeto nomina
    const nomina = {
      empleado_id_fk: Number(empleado_id_fk),
      mes: mes,
      total_bruto: Number(total_bruto),
      horas_extra: Number(horas_extra),
      bonificaciones: Number(bonificaciones),
      deducciones: Number(deducciones),
      total_neto: Number(total_neto),
    };

    fetch(`${process.env.REACT_APP_API_URL}/nomina`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nomina),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Error al crear la nómina");
        return response.json();
      })
      .then((data) => {
        toast.success("Nómina creada con éxito");
        // Limpiar formulario
        setEmpleadoId("");
        setMes("");
        setTotalBruto("");
        setHorasExtra("");
        setBonificaciones("");
        setDeducciones("");
        setTotalNeto("");
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error(`Error al crear la nómina: ${error.message}`);
      });
  };

  return (
    <div>
      <h1 className="titulo-textos-admin text-center mb-8">
        Crear Nueva Nómina
      </h1>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2"
      >
        <input
          type="number"
          value={empleado_id_fk}
          onChange={(e) => setEmpleadoId(e.target.value)}
          placeholder="ID del Empleado"
          className="px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
        />
        <input
          type="date"
          value={mes}
          onChange={(e) => setMes(e.target.value)}
          placeholder="Mes"
          className="px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
        />
        <input
          type="number"
          value={total_bruto}
          onChange={(e) => setTotalBruto(e.target.value)}
          placeholder="Total Bruto"
          className="px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
        />
        <input
          type="number"
          value={horas_extra}
          onChange={(e) => setHorasExtra(e.target.value)}
          placeholder="Horas Extra"
          className="px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
        />
        <input
          type="number"
          value={bonificaciones}
          onChange={(e) => setBonificaciones(e.target.value)}
          placeholder="Bonificaciones"
          className="px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
        />
        <input
          type="number"
          value={deducciones}
          onChange={(e) => setDeducciones(e.target.value)}
          placeholder="Deducciones"
          className="px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
        />
        <input
          type="number"
          value={total_neto}
          onChange={(e) => setTotalNeto(e.target.value)}
          placeholder="Total Neto"
          className="px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
        />
        <button
          type="submit"
          className="col-span-full px-3 py-2 text-white bg-orange-400 rounded-md hover:bg-orange-500 focus:outline-none"
        >
          Crear Nómina
        </button>
      </form>
    </div>
  );
};

export default NominasAdmin;
