// sugerenciasRoutes.js

const express = require('express');
const { getSugerencias } = require('../controllers/sugerenciasController');
const { deleteSugerencia , addSugerencia} = require('../controllers/sugerenciasController');

const router = express.Router();

router.get('/', getSugerencias);
router.delete('/delete/:sugerencia_id', deleteSugerencia);
router.post('/add/:empleado_id', addSugerencia);


module.exports = router;