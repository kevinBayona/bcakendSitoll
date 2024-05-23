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
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const acceso_1 = __importDefault(require("../../../models/acceso"));
const conexion_1 = __importDefault(require("../../../config/conection/conexion"));
const acceso_sql_1 = require("../repository/acceso_sql");
const generarTokenControlador_1 = __importDefault(require("../../shared/controller/generarTokenControlador"));
class AccesoDao {
    static sesion(res, objAcceso) {
        return __awaiter(this, void 0, void 0, function* () {
            let accesoRepository = conexion_1.default.getRepository(acceso_1.default);
            let existeAcceso = yield accesoRepository.findBy({ nombreAcceso: objAcceso.nombreAcceso });
            if (existeAcceso.length !== 0) {
                let claveAcceso = existeAcceso[0].claveAcceso;
                if (bcryptjs_1.default.compareSync(objAcceso.claveAcceso, claveAcceso)) {
                    accesoRepository.query(acceso_sql_1.SQL_ACCESO.DATOS_ACCESO, [existeAcceso[0].codUsuario])
                        .then((respuesta) => {
                        let token = generarTokenControlador_1.default.procesarRespuesta(respuesta[0]);
                        res.status(200).json({ tokenApp: token });
                    })
                        .catch((miErrorsito) => {
                        res.status(400).json({ mensaje: "Fallo al iniciar sesion" });
                    });
                }
                else {
                    res.status(400).json({ mensaje: "Clave no valida" });
                }
            }
            else {
                res.status(400).json({ mensaje: "nombre de acceso no valido" });
            }
        });
    }
}
exports.default = AccesoDao;
