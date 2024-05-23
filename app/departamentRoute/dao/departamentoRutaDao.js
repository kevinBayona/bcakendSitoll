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
const departamentoRuta_1 = __importDefault(require("../../../models/departamentoRuta"));
const conexion_1 = __importDefault(require("../../../config/conection/conexion"));
const departamentRoute_sql_1 = require("../repository/departamentRoute_sql");
class DepartamentoRutaDao {
    static crear(res, objDepaRuta) {
        return __awaiter(this, void 0, void 0, function* () {
            this.departamentoRutaRepository
                .insert(objDepaRuta)
                .then((respuesta) => {
                res.status(200).json({
                    mensaje: "Departamento Ruta registrado ",
                    respuesta: respuesta.raw,
                });
            })
                .catch((miErrorsito) => {
                res.status(400).json({ mensaje: "Fallo al consultar los daros " });
            });
        });
    }
    static listar(res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.departamentoRutaRepository
                .query(departamentRoute_sql_1.SQL_DEPARTAMENTO_RUTA.DATOS_DEPARTAMENTO_RUTA)
                .then((respuesta) => {
                const arregloRespuesta = respuesta;
                res.status(200).json(arregloRespuesta);
            })
                .catch((miErrorsito) => {
                res.status(400).json({ mensaje: "Fallo al consultar los datos" });
            });
        });
    }
    static actualizar(res, objDepaRuta) {
        return __awaiter(this, void 0, void 0, function* () {
            this.departamentoRutaRepository
                .update({ codDepartamentoRuta: objDepaRuta.codDepartamentoRuta }, objDepaRuta)
                .then((respuesta) => {
                res.status(200).json({ mensaje: "El departamento se actualizo" });
            })
                .catch((miError) => {
                res.status(400).json({ mensaje: "Fallo al actualizar" });
            });
        });
    }
    static eliminar(res, codDepartamentoRuta) {
        return __awaiter(this, void 0, void 0, function* () {
            this.departamentoRutaRepository
                .delete({ codDepartamentoRuta: codDepartamentoRuta })
                .then((respuesta) => {
                res.status(200).json({
                    mensaje: "Departamento eliminado",
                    respuesta: respuesta.raw,
                });
            })
                .catch((Error) => {
                res.status(400).json({ mensaje: "Fallo al eliminar departamento" });
            });
        });
    }
}
DepartamentoRutaDao.departamentoRutaRepository = conexion_1.default.getRepository(departamentoRuta_1.default);
exports.default = DepartamentoRutaDao;
