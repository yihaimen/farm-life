import { Router } from "../deps.ts";
import getTodos, { add } from "./handlers/getTodos.ts";

const router = new Router();

router.get("/todos", getTodos);

router.post("/todos", add);

export default router;
