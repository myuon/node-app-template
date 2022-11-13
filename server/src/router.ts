import koaBody from "koa-body";
import Router, { IRouterOptions } from "koa-router";
import { z } from "zod";

export const newRouter = (options?: IRouterOptions) => {
  const router = new Router(options);

  router.get("/hello", async (ctx) => {
    ctx.body = "Hello World!";
  });
  router.post("/echo", koaBody(), async (ctx) => {
    const schema = z.object({
      message: z.string(),
    });
    const result = schema.safeParse(ctx.request.body);
    if (!result.success) {
      ctx.throw(400, result.error);
      return;
    }

    ctx.body = result.data.message;
  });

  return router;
};
