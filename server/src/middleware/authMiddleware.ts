import { Request, Response, NextFunction } from "express";

import jwt from "jsonwebtoken";

import { env } from "../config/env";

import User from "../models/User";


export interface AuthRequest extends Request {

  user?: any;

}



export const protect = async (

  req: AuthRequest,

  res: Response,

  next: NextFunction

) => {


  try {


    console.log("AUTH COOKIES:", req.cookies);


    const token = req.cookies?.token;



    console.log(
      "AUTH TOKEN:",
      token
    );



    if (!token) {


      return res.status(401).json({

        message:"Not authenticated"

      });


    }



    const decoded = jwt.verify(

      token,

      env.JWT_SECRET

    ) as {

      userId:string;

    };



    console.log(

      "DECODED TOKEN:",

      decoded

    );





    const user = await User.findById(

      decoded.userId

    ).select("-password");




    console.log(

      "FOUND USER:",

      user

    );





    if (!user) {


      return res.status(401).json({

        message:"User not found"

      });


    }





    req.user = user;



    next();



  } catch(error) {


    console.error(

      "AUTH ERROR:",

      error

    );



    return res.status(401).json({

      message:"Invalid or expired token"

    });


  }


};