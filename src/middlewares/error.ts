import { Response } from "../../deps.ts";
import InvalidedParamsException from "../exception/InvalidedParamsException.ts";

export default async (
  { response }: { response: Response },
  next: () => Promise<void>,
) => {
  try {
    await next();
  } catch (err) {
    if (err instanceof InvalidedParamsException) {
      response.status = 400;
      response.body = { msg: err.message };
    } else {
      response.status = 500;
      response.body = { msg: err.message };
    }
  }
};
