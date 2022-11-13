import Router, { IRouterOptions } from "koa-router";

export const newRouter = (options?: IRouterOptions) => {
  const router = new Router(options);

  router.get("/hello", async (ctx) => {
    ctx.body = "Hello World!";
  });

  return router;
};
