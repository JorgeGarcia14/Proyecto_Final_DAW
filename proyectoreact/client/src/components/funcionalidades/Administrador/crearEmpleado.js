import React, { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CrearEmpleado = () => {
  const [dni, setDni] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido1, setApellido1] = useState("");
  const [apellido2, setApellido2] = useState("");
  const [puesto, setPuesto] = useState("");
  const [rol, setRol] = useState("User");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [antiguedad, setAntiguedad] = useState("");

  const validarTelefono = (telefono) => {
    const telefonoRegex = /^\d{9}$/;
    return telefonoRegex.test(telefono);
  };

  const validarFecha = (fecha) => {
    const fechaRegex = /^\d{4}-\d{2}-\d{2}$/;
    return fechaRegex.test(fecha);
  };

  const validarTexto = (texto) => {
    const textoRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return textoRegex.test(texto);
  };

  const validarCorreo = (correo) => {
    const correoRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return correoRegex.test(correo);
  };

  const validarDNI = (dni) => {
    const dniRegex = /^\d{8}[a-zA-Z]$/;
    return dniRegex.test(dni);
  };

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

    // Validar DNI
    if (!validarDNI(dni)) {
      toast.error('El DNI debe tener 8 dígitos seguidos de una letra');
      return;
    }

    // Validar el nombre
    if (!validarTexto(nombre)) {
      toast.error('El nombre no puede contener números ni caracteres especiales');
      return;
    }

    // Validar el primer apellido
    if (!validarTexto(apellido1)) {
      toast.error('El primer apellido no puede contener números ni caracteres especiales');
      return;
    }

    // Validar el segundo apellido
    if (!validarTexto(apellido2)) {
      toast.error('El segundo apellido no puede contener números ni caracteres especiales');
      return;
    }

    // Validar el teléfono
    if (!validarTelefono(telefono)) {
      toast.error('El teléfono debe tener 9 dígitos');
      return;
    }

    // Validar la fecha de antigüedad
    if (!validarFecha(antiguedad)) {
      toast.error('La fecha de antigüedad debe tener el formato yyyy-mm-dd');
      return;
    }

    // Validar el correo
    if (!validarCorreo(correo)) {
      toast.error('El correo electrónico no es válido');
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

    console.log(JSON.stringify(empleado))

    fetch(`${process.env.REACT_APP_API_URL}/empleado/add`, {
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
        toast.error('Error al crear el usuario');
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
          className="px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
        />
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre"
          className="px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
        />
        <input
          type="text"
          value={apellido1}
          onChange={(e) => setApellido1(e.target.value)}
          placeholder="Primer apellido"
          className="px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
        />
        <input
          type="text"
          value={apellido2}
          onChange={(e) => setApellido2(e.target.value)}
          placeholder="Segundo apellido"
          className="px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
        />
        <input
          type="text"
          value={puesto}
          onChange={(e) => setPuesto(e.target.value)}
          placeholder="Puesto"
          className="px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
        />
        <select
          onChange={(e) => setRol(e.target.value)}
          className="px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          defaultValue={rol}
        >
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select>
        <input
          type="tel"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          placeholder="Teléfono"
          className="px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
        />
        <input
          type="text"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
          placeholder="Dirección"
          className="px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
        />
        <input
          type="email"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          placeholder="Correo"
          className="px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
        />
        <input
          type="password"
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
          placeholder="Contraseña"
          className="px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
        />
        <input
          type="date"
          value={antiguedad}
          onChange={(e) => setAntiguedad(e.target.value)}
          placeholder="Antigüedad (yyyy-mm-dd)"
          className="px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
        />
        <button
          type="submit"
          className="col-span-full px-3 py-2 text-white bg-orange-400 rounded-md hover:bg-orange-500 focus:outline-none"
        >
          Crear Empleado
        </button>
      </form>
    </div>
  );
};

export default CrearEmpleado;
