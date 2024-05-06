import React, { useState, useEffect } from "react";
import axios from "axios";

function Sugerencias() {
  const [sugerencias, setSugerencias] = useState([]);
  const [actuales, setActuales] = useState([]);
  const [restantes, setRestantes] = useState([]);

  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");

  //Cada vez que se monta el componente, se obtienen las sugerencias de la base de datos
  useEffect(() => {
    fetch("http://localhost:5000/api/sugerencias")
      .then((response) => response.json())
      .then((data) => setSugerencias(data))
      .catch((error) => console.error("Error:", error));
  }, []); // Ejecuta solo una vez cuando el componente se monta

  //Cada vez que se actualiza el estado de sugerencias, se actualizan las sugerencias actuales y restantes
  useEffect(() => {
    setRestantes(sugerencias);
    setActuales(sugerencias.slice(0, 5));
  }, [sugerencias]);

  //Las sugerencias que aparecen en pantalla van cambiando cada 5 segundos
  useEffect(() => {
    const intervalo = setInterval(() => {
      if (restantes.length > 0) {
        setActuales((prevActuales) => [...prevActuales.slice(1), restantes[0]]);
        setRestantes((prevRestantes) => prevRestantes.slice(1));
      } else {
        setRestantes(sugerencias);
        setActuales(sugerencias.slice(0, 5));
      }
    }, 5000);
    return () => clearInterval(intervalo);
  }, [restantes, sugerencias]);

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleDescripcionChange = (event) => {
    setDescripcion(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const nuevaSugerencia = {
      nombre: nombre,
      descripcion: descripcion,
      empleado_id_fk: 1, // Aquí debes poner el id del empleado que está haciendo la sugerencia
    };

    axios
      .post("http://localhost:5000/api/sugerencias", nuevaSugerencia)
      .then((response) => {
        console.log(response);
        setNombre("");
        setDescripcion("");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="sugerencias flex">
      <div className="publicar-sugerencia w-1/2 p-4 flex flex-col max-h-screen">
        <h1 className="text-2xl mb-4 titulo-textos">Publicar sugerencias</h1>
        <form onSubmit={handleFormSubmit} className="flex flex-col h-full">
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={handleNombreChange}
            className="mb-2 p-2 border rounded"
          />
          <textarea
            placeholder="Descripción"
            value={descripcion}
            onChange={handleDescripcionChange}
            className="caja-texto mb-2 p-2 border rounded"
          />
          <button
            type="submit"
            className="logout boton-header p-2 bg-slate-500 text-white rounded self-end font-bold"
          >
            Publicar
          </button>
        </form>
      </div>
      <div className="sugerencias">
        {actuales.map((sugerencia, index) => {
          const { nombre, descripcion } = sugerencia;
          return (
            <div key={index} className="sugerencia mb-2 p-2 border rounded">
              <p className=" font-bold">{nombre}</p>
              <p>{descripcion}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sugerencias;
