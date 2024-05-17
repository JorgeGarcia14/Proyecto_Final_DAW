// sugerenciasRoutes.js

const express = require('express');
const { getSugerencias } = require('../controllers/sugerenciasController');
const { deleteSugerencia } = require('../controllers/sugerenciasController');

const router = express.Router();

router.get('/', getSugerencias);
router.delete('/delete/:sugerencia_id', deleteSugerencia);

module.exports = router;