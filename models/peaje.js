"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const ruta_1 = __importDefault(require("./ruta"));
const puesto_1 = __importDefault(require("./puesto"));
let Peaje = class Peaje {
    constructor(codP, codRut, nomPe, fotPu, fotPr) {
        this.codPeaje = codP;
        this.codRuta = codRut;
        this.nombrePeaje = nomPe;
        this.fotoPublicaPeaje = fotPu;
        this.fotoPrivadPeaje = fotPr;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "cod_peaje" }),
    __metadata("design:type", Number)
], Peaje.prototype, "codPeaje", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "cod_ruta" }),
    __metadata("design:type", Number)
], Peaje.prototype, "codRuta", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "nombre_peaje", length: 250 }),
    __metadata("design:type", String)
], Peaje.prototype, "nombrePeaje", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "foto_publica_peaje", length: 500 }),
    __metadata("design:type", String)
], Peaje.prototype, "fotoPublicaPeaje", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "foto_privada_peaje", length: 200 }),
    __metadata("design:type", String)
], Peaje.prototype, "fotoPrivadPeaje", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ruta_1.default, (objRuta) => objRuta.peaje, { onDelete: "RESTRICT", onUpdate: "CASCADE" }),
    (0, typeorm_1.JoinColumn)([{
            name: "cod_ruta", referencedColumnName: "codRuta"
        }]),
    __metadata("design:type", ruta_1.default)
], Peaje.prototype, "codRutaR", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => puesto_1.default, (objPuesto) => objPuesto.codPeajeR),
    __metadata("design:type", Array)
], Peaje.prototype, "puesto", void 0);
Peaje = __decorate([
    (0, typeorm_1.Entity)("peaje", { schema: "public" }),
    __metadata("design:paramtypes", [Number, Number, String, String, String])
], Peaje);
exports.default = Peaje;
