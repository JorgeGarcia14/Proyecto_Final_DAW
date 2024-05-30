// app.js

const express = require('express');
const path = require('path');
const cors = require('cors');
const employeeRoutes = require('./routes/employeeRoutes');
const usuariosRoutes = require('./routes/usuariosRoutes');
const horarioRoutes = require('./routes/horarioRoutes');
const sugerenciasRoutes = require('./routes/sugerenciasRoutes');
const nominaRoutes = require('./routes/nominaRoutes');
const noticiasRoutes = require('./routes/noticiasRoutes');

const db = require('./db');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/src')));

app.use(cors());
app.use('/api/empleado', employeeRoutes);
app.use('/api/usuario', usuariosRoutes);
app.use('/api/horario', horarioRoutes);
app.use('/api/sugerencias', sugerenciasRoutes);
app.use('/api/nomina', nominaRoutes);
app.use('/api/noticias', noticiasRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});

async function connectToDB() {
  try {
    await db.authenticate();
    db.sync();
    console.log('Conexión a la base de datos establecida correctamente.');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
}

connectToDB();

module.exports = app;