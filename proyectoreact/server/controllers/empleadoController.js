// empleadoController.js
const Sequelize = require('sequelize');
const defineEmpleados = require('../models/empleados');
const defineUsuarios = require('../models/usuarios');
const defineHorarios = require('../models/horarios');
const defineNominas = require('../models/nominas');
const defineSugerencias = require('../models/sugerencias');
const defineTareas = require('../models/tareas');
const defineVacaciones = require('../models/vacaciones');
const sequelize = require('../db');

const Empleados = defineEmpleados(sequelize, Sequelize.DataTypes);
const Usuarios = defineUsuarios(sequelize, Sequelize.DataTypes);
const Horarios = defineHorarios(sequelize, Sequelize.DataTypes);
const Nominas = defineNominas(sequelize, Sequelize.DataTypes);
const Sugerencias = defineSugerencias(sequelize, Sequelize.DataTypes);
const Tareas = defineTareas(sequelize, Sequelize.DataTypes);
const Vacaciones = defineVacaciones(sequelize, Sequelize.DataTypes);

//Todos los empleados
const getEmpleados = function(req, res) {
    Empleados.findAll()
      .then(empleados => res.json(empleados))
      .catch(err => res.status(500).json({ error: 'Error al obtener los empleados', details: err }));
};

//Empleado por Id
const getEmpleado = function(req, res) {
    const empleado_id = req.params.empleado_id;
    Empleados.findOne({ where: { empleado_id: empleado_id } })
      .then(empleado => {
        if (empleado) {
          res.json(empleado);
        } else {
          res.status(404).json({ error: 'Empleado no encontrado' });
        }
      })
      .catch(err => res.status(500).json({ error: 'Error al obtener el empleado', details: err }));
};

//Empleado por nombre
const getEmpleadoByName = (nombreCompleto, callback) => {
  const palabras = nombreCompleto.split(' ');
  const condiciones = palabras.map((palabra, index) => `(nombre LIKE :palabra${index} OR apellido1 LIKE :palabra${index} OR apellido2 LIKE :palabra${index})`).join(' AND ');
  const sql = `SELECT * FROM empleados WHERE ${condiciones}`;

  const replacements = palabras.reduce((obj, palabra, index) => ({ ...obj, [`palabra${index}`]: `%${palabra}%` }), {});

  db.query(sql, { replacements: replacements, type: db.QueryTypes.SELECT })
    .then(result => {
      callback(null, result);
    })
    .catch(err => {
      callback(err);
    });
};

// Añadir empleado
const addEmpleado = function(req, res) {
  const { dni, nombre, apellido1, apellido2, puesto, rol, telefono, direccion, correo, contraseña, antiguedad } = req.body;

  if (!dni || !nombre || !apellido1 || !apellido2 || !puesto || !rol || !telefono || !direccion || !correo || !contraseña || !antiguedad) {
    return res.status(400).json({ error: 'Todos los campos son requeridos' });
  }

  Empleados.create({
    dni, nombre, apellido1, apellido2, puesto, rol, telefono, direccion, correo, contraseña, antiguedad
  })
    .then(empleado => {
      Usuarios.create({
        nombre_usuario: nombre,
        contraseña,
        correo,
        fecha_registro: new Date(),
        ultimo_acceso: new Date(),
        empleado_id_fk: empleado.empleado_id // Asegúrate de que 'id' es la propiedad correcta
      })
        .then(usuario => res.status(201).json({ empleado, usuario }))
        .catch(err => res.status(500).json({ error: 'Error al crear el usuario', details: err }));
    })
    .catch(err => res.status(500).json({ error: 'Error al crear el empleado', details: err }));
};

const deleteEmpleado = async function(req, res) {
  const empleado_id = req.params.empleado_id;

  try {
    //Borramos todas las relaciones antes de borrar al empleado
    await Usuarios.destroy({ where: { empleado_id_fk: empleado_id } });
    await Horarios.destroy({ where: { empleado_id_fk: empleado_id } });
    await Nominas.destroy({ where: { empleado_id_fk: empleado_id } });
    await Sugerencias.destroy({ where: { empleado_id_fk: empleado_id } });
    await Tareas.destroy({ where: { empleado_id_fk: empleado_id } });
    await Vacaciones.destroy({ where: { empleado_id_fk: empleado_id } });

    //Borramos al empleado
    await Empleados.destroy({ where: { empleado_id: empleado_id } });

    res.status(204).end();
  } catch (err) {
    console.error(err); // Imprime el error completo en la consola
    res.status(500).json({ error: 'Error al eliminar el empleado y usuario asociado', details: err });
  }
};


module.exports = { getEmpleados, getEmpleado, getEmpleadoByName, addEmpleado, deleteEmpleado };