import { fetchData, persistData } from "../repositories/todoRepo.ts";
import { Todo } from "../models/todo.ts";
import { createId } from "../utils/commonHelper.ts";

type TodoData = Pick<Todo, "userId" | "title" | "completed">;

export const getTodos = async (): Promise<Todo[]> => {
  const todos = await fetchData();
  return todos.sort((a, b) => a.title.localeCompare(b.title));
};

export const createTodo = async (todoData: TodoData): Promise<string> => {
  const todos = await fetchData();

  const newTodo = {
    ...todoData,
    id: createId(),
  };

  await persistData([...todos, newTodo]);

  return newTodo.id;
};
