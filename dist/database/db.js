"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const funcionario_entitie_1 = require("../entities/funcionario.entitie");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    //host: '154.49.247.52',
    host: '193.203.175.12',
    password: '@Exo2023',
    username: 'u262284440_auditoria_cel',
    database: 'u262284440_auditoria_cel',
    port: 3306,
    entities: [funcionario_entitie_1.Funcionario],
    logging: true,
    synchronize: false
});
