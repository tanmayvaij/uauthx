import { Router } from "express";

import { signIn, signUp, verifyUser } from "../handlers";
import { passwordHasher, verifyToken } from "../middlewares";

export const authRouter = Router();

authRouter.route("/sign-up").post(passwordHasher, signUp);
authRouter.route("/sign-in").post(signIn);
authRouter.route("/verify-user").get(verifyToken, verifyUser);
