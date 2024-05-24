// sugerencias.js

const db = require('../../db');

const getSugerencias = (callback) => { //Ruta que devuelve todas las sugerencias
    const sql = 'SELECT * FROM sugerencias';
    db.query(sql, { type: db.QueryTypes.SELECT })
        .then(result => {
            console.log(result); // Muestra el resultado por consola
            callback(null, result);
        })
        .catch(err => callback(err));
};

module.exports = { getSugerencias };