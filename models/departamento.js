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
const departamentoRuta_1 = __importDefault(require("./departamentoRuta"));
let Departamento = class Departamento {
    constructor(cod, nom) {
        this.codDepartamento = cod;
        this.nombreDepartamento = nom;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "cod_departamento" }),
    __metadata("design:type", Number)
], Departamento.prototype, "codDepartamento", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "nombre_departamento", length: 200 }),
    __metadata("design:type", String)
], Departamento.prototype, "nombreDepartamento", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => departamentoRuta_1.default, (objDepaRuta) => objDepaRuta.codDepartamentoR),
    __metadata("design:type", Array)
], Departamento.prototype, "departamentoRuta", void 0);
Departamento = __decorate([
    (0, typeorm_1.Entity)("departamentos", { schema: "public" }),
    __metadata("design:paramtypes", [Number, String])
], Departamento);
exports.default = Departamento;
