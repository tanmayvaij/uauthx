import { Router } from "express" 
import { createUserRole } from "../handlers/admin/createUserRole.handler"

export const adminRouter = Router()

adminRouter.route("/create-user-role").post(createUserRole)
