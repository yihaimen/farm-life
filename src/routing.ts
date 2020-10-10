import { Router } from "../deps.ts";
import getTodos from "./handlers/getTodos.ts";

const router = new Router();

router.get("/todos", getTodos);

export default router;
