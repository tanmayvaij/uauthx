import { Router } from "express";
import { createUserRole, getUserRoles } from "../handlers";

export const adminRouter = Router();

adminRouter.route("/create-user-role").post(createUserRole);
adminRouter.route("/get-user-roles").get(getUserRoles);
