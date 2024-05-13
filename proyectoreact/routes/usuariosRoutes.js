// usuariosRoutes.js

const express = require('express');
const { getUsuario, getUsuarioId, getUsuarioRol } = require('../controllers/usuariosController');

const router = express.Router();

router.get('/:correo', getUsuario);
router.get('/id/:correo', getUsuarioId);
router.get('/rol/:correo', getUsuarioRol);

module.exports = router;