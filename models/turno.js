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
const turnoUsuario_1 = __importDefault(require("./turnoUsuario"));
let Turno = class Turno {
    /*@OneToOne(()=>TurnoUsuario, (objTurnUsa:TurnoUsuario)=>objTurnUsa.codTurnoA)
    public turnoUsuario?: TurnoUsuario;*/
    constructor(codTur, diaTurn, horTurI, horTurF, tiTur) {
        this.codTurno = codTur;
        this.diasTurno = diaTurn;
        this.horaInicioTurno = horTurI;
        this.horaFinTurno = horTurF;
        this.tipoTurno = tiTur;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "cod_turno" }),
    __metadata("design:type", Number)
], Turno.prototype, "codTurno", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "dias_turno", length: 200 }),
    __metadata("design:type", String)
], Turno.prototype, "diasTurno", void 0);
__decorate([
    (0, typeorm_1.Column)("time", { name: "hora_inicio_turno" }),
    __metadata("design:type", Date)
], Turno.prototype, "horaInicioTurno", void 0);
__decorate([
    (0, typeorm_1.Column)("time", { name: "hora_fin_turno" }),
    __metadata("design:type", Date)
], Turno.prototype, "horaFinTurno", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'smallint', name: 'tipo_turno' }),
    __metadata("design:type", Number)
], Turno.prototype, "tipoTurno", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => turnoUsuario_1.default, (objTurnoUs) => objTurnoUs.codTurnoR),
    __metadata("design:type", Array)
], Turno.prototype, "turnoUsuario", void 0);
Turno = __decorate([
    (0, typeorm_1.Entity)("turno", { schema: "public" }),
    __metadata("design:paramtypes", [Number, String, Date, Date, Number])
], Turno);
exports.default = Turno;
