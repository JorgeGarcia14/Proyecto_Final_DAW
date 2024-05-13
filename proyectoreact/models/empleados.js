const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('empleados', {
    empleado_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    dni: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    puesto: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    rol: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    telefono: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    direccion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    correo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    'contraseña': {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    antiguedad: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    apellido1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    apellido2: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'empleados',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "empleados_pkey",
        unique: true,
        fields: [
          { name: "empleado_id" },
        ]
      },
    ]
  });
};
