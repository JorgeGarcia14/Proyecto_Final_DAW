//Usuarios Controller
const Horario = require('../models/horario');

exports.getHorario = (req, res) => {
    const EmpleadoID = req.params.EmpleadoID;
    Horario.getHorario(EmpleadoID, (err, horario) => {
        if (err) {
            res.status(500).send(err);
        }
        else{
            res.json(horario);
        }
    });
};