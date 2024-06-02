import { Request, Response } from "express";
import { User } from "../models";
import { sign } from "jsonwebtoken";

// Sign up request handler
export const signUp = async (
  req: Request<{}, {}, { email: string; password: string }>,
  res: Response
) => {
  // Checking if already the given email exists is database or not
  const userExists = await User.findOne({ email: req.body.email });

  // Throwing 409 Conflict error if the email is already found in database
  if (userExists)
    return res.status(409).json({
      isSucess: false,
      error: `User with email id - ${req.body.email} already exists`,
    });

  // If email does not exists then storing it in database
  const createdUser = await User.create(req.body);

  // Creating a payload
  const payload = { userId: createdUser._id };

  // Generating auth token
  const authToken = sign(payload, process.env.SECRET_KEY!);

  return res.json({ isSucess: true, authToken });
};
