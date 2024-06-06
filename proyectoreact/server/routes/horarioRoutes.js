// horarioRoutes.js

const express = require('express');
const { getHorario } = require('../controllers/horarioController');

const router = express.Router();

/**
 * @swagger
 * /horario/{EmpleadoID}:
 *   get:
 *     summary: Obtiene el horario de un empleado específico
 *     parameters:
 *       - in: path
 *         name: EmpleadoID
 *         required: true
 *         description: ID numérico del empleado para obtener su horario
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: El horario del empleado.
 */
router.get('/:EmpleadoID', getHorario);

module.exports = router;