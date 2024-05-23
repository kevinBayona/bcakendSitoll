"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
//import de las rutas
const departamentoRuta_1 = __importDefault(require("../../app/departament/route/departamentoRuta"));
const roadRuta_1 = __importDefault(require("../../app/road/route/roadRuta"));
const registroRuta_1 = __importDefault(require("../../app/register/route/registroRuta"));
const seguridad_1 = __importDefault(require("../../middleware/seguridad"));
const accesoRuta_1 = __importDefault(require("../../app/acces/route/accesoRuta"));
const departamentoRutaR_1 = __importDefault(require("../../app/departamentRoute/route/departamentoRutaR"));
const peajeRuta_1 = __importDefault(require("../../app/peaje/route/peajeRuta"));
const puestoRuta_1 = __importDefault(require("../../app/puesto/route/puestoRuta"));
const turnoRuta_1 = __importDefault(require("../../app/turno/route/turnoRuta"));
const turnoUsuarioRuta_1 = __importDefault(require("../../app/turnoUsuario/route/turnoUsuarioRuta"));
class Servidor {
    constructor() {
        this.app = (0, express_1.default)();
        this.cargarConfiguracion();
        this.cargarRuta();
    }
    cargarConfiguracion() {
        this.app.set("PORT", 3300);
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use(express_1.default.json({ limit: "100mb" }));
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    cargarRuta() {
        this.app.use("/api/private/departament", seguridad_1.default.verificarToken, departamentoRuta_1.default);
        this.app.use("/api/private/road", seguridad_1.default.verificarToken, roadRuta_1.default);
        this.app.use("/api/public/register", registroRuta_1.default);
        this.app.use("/api/public/acces", accesoRuta_1.default);
        this.app.use("/api/private/departamentoRuta", departamentoRutaR_1.default);
        this.app.use("/api/private/peaje", seguridad_1.default.verificarToken, peajeRuta_1.default);
        this.app.use("/api/private/puesto", seguridad_1.default.verificarToken, puestoRuta_1.default);
        this.app.use("/api/private/turno", turnoRuta_1.default);
        this.app.use("/api/private/turnoUsuario", turnoUsuarioRuta_1.default);
    }
    iniciarServidor() {
        this.app.listen(this.app.get('PORT'), () => {
            console.log("Servidor funcionando en el puerto: ", this.app.get("PORT"));
        });
    }
}
exports.default = Servidor;
