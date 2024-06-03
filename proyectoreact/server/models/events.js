const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('events', {
    evento_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    titulo_evento: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    fecha_inicio: {
      type: DataTypes.DATE,
      allowNull: false
    },
    fecha_fin: {
      type: DataTypes.DATE,
      allowNull: false
    },
    id_recurso: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    classnames: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'events',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "events_pkey",
        unique: true,
        fields: [
          { name: "evento_id" },
        ]
      },
    ]
  });
};
