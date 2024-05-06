// horarioController.js

const { getHorario: getHorarioModel } = require('../models/modelosAntiguos/horario');

const getHorario = (req, res) => {
    const EmpleadoID = req.params.EmpleadoID;
    getHorarioModel(EmpleadoID, (err, horario) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(horario);
        }
    });
};

module.exports = { getHorario };