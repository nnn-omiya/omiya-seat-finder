import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { UserRouter } from "./routers/user";
import { InitRouter } from "./routers/init";
import { NoticeRouter } from "./routers/notice";
import { ScheduleRouter } from "./routers/schedule";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  user: UserRouter,
  init: InitRouter,
  notice: NoticeRouter,
  schedule: ScheduleRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
