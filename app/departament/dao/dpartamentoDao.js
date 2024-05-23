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
const departamento_1 = __importDefault(require("../../../models/departamento"));
const conexion_1 = __importDefault(require("../../../config/conection/conexion"));
class DepartamentoDao {
    static agregarDepartamento(res, objDepartamento) {
        return __awaiter(this, void 0, void 0, function* () {
            this.departamentoRepository.insert(objDepartamento)
                .then((respuesta) => {
                res.status(200).json({ mensaje: "Departamento guardado", objeto: respuesta.raw });
            }).catch((miErrorsito) => {
                res.status(400).json({ mensaje: "Fallo al insertar el departamento" });
            });
        });
    }
    static obtenerDepartamentos(res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.departamentoRepository.find().then((respuesta) => {
                const arregloDepartamentos = respuesta;
                res.status(200).json(arregloDepartamentos);
            }).catch((miError) => {
                res.status(400).json({ mensaje: "Fallo al consultar el departamento" });
            });
        });
    }
    static actualizarDepartamento(res, objDepartamento) {
        return __awaiter(this, void 0, void 0, function* () {
            this.departamentoRepository.update({ codDepartamento: objDepartamento.codDepartamento }, objDepartamento)
                .then((respuesta) => {
                res.status(200).json({ mensajeCorrecto: "El departamento se actualizo" });
            }).catch((miError) => {
                res.status(400).json({ mensaje: "Fallo al actualizar" });
            });
        });
    }
    static eliminarDepartamento(res, codDepartamento) {
        return __awaiter(this, void 0, void 0, function* () {
            this.departamentoRepository.delete({ codDepartamento: codDepartamento })
                .then((respuesta) => {
                res.status(200).json({ mensaje: "Departamento eliminado", respuesta: respuesta.raw });
            }).catch((Error) => {
                res.status(400).json({ mensaje: "Fallo al eliminar departamento" });
            });
        });
    }
    static obtenerUnDepartamento(res, codDepartamento) {
        return __awaiter(this, void 0, void 0, function* () {
            this.departamentoRepository.findBy({ codDepartamento: codDepartamento })
                .then((respuesta) => {
                res.status(200).json({ mensaje: "Departamento consultado", respuesta });
            }).catch((Error) => {
                res.status(400).json({ mensaje: "Fallo al consultar departamento" });
            });
        });
    }
}
DepartamentoDao.departamentoRepository = conexion_1.default.getRepository(departamento_1.default);
exports.default = DepartamentoDao;
