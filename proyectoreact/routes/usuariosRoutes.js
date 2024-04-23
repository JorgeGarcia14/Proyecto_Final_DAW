// routes/usuariosRoutes.js

import express from 'express';
import {getUsuario, getUsuarioId, getUsuarioRol} from '../controllers/usuariosController.js';

const router = express.Router();

router.get('/:correo',getUsuario);
router.get('/id/:correo',getUsuarioId);
router.get('/rol/:correo',getUsuarioRol);

export default router;