import { Router } from "express";

import { authRouter } from "./auth.router";

export const rootRouter = Router();

rootRouter.use("/auth", authRouter);
