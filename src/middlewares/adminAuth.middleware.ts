import { Request, Response, NextFunction } from "express";

export const adminAuth = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const credentials = Buffer.from(
      authHeader.split(" ")[1],
      "base64"
    ).toString("ascii");

    const [username, password] = credentials.split(":");

    if (
      username === process.env.UAUTHX_ADMIN &&
      password === process.env.UAUTHX_PASSWORD
    )
      return next();
  }

  return res.status(403).json({ message: "Invalid admin credentials" });
};
