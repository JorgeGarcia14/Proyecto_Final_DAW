// nominaRoutes.js

const express = require('express');
const {getNominasEmpleadoById, postNomina} = require('../controllers/nominaController');

const router = express.Router();

/**
 * @swagger
 * /api/nomina/id/{id}:
 *   get:
 *     summary: Obtiene las nóminas de un empleado específico
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID numérico del empleado para obtener sus nóminas
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Las nóminas del empleado.
 */
router.get('/id/:id', getNominasEmpleadoById);

/**
 * @swagger
 * /api/nomina/new:
 *   post:
 *     summary: Crea una nueva nómina
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               empleadoId:
 *                 type: integer
 *               salario:
 *                 type: number
 *     responses:
 *       201:
 *         description: La nómina fue creada exitosamente.
 */
router.post('/', postNomina);

module.exports = router;