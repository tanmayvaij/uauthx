import { genSalt, hash } from "bcrypt";
import { NextFunction, Request, Response } from "express";

// Middleware for hashing user passwords
export const passwordHasher = async (
  req: Request<{}, {}, { email: string; password: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    // Generating salt of 12 rounds
    const salt = await genSalt(12);

    // Hashing password using generated salt
    const hashedPassword = await hash(req.body.password, salt);

    // Replacing the user set password with the hashed password
    req.body.password = hashedPassword;

    next();
  } catch (error) {
    return res.status(500).json({ isSuccess: false, error });
  }
};
