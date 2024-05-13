// sugerenciasController.js

const { getSugerencias: getSugerenciasModel } = require('../models/modelosAntiguos/sugerencias');

const getSugerencias = (req, res) => {
    getSugerenciasModel((err, sugerencias) => {
        if (err) {
          res.status(500).send({ message: err.message });
        } else {
          res.send(sugerencias);
        }
    });
};

module.exports = { getSugerencias };