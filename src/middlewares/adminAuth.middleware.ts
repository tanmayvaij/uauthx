import { Request, Response, NextFunction } from "express";

export const adminAuth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader)
      return res
        .status(401)
        .json({
          isSuccess: false,
          error: "Authorization token not found in the headers",
        });

    const [username, password] = Buffer.from(authHeader.split(" ")[1], "base64")
      .toString("ascii")
      .split(":");

    if (
      username !== process.env.UAUTHX_ADMIN ||
      password !== process.env.UAUTHX_PASSWORD
    )
      return res
        .status(403)
        .json({ isSuccess: false, error: "Invalid admin credentials" });

    next();
  } catch (error) {
    return res.status(500).json({ isSuccess: false, error });
  }
};
