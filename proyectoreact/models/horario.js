import db from '../db.js';

export const getHorario = (id, callback) => { //Ruta que devuelve a un horario por id de empleado
    const sql = 'SELECT * FROM horarios WHERE empleado_id_fk = :id';
    db.query(sql, { replacements: { id: id }, type: db.QueryTypes.SELECT })
        .then(result => {
            console.log(result); // Muestra el resultado por consola
            callback(null, result);
        })
        .catch(err => callback(err));
};