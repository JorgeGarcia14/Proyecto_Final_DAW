import {getSugerencias as getSugerenciasModel} from '../models/modelosAntiguos/sugerencias.js';

export const getSugerencias = (req, res) => {
    getSugerenciasModel((err, sugerencias) => {
        if (err) {
          res.status(500).send({ message: err.message });
        } else {
          res.send(sugerencias);
        }
    });
}