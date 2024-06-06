// usuariosRoutes.js

const express = require('express');
const { getUsuario, getUsuarioId, getUsuarioRol } = require('../controllers/usuariosController');

const router = express.Router();

/**
 * @swagger
 * /{correo}:
 *   get:
 *     summary: Obtiene un usuario específico por correo
 *     parameters:
 *       - in: path
 *         name: correo
 *         required: true
 *         description: Correo del usuario para obtener
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: El usuario solicitado.
 */
router.get('/:correo', getUsuario);

/**
 * @swagger
 * /id/{correo}:
 *   get:
 *     summary: Obtiene el ID de un usuario específico por correo
 *     parameters:
 *       - in: path
 *         name: correo
 *         required: true
 *         description: Correo del usuario para obtener su ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: El ID del usuario solicitado.
 */
router.get('/id/:correo', getUsuarioId);

/**
 * @swagger
 * /rol/{correo}:
 *   get:
 *     summary: Obtiene el rol de un usuario específico por correo
 *     parameters:
 *       - in: path
 *         name: correo
 *         required: true
 *         description: Correo del usuario para obtener su rol
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: El rol del usuario solicitado.
 */
router.get('/rol/:correo', getUsuarioRol);

module.exports = router;