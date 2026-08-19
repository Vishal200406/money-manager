import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { env } from "../config/env";


export interface AuthRequest extends Request {
  user?: {
    id: string;
  };
}


export const protect = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {

  try {

    const token = req.cookies?.token;


    if (!token) {
      return res.status(401).json({
        message: "Not authenticated",
      });
    }


    const decoded = jwt.verify(
      token,
      env.JWT_SECRET
    ) as {
      userId: string;
    };


    req.user = {
      id: decoded.userId,
    };


    next();


  } catch (error) {

    return res.status(401).json({
      message: "Invalid or expired token",
    });

  }

};