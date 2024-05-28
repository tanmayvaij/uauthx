import { Request, Response } from "express";
import { UserModel } from "../../models";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

export const signIn = async (req: Request, res: Response) => {
  const userExist = await UserModel.findOne({ email: req.body.email });

  if (!userExist)
    return res
      .status(404)
      .json({ status: false, message: "Invalid username or password" });

  const passwordMatched = await compare(
    req.body.password.trim(),
    userExist.password
  );
  if (!passwordMatched)
    return res
      .status(401)
      .json({ status: false, message: "Invalid username or password" });

  const payload = { userId: userExist.id };

  const authToken = sign(payload, process.env.JWT_SECRET!);

  res.json({ status: true, authToken });
};
