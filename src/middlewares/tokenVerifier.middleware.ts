import { NextFunction, Request, Response } from "express";
import { JwtPayload, verify } from "jsonwebtoken";

interface User {
  // Define the properties of your user object
  // For example:
  id: string;
  username: string;
}

// Merge the user interface with the Express Request interface
declare global {
  namespace Express {
    interface Request {
      user: JwtPayload; // Define req.user with the User interface
    }
  }
}

export const tokenVerifier = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authToken = req.header("Authentication");

  if (!authToken)
    return res.json({ status: false, message: "Token not provided" });

  try {
    req.user = verify(authToken, process.env.JWT_SECRET!) as JwtPayload;

    next();
  } catch (err) {
    return res.json({ status: false, message: "Invalid token provided" });
  }
};
