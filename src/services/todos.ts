import { fetchData, persistData } from "../repositories/todoRepo.ts";
import { Todo } from "../models/todo.ts";
import { createId } from "../utils/commonHelper.ts";

type TodoData = Pick<Todo, "userId" | "title" | "completed">;

export const getTodos = async (): Promise<Todo[]> => {
  const todos = await fetchData();
  return todos.sort((a, b) => a.title.localeCompare(b.title));
};
