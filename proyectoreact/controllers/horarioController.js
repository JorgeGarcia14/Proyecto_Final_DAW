import { getHorario as getHorarioModel } from '../models/horario.js';

export const getHorario = (req, res) => {
    const EmpleadoID = req.params.EmpleadoID;
    getHorarioModel(EmpleadoID, (err, horario) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(horario);
        }
    });
};