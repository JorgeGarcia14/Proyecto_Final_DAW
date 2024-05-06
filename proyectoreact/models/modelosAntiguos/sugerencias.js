import db from '../../db.js';

export const getSugerencias = (callback) => {
    const sql = 'SELECT * FROM sugerencias';
    db.query(sql, { type: db.QueryTypes.SELECT })
        .then(result => {
        callback(null, result);
        console.log(result); // Muestra el resultado por consola
        })
        .catch(err => callback(err));
}