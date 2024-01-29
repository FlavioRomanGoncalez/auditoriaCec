import { Request, Response } from "express";
import { Funcionario } from "../entities/funcionario.entitie";

export const getFuncionarios = async (req: Request, res: Response) => {
  try {
    const funcionarios = await Funcionario.find();
    res.status(200).json(funcionarios);
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      res.status(500).json({ message: error.message })
    }
  }
};
