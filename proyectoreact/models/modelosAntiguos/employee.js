const db = require('../../db');

const getEmployees = (callback) => {
  const sql = 'SELECT * FROM empleados';
  db.query(sql, { type: db.QueryTypes.SELECT })
    .then(result => {
      callback(null, result);
      console.log(result); // Muestra el resultado por consola
    })
    .catch(err => callback(err));
};

const getEmployee = (id, callback) => { //Ruta que devuelve a un empleado por id
  const sql = 'SELECT * FROM empleados WHERE empleado_id = :id';
  db.query(sql, { replacements: { id: id }, type: db.QueryTypes.SELECT })
    .then(result => {
      callback(null, result);
      console.log(result); // Muestra el resultado por consola
    })
    .catch(err => callback(err));
};

const getEmployeesByName = (nombreCompleto, callback) => {
  const palabras = nombreCompleto.split(' ');
  const condiciones = palabras.map((palabra, index) => `(nombre LIKE :palabra${index} OR apellido1 LIKE :palabra${index} OR apellido2 LIKE :palabra${index})`).join(' AND ');
  const sql = `SELECT * FROM empleados WHERE ${condiciones}`;

  const replacements = palabras.reduce((obj, palabra, index) => ({ ...obj, [`palabra${index}`]: `%${palabra}%` }), {});

  db.query(sql, { replacements: replacements, type: db.QueryTypes.SELECT })
    .then(result => {
      callback(null, result);
    })
    .catch(err => {
      callback(err);
    });
};

module.exports = { getEmployees, getEmployee, getEmployeesByName };