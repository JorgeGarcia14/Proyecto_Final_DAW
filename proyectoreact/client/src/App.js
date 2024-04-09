import React, { useState } from "react";
import './index.css'
import Header from "./components/header";
import Menu from "./components/menu";
import Perfil from "./components/perfil";
import Login from "./components/login"; // Asegúrate de importar el componente Login

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Maneja el inicio de sesion

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const [visible, setVisible] = useState({
    //Manejo de estado de los diferentes componentes que aparecen al pulsar los botones del menú
    perfil: false,
    contactos: false,
    horarios: false,
    nominas: false,
    sugerencias: false,
    vacantes: false,
    noticias: false,
  });

  const toggleVisibility = (componente) => {
    setVisible((prevState) => ({
      ...prevState,
      [componente]: !prevState[componente],
    }));
  };

  return (
    <>
      <Header />
      {isLoggedIn ? (
        <>
          <Menu 
            visible={visible} 
            toggleVisibility={toggleVisibility}
          />
          {visible.perfil && <Perfil />}
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </>
  );
}

export default App;
