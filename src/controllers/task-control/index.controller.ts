import { Request, Response } from "express";
import TarefaModel from "../../models/task-control/index.model";
import { ITarefa } from "../../types/task-control/index.types";

const getTarefas = async (req: Request, res: Response) => {
  try {
    const tarefas = await TarefaModel.find();
    console.log("data:::", tarefas);
    res.status(200).json({ status: 400, data: tarefas });
  } catch (error: any) {
    res.status(400).json({
      status: 400,
      message: error.message,
    });
  }
};

const getTarefaById = async (req: Request, res: Response): Promise<void> => {
  try {
    const tarefa = await TarefaModel.findById(req.params.id).exec();
    res.status(200).json({ status: 400, data: tarefa });
  } catch (error: any) {
    res.status(400).json({
      status: 400,
      message: error.message,
    });
  }
};

const addTarefa = async (req: Request, res: Response): Promise<void> => {
  try {

    const newTarefa: ITarefa = new TarefaModel({
      name: req.body.name,
      description: req.body.description,
      status: req.body.status,
      deadline: req.body.deadline
    });

    const novaTarefa: ITarefa = await newTarefa.save();
    const allTarefas: ITarefa[] = await TarefaModel.find();

    res
      .status(201)
      .json({ message: "Tarefas inserida", tarefa: novaTarefa, tarefas: allTarefas });
  } catch (error: any) {
    res.status(400).json({
      status: 400,
      message: error.message,
    });
  }
};

const updateTarefa = async (req: Request, res: Response): Promise<void> => {
  
  try {
    const {
      params: { id },
      body,
    } = req;
    const updateTarefa: ITarefa | null = await TarefaModel.findByIdAndUpdate(
      { _id: id },
      body
    );
    const allTarefas: ITarefa[] = await TarefaModel.find();
    res.status(200).json({
      message: "Todo updated",
      tarefa: updateTarefa,
      tarefas: allTarefas,
    });
  } catch (error: any) {
    res.status(400).json({
      status: 400,
      message: error.message,
    });
  }
};

const deleteTarefa = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedTarefa: ITarefa | null = await TarefaModel.findByIdAndRemove(
      req.params.id
    );
    const allTarefas: ITarefa[] = await TarefaModel.find();
    res.status(200).json({
      message: "Todo deleted",
      tarefa: deletedTarefa,
      tarefas: allTarefas,
    });
  } catch (error: any) {
    res.status(400).json({
      status: 400,
      message: error.message,
    });
  }
};

export { getTarefas, getTarefaById, addTarefa, updateTarefa, deleteTarefa };

