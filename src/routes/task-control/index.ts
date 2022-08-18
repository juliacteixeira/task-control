import { Router } from "express";
import {
  addTarefa,
  deleteTarefa,
  getTarefaById, getTarefas, updateTarefa
} from "../../controllers/task-control/index.controller";


const router: Router = Router();

router.get('/tarefas', getTarefas);

router.get("/tarefas/:id", getTarefaById);

router.post("/tarefas", addTarefa);

router.put("/edit-tarefa/:id", updateTarefa);

router.delete("/delete-tarefa/:id", deleteTarefa);

export default router;
