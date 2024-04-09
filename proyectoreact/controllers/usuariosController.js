//Usuarios Controller
const Usuario = require('../models/usuario');

exports.getUsuario = (req, res) => {
    const correo = req.params.correo;
    Usuario.getUsuario(correo, (err, usuario) => {
        if (err) {
            res.status(500).send(err);
        }
        else{
            res.json(usuario);
        }
    });
};