const Sequelize = require('sequelize');
const defineEvents = require('../models/events');
const sequelize = require('../db');

const Events = defineEvents(sequelize, Sequelize.DataTypes);

// Obtener todos los eventos
const getAllEvents = async (req, res) => {
  try {
    const events = await Events.findAll();
    res.json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los eventos' });
  }
};

// Obtener un solo evento por ID
const getEventById = async (req, res) => {
  try {
    const event = await Events.findByPk(req.params.id);
    if (event) {
      res.json(event);
    } else {
      res.status(404).json({ error: 'Evento no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el evento' });
  }
};

// Crear un nuevo evento
const createEvent = async (req, res) => {
  try {
    const { titulo_evento, fecha_inicio, fecha_fin, id_recurso, classNames } = req.body;
    const newEvent = await Events.create({ titulo_evento, fecha_inicio, fecha_fin, id_recurso, classNames });
    res.status(201).json(newEvent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el evento' });
  }
};

// Actualizar un evento existente
const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo_evento, fecha_inicio, fecha_fin, id_recurso, classNames } = req.body;
    const event = await Events.findByPk(id);
    if (event) {
      event.titulo_evento = titulo_evento;
      event.fecha_inicio = fecha_inicio;
      event.fecha_fin = fecha_fin;
      event.id_recurso = id_recurso;
      event.classNames = classNames;
      await event.save();
      res.json(event);
    } else {
      res.status(404).json({ error: 'Evento no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el evento' });
  }
};

// Eliminar un evento
const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Events.findByPk(id);
    if (event) {
      await event.destroy();
      res.json({ message: 'Evento eliminado' });
    } else {
      res.status(404).json({ error: 'Evento no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el evento' });
  }
};

module.exports = {
  getAllEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
};
