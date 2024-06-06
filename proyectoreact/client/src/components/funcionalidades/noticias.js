import React, { useState, useEffect } from 'react';

function Noticias() {
  const [noticias, setNoticias] = useState([]);
  const [noticiaActual, setNoticiaActual] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/noticias`)
      .then(response => response.json())
      .then(data => {
        setNoticias(data);
        setNoticiaActual(data[Math.floor(Math.random() * data.length)]);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setNoticiaActual(noticias[Math.floor(Math.random() * noticias.length)]);
    }, 900000); // Cambia la noticia cada 15 minutos
    return () => clearInterval(interval);
  }, [noticias]);

  return (
    <div className='w-full h-full overflow-auto' >
      <h1 className="text-2xl mb-4 titulo-textos text-center">Descubre nuevas noticias</h1>
      {noticiaActual && <iframe src={noticiaActual.noticia_url} title="Noticia Actual" className='w-full h-full overflow-auto'></iframe>}
    </div>
  );
}

export default Noticias;
