"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const departamentoController_1 = __importDefault(require("../controller/departamentoController"));
class DepartamentoRuta {
    constructor() {
        this.apiRutaDepartamento = (0, express_1.Router)();
        this.cargarRutas();
    }
    cargarRutas() {
        this.apiRutaDepartamento.post("/add", departamentoController_1.default.crearDepartamento);
        this.apiRutaDepartamento.get("/list", departamentoController_1.default.listarDepartamento);
        this.apiRutaDepartamento.put("/update", departamentoController_1.default.actualizarDepartamento);
        this.apiRutaDepartamento.delete("/delete/:codDepartamento", departamentoController_1.default.eliminarDepartamento);
        this.apiRutaDepartamento.get("/obtener/:codDepartamento", departamentoController_1.default.listarUnDepartamento);
    }
}
const departamentoRuta = new DepartamentoRuta();
exports.default = departamentoRuta.apiRutaDepartamento;
