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
const peaje_1 = __importDefault(require("../../../models/peaje"));
const conexion_1 = __importDefault(require("../../../config/conection/conexion"));
const administarImagen_1 = __importDefault(require("../../../config/utilities/administarImagen"));
const var_imagenes_1 = __importDefault(require("../../../config/domain/var_imagenes"));
class PeajeDao {
    static crear(res, objPeaje) {
        return __awaiter(this, void 0, void 0, function* () {
            this.peajeRepository
                .insert(objPeaje)
                .then((respuesta) => {
                res
                    .status(200)
                    .json({ mensaje: "Peaje registrado ", respuesta: respuesta.raw });
            })
                .catch((miErrorsito) => {
                res.status(400).json({ mensaje: "Fallo al consultar los datos " });
            });
        });
    }
    static listar(res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.peajeRepository
                .find()
                .then((respuesta) => {
                const arregloPeaje = respuesta;
                arregloPeaje.map((objPeaje) => {
                    let nombrePrivado = objPeaje.fotoPrivadPeaje;
                    let base64 = administarImagen_1.default.cargarImagenBase64(nombrePrivado, var_imagenes_1.default.rutaFotoSistema + nombrePrivado, 250);
                    objPeaje.base64Peaje = base64;
                });
                res.status(200).json({ arregloPeaje });
            })
                .catch((miErrorsito) => {
                res.status(400).json({ mensaje: "Fallo al consultar los datos" });
            });
        });
    }
    static actualizar(res, objPeaje, codPeaje) {
        return __awaiter(this, void 0, void 0, function* () {
            let encontrado = yield this.peajeRepository.findOne({
                where: { codPeaje: codPeaje },
            });
            if (encontrado) {
                const rutaImagenPrivada = var_imagenes_1.default.rutaFotoSistema + encontrado.fotoPrivadPeaje;
                console.log(rutaImagenPrivada);
                administarImagen_1.default.borrarImagen(rutaImagenPrivada);
                this.peajeRepository
                    .update({ codPeaje: codPeaje }, objPeaje)
                    .then(() => {
                    res
                        .status(200)
                        .json({
                        mensaje: "El peaje se actualizo",
                        objeto: objPeaje.fotoPrivadPeaje,
                    });
                })
                    .catch((miErrorsito) => {
                    console.log(miErrorsito);
                    res.status(400).json({ message: "fallo al actualizar el peaje", miErrorsito });
                });
            }
            else {
                res.status(400).json({ message: "peaje creado", objeto: objPeaje });
            }
        });
    }
    static eliminar(res, codPeaje) {
        return __awaiter(this, void 0, void 0, function* () {
            let encontrado = yield this.peajeRepository.findOne({
                where: { codPeaje: codPeaje },
            });
            if (encontrado) {
                const rutaImagenPrivada = var_imagenes_1.default.rutaFotoSistema + encontrado.fotoPrivadPeaje;
                administarImagen_1.default.borrarImagen(rutaImagenPrivada);
                this.peajeRepository
                    .delete({ codPeaje: codPeaje })
                    .then((respuesta) => {
                    res
                        .status(200)
                        .json({
                        mensaje: "Peaje Eliminado",
                        respuesta: respuesta.affected,
                    });
                })
                    .catch((miErrorsito) => {
                    res.status(400).json({ mensaje: "Fallo al eliminar el peaje" });
                });
            }
            else {
                res.status(400).json({ mensaje: "Fallo al consultar el peaje" });
            }
        });
    }
}
PeajeDao.peajeRepository = conexion_1.default.getRepository(peaje_1.default);
exports.default = PeajeDao;
