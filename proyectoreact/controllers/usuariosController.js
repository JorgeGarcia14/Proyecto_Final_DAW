//Usuarios Controller
const Usuario = require('../models/usuario');

exports.getUsuario = (req, res) => {
    const correo = req.params.correo;
    Usuario.getUsuario(correo, (err, horario) => {
        if (err) {
            res.status(500).send(err);
        }
        else{
            res.json(usuario);
        }
    });
};

export const getUsuarioId = (req, res) => {
    const correo = req.params.correo;
    getUsuarioIdModel(correo, (err, id) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(id);
        }
    });
};

export const getUsuarioRol = (req, res) => {
    const correo = req.params.correo;
    getUsuarioRolModel(correo, (err, rol) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(rol);
        }
    });
};

