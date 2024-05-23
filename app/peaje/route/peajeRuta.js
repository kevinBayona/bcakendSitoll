"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const peajeController_1 = __importDefault(require("../controller/peajeController"));
class PeajeRuta {
    constructor() {
        this.apiPeaje = (0, express_1.Router)();
        this.cargarRutas();
    }
    cargarRutas() {
        this.apiPeaje.post("/add", peajeController_1.default.crearPeaje);
        this.apiPeaje.get("/list", peajeController_1.default.consultarPeaje);
        this.apiPeaje.put("/update/:idP", peajeController_1.default.actualizarPeaje);
        this.apiPeaje.delete("/delete/:codPeaje", peajeController_1.default.eliminarPeaje);
    }
}
const peajeRuta = new PeajeRuta();
exports.default = peajeRuta.apiPeaje;
