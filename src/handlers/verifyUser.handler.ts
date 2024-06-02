import { Request, Response } from "express";

// User verification handler
export const verifyUser = (req: Request, res: Response) => {
  try {
    // Trying to fetch userId from the req object
    const userId = req.user.userId;
    return res.json({ isSucess: true, userId });
  } catch (error) {
    return res.json({ isSuccess: false, error });
  }
};
