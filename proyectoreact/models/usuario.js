// models/usuario.js

const db = require('../db');

exports.getUsuario = (usuario, callback) => {
    const sql = 'SELECT * FROM usuarios WHERE Correo = ?';
    db.query(sql, [usuario], callback);
}