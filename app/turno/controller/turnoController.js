"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const turnoDao_1 = __importDefault(require("../dao/turnoDao"));
class TurnoController extends turnoDao_1.default {
    crearTurno(req, res) {
        const objTurno = req.body;
        TurnoController.crear(res, objTurno);
    }
    consultarTurno(req, res) {
        TurnoController.listar(res);
    }
    actualizarTurno(req, res) {
        let objTurno;
        objTurno = req.body;
        TurnoController.actualizar(res, objTurno);
    }
    eliminarTurno(req, res) {
        let codTurno = Number(req.params.codTurno);
        if (!isNaN(codTurno)) {
            TurnoController.eliminar(res, codTurno);
        }
        else {
            res.status(400).json({ mensaje: "Codigo del turno no valido" });
        }
    }
}
const turnoController = new TurnoController();
exports.default = turnoController;
