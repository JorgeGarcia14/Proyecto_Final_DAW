// sugerenciasController.js
const Sequelize = require('sequelize');
const sequelize = require('../db');

const { getSugerencias: getSugerenciasModel } = require('../models/modelosAntiguos/sugerencias');
const defineSugerencias = require('../models/sugerencias');
const Sugerencias = defineSugerencias(sequelize, Sequelize.DataTypes);


const getSugerencias = (req, res) => {
    getSugerenciasModel((err, sugerencias) => {
        if (err) {
          res.status(500).send({ message: err.message });
        } else {
          res.send(sugerencias);
        }
    });
};

const addSugerencia = (req, res) => {
  const empleado_id_fk = req.params.empleado_id;
  const { nombre, descripcion } = req.body;

  if (!empleado_id_fk || !nombre || !descripcion) {
    return res.status(400).json({ error: 'Todos los campos son requeridos' });
  }

  Sugerencias.create({
    empleado_id_fk,
    nombre,
    descripcion
  })
    .then(sugerencia => res.status(201).json(sugerencia))
    .catch(err => {
      console.error(err); // Imprime el error completo en la consola
      res.status(500).json({ error: 'Error al crear la sugerencia', details: err });
    });
};



const deleteSugerencia = function (req, res) {
  const sugerencia_id = req.params.sugerencia_id;
  Sugerencias.destroy({ where: { sugerencia_id: sugerencia_id } })
    .then(() => res.status(204).end())
    .catch(err => {
      console.error(err); // Imprime el error completo en la consola
      res.status(500).json({ error: 'Error al eliminar la sugerencia', details: err });
    });
}


module.exports = { getSugerencias , deleteSugerencia, addSugerencia};