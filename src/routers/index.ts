import { Router } from "express";

import { adminAuth } from "../middlewares/adminAuth.middleware";
import { authRouter } from "./auth.router";
import { adminRouter } from "./admin.router";

export const rootRouter = Router();

rootRouter.use("/auth", authRouter);
rootRouter.use("/admin", adminAuth, adminRouter);
