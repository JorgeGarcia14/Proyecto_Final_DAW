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
    const response = await fetch(`${process.env.REACT_APP_API_URL}/noticias/${id}`, {
      method: "DELETE",
    });
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
    <div className="w-full overflow-auto max-h-[500px]">
      <h1 className="titulo-textos-admin text-center mb-4">
        Publicar/Administrar Noticias
      </h1>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label className="mb-2 textos-importantes-admin">
          Descripción:
          <input
            type="text"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </label>
        <label className="mb-2 textos-importantes-admin">
          URL:
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </label>
        <button
          type="submit"
          className="col-span-full px-3 py-2 text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none"
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
                className=""
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
