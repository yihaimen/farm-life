import { fetchData, persistData } from "../repositories/todoRepo";
import { Todo } from "../models/todo.ts";
import { createId } from "../utils/commonHelper";

type TodoData = Pick<Todo, "userId" | "title" | "completed">;

export const getTodos = async (): Promise<Todo[]> => {
  const todos = await fetchData();
  return todos.sort((a, b) => a.title.localeCompare(b.title));
};
