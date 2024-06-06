import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

function NoticiasAdmin() {
  const [descripcion, setDescripcion] = useState("");
  const [url, setUrl] = useState("");
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    fetchNoticias();
  }, []);

  const fetchNoticias = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/noticias`);
    const data = await response.json();
    setNoticias(data);
  };

  const deleteNoticia = async (id) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/noticias/${id}`,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      fetchNoticias();
      toast.success("Noticia eliminada correctamente");
    } else {
      toast.error("Error al eliminar la noticia");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${process.env.REACT_APP_API_URL}/noticias`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        noticia_url: url,
        noticia_descripcion: descripcion,
      }),
    });
    if (response.ok) {
      setDescripcion("");
      setUrl("");
      fetchNoticias();
      toast.success("Noticia añadida correctamente");
    } else {
      toast.error("Error al añadir la noticia");
    }
  };

  return (
    <div className='w-full h-full overflow-auto'>
      <h1 className="titulo-textos-admin text-center mb-4">
        Publicar/Administrar Noticias
      </h1>
      <form className="grid grid-cols-1 gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
        
        <input
          type="text"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder="Descripción"
          className="px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
        />
        
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="URL"
          className="px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
        />
        <button
          type="submit"
          className="col-span-full px-3 py-2 text-white bg-orange-400 rounded-md hover:bg-orange-500 focus:outline-none mt-4"
        >
          Añadir noticia
        </button>
      </form>
      <div className="mt-4 space-y-4">
        {noticias.map((noticia) => (
          <div
            key={noticia.noticia_id}
            className="flex flex-row justify-between p-4 bg-white rounded shadow"
          >
            <div>
              <h2 className="mb-2 text-lg font-semibold">
                {noticia.noticia_descripcion}
              </h2>
              <p className="mb-2 text-sm text-gray-600">
                {noticia.noticia_url}
              </p>
            </div>
            <button
              onClick={() => deleteNoticia(noticia.noticia_id)}
              className="w-6 h-6 flex items-center justify-center ml-2"
            >
              <img
                src="./images/icons/remove.png"
                className="botones-hover"
                alt="Eliminar"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NoticiasAdmin;
