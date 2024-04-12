// routes/horarioRoutes.js

const express = require('express');
const router = express.Router();
const horarioController = require('../controllers/horarioController');

router.get('/:EmpleadoID', horarioController.getHorario);

module.exports = router;