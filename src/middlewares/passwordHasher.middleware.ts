import { genSalt, hash } from "bcrypt";
import { NextFunction, Request, Response } from "express";

export const passwordHasher = async (
  req: Request,
  _: Response,
  next: NextFunction
) => {
  const salt = await genSalt(12);

  const hashedPassword = await hash(req.body.password, salt);

  req.body.password = hashedPassword;

  next();
};
