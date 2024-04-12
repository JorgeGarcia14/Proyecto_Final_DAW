import React, { useState } from "react";
import Header from "./components/utils/header";
import Menu from "./components/utils/menu";
import Perfil from "./components/funcionalidades/perfil";
import Contactos from "./components/funcionalidades/contactos";
import Horario from "./components/funcionalidades/horario";
import Login from "./components/utils/login";
import Caja from "./components/utils/caja";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Maneja el inicio de sesion

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const [visible, setVisible] = useState("");

  const toggleVisibility = (componente) => {
    setVisible(componente);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      {isLoggedIn && (
        <Menu visible={visible} toggleVisibility={toggleVisibility} />
      )}

      {isLoggedIn ? (
        <>
          <Caja className="flex-grow">
            {visible === "perfil"&& <Perfil />}
            {visible === "contactos" && <Contactos />}
            {visible === "horarios" && <Horario />}
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
