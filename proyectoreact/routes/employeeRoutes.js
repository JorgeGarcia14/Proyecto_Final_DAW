// routes/employeeRoutes.js

import express from 'express';
import { getEmployee, getEmployees, getEmployeesByName } from '../controllers/employeeController.js';

const router = express.Router();

router.get('/', getEmployees);
router.get('/:empleado_id',getEmployee);
router.get('/nombre/:name', getEmployeesByName);

export default router;