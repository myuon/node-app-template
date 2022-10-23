import Koa from "koa";
const app = new Koa();

app.use((ctx) => {
  ctx.body = "Hello World";
});

app.listen(3000);
console.log(`✨ Server running on http://localhost:3000`);
