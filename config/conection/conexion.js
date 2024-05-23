"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const dotenv_1 = __importDefault(require("dotenv"));
const typeorm_naming_strategies_1 = require("typeorm-naming-strategies");
const departamento_1 = __importDefault(require("../../models/departamento"));
const ruta_1 = __importDefault(require("../../models/ruta"));
const usuario_1 = __importDefault(require("../../models/usuario"));
const acceso_1 = __importDefault(require("../../models/acceso"));
const departamentoRuta_1 = __importDefault(require("../../models/departamentoRuta"));
const peaje_1 = __importDefault(require("../../models/peaje"));
const puesto_1 = __importDefault(require("../../models/puesto"));
const turno_1 = __importDefault(require("../../models/turno"));
const turnoUsuario_1 = __importDefault(require("../../models/turnoUsuario"));
dotenv_1.default.config({ path: '.env' });
const dataBase = String(process.env.DATABASE);
const usuario = String(process.env.USER_BD);
const clave = String(process.env.PASSWORD_USER);
const host = String(process.env.HOST);
const puerto = Number(process.env.PORT);
const poolConexion = new typeorm_1.DataSource({
    type: "postgres",
    host: host,
    port: puerto,
    username: usuario,
    password: clave,
    database: dataBase,
    synchronize: true,
    logging: true,
    entities: [departamento_1.default, ruta_1.default, usuario_1.default, acceso_1.default, departamentoRuta_1.default, peaje_1.default, puesto_1.default, turno_1.default, turnoUsuario_1.default],
    namingStrategy: new typeorm_naming_strategies_1.SnakeNamingStrategy(),
    ssl: { rejectUnauthorized: false }
});
poolConexion.initialize()
    .then((conn) => {
    console.log("Conexion exitosa con la base de datos en postgreSQL");
}).catch((miError) => {
    console.log(miError);
});
exports.default = poolConexion;
