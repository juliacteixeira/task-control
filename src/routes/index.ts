import { Router } from "express";
import {
  addTodo,
  deleteTodo,
  getTodos,
  updateTodo
} from "../controllers/task-control/index.controller";

const router: Router = Router();

router.get("/todos", getTodos);

router.post("/add-todo", addTodo);

router.put("/edit-todo/:id", updateTodo);

router.delete("/delete-todo/:id", deleteTodo);

export default router;
