const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('noticias', {
    noticia_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    noticia_url: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    noticia_descripcion: {
      type: DataTypes.TEXT,
      allowNull: false
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
