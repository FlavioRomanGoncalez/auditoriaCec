"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const funcionario_controller_1 = require("../controller/funcionario.controller");
const router = (0, express_1.Router)();
router.get('/funcionariosAll', funcionario_controller_1.getFuncionarios);
router.post('/funcionarios', funcionario_controller_1.createFuncionario);
exports.default = router;
