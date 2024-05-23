"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const turnoController_1 = __importDefault(require("../controller/turnoController"));
class TurnoRuta {
    constructor() {
        this.apiTurno = (0, express_1.Router)();
        this.cargarRutas();
    }
    cargarRutas() {
        this.apiTurno.post("/add", turnoController_1.default.crearTurno);
        this.apiTurno.get("/list", turnoController_1.default.consultarTurno);
        this.apiTurno.put("/update", turnoController_1.default.actualizarTurno);
        this.apiTurno.delete("/delete/:codPeaje", turnoController_1.default.eliminarTurno);
    }
}
const turnoRuta = new TurnoRuta();
exports.default = turnoRuta.apiTurno;
