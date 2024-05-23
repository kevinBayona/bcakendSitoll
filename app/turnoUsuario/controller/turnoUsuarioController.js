"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const turnoUsuarioDao_1 = __importDefault(require("../dao/turnoUsuarioDao"));
class TurnoUsuarioController extends turnoUsuarioDao_1.default {
    crearTurnoUsuario(req, res) {
        const objTurnoUsuario = req.body;
        TurnoUsuarioController.crear(res, objTurnoUsuario);
    }
    consultarTurnoUsuario(req, res) {
        TurnoUsuarioController.listar(res);
    }
    actualizarTurnoUsuario(req, res) {
        let objTurno;
        objTurno = req.body;
        TurnoUsuarioController.actualizar(res, objTurno);
    }
    eliminarTurnoUsuario(req, res) {
        let codUsuario = Number(req.params.codUsuario);
        let codPuesto = Number(req.params.codPuesto);
        let codTurno = Number(req.params.codTurno);
        if (!isNaN(codTurno)) {
            TurnoUsuarioController.eliminar(res, codUsuario, codPuesto, codTurno);
        }
        else {
            res.status(400).json({ mensaje: "Codigo del turno no valido" });
        }
    }
}
const turnoUsuarioController = new TurnoUsuarioController();
exports.default = turnoUsuarioController;
