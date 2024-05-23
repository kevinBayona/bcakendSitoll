"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class GenerarTokenControlador {
    static procesarRespuesta(resgistro) {
        let token = jsonwebtoken_1.default.sign({
            id: resgistro.cod_usuario,
            nombreAcceso: resgistro.nombre_acceso,
            nombreUsuario: resgistro.nombres_usuario,
            apellidoUsuario: resgistro.apellidos_usuario,
            rol: resgistro.rol_usuario
        }, 'laClaveSuperSecreta', { expiresIn: '10h' });
        return token;
    }
}
exports.default = GenerarTokenControlador;
