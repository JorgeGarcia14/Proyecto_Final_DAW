// usuariosController.js

const { getUsuario: getUsuarioModel, getUsuarioId: getUsuarioIdModel, getUsuarioRol: getUsuarioRolModel } = require('../models/modelosAntiguos/usuario');

const getUsuario = (req, res) => {
    const correo = req.params.correo;
    getUsuarioModel(correo, (err, horario) => {
        if (err) {
            res.status(500).send(err);
        }
        else{
            res.json(usuario);
        }
    });
};

const getUsuarioId = (req, res) => {
    const correo = req.params.correo;
    getUsuarioIdModel(correo, (err, id) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(id);
        }
    });
};

const getUsuarioRol = (req, res) => {
    const correo = req.params.correo;
    getUsuarioRolModel(correo, (err, rol) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(rol);
        }
    });
};

module.exports = { getUsuario, getUsuarioId, getUsuarioRol };