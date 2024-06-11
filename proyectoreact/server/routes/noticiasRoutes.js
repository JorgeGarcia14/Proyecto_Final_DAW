// noticiasRoutes.js

const express = require('express');
const {getAllNoticias, getNoticia, postNoticia, deleteNoticia} = require('../controllers/noticiasController');

const router = express.Router();

/**
 * @swagger
 * /api/noticias/{id}:
 *   get:
 *     summary: Obtiene una noticia específica
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID numérico de la noticia para obtener
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: La noticia solicitada.
 */
router.get('/:id', getNoticia);

/**
 * @swagger
 * /api/noticias/:
 *   get:
 *     summary: Obtiene todas las noticias
 *     responses:
 *       200:
 *         description: Un array de todas las noticias.
 */
router.get('/', getAllNoticias);

/**
 * @swagger
 * /api/noticias/:
 *   post:
 *     summary: Crea una nueva noticia
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *               contenido:
 *                 type: string
 *     responses:
 *       201:
 *         description: La noticia fue creada exitosamente.
 */
router.post('/', postNoticia);

/**
 * @swagger
 * /api/noticias/{id}:
 *   delete:
 *     summary: Elimina una noticia específica
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID numérico de la noticia para eliminar
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: La noticia fue eliminada exitosamente.
 */
router.delete('/:id', deleteNoticia);

module.exports = router;