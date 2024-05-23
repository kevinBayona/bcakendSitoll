"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const departamentoRutaController_1 = __importDefault(require("../controller/departamentoRutaController"));
class DepartamentoRutaR {
    constructor() {
        this.apiRutaR = (0, express_1.Router)();
        this.cargarRutas();
    }
    cargarRutas() {
        this.apiRutaR.post("/add", departamentoRutaController_1.default.crearDepartamentoRuta);
        this.apiRutaR.get("/list", departamentoRutaController_1.default.consultarDepartamentoRuta);
        this.apiRutaR.put("/update", departamentoRutaController_1.default.actualizarDepartamentoRuta);
        this.apiRutaR.delete("/delete/:codDepartamentoRuta", departamentoRutaController_1.default.eliminarDepartamentoRuta);
    }
}
const departamentoRutaR = new DepartamentoRutaR();
exports.default = departamentoRutaR.apiRutaR;
