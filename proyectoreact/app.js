// app.js

const express = require('express');
const path = require('path');
const employeeRoutes = require('./routes/employeeRoutes');
const usuariosRoutes = require('./routes/usuariosRoutes');
const cors = require('cors');
const app = express();

app.use(express.static(path.join(__dirname, 'client/src')));

app.use(cors());
app.use('/api/empleado', employeeRoutes);
app.use('/api/usuario', usuariosRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/src', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});