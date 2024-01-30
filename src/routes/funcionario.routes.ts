import { Router } from 'express';
import { getFuncionarios, createFuncionario } from '../controller/funcionario.controller';

const router = Router();

router.get('/funcionariosAll', getFuncionarios);
router.post('/funcionarios', createFuncionario);

export default router;