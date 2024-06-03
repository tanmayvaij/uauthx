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
    // Receiving authorization from the headers
    const authHeader = req.headers.authorization;

    // Throwing 401 error if authorization is not provided in headers
    if (!authHeader)
      return res
        .status(401)
        .json({ isSucess: false, message: "Token not provided" });

    // Trying to extract token from the bearer
    const authToken = authHeader.split(" ")[1];

    // Attaching user id object with the request
    req.user = verify(authToken, process.env.SECRET_KEY!) as JwtPayload;

    next();
  } catch (error) {
    return res.status(500).json({ isSuccess: false, error });
  }
};
