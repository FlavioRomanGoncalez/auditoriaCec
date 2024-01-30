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

export const createFuncionario = async (req: Request, res: Response) => {
  try {
    const funcionario = await Funcionario.save(req.body);
    res.status(200).json(funcionario);
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      res.status(500).json({ message: error.message })
    }
  }
};

export const putFuncionario = async (req: Request, res: Response) => {

  try {

    //    const { name, rs_wallet, us_wallet } = req.body;
    const { id } = req.params;

    const funcionario = await Funcionario.findOneBy({ id: parseInt(req.params.id) });
    if (!funcionario) return res.status(404).json({ message: 'Funcionario No Existe' });

    await Funcionario.update({ id: parseInt(id) }, req.body);

    res.status(204).json(funcionario);

  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      res.status(500).json({ message: error.message })
    }
  }
};


export const delFuncionario = async (req: Request, res: Response) => {

  try {

    const { id } = req.params;

    const funcionario = await Funcionario.findOneBy({ id: parseInt(req.params.id) });
    if (!funcionario) return res.status(404).json({ message: 'Funcionario No Existe' });

    const resultado = await Funcionario.update({ id: parseInt(id) }, { estado: false });

    if (resultado.affected === 0) {
      return res.status(400).json({ message: 'User not found' });
    };

    return res.status(204);

  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      res.status(500).json({ message: error.message })
    }
  }
};
