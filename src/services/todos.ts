import { fetchData, persistData } from "../repositories/todoRepo.ts";
import { Todo } from "../models/todo.ts";
import { createId } from "../utils/commonHelper.ts";

type TodoData = Pick<Todo, "userId" | "title" | "completed">;

export const getTodos = async (): Promise<Todo[]> => {
  const todos = await fetchData();
  return todos.sort((a: Todo, b: Todo) => a.title.localeCompare(b.title));
};

export const getTodo = async (todoId: string): Promise<Todo | undefined> => {
  const todos = await fetchData();
  return todos.find(({ id }) => id === todoId);
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

export const updateTodo = async (
  todoId: string,
  todoData: TodoData,
): Promise<void> => {
  const todo = await getTodo(todoId);

  if (!todo) {
    throw new Error("Todo not found");
  }

  const updatedTodo = {
    ...todo,
    ...todoData,
  };

  const todos = await fetchData();
  const filteredTodos = todos.filter(({ id }) => id !== todoId);

  persistData([...filteredTodos, updatedTodo]);
};

export const deleteTodo = async (todoId: string): Promise<void> => {
  const todos = await fetchData();
  const filteredTodos = todos.filter(({ id }) => id !== todoId);

  persistData(filteredTodos);
};
