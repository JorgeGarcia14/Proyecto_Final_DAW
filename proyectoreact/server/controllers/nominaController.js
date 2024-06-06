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

const postNomina = function(req, res) {
  const { empleado_id_fk, mes, total_bruto, horas_extra, bonificaciones, deducciones, total_neto } = req.body;

  // Validar que todos los campos requeridos estén presentes
  if (!empleado_id_fk || !mes || total_bruto === undefined || horas_extra === undefined || bonificaciones === undefined || deducciones === undefined || total_neto === undefined) {
    return res.status(400).json({ error: 'Todos los campos son requeridos' });
  }

  // Crear la nómina en la base de datos
  Nominas.create({
    empleado_id_fk, mes, total_bruto, horas_extra, bonificaciones, deducciones, total_neto
  })
    .then(nomina => {
      // Respuesta exitosa con la nómina creada
      res.status(201).json({ nomina });
    })
    .catch(err => {
      // Manejar errores al crear la nómina
      res.status(500).json({ error: 'Error al crear la nómina', details: err });
    });
};

module.exports = { getNominasEmpleadoById, postNomina };