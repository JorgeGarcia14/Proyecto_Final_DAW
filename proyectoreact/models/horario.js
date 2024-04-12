// models/horario.js

const db = require('../db');

exports.getHorario = (id, callback) => { //Ruta que devuelve a un horario por id de empleado
    const sql = 'SELECT * FROM horarios WHERE EmpleadoID = ?';
    db.query(sql, [id], callback);
  };