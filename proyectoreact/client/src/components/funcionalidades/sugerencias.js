import React, { useState } from 'react';

function Sugerencias() {
    const [sugerencias, setSugerencias] = useState([]);
    const [nuevaSugerencia, setNuevaSugerencia] = useState('');

    const handleInputChange = (event) => {
        setNuevaSugerencia(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        // Añade la nueva sugerencia a la lista de sugerencias
        setSugerencias([...sugerencias, nuevaSugerencia]);
        setNuevaSugerencia('');
    };

    return (
        <div className="sugerencias flex">
            <div className="publicar-sugerencia w-1/2 p-4 flex flex-col max-h-screen">
    <h1 className="text-2xl mb-4 titulo-textos">Publicar sugerencias</h1>
    <form onSubmit={handleFormSubmit} className="flex flex-col h-full">
        <input type="text" placeholder="Nombre" className="mb-2 p-2 border rounded" />
        <textarea value={nuevaSugerencia} onChange={handleInputChange} className="caja-texto mb-2 p-2 border rounded" />
        <button type="submit" className="logout boton-header p-2 bg-slate-500 text-white rounded self-end font-bold">Publicar</button>
    </form>
</div>
            <div className="lista-sugerencias w-1/2 p-4 overflow-auto">
                {sugerencias.map((sugerencia, index) => (
                    <div key={index} className="sugerencia mb-2 p-2 border rounded">
                        {sugerencia}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sugerencias;