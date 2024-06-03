import { Router } from "express";
import { listUsers } from "../handlers";

export const adminRouter = Router();

adminRouter.route("/list-users").get(listUsers);
