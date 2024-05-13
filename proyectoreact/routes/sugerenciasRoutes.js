// sugerenciasRoutes.js

const express = require('express');
const { getSugerencias } = require('../controllers/sugerenciasController');

const router = express.Router();

router.get('/', getSugerencias);

module.exports = router;