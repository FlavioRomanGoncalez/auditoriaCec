import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, } from "typeorm";

@Entity('funcionarios')
export class Funcionario extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  cantidad: number

  @Column()
  funcionario: string

  @Column()
  num_telefono: number
  
  @Column("decimal", { precision: 15, scale: 2 })
  monto: number
  
  @Column()
  linea: number
  
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
  precio: string

  @CreateDateColumn()
  createdAt: Date;

}