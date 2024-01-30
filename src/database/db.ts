import { DataSource } from "typeorm";
import { Funcionario } from "../entities/funcionario.entitie";

export const AppDataSource = new DataSource({
  type: "mysql",
  //host: '154.49.247.52',
  host: '193.203.175.12',
  password: '@Exo2023',
  username: 'u262284440_auditorio_cel',
  database: 'u262284440_auditoria_cel',
  port: 3306,
  entities: [Funcionario],
  logging: true,
  synchronize: true
})