var DataTypes = require("sequelize").DataTypes;
var _empleados = require("./empleados");
var _horarios = require("./horarios");
var _nominas = require("./nominas");
var _noticias = require("./noticias");
var _permisos = require("./permisos");
var _sugerencia = require("./sugerencia");
var _sugerencias = require("./sugerencias");
var _tareas = require("./tareas");
var _usuarios = require("./usuarios");
var _vacaciones = require("./vacaciones");

function initModels(sequelize) {
  var empleados = _empleados(sequelize, DataTypes);
  var horarios = _horarios(sequelize, DataTypes);
  var nominas = _nominas(sequelize, DataTypes);
  var noticias = _noticias(sequelize, DataTypes);
  var permisos = _permisos(sequelize, DataTypes);
  var sugerencia = _sugerencia(sequelize, DataTypes);
  var sugerencias = _sugerencias(sequelize, DataTypes);
  var tareas = _tareas(sequelize, DataTypes);
  var usuarios = _usuarios(sequelize, DataTypes);
  var vacaciones = _vacaciones(sequelize, DataTypes);

  horarios.belongsTo(empleados, { as: "empleado_id_fk_empleado", foreignKey: "empleado_id_fk"});
  empleados.hasMany(horarios, { as: "horarios", foreignKey: "empleado_id_fk"});
  nominas.belongsTo(empleados, { as: "empleado_id_fk_empleado", foreignKey: "empleado_id_fk"});
  empleados.hasMany(nominas, { as: "nominas", foreignKey: "empleado_id_fk"});
  sugerencia.belongsTo(empleados, { as: "empleado_id_fk_empleado", foreignKey: "empleado_id_fk"});
  empleados.hasMany(sugerencia, { as: "sugerencia", foreignKey: "empleado_id_fk"});
  sugerencias.belongsTo(empleados, { as: "empleado_id_fk_empleado", foreignKey: "empleado_id_fk"});
  empleados.hasMany(sugerencias, { as: "sugerencia", foreignKey: "empleado_id_fk"});
  tareas.belongsTo(empleados, { as: "empleado_id_fk_empleado", foreignKey: "empleado_id_fk"});
  empleados.hasMany(tareas, { as: "tareas", foreignKey: "empleado_id_fk"});
  usuarios.belongsTo(empleados, { as: "empleado_id_fk_empleado", foreignKey: "empleado_id_fk"});
  empleados.hasMany(usuarios, { as: "usuarios", foreignKey: "empleado_id_fk"});
  vacaciones.belongsTo(empleados, { as: "empleado_id_fk_empleado", foreignKey: "empleado_id_fk"});
  empleados.hasMany(vacaciones, { as: "vacaciones", foreignKey: "empleado_id_fk"});

  return {
    empleados,
    horarios,
    nominas,
    noticias,
    permisos,
    sugerencia,
    sugerencias,
    tareas,
    usuarios,
    vacaciones,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
