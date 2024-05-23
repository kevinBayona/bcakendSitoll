"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const peajeDao_1 = __importDefault(require("../dao/peajeDao"));
const var_imagenes_1 = __importDefault(require("../../../config/domain/var_imagenes"));
const nanoid_1 = require("nanoid");
const administarImagen_1 = __importDefault(require("../../../config/utilities/administarImagen"));
class PeajeController extends peajeDao_1.default {
    crearPeaje(req, res) {
        const objPeaje = req.body;
        let tipoImagen = objPeaje.fotoPublicaPeaje.split(".")[1];
        let nombreFotoPrivada = "IMG_" + (0, nanoid_1.nanoid)(15) + "." + tipoImagen;
        objPeaje.fotoPrivadPeaje = nombreFotoPrivada;
        let rutaAlmacenamiento = var_imagenes_1.default.rutaFotoSistema;
        administarImagen_1.default.crearImagen(nombreFotoPrivada, objPeaje.base64Peaje, rutaAlmacenamiento);
        PeajeController.crear(res, objPeaje);
    }
    consultarPeaje(req, res) {
        PeajeController.listar(res);
    }
    actualizarPeaje(req, res) {
        delete req.body.datosUsuarios;
        const cod_peaje = Number(req.params.idP);
        let objPeaje = req.body;
        let tipoImagen = objPeaje.fotoPublicaPeaje.split(".")[1];
        let nombreFotoPrivada = "IMG_" + (0, nanoid_1.nanoid)(15) + "." + tipoImagen;
        objPeaje.fotoPrivadPeaje = nombreFotoPrivada;
        let rutaAlmacenamiento = var_imagenes_1.default.rutaFotoSistema;
        administarImagen_1.default.crearImagen(nombreFotoPrivada, objPeaje.base64Peaje, rutaAlmacenamiento);
        delete objPeaje.base64Peaje;
        PeajeController.actualizar(res, objPeaje, cod_peaje);
    }
    eliminarPeaje(req, res) {
        let codPeaje = Number(req.params.codPeaje);
        if (!isNaN(codPeaje)) {
            PeajeController.eliminar(res, codPeaje);
        }
        else {
            res.status(400).json({ mensaje: "Codigo del peaje no valido" });
        }
    }
}
const peajeController = new PeajeController();
exports.default = peajeController;
