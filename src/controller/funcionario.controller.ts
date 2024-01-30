import { Request, Response } from "express";
import { Funcionario } from "../entities/funcionario.entitie";
import { AppDataSource } from "../database/db";

const repo = AppDataSource.getRepository(Funcionario);


export const getFuncionarios = async (req: Request, res: Response) => {
  try {
    const funcionarios = await repo.find({ where: { estado: true } });
    return res.status(200).json(funcionarios);
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
    }
  }
};

export const getFuncionarioByID = async (req: Request, res: Response) => {
  try {
    // const { id } = req.params;
    const funcionario = await repo.findOneBy({ id: parseInt(req.params.id) });
    if (!funcionario) return res.status(404).json({ message: 'Funcionario No Existe' });

    return res.status(200).json(funcionario);
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
    }
  }
};

export const createFuncionario = async (req: Request, res: Response) => {
  try {
    const funcionario = await repo.save(req.body);
    return res.status(200).json(funcionario);
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
    }
  }
};

export const putFuncionario = async (req: Request, res: Response) => {

  try {

    const funcionario = await repo.findOneBy({ id: parseInt(req.params.id) });
    if (!funcionario) return res.status(404).json({ message: 'Funcionario No Existe' });

    await repo.update({  id: parseInt(req.params.id) }, req.body);

    return res.status(204).json(funcionario);

  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
    }
  }
};


export const delFuncionario = async (req: Request, res: Response) => {

  try {

    // const { id } = req.params;

    const funcionario = await repo.findOneBy({ id: parseInt(req.params.id) });
    if (!funcionario) return res.status(404).json({ message: 'Funcionario No Existe' });

    const resultado = await repo.update({ id: parseInt(req.params.id) }, { estado: false });

    if (resultado.affected === 0) {
      return res.status(400).json({ message: 'User not found' });
    };

    return res.status(200).json({ message: 'ELIMINADO -- OK' });

  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      res.status(500).json({ message: error.message })
    }
  }
};
