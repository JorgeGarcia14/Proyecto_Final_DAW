// db.js

const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "PortalEmpleado",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Conectado a la base de datos");
});

// Realizar una consulta simple para comprobar la conexión
db.query("SHOW TABLES", (err, results) => {
  if (err) {
    console.log("Error al realizar la consulta", err);
  } else {
    console.log("Tablas en la base de datos:", results);
  }
});

module.exports = db;
