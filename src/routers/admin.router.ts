import { Router } from "express";
import { addRoleAttributes, createUserRole, getUserRoles } from "../handlers";

export const adminRouter = Router();

adminRouter.route("/create-user-role").post(createUserRole);
adminRouter.route("/get-user-roles").get(getUserRoles);
adminRouter.route("/add-role-attributes").post(addRoleAttributes);
