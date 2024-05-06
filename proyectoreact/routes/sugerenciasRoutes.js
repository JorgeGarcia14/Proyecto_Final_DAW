// routes/sugerenciasRoutes.js

import express from 'express';
import { getSugerencias} from '../controllers/sugerenciasController.js';


const router = express.Router();

router.get('/', getSugerencias);

export default router;
