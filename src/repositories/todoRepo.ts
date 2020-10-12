import { DB_PATH } from "../config.ts";
import { Todo } from "../models/todo.ts";

export const fetchData = async (): Promise<Todo[]> => {
  const data = await Deno.readFile(Deno.cwd() + DB_PATH);

  const decoder = new TextDecoder();
  const decodedData = decoder.decode(data);
  return JSON.parse(decodedData);
};

export const persistData = async (todoList: Todo[]): Promise<void> => {
  const encoder = new TextEncoder();
  await Deno.writeFile(
    Deno.cwd() + DB_PATH,
    encoder.encode(JSON.stringify(todoList)),
  );
};
