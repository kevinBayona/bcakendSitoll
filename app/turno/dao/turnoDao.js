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
const turno_1 = __importDefault(require("../../../models/turno"));
class TurnoDao {
    static crear(res, objTurno) {
        return __awaiter(this, void 0, void 0, function* () {
            this.turnoRepository.insert(objTurno)
                .then((respuesta) => {
                res.status(200).json({ mensaje: "Turno registrado ", respuesta: respuesta.raw });
            }).catch((miErrorsito) => {
                res.status(400).json({ mensaje: "Fallo al consultar los datos " });
            });
        });
    }
    static listar(res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.turnoRepository.find()
                .then((respuesta) => {
                const arregloTurno = respuesta;
                res.status(200).json(arregloTurno);
            }).catch((miErrorsito) => {
                res.status(400).json({ mensaje: "Fallo al consultar los datos" });
            });
        });
    }
    static actualizar(res, objTurno) {
        return __awaiter(this, void 0, void 0, function* () {
            this.turnoRepository.update({ codTurno: objTurno.codTurno }, objTurno)
                .then((respuesta) => {
                res.status(200).json({ mensaje: "El turno se actualizo" });
            }).catch((miError) => {
                res.status(400).json({ mensaje: "Fallo al actualizar" });
            });
        });
    }
    static eliminar(res, codTurno) {
        return __awaiter(this, void 0, void 0, function* () {
            this.turnoRepository.delete({ codTurno: codTurno })
                .then((respuesta) => {
                res.status(200).json({ mensaje: "Turno eliminado", respuesta: respuesta.raw });
            }).catch((Error) => {
                res.status(400).json({ mensaje: "Fallo al eliminar turno" });
            });
        });
    }
}
TurnoDao.turnoRepository = conexion_1.default.getRepository(turno_1.default);
exports.default = TurnoDao;
