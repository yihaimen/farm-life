import { Response, Request } from "../../deps.ts";
import { createTodo } from "../services/todos.ts";

export default async (
  { request, response }: { request: Request; response: Response },
) => {
  if (!request.hasBody) {
    response.status = 400;
    response.body = { msg: "Invalid todo data" };
    return;
  }

  // const {
  //   value: { userId, title, completed = false },
  // } = await request.body();

  // if (!userId || !title) {
  //   response.status = 422;
  //   response.body = {
  //     msg: "Incorrect todo data. userId and title are required",
  //   };
  //   return;
  // }

  // const todoId = await createTodo({ userId, title, completed });

  // response.body = { msg: "Todo created", todoId };

  const res = await request.body();
  response.body = res;
};

// import InvalidedParamsException from "../exception/InvalidedParamsException.ts";
// export const add = async (
//   { request, response }: { request: Request; response: Response },
// ) => {
//   const body = request.body();
//   const values = await body.value;
//   if (!values.userId || !values.title) {
//     throw new InvalidedParamsException("userId and title must be supplied");
//   }
//   await addTodo(values.userId, values.title);
//   response.status = 200;
// };
