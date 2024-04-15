import db from '../db.js';

export const getEmployees = (callback) => { //Ruta que devuelve a todos los empleados
  const sql = 'SELECT * FROM empleados';
  db.query(sql, callback);
};

export const getEmployee = (id, callback) => { //Ruta que devuelve a un empleado por id
  const sql = 'SELECT * FROM empleados WHERE id = :id';
  db.query(sql, { replacements: { id: id }, type: db.QueryTypes.SELECT })
    .then(result => {
      console.log(result); // Muestra el resultado por consola
      callback(null, result);
    })
    .catch(err => callback(err));
};