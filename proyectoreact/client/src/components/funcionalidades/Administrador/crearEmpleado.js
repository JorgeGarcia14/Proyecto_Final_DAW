import React, { useState } from "react";
import { toast } from 'react-toastify';

const CrearEmpleado = () => {
  const [dni, setDni] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido1, setApellido1] = useState("");
  const [apellido2, setApellido2] = useState("");
  const [puesto, setPuesto] = useState("");
  const [rol, setRol] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [antiguedad, setAntiguedad] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Verificar que todos los campos estén rellenados
    if (
      !dni ||
      !nombre ||
      !apellido1 ||
      !apellido2 ||
      !puesto ||
      !rol ||
      !telefono ||
      !direccion ||
      !correo ||
      !contraseña ||
      !antiguedad
    ) {
      toast.error('Todos los campos son requeridos');
      return;
    }

    // Crear el objeto empleado
    const empleado = {
      dni,
      nombre,
      apellido1,
      apellido2,
      puesto,
      rol,
      telefono,
      direccion,
      correo,
      contraseña,
      antiguedad,
    };

    fetch("http://localhost:5000/api/empleado/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(empleado),
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success('Usuario creado con éxito');
        // Aquí puedes manejar lo que sucede después de que el empleado se crea exitosamente
      })
      .catch((error) => {
        console.error("Error:", error);
        // Aquí puedes manejar lo que sucede si hay un error al crear el empleado
      });
  };

  return (
    <div>
      <h1 className="titulo-textos-admin text-center mb-8">
        Añadir Nuevo Empleado
      </h1>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2"
      >
        <input
          type="text"
          value={dni}
          onChange={(e) => setDni(e.target.value)}
          placeholder="DNI"
          className="px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre"
          className="px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        <input
          type="text"
          value={apellido1}
          onChange={(e) => setApellido1(e.target.value)}
          placeholder="Primer apellido"
          className="px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        <input
          type="text"
          value={apellido2}
          onChange={(e) => setApellido2(e.target.value)}
          placeholder="Segundo apellido"
          className="px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        <input
          type="text"
          value={puesto}
          onChange={(e) => setPuesto(e.target.value)}
          placeholder="Puesto"
          className="px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        <select
          value={rol}
          onChange={(e) => setRol(e.target.value)}
          className="px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select>
        <input
          type="tel"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          placeholder="Teléfono"
          className="px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        <input
          type="text"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
          placeholder="Dirección"
          className="px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        <input
          type="email"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          placeholder="Correo"
          className="px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        <input
          type="password"
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
          placeholder="Contraseña"
          className="px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        <input
          type="text"
          value={antiguedad}
          onChange={(e) => setAntiguedad(e.target.value)}
          placeholder="Antigüedad"
          className="px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        <button
          type="submit"
          className="col-span-full px-3 py-2 text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none"
        >
          Crear Empleado
        </button>
      </form>
    </div>
  );
};

export default CrearEmpleado;
