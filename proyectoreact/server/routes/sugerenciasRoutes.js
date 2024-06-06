// sugerenciasRoutes.js

const express = require('express');
const { getSugerencias } = require('../controllers/sugerenciasController');
const { deleteSugerencia , addSugerencia} = require('../controllers/sugerenciasController');

const router = express.Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Obtiene todas las sugerencias
 *     responses:
 *       200:
 *         description: Un array de todas las sugerencias.
 */
router.get('/', getSugerencias);

/**
 * @swagger
 * /delete/{sugerencia_id}:
 *   delete:
 *     summary: Elimina una sugerencia específica
 *     parameters:
 *       - in: path
 *         name: sugerencia_id
 *         required: true
 *         description: ID numérico de la sugerencia para eliminar
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: La sugerencia fue eliminada exitosamente.
 */
router.delete('/delete/:sugerencia_id', deleteSugerencia);

/**
 * @swagger
 * /add/{empleado_id}:
 *   post:
 *     summary: Añade una nueva sugerencia
 *     parameters:
 *       - in: path
 *         name: empleado_id
 *         required: true
 *         description: ID numérico del empleado que hace la sugerencia
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               contenido:
 *                 type: string
 *     responses:
 *       201:
 *         description: La sugerencia fue creada exitosamente.
 */
router.post('/add/:empleado_id', addSugerencia);

module.exports = router;