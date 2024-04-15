import db from '../db.js';

export const getHorario = (id, callback) => { //Ruta que devuelve a un horario por id de empleado
    const sql = 'SELECT * FROM horarios WHERE EmpleadoID = :EmpleadoID';
    db.query(sql, { replacements: { EmpleadoID: id }, type: db.QueryTypes.SELECT })
        .then(result => {
            console.log(result); // Muestra el resultado por consola
            callback(null, result);
        })
        .catch(err => callback(err));
};