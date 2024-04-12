import React, { useState } from "react";
import Header from "./components/header";
import Menu from "./components/menu";
import Perfil from "./components/perfil";
import Contactos from "./components/contactos";
import Login from "./components/login";
import Caja from "./components/caja";

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
            {visible === "perfil" && <Perfil />}
            {visible === "contactos" && <Contactos />}
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
