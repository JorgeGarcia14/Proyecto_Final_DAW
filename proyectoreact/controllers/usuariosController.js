import { getUsuario as getUsuarioModel, getUsuarioId as getUsuarioIdModel } from '../models/usuario.js';

export const getUsuario = (req, res) => {
    const correo = req.params.correo;
    getUsuarioModel(correo, (err, usuario) => {
        if (err) {
            res.status(500).send(err);
        } else {
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

