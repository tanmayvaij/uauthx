import { Router } from "express";

import { authRouter } from "./auth.router";
import { adminRouter } from "./admin.router";
import { adminAuth } from "../middlewares";

export const rootRouter = Router();

rootRouter.use("/auth", authRouter);
rootRouter.use("/admin", adminAuth, adminRouter);
