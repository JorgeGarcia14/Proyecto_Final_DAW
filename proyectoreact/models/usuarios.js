const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuarios', {
    usuario_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre_usuario: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    'contraseña': {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    correo: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fecha_registro: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_DATE')
    },
    ultimo_acceso: {
      type: DataTypes.DATE,
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
    tableName: 'usuarios',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "usuarios_pkey",
        unique: true,
        fields: [
          { name: "usuario_id" },
        ]
      },
    ]
  });
};
