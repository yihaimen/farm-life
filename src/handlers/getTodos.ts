import { Response, Request } from "../../deps.ts";
import { getTodos, addTodo } from "../services/todos.ts";
import InvalidedParamsException from "../exception/InvalidedParamsException.ts";

export default async ({ response }: { response: Response }) => {
  response.body = await getTodos();
};

export const add = async (
  { request, response }: { request: Request; response: Response },
) => {
  const body = request.body();
  const values = await body.value;
  if (!values.userId || !values.title) {
    throw new InvalidedParamsException("userId and title must be supplied");
  }
  await addTodo(values.userId, values.title);
  response.status = 200;
};
