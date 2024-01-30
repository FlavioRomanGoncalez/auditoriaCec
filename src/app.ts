import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import funcionarioRoutes from './routes/funcionario.routes';

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use(funcionarioRoutes);

export default app;