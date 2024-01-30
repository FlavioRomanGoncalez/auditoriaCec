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
exports.delFuncionario = exports.putFuncionario = exports.createFuncionario = exports.getFuncionarioByID = exports.getFuncionarios = void 0;
const funcionario_entitie_1 = require("../entities/funcionario.entitie");
const db_1 = require("../database/db");
const repo = db_1.AppDataSource.getRepository(funcionario_entitie_1.Funcionario);
const getFuncionarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const funcionarios = yield repo.find({ where: { estado: true } });
        return res.status(200).json(funcionarios);
    }
    catch (error) {
        console.log(error);
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.getFuncionarios = getFuncionarios;
const getFuncionarioByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const { id } = req.params;
        const funcionario = yield funcionario_entitie_1.Funcionario.findOneBy({ id: parseInt(req.params.id) });
        if (!funcionario)
            return res.status(404).json({ message: 'Funcionario No Existe' });
        res.status(200).json(funcionario);
    }
    catch (error) {
        console.log(error);
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
});
exports.getFuncionarioByID = getFuncionarioByID;
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
const putFuncionario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //    const { name, rs_wallet, us_wallet } = req.body;
        const { id } = req.params;
        const funcionario = yield funcionario_entitie_1.Funcionario.findOneBy({ id: parseInt(req.params.id) });
        if (!funcionario)
            return res.status(404).json({ message: 'Funcionario No Existe' });
        yield funcionario_entitie_1.Funcionario.update({ id: parseInt(id) }, req.body);
        res.status(204).json(funcionario);
    }
    catch (error) {
        console.log(error);
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
});
exports.putFuncionario = putFuncionario;
const delFuncionario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const funcionario = yield funcionario_entitie_1.Funcionario.findOneBy({ id: parseInt(req.params.id) });
        if (!funcionario)
            return res.status(404).json({ message: 'Funcionario No Existe' });
        const resultado = yield funcionario_entitie_1.Funcionario.update({ id: parseInt(id) }, { estado: false });
        if (resultado.affected === 0) {
            return res.status(400).json({ message: 'User not found' });
        }
        ;
        return res.status(204);
    }
    catch (error) {
        console.log(error);
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
});
exports.delFuncionario = delFuncionario;
