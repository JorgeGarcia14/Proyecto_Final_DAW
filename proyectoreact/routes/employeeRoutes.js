// routes/employeeRoutes.js

import express from 'express';
import { getEmployee, getEmployees } from '../controllers/employeeController.js';

const router = express.Router();

router.get('/', getEmployees);
router.get('/:empleado_id',getEmployee);

export default router;