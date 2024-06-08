// routes/vacanteRoutes.js

const express = require('express');
const {getAllVacantes, getVacante, postVacante, deleteVacante} = require('../controllers/vacantesController');

const router = express.Router();

/**
 * @swagger
 * /api/vacantes/{id}:
 *   get:
 *     summary: Obtiene una vacante específica
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID numérico de la vacante para obtener
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: La vacante solicitada.
 */
router.get('/:id', getVacante);

/**
 * @swagger
 * /api/vacantes/:
 *   get:
 *     summary: Obtiene todas las vacantes
 *     responses:
 *       200:
 *         description: Un array de todas las vacantes.
 */
router.get('/', getAllVacantes);

/**
 * @swagger
 * /api/vacantes/:
 *   post:
 *     summary: Crea una nueva vacante
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *               descripcion:
 *                 type: string
 *     responses:
 *       201:
 *         description: La vacante fue creada exitosamente.
 */
router.post('/', postVacante);

/**
 * @swagger
 * /api/vacantes/{id}:
 *   delete:
 *     summary: Elimina una vacante específica
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID numérico de la vacante para eliminar
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: La vacante fue eliminada exitosamente.
 */
router.delete('/:id', deleteVacante);

module.exports = router;