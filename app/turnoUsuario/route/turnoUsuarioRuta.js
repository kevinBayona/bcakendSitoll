"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const turnoUsuarioController_1 = __importDefault(require("../controller/turnoUsuarioController"));
class TurnoUsuarioRuta {
    constructor() {
        this.apiTurnoUsuario = (0, express_1.Router)();
        this.cargarRutas();
    }
    cargarRutas() {
        this.apiTurnoUsuario.post("/add", turnoUsuarioController_1.default.crearTurnoUsuario);
        this.apiTurnoUsuario.get("/list", turnoUsuarioController_1.default.consultarTurnoUsuario);
        this.apiTurnoUsuario.put("/update", turnoUsuarioController_1.default.actualizarTurnoUsuario);
        this.apiTurnoUsuario.delete("/delete/:codUsuario/:codPuesto/:codTurno", turnoUsuarioController_1.default.eliminarTurnoUsuario);
    }
}
const turnoUsuarioRuta = new TurnoUsuarioRuta();
exports.default = turnoUsuarioRuta.apiTurnoUsuario;
