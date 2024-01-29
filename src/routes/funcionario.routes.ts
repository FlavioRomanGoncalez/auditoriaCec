import { Router } from 'express';
import { getClients, getClientCi } from '../controller/funcionario.controller';


const router = Router();

router.get('/clientsGetAll', getClients);
router.get('/cedulaGetOne/:cedula', getClientCi);

export default router;