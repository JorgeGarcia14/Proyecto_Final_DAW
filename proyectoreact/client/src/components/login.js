import React, { useState } from "react";

function Login({ onLogin }) {
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch( //Logica para manejar el incio de sesion
        `http://localhost:5000/api/usuario/${correo}`
      );

      if (response.ok) { //Si el usuario existe
        const data = await response.json();
        console.log(data);

        if (data[0].Contraseña === contraseña) {//Si la contraseña es correcta
          onLogin();//Se inicia sesion
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
    <div className="caja-login flex items-center justify-center min-h-screen bg-blue-200 pt-30">
      <div className="class form-login p-6 m-4 w-1/3 h-auto bg-white shadow-lg rounded-lg overflow-auto">
        <h2 className="titulo-textos text-center mb-4 font-serif font-bold">
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
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
