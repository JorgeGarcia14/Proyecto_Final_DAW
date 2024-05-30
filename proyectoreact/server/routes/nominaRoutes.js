// routes/employeeRoutes.js

const express = require('express');
const {getNominasEmpleadoById, postNomina} = require('../controllers/nominaController');

const router = express.Router();

router.get('/id/:id', getNominasEmpleadoById);
router.post('/', postNomina);

module.exports = router;
