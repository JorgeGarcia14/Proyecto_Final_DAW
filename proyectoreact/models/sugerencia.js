const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sugerencia', {
    sugerencia_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    empleado_id_fk: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'empleados',
        key: 'empleado_id'
      }
    }
  }, {
    sequelize,
    tableName: 'sugerencia',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "sugerencia_pkey",
        unique: true,
        fields: [
          { name: "sugerencia_id" },
        ]
      },
    ]
  });
};
