import { Router } from "../deps.ts";
import getTodos from "./handlers/getTodos.ts";
import createTodo from "./handlers/createTodo.ts";

const router = new Router();

router.get("/todos", getTodos)
  .post("/todos", createTodo);

export default router;
