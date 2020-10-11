import { fetchData, persistData } from "../repositories/todoRepo.ts";
import { ITodo } from "../models/todo.ts";
import { createId } from "../utils/commonHelper.ts";

type TodoData = Pick<ITodo, "userId" | "title" | "completed">;

export const getTodos = async () => {
  const todos = await fetchData();
  return todos.sort((a: any, b: any) => a.title.localeCompare(b.title));
};

export const addTodo = async (userId: string, title: string) => {
  const todo: ITodo = {
    id: createId(),
    userId,
    title,
    completed: false,
  };
  return await persistData(todo);
};
