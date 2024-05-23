"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puestoDao_1 = __importDefault(require("../dao/puestoDao"));
class PuestoController extends puestoDao_1.default {
    crearPuesto(req, res) {
        const objPuesto = req.body;
        PuestoController.crear(res, objPuesto);
    }
    consultarPuesto(req, res) {
        PuestoController.listar(res);
    }
    actualizarPuesto(req, res) {
        let objPuesto;
        delete req.body.datosUsuario;
        objPuesto = req.body;
        PuestoController.actualizar(res, objPuesto);
    }
    eliminarPuesto(req, res) {
        let codPuesto = Number(req.params.codPuesto);
        if (!isNaN(codPuesto)) {
            PuestoController.eliminar(res, codPuesto);
        }
        else {
            res.status(400).json({ mensaje: "Codigo del puesto no valido" });
        }
    }
}
const puestoController = new PuestoController();
exports.default = puestoController;
