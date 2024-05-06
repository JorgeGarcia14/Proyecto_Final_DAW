const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nominas', {
    nomina_id: {
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
    mes: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    total_bruto: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    horas_extra: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    bonificaciones: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    deducciones: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    total_neto: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'nominas',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "nominas_pkey",
        unique: true,
        fields: [
          { name: "nomina_id" },
        ]
      },
    ]
  });
};
