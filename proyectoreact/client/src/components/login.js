import React, { useState } from "react";

function Login({ onLogin }) {
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:5000/api/usuario/${correo}`
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);

        if (data[0].Contraseña === contraseña) {
          onLogin();
        } else {
          document.getElementById("mensajes-error-login").innerHTML =
            "Contraseña incorrecta";
        }
      } else {
        document.getElementById("mensajes-error-login").innerHTML =
          "Usuario no encontrado";
      }
    } catch (error) {
      document.getElementById("mensajes-error-login").innerHTML =
        "Usuario no encontrado";
      console.error("Error:", error);
    }
  };

  return (
    <div className="caja-login flex items-center justify-center h-screen bg-blue-200">
      <div className="class form-login p-6 m-4 w-1/3 h-auto bg-white shadow-lg rounded-lg overflow-auto">
        <h2 className="titulo-login text-center mb-4 font-serif font-bold">
          Iniciar Sesión
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="text"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            placeholder="Nombre de usuario"
            className="p-2 mb-4 border rounded"
          />
          <input
            type="password"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            placeholder="Contraseña"
            className="p-2 mb-4 border rounded"
          />
          <button type="submit" className="p-2 bg-blue-500 text-white rounded">
            Iniciar sesión
          </button>
          <div>
            <p id ="mensajes-error-login" className=" text-center mt-3 text-red-700 font-bold"></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
