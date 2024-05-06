// routes/employeeRoutes.js

const express = require('express');
const { getNominasPorEmpleado, getNominaPorMes } = require('../controllers/nominaController');

const router = express.Router();

router.get('/id/:empleado_id', getNominasPorEmpleado);
router.get('/mes/:mes', getNominaPorMes);

module.exports = router;