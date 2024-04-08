// routes/employeeRoutes.js

const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

router.get('/empleados', employeeController.getEmployees);
router.get('/empleado/:id', employeeController.getEmployee);

module.exports = router;