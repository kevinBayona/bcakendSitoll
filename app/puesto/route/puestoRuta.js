"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const puestoController_1 = __importDefault(require("../controller/puestoController"));
class PuestoRuta {
    constructor() {
        this.apiPuesto = (0, express_1.Router)();
        this.cargarRutas();
    }
    cargarRutas() {
        this.apiPuesto.post("/add", puestoController_1.default.crearPuesto);
        this.apiPuesto.get("/list", puestoController_1.default.consultarPuesto);
        this.apiPuesto.put("/update", puestoController_1.default.actualizarPuesto);
        this.apiPuesto.delete("/delete/:codPuesto", puestoController_1.default.eliminarPuesto);
    }
}
const puestoRuta = new PuestoRuta();
exports.default = puestoRuta.apiPuesto;
