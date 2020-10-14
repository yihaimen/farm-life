import { Response, Request, RouteParams } from "../../deps.ts";
import { updateTodo } from "../services/todos.ts";

export default async (
  { params, request, response }: {
    params: RouteParams;
    request: Request;
    response: Response;
  },
) => {
  const todoId = params.id;

  if (!todoId) {
    response.status = 400;
    response.body = { msg: "Invalid todo id" };
    return;
  }

  if (!request.hasBody) {
    response.status = 400;
    response.body = { msg: "Invalid todo data" };
    return;
  }

  const body = request.body();
  const { title, completed, userId } = await body.value;

  await updateTodo(todoId, { title, completed, userId });

  response.body = { msg: "Todo updated!" };
};
