import db from '../db.js';

export const getEmployees = (callback) => {
  const sql = 'SELECT * FROM empleados';
  db.query(sql, { type: db.QueryTypes.SELECT })
    .then(result => {
      callback(null, result);
      console.log(result); // Muestra el resultado por consola
    })
    .catch(err => callback(err));
};

export const getEmployee = (empleado_id, callback) => { //Ruta que devuelve a un empleado por id
  const sql = 'SELECT * FROM empleados WHERE empleado_id = :empleado_id';
  db.query(sql, { replacements: { empleado_id: empleado_id }, type: db.QueryTypes.SELECT })
    .then(result => {
      callback(null, result);
      console.log(result); // Muestra el resultado por consola
    })
    .catch(err => callback(err));
};

export const getEmployeesByName = (nombre, callback) => {
  const sql = "SELECT * FROM empleados WHERE nombre LIKE :nombre";
  
  db.query(sql, { replacements: { nombre: `%${nombre}%` }, type: db.QueryTypes.SELECT })
    .then(result => {
      callback(null, result);
    })
    .catch(err => {
      callback(err);
    });
};