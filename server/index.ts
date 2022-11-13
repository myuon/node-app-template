import Koa from "koa";
import * as path from "path";
import { serveStaticProd } from "./src/middleware/serve";
import { newRouter } from "./src/router";
const app = new Koa();

app.use(
  serveStaticProd({
    path: path.resolve(__dirname, "..", "web"),
    excludePrefix: "/api",
  })
);

const router = newRouter({
  prefix: "/api",
});
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);
console.log(`✨ Server running on http://localhost:3000`);
