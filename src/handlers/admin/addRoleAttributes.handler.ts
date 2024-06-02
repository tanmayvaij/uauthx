import { Request, Response } from "express";
import { UserRole } from "../../models";

interface UauthxRoleRequestObject {
  role: string;
  roleAttribute: {
    name: string;
    title: string;
    placeholder: string;
    required: boolean;
  };
}

export const addRoleAttributes = async (
  req: Request<{}, {}, UauthxRoleRequestObject>,
  res: Response
) => {
  try {
    const role = req.body.role || "user";

    const roleExists = await UserRole.findOne({ role });

    if (!roleExists)
      return res.json({
        isSucess: false,
        error: `Role '${role} does not exists'`,
      });

    roleExists.roleAttributes.push()
    

    const updatedRole = await roleExists.save();

    return res.json({ isSucess: true, updatedRole });
  } catch (error) {
    return res.json({ isSucess: false, error });
  }
};
