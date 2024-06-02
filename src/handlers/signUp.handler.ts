import { Request, Response } from "express";
import { User } from "../models";
import { sign } from "jsonwebtoken";

export const signUp = async (req: Request, res: Response) => {
  const userExists = await User.findOne({ email: req.body.email });

  if (userExists)
    return res.status(409).json({
      status: false,
      message: `User with email id - ${req.body.email} already exists`,
    });

  const createdUser = await User.create({
    ...req.body,
    joinedOn: new Date().toLocaleString(),
  });

  const payload = { userId: createdUser.id };

  const authToken = sign(payload, process.env.JWT_SECRET!);

  res.json({ status: true, authToken });
};
