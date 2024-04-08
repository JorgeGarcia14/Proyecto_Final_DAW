import React, { useState } from "react";
import Header from "./components/header";
import Menu from "./components/menu";
import Perfil from "./components/perfil";

function App() {
  const [visible, setVisible] = useState({ //Manejo de estado de los diferentes componentes que aparecen al pulsar los botones del menú
    perfil: false,
    informacion: false,
    horarios: false,
    noticias: false
  });

  const toggleVisibility = (componente) => {
    setVisible(prevState => ({
      ...prevState,
      [componente]: !prevState[componente]
    }));
  };

  return (
    <>
      <Header />
      <Menu 
        visible={visible} 
        toggleVisibility={toggleVisibility} 
      />
      {visible.perfil && <Perfil />}    
    </>
  );
}

export default App;