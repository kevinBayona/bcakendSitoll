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
const usuario_1 = __importDefault(require("../../../models/usuario"));
const acceso_1 = __importDefault(require("../../../models/acceso"));
const conexion_1 = __importDefault(require("../../../config/conection/conexion"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const registro_sql_1 = require("../repository/registro_sql");
const generarTokenControlador_1 = __importDefault(require("../../shared/controller/generarTokenControlador"));
class RegistroDao {
    static nuevoUsuario(res, objUsuario, objAcceso) {
        return __awaiter(this, void 0, void 0, function* () {
            let accesoRepository = conexion_1.default.getRepository(acceso_1.default);
            let usuarioRepository = conexion_1.default.getRepository(usuario_1.default);
            let accion = 1, codUsuario = 0;
            const usuarioAcceso = yield accesoRepository.findBy({ nombreAcceso: objAcceso.nombreAcceso });
            if (usuarioAcceso.length == 0) {
                accion = 2;
                codUsuario = (yield usuarioRepository.insert(objUsuario)).identifiers[0].codUsuario;
                console.log(objUsuario);
                let claveCifrada = bcryptjs_1.default.hashSync(objAcceso.claveAcceso);
                objAcceso.codUsuario = codUsuario;
                objAcceso.claveAcceso = claveCifrada;
                yield accesoRepository.insert(objAcceso);
            }
            yield usuarioRepository.query(registro_sql_1.SQL_REGISTRO.DATOS_TOKEN, [codUsuario])
                .then((respuesta) => {
                switch (accion) {
                    case 1:
                        res.status(400).json({ mensaje: "Fallo, el usuario ya existe" });
                        break;
                    case 2:
                        const token = generarTokenControlador_1.default.procesarRespuesta(respuesta[0]);
                        res.status(200).json({ tokenApp: token });
                        break;
                }
            }).catch((miErrorsito) => {
                res.status(400).json({ mensaje: "Fallo al resgistar al usuario " });
            });
        });
    }
    static obtenerUsuarios(res) {
        return __awaiter(this, void 0, void 0, function* () {
            let usuarioRepository = conexion_1.default.getRepository(usuario_1.default);
            usuarioRepository.find()
                .then((respuesta) => {
                const arregloTurno = respuesta;
                res.status(200).json(arregloTurno);
            }).catch((miErrorsito) => {
                res.status(400).json({ mensaje: "Fallo al consultar los datos" });
            });
        });
    }
}
exports.default = RegistroDao;
