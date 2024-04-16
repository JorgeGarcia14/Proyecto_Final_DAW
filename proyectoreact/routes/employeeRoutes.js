// routes/employeeRoutes.js

import express from 'express';
import { getEmployee, getEmployees } from '../controllers/employeeController.js';

const router = express.Router();

router.get('/', getEmployees);
router.get('/:id',getEmployee);

export default router;