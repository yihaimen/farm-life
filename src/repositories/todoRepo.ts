import { DB_PATH } from "../config.ts";
import { ITodo } from "../models/todo.ts";

export const fetchData = async () => {
  return await readJSONFile(Deno.cwd() + DB_PATH);
};

export const persistData = async (todo: ITodo) => {
  return await saveTodo(todo)
};

const readJSONFile = async (filePath: string) => {
  const data = await Deno.readFile(filePath);

  const decoder = new TextDecoder();
  const decodedData = decoder.decode(data);
  return JSON.parse(decodedData);
};

const saveTodo = async (todo: ITodo) => {
  let todoList = await readJSONFile(Deno.cwd() + DB_PATH);
  todoList.push(todo);

  const encoder = new TextEncoder();
  return await Deno.writeFile(
    Deno.cwd() + DB_PATH,
    encoder.encode(JSON.stringify(todoList)),
  );
}
