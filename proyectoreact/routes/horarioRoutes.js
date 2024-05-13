// horarioRoutes.js

const express = require('express');
const { getHorario } = require('../controllers/horarioController');

const router = express.Router();

router.get('/:EmpleadoID', getHorario);

module.exports = router;