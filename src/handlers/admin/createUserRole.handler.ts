import { Request, Response } from "express";
import { UserRole } from "../../models";

export const createUserRole = async (req: Request, res: Response) => {
  try {
    const role = req.body.role;

    const roleExists = await UserRole.findOne({ role });

    if (roleExists)
      return res.status(409).json({
        isSuccess: false,
        error: `Role '${role}' already exists`,
      });

    const createdRole = await UserRole.create({ role });

    return res.json({
      isSucess: true,
      message: `Created role '${createdRole.role}' successfully`,
    });
  } catch (error) {
    return res.status(400).json({ isSuccess: false, error });
  }
};
