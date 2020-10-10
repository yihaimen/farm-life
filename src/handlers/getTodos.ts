import { Response } from "../../deps.ts";
import { getTodos } from "../services/todos.ts";

export default async ({ response }: { response: Response }) => {
  response.body = await getTodos();
};
