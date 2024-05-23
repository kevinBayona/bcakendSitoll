"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dpartamentoDao_1 = __importDefault(require("../dao/dpartamentoDao"));
class DepartamentoController extends dpartamentoDao_1.default {
    crearDepartamento(req, res) {
        let objDepartamento;
        objDepartamento = req.body;
        DepartamentoController.agregarDepartamento(res, objDepartamento);
    }
    listarDepartamento(req, res) {
        DepartamentoController.obtenerDepartamentos(res);
    }
    actualizarDepartamento(req, res) {
        let objDepartamento;
        objDepartamento = req.body;
        DepartamentoController.actualizarDepartamento(res, objDepartamento);
    }
    eliminarDepartamento(req, res) {
        let codDepartamento = Number(req.params.codDepartamento);
        if (!isNaN(codDepartamento)) {
            DepartamentoController.eliminarDepartamento(res, codDepartamento);
        }
        else {
            res.status(400).json({ mensaje: "Codigo de departameto no valido" });
        }
    }
    listarUnDepartamento(req, res) {
        let codDepartamento = Number(req.params.codDepartamento);
        DepartamentoController.obtenerUnDepartamento(res, codDepartamento);
    }
}
const departamentoController = new DepartamentoController();
exports.default = departamentoController;
