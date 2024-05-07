// routes/employeeRoutes.js

const express = require('express');
const { getEmployee, getEmployees, getEmployeesByName } = require('../controllers/employeeController');
const { getEmpleados, getEmpleado, getEmpleadoByName, addEmpleado } = require('../controllers/empleadoController');

const router = express.Router();

router.get('/', getEmpleados);
router.get('/:empleado_id', getEmpleado);
router.get('/nombre/:name', getEmployeesByName);
router.post('/add', addEmpleado);

module.exports = router;