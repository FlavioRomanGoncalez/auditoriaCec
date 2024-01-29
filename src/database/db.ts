import { DataSource } from "typeorm";
import { Funcionario } from "../entities/funcionario.entitie";
import { Movein } from "../entities/movein.entitie";
import { User } from "../entities/user.entities";

export const AppDataSource = new DataSource({
  type: "mysql",
  //host: '154.49.247.52',
  host: '193.203.175.12',
  password: 'FX@moneyempire2023',
  username: 'u262284440_fxmoneyempire',
  database: 'u262284440_fx_data',
  port: 3306,
  entities: [Funcionario, Movein, User],
  logging: true,
  synchronize: true

})