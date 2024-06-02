const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vacantes', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    titulo: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ubicacion: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    salario: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    empresa: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'vacantes',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "vacantes_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
