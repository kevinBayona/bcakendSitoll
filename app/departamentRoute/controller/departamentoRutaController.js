"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const departamentoRutaDao_1 = __importDefault(require("../dao/departamentoRutaDao"));
class DepartamentoRutaController extends departamentoRutaDao_1.default {
    crearDepartamentoRuta(req, res) {
        const objDepaRuta = req.body;
        DepartamentoRutaController.crear(res, objDepaRuta);
    }
    consultarDepartamentoRuta(req, res) {
        DepartamentoRutaController.listar(res);
    }
    actualizarDepartamentoRuta(req, res) {
        let objDepaRuta;
        objDepaRuta = req.body;
        DepartamentoRutaController.actualizar(res, objDepaRuta);
    }
    eliminarDepartamentoRuta(req, res) {
        let codDepartamentoRuta = Number(req.params.codDepartamentoRuta);
        if (!isNaN(codDepartamentoRuta)) {
            DepartamentoRutaController.eliminar(res, codDepartamentoRuta);
        }
        else {
            res.status(400).json({ mensaje: "Codigo de departameto no valido" });
        }
    }
}
const departamentoRutaController = new DepartamentoRutaController();
exports.default = departamentoRutaController;
