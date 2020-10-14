import { Response } from "../../deps.ts";

export default ({ response }: { response: Response }) => {
  response.status = 404;
  response.body = { msg: "Not Found!" };
};
