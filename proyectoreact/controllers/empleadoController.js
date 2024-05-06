// empleadoController.js
const Sequelize = require('sequelize');
const defineEmpleados = require('../models/empleados');
const sequelize = require('../db');

const Empleados = defineEmpleados(sequelize, Sequelize.DataTypes);

const getEmpleados = function(req, res) {
    Empleados.findAll()
      .then(empleados => res.json(empleados))
      .catch(err => res.status(500).json({ error: 'Error al obtener los empleados', details: err }));
};

const getEmpleado = function(req, res) {
    const empleado_id = req.params.empleado_id;
    Empleados.findOne({ where: { empleado_id: empleado_id } })
      .then(empleado => {
        if (empleado) {
          res.json(empleado);
        } else {
          res.status(404).json({ error: 'Empleado no encontrado' });
        }
      })
      .catch(err => res.status(500).json({ error: 'Error al obtener el empleado', details: err }));
};

const getEmpleadoByName = function(req, res) {
  const nombreCompleto = req.params.nombreCompleto;
  if (!nombreCompleto) {
    return res.status(400).json({ error: 'El nombre completo es requerido' });
  }
  const palabras = nombreCompleto.split(' ');

  let condiciones = [];
  palabras.forEach(palabra => {
    condiciones.push(
      { nombre: { [Sequelize.Op.like]: `%${palabra}%` } },
      { apellido1: { [Sequelize.Op.like]: `%${palabra}%` } },
      { apellido2: { [Sequelize.Op.like]: `%${palabra}%` } }
    );
  });

  Empleados.findAll({ where: { [Sequelize.Op.or]: condiciones } })
    .then(empleados => res.json(empleados))
    .catch(err => res.status(500).json({ error: 'Error al obtener los empleados', details: err }));
};

module.exports = { getEmpleados, getEmpleado, getEmpleadoByName };