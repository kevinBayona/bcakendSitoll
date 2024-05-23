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
const peaje_1 = __importDefault(require("./peaje"));
const turnoUsuario_1 = __importDefault(require("./turnoUsuario"));
let Puesto = class Puesto {
    /*@OneToOne(()=>TurnoUsuario, (objTurnUsa:TurnoUsuario)=>objTurnUsa.codPuestoA)
    public turnoUsuario?: TurnoUsuario;*/
    constructor(codP, codPea, nomPu) {
        this.codPuesto = codP;
        this.codPeaje = codPea;
        this.horarioPuesto = nomPu;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "cod_puesto" }),
    __metadata("design:type", Number)
], Puesto.prototype, "codPuesto", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "cod_peaje" }),
    __metadata("design:type", Number)
], Puesto.prototype, "codPeaje", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "horario_puesto", length: 200 }),
    __metadata("design:type", String)
], Puesto.prototype, "horarioPuesto", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => peaje_1.default, (objPeaje) => objPeaje.puesto, { onDelete: "RESTRICT", onUpdate: "CASCADE" }),
    (0, typeorm_1.JoinColumn)([{
            name: "cod_peaje", referencedColumnName: "codPeaje"
        }]),
    __metadata("design:type", peaje_1.default)
], Puesto.prototype, "codPeajeR", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => turnoUsuario_1.default, (objTurnoUs) => objTurnoUs.codPuestoR),
    __metadata("design:type", Array)
], Puesto.prototype, "turnoUsuario", void 0);
Puesto = __decorate([
    (0, typeorm_1.Entity)("puesto", { schema: "public" }),
    __metadata("design:paramtypes", [Number, Number, String])
], Puesto);
exports.default = Puesto;
