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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
const typeorm_1 = require("typeorm");
let Funcionario = class Funcionario extends typeorm_1.BaseEntity {
};
exports.Funcionario = Funcionario;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Funcionario.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: ["Mobile Zone", "GenZ", "Goon"],
        default: "GenZ"
    }),
    __metadata("design:type", String)
], Funcionario.prototype, "empresa", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Funcionario.prototype, "funcionario", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Funcionario.prototype, "num_telefono", void 0);
__decorate([
    (0, typeorm_1.Column)("decimal", { precision: 15, scale: 2 }),
    __metadata("design:type", Number)
], Funcionario.prototype, "monto_empresa", void 0);
__decorate([
    (0, typeorm_1.Column)("decimal", { precision: 15, scale: 2 }),
    __metadata("design:type", Number)
], Funcionario.prototype, "monto_particular", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Funcionario.prototype, "linea_empresa", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Funcionario.prototype, "linea_personal", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Funcionario.prototype, "serial", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Funcionario.prototype, "modelo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Funcionario.prototype, "empresa_particular", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Funcionario.prototype, "cuenta_google", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Funcionario.prototype, "contrasena_google", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Funcionario.prototype, "bloqueo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Funcionario.prototype, "obs_verificacion", void 0);
__decorate([
    (0, typeorm_1.Column)("decimal", { precision: 15, scale: 2 }),
    __metadata("design:type", Number)
], Funcionario.prototype, "precio_usd", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], Funcionario.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Funcionario.prototype, "createdAt", void 0);
exports.Funcionario = Funcionario = __decorate([
    (0, typeorm_1.Entity)('funcionarios')
], Funcionario);
