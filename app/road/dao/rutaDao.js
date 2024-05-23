"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conexion_1 = __importDefault(require("../../../config/conection/conexion"));
const ruta_1 = __importDefault(require("../../../models/ruta"));
class RutaDao {
    static agregarRuta(res, objRuta) {
        return __awaiter(this, void 0, void 0, function* () {
            this.rutaRepository.insert(objRuta)
                .then((respuesta) => {
                res.status(200).json({ mensaje: "Ruta guardada", objeto: respuesta.raw });
            }).catch((miErrorsito) => {
                res.status(400).json({ mensaje: "Fallo al insertar la ruta" });
            });
        });
    }
    static obtenerRuta(res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.rutaRepository.find().then((respuesta) => {
                const arregloRutas = respuesta;
                res.status(200).json(arregloRutas);
            }).catch((miError) => {
                res.status(400).json({ mensaje: "Fallo al consultar las rutas" });
            });
        });
    }
    static actualizarRuta(res, objRuta) {
        return __awaiter(this, void 0, void 0, function* () {
            this.rutaRepository.update({ codRuta: objRuta.codRuta }, objRuta)
                .then((respuesta) => {
                res.status(200).json({ mensaje: "La ruta se actualizo" });
            }).catch((miError) => {
                res.status(400).json({ mensaje: "Fallo al actualizar" });
            });
        });
    }
    static eliminarRuta(res, codRuta) {
        return __awaiter(this, void 0, void 0, function* () {
            this.rutaRepository.delete({ codRuta: codRuta })
                .then((respuesta) => {
                res.status(200).json({ mensaje: "Ruta eliminada", respuesta: respuesta.raw });
            }).catch((Error) => {
                res.status(400).json({ mensaje: "Fallo al eliminar la ruta" });
            });
        });
    }
}
RutaDao.rutaRepository = conexion_1.default.getRepository(ruta_1.default);
exports.default = RutaDao;
