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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFuncionario = exports.getFuncionarios = void 0;
const funcionario_entitie_1 = require("../entities/funcionario.entitie");
const getFuncionarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const funcionarios = yield funcionario_entitie_1.Funcionario.find();
        res.status(200).json(funcionarios);
    }
    catch (error) {
        console.log(error);
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
});
exports.getFuncionarios = getFuncionarios;
const createFuncionario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const funcionario = yield funcionario_entitie_1.Funcionario.save(req.body);
        res.status(200).json(funcionario);
    }
    catch (error) {
        console.log(error);
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
});
exports.createFuncionario = createFuncionario;
