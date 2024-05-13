const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('horarios', {
    horario_id: {
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
    dia: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    turno: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    horassemanalestotales: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    horas_diarias: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'horarios',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "horarios_pkey",
        unique: true,
        fields: [
          { name: "horario_id" },
        ]
      },
    ]
  });
};
