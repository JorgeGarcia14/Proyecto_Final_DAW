// nominaController.js

const Sequelize = require('sequelize');
const defineNominas = require('../models/nominas');
const sequelize = require('../db');

const Nominas = defineNominas(sequelize, Sequelize.DataTypes);

const getNominasEmpleadoById = function(req, res) {
    const idEmpleado = req.params.id;
  
    if (!idEmpleado) {
      return res.status(400).json({ error: 'El ID del empleado es requerido' });
    }
  
    Nominas.findAll({ where: { empleado_id_fk: idEmpleado } })
      .then(nominas => res.json(nominas))
      .catch(err => res.status(500).json({ error: 'Error al obtener las nóminas del empleado', details: err }));
  };

module.exports = { getNominasEmpleadoById };
