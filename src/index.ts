import { Application, yellow, green } from "../deps.ts";
import { APP_HOST, APP_PORT } from "./config.ts";
import router from "./routing.ts";
import notFound from "./handlers/notFound.ts";
import errorMiddleware from "./middlewares/error.ts";

const app = new Application();
app.use(errorMiddleware);
app.use(router.routes());
app.use(router.allowedMethods());
app.use(notFound);

console.log(`${yellow("Listening on:")} ${green(`${APP_PORT}`)}...`);

await app.listen(`${APP_HOST}:${APP_PORT}`);
