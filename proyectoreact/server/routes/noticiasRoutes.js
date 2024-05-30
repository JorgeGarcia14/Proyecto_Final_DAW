// routes/employeeRoutes.js

const express = require('express');
const {getAllNoticias, getNoticia, postNoticia, deleteNoticia} = require('../controllers/noticiasController');

const router = express.Router();

router.get('/:id', getNoticia);
router.get('/', getAllNoticias);
router.post('/', postNoticia);
router.delete('/:id', deleteNoticia);

module.exports = router;
