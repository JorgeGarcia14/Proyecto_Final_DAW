// app.js

import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
import employeeRoutes from './routes/employeeRoutes.js';
import usuariosRoutes from './routes/usuariosRoutes.js';
import horarioRoutes from './routes/horarioRoutes.js';
import sugerenciasRoutes from './routes/sugerenciasRoutes.js';
import cors from 'cors';
import db from './db.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, 'client/src')));

app.use(cors());
app.use('/api/empleado', employeeRoutes);
app.use('/api/usuario', usuariosRoutes);
app.use('/api/horario', horarioRoutes);
app.use('/api/sugerencias',sugerenciasRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/public', 'index.html'));
});

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