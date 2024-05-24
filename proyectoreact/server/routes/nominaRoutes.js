// routes/employeeRoutes.js

const express = require('express');
const {getNominasEmpleadoById} = require('../controllers/nominaController');

const router = express.Router();

router.get('/id/:id', getNominasEmpleadoById);

module.exports = router;
