// noticiasController.js
const Sequelize = require('sequelize');
const defineNoticias = require('../models/noticias');
const sequelize = require('../db');

const Noticias = defineNoticias(sequelize, Sequelize.DataTypes);

// POST noticia
const postNoticia = async (req, res) => {
  try {
    const { noticia_url, noticia_descripcion } = req.body;
    const noticia = await Noticias.create({ noticia_url, noticia_descripcion });
    res.status(201).json(noticia);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la noticia', details: error });
  }
};

// GET noticia
const getNoticia = async (req, res) => {
  try {
    const { id } = req.params;
    const noticia = await Noticias.findOne({ where: { noticia_id: id } });
    if (noticia) {
      res.status(200).json(noticia);
    } else {
      res.status(404).json({ error: 'Noticia no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la noticia', details: error });
  }
};

// GET all noticias
const getAllNoticias = async (req, res) => {
  try {
    const noticias = await Noticias.findAll();
    res.status(200).json(noticias);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las noticias', details: error });
  }
};

// DELETE noticia
const deleteNoticia = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Noticias.destroy({
        where: { noticia_id: id }
      });
      if (deleted) {
        res.status(204).send("Noticia eliminada");
      } else {
        res.status(404).send("Noticia no encontrada");
      }
    } catch (error) {
      res.status(500).send("Error al eliminar la noticia");
    }
  };
  
  module.exports = { postNoticia, getNoticia, getAllNoticias, deleteNoticia };