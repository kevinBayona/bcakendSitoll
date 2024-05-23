"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rutaController_1 = __importDefault(require("../controller/rutaController"));
class RoadRuta {
    constructor() {
        this.apiRutaRoad = (0, express_1.Router)();
        this.cargarRutas();
    }
    cargarRutas() {
        this.apiRutaRoad.post("/add", rutaController_1.default.crearRuta);
        this.apiRutaRoad.get("/list", rutaController_1.default.listarRuta);
        this.apiRutaRoad.put("/update", rutaController_1.default.modificarRuta);
        this.apiRutaRoad.delete("/delete/:codRuta", rutaController_1.default.eliminarRutas);
    }
}
const roadRuta = new RoadRuta;
exports.default = roadRuta.apiRutaRoad;
