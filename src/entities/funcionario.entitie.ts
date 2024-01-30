import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, } from "typeorm";


@Entity('funcionarios')
export class Funcionario extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column({
    type: "enum",
    enum: ["Mobile Zone", "GenZ", "Goon"],
    default: "GenZ"
  })
  empresa: string

  @Column()
  funcionario: string

  @Column()
  num_telefono: number

  @Column("decimal", { precision: 15, scale: 2 })
  monto_empresa: number

  @Column("decimal", { precision: 15, scale: 2 })
  monto_particular: number

  @Column()
  linea_empresa: number
  
  @Column()
  linea_personal: number

  @Column()
  serial: string

  @Column()
  modelo: string

  @Column()
  empresa_particular: boolean

  @Column()
  cuenta_google: string

  @Column()
  contrasena_google: string

  @Column()
  bloqueo: boolean

  @Column()
  obs_verificacion: string

  @Column("decimal", { precision: 15, scale: 2 })
  precio_usd: number

  @Column()
  estado: boolean

  @CreateDateColumn()
  createdAt: Date;

}