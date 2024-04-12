// routes/usuariosRoutes.js

const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

router.get('/:correo', usuariosController.getUsuario);

module.exports = router;