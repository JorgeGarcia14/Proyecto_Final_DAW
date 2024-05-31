// vacantesController.js
const Sequelize = require('sequelize');
const defineVacantes = require('../models/vacantes');
const sequelize = require('../db');

const Vacantes = defineVacantes(sequelize, Sequelize.DataTypes);

// POST vacante
const postVacante = async (req, res) => {
  try {
    const { titulo, descripcion, ubicacion, salario, empresa } = req.body;
    const vacante = await Vacantes.create({ titulo, descripcion,ubicacion, salario, empresa  });
    res.status(201).json(vacante);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la vacante', details: error });
  }
};

// GET vacante
const getVacante = async (req, res) => {
  try {
    const { id } = req.params;
    const vacante = await Vacantes.findOne({ where: { id: id } });
    if (vacante) {
      res.status(200).json(vacante);
    } else {
      res.status(404).json({ error: 'Vacante no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la vacante', details: error });
  }
};

// GET all vacantes
const getAllVacantes = async (req, res) => {
  try {
    const vacantes = await Vacantes.findAll();
    res.status(200).json(vacantes);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las vacantes', details: error });
  }
};

// DELETE vacante
const deleteVacante = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Vacantes.destroy({
        where: { id: id }
      });
      if (deleted) {
        res.status(204).send("Vacante eliminada");
      } else {
        res.status(404).send("Vacante no encontrada");
      }
    } catch (error) {
      res.status(500).send("Error al eliminar la vacante");
    }
  };
  
  module.exports = { postVacante, getVacante, getAllVacantes, deleteVacante };