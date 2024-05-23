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
const puesto_1 = __importDefault(require("../../../models/puesto"));
const conexion_1 = __importDefault(require("../../../config/conection/conexion"));
class PuestoDao {
    static crear(res, objPuesto) {
        return __awaiter(this, void 0, void 0, function* () {
            this.puestoRepository.insert(objPuesto)
                .then((respuesta) => {
                res.status(200).json({ mensaje: "Puesto registrado ", respuesta: respuesta.raw });
            }).catch((miErrorsito) => {
                res.status(400).json({ mensaje: "Fallo al consultar los datos " });
            });
        });
    }
    static listar(res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.puestoRepository.find()
                .then((respuesta) => {
                const arregloPuesto = respuesta;
                res.status(200).json(arregloPuesto);
            }).catch((miErrorsito) => {
                res.status(400).json({ mensaje: "Fallo al consultar los datos" });
            });
        });
    }
    static actualizar(res, objPuesto) {
        return __awaiter(this, void 0, void 0, function* () {
            this.puestoRepository.update({ codPuesto: objPuesto.codPuesto }, objPuesto)
                .then((respuesta) => {
                res.status(200).json({ mensaje: "El puesto se actualizo" });
            }).catch((miError) => {
                res.status(400).json({ mensaje: "Fallo al actualizar" });
            });
        });
    }
    static eliminar(res, codPuesto) {
        return __awaiter(this, void 0, void 0, function* () {
            this.puestoRepository.delete({ codPuesto: codPuesto })
                .then((respuesta) => {
                res.status(200).json({ mensaje: "Puesto eliminado", respuesta: respuesta.raw });
            }).catch((Error) => {
                res.status(400).json({ mensaje: "Fallo al eliminar puesto" });
            });
        });
    }
}
PuestoDao.puestoRepository = conexion_1.default.getRepository(puesto_1.default);
exports.default = PuestoDao;
