import { Router } from 'express';
import { getFuncionarios, createFuncionario, putFuncionario, delFuncionario, getFuncionarioByID } from '../controller/funcionario.controller';

const router = Router();

router.get('/funcionariosAll', getFuncionarios);
router.get('/funcionarioById/:id', getFuncionarioByID);
router.post('/funcionarios', createFuncionario);
router.put('/funcionarioUpdate/:id', putFuncionario);
router.put('/funcionarioDel/:id', delFuncionario);

export default router;