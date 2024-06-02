import { Request, Response } from "express";
import { UserRole } from "../../models";

export const getUserRoles = async (_: Request, res: Response) => {
  try {
    const userRoles = await UserRole.find({}, { __v: 0 });
    return res.json({
      isSucess: true,
      userRoles,
    });
  } catch (error) {
    return res.json({ isSucess: false, error });
  }
};
