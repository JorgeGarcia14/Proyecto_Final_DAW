// routes/vacanteRoutes.js

const express = require('express');
const {getAllVacantes, getVacante, postVacante, deleteVacante} = require('../controllers/vacantesController');

const router = express.Router();

router.get('/:id', getVacante);
router.get('/', getAllVacantes);
router.post('/', postVacante);
router.delete('/:id', deleteVacante);

module.exports = router;
