const express = require('express');
const path = require('path');
const cors = require('cors');
const employeeRoutes = require('./routes/employeeRoutes');
const usuariosRoutes = require('./routes/usuariosRoutes');
const horarioRoutes = require('./routes/horarioRoutes');
const sugerenciasRoutes = require('./routes/sugerenciasRoutes');
const nominaRoutes = require('./routes/nominaRoutes');
const noticiasRoutes = require('./routes/noticiasRoutes');
const vacanteRoutes = require('./routes/vacanteRoutes');
const eventsRoutes = require('./routes/eventsRoutes');
const db = require('./db');

// Importar Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/src')));

app.use(cors());

// Configurar las opciones de Swagger
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Mi API Express',
      version: '1.0.0',
    },
  },
  apis: ['./routes/*.js'], // path to the API docs
};

// Crear la documentación de Swagger
const specs = swaggerJsdoc(options);

// Usar Swagger como middleware
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use('/api/empleado', employeeRoutes);
app.use('/api/usuario', usuariosRoutes);
app.use('/api/horario', horarioRoutes);
app.use('/api/sugerencias', sugerenciasRoutes);
app.use('/api/nomina', nominaRoutes);
app.use('/api/noticias', noticiasRoutes);
app.use('/api/vacantes', vacanteRoutes);
app.use('/api/eventos', eventsRoutes);

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