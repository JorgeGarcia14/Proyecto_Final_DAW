// routes/horarioRoutes.js

import express from 'express';
import { getHorario } from '../controllers/horarioController.js';

const router = express.Router();

router.get('/:EmpleadoID', getHorario);

export default router;