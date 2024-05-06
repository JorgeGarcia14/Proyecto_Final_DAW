import React, { useState, useEffect } from "react";
import Header from "./components/utils/header";
import Menu from "./components/utils/menu";
import Perfil from "./components/funcionalidades/perfil";
import Contactos from "./components/funcionalidades/contactos";
import Horario from "./components/funcionalidades/horario";
import Login from "./components/utils/login";
import Caja from "./components/utils/caja";
import Sugerencias from "./components/funcionalidades/sugerencias";
import Nominas from "./components/funcionalidades/nominas";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Maneja el inicio de sesion

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const [visible, setVisible] = useState("");

  const toggleVisibility = (componente) => {
    setVisible(componente);
  };

  useEffect(() => {
    // Verificar si hay un ID de usuario en el localStorage al cargar la aplicación
    const empleadoId = localStorage.getItem("usuarioId");
    if (empleadoId) {
      setIsLoggedIn(true);
    }
  }, []); // Este efecto se ejecuta solo una vez al cargar la aplicación

  

  return (
    <div className="flex flex-col h-screen">
      <Header />
      {isLoggedIn && (
        <Menu visible={visible} toggleVisibility={toggleVisibility} />
      )}

      {isLoggedIn ? (
        <>
          <Caja className="flex-grow">
            {visible === "" && <img src="./images/empresa.jpg" alt="Logo de la empresa" className="object-cover w-full h-full"/>}
            {visible === "perfil"&& <Perfil />}
            {visible === "contactos" && <Contactos />}
            {visible === "horarios" && <Horario />}
            {visible === "sugerencias" && <Sugerencias />}
            {visible === "nominas" && <Nominas />}
            {/* Agrega aquí los demás componentes */}
          </Caja>
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
