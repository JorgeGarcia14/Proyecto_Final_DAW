// models/employee.js

const db = require('../db');

exports.getemployees = (callback) => { //Ruta que devuelve a todos los empleados
  const sql = 'SELECT * FROM empleados';
  db.query(sql, callback);
};

exports.getEmployee = (id, callback) => { //Ruta que devuelve a un empleado por id
  const sql = 'SELECT * FROM empleados WHERE id = ?';
  db.query(sql, [id], callback);
};