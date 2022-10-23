import Koa from "koa";
import proxy from "koa-proxy";
const app = new Koa();

app.use((ctx, next) => {
  if (ctx.request.path == "/api/hello") {
    ctx.body = "Hello World";
  } else {
    return proxy({
      host: "http://localhost:5173",
    })(ctx, next);
  }
});

app.listen(3000);
console.log(`✨ Server running on http://localhost:3000`);
