const express = require('express');
const { getAllEvents, getEventById, deleteEvent, createEvent, updateEvent } = require('../controllers/eventsController');

const router = express.Router();

router.get('', getAllEvents);
router.get('/:id', getEventById);
router.post('', createEvent);
router.put('/:id', updateEvent);
router.delete('/:id', deleteEvent);

module.exports = router;
