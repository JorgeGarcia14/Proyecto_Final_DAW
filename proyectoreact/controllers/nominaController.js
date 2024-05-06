// nominaController.js
const Sequelize = require('sequelize');
const defineNominas = require('../models/nominas');
const sequelize = require('../db');

const Nominas = defineNominas(sequelize, Sequelize.DataTypes);

const getNominasPorEmpleado = function(req, res) {
    // Ajustamos el nombre de la variable para que sea consistente
    Nominas.findAll({ where: { empleado_id_fk: req.params.empleado_id } }) // Utilizamos el ID del empleado para filtrar las nóminas
      .then(nominas => { 
        res.json(nominas)
        console.log(nominas)
    })
      .catch(err => res.status(500).json({ error: 'Error al obtener las nóminas', details: err }));
};

const getNominaPorMes = function(req, res) {
    const mes = req.params.mes;
    Nominas.findOne({ where: { mes: mes } })
      .then(nomina => {
        if (nomina) {
          res.json(nomina);
        } else {
          res.status(404).json({ error: 'Nómina no encontrada para el mes especificado' });
        }
      })
      .catch(err => res.status(500).json({ error: 'Error al obtener la nómina', details: err }));
};

module.exports = { getNominasPorEmpleado, getNominaPorMes };