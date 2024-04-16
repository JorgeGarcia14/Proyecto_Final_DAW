// routes/usuariosRoutes.js

import express from 'express';
import {getUsuario, getUsuarioId} from '../controllers/usuariosController.js';

const router = express.Router();

router.get('/:correo',getUsuario);
router.get('/id/:correo',getUsuarioId);

export default router;