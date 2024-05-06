const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tareas', {
    tarea_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    empleado_id_fk: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'empleados',
        key: 'empleado_id'
      }
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tareas',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tareas_pkey",
        unique: true,
        fields: [
          { name: "tarea_id" },
        ]
      },
    ]
  });
};
