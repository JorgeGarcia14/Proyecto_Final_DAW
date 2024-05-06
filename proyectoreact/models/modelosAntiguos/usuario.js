import db from '../../db.js';

export const getUsuario = (usuario, callback) => {
    const sql = 'SELECT * FROM usuarios WHERE Correo = :Correo';
    db.query(sql, { replacements: { Correo: usuario }, type: db.QueryTypes.SELECT })
        .then(result => {
            console.log(result); // Muestra el resultado por consola
            callback(null, result);
        })
        .catch(err => callback(err));
};

export const getUsuarioId = (correo, callback) => {
    const sql = 'SELECT e.empleado_id FROM empleados e, usuarios u WHERE e.correo = u.correo AND u.correo = :correo';
    db.query(sql, { replacements: { correo: correo }, type: db.QueryTypes.SELECT })
        .then(result => {
            console.log(result); // Muestra el resultado por consola
            callback(null, result);
        })
        .catch(err => callback(err));
};

export const getUsuarioRol = (correo, callback) => {
    const sql = "SELECT e.rol FROM empleados e, usuarios u WHERE e.correo = u.correo AND u.correo = :correo";
    
    db.query(sql, { replacements: { correo: correo }, type: db.QueryTypes.SELECT })
      .then(result => {
        callback(null, result);
      })
      .catch(err => {
        callback(err);
      });
  };

