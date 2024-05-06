const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('noticias', {
    noticia_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    titulo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    contenido: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fecha_publicacion: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'noticias',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "noticias_pkey",
        unique: true,
        fields: [
          { name: "noticia_id" },
        ]
      },
    ]
  });
};
