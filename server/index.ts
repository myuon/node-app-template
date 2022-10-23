import Koa from "koa";
import proxy from "koa-proxy";
import serve from "koa-static";
import * as path from "path";
const app = new Koa();

app.use((ctx, next) => {
  if (ctx.request.path == "/api/hello") {
    ctx.body = "Hello World";
  } else {
    if (process.env.NODE_ENV === "production") {
      return serve(path.resolve(__dirname, "web"))(ctx, next);
    } else {
      return proxy({
        host: "http://localhost:5173",
      })(ctx, next);
    }
  }
});

app.listen(3000);
console.log(`✨ Server running on http://localhost:3000`);
