import { NextFunction, Request, Response } from "express";
import { JwtPayload, verify } from "jsonwebtoken";

// Merge the user interface with the Express Request interface
declare global {
  namespace Express {
    interface Request {
      user: JwtPayload; // Define req.user with the User interface
    }
  }
}

// Middleware for verifying users and their tokens
export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Receiving authToken from the headers
    const authToken = req.header("Authentication");

    // Throwing 401 error is token is not provided in headers
    if (!authToken)
      return res
        .status(401)
        .json({ isSucess: false, message: "Token not provided" });

    // Attaching user id object with the request
    req.user = verify(authToken, process.env.SECRET_KEY!) as JwtPayload;

    next();
  } catch (error) {
    return res.json({ isSucess: false, error });
  }
};
