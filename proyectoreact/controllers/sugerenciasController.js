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

const deleteSugerencia = function (req, res) {
  const sugerencia_id = req.params.sugerencia_id;
  Sugerencias.destroy({ where: { sugerencia_id: sugerencia_id } })
    .then(() => res.status(204).end())
    .catch(err => {
      console.error(err); // Imprime el error completo en la consola
      res.status(500).json({ error: 'Error al eliminar la sugerencia', details: err });
    });
}


module.exports = { getSugerencias , deleteSugerencia};