// routes/employeeRoutes.js

const express = require('express');
const { getEmployee, getEmployees, getEmployeesByName } = require('../controllers/employeeController');
const { getEmpleados, getEmpleado, getEmpleadoByName, addEmpleado, deleteEmpleado } = require('../controllers/empleadoController');

const router = express.Router();

/**
 * @swagger
 * /api/empleado:
 *   get:
 *     summary: Obtiene una lista de empleados
 *     responses:
 *       200:
 *         description: Una lista de empleados.
 */
router.get('/', getEmpleados);

/**
 * @swagger
 * /api/empleado/{empleado_id}:
 *   get:
 *     summary: Obtiene un empleado específico
 *     parameters:
 *       - in: path
 *         name: empleado_id
 *         required: true
 *         description: ID numérico del empleado a obtener
 *     responses:
 *       200:
 *         description: Un empleado.
 */
router.get('/:empleado_id', getEmpleado);

/**
 * @swagger
 * /api/empleado/nombre/{name}:
 *   get:
 *     summary: Obtiene empleados por nombre
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         description: Nombre de los empleados a obtener
 *     responses:
 *       200:
 *         description: Una lista de empleados.
 */
router.get('/nombre/:name', getEmployeesByName);

/**
 * @swagger
 * /api/empleado/add:
 *   post:
 *     summary: Añade un nuevo empleado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               job:
 *                 type: string
 *     responses:
 *       200:
 *         description: El empleado creado.
 */
router.post('/add', addEmpleado);

/**
 * @swagger
 * /api/empleado/delete/{empleado_id}:
 *   delete:
 *     summary: Elimina un empleado
 *     parameters:
 *       - in: path
 *         name: empleado_id
 *         required: true
 *         description: ID numérico del empleado a eliminar
 *     responses:
 *       200:
 *         description: El empleado eliminado.
 */
router.delete('/delete/:empleado_id', deleteEmpleado);

module.exports = router;