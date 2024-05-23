"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rutaDao_1 = __importDefault(require("../dao/rutaDao"));
class RutaController extends rutaDao_1.default {
    crearRuta(req, res) {
        let objRuta;
        objRuta = req.body;
        RutaController.agregarRuta(res, objRuta);
    }
    listarRuta(req, res) {
        RutaController.obtenerRuta(res);
    }
    modificarRuta(req, res) {
        let objRuta;
        objRuta = req.body;
        RutaController.actualizarRuta(res, objRuta);
    }
    eliminarRutas(req, res) {
        let codRuta = Number(req.params.codRuta);
        if (!isNaN(codRuta)) {
            RutaController.eliminarRuta(res, codRuta);
        }
        else {
            res.status(400).json({ mensaje: "Codigo de la ruta no valido" });
        }
    }
}
const rutaController = new RutaController();
exports.default = rutaController;
