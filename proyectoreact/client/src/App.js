import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState, useEffect } from "react";
//Componentes
import Header from "./components/utils/header";
import Menu from "./components/utils/menu";
import Perfil from "./components/funcionalidades/perfil";
import Contactos from "./components/funcionalidades/contactos";
import Horario from "./components/funcionalidades/horario";
import Login from "./components/utils/login";
import Caja from "./components/utils/caja";
import Sugerencias from "./components/funcionalidades/sugerencias";
import Nominas from "./components/funcionalidades/nominas";
import Vacantes from "./components/funcionalidades/vacantes";
import Noticias from './components/funcionalidades/noticias';
//Componentes Admin
import MenuAdmin from "./components/utils/Administrador/menuAdmin";
import CrearEmpleado from "./components/funcionalidades/Administrador/crearEmpleado";
import EmpleadosAdmin from "./components/funcionalidades/Administrador/empleadosAdmin";
import SugerenciasAdmin from './components/funcionalidades/Administrador/sugerenciasAdmin';
import NoticiasAdmin from './components/funcionalidades/Administrador/noticiasAdmin';
import NominasAdmin from './components/funcionalidades/Administrador/nominasAdmin';
import VacantesAdmin from './components/funcionalidades/Administrador/vacantesAdmin';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Maneja el inicio de sesion
  const rol = localStorage.getItem("usuarioRol");

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
      {isLoggedIn &&
        (rol === "Admin" ? (
          <MenuAdmin visible={visible} toggleVisibility={toggleVisibility} />
        ) : (
          <Menu visible={visible} toggleVisibility={toggleVisibility} />
        ))}

      {isLoggedIn ? (
        <>
        <ToastContainer />
          <Caja className="flex-grow">
            {visible === "" && (
              <img
                src="./images/empresa.jpg"
                alt="Logo de la empresa"
                className="object-cover w-full h-full"
              />
            )}
            {visible === "perfil" && <Perfil />}
            {visible === "contactos" && <Contactos />}
            {visible === "horarios" && <Horario />}
            {visible === "sugerencias" && <Sugerencias />}
            {visible === "nominas" && <Nominas />}
            {visible === "vacantes" && <Vacantes />}
            {visible === "noticias" && <Noticias />}
            
            {/* COMPONENTES DE ADMINISTRADOR */}
            {visible === "crearEmpleado" && <CrearEmpleado />}
            {visible === "empleadosAdmin" && <EmpleadosAdmin />}
            {visible === "sugerenciasAdmin" && <SugerenciasAdmin />}
            {visible === "noticiasAdmin" && <NoticiasAdmin />}
            {visible === "nominasAdmin" && <NominasAdmin />}
            {visible === "vacantesAdmin" && <VacantesAdmin />}

          </Caja>
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
