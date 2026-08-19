import { Request, Response } from "express";

import User from "../models/User";

import {
  hashPassword,
  comparePassword,
} from "../utils/password";

import {
  generateToken,
} from "../utils/token";

import {
  createDefaultCategories,
} from "../services/categoryService";



const cookieOptions = {
  httpOnly: true,

  secure:
    process.env.NODE_ENV === "production",

  sameSite: "lax" as const,

  maxAge:
    7 * 24 * 60 * 60 * 1000,

};



// Register User
export const register = async (
  req: Request,
  res: Response
) => {

  try {

    const {
      name,
      email,
      password,
      currency,
    } = req.body;



    if (
      !name ||
      !email ||
      !password
    ) {

      return res.status(400).json({

        message:
          "Name, email and password are required",

      });

    }



    const existingUser =
      await User.findOne({
        email,
      });



    if (existingUser) {

      return res.status(400).json({

        message:
          "User already exists",

      });

    }



    const hashedPassword =
      await hashPassword(
        password
      );



    const user =
      await User.create({

        name,

        email,

        password:
          hashedPassword,

        currency:
          currency || "USD",

      });



    // Create default categories
    await createDefaultCategories(
      user._id.toString()
    );



    const token =
      generateToken(
        user._id.toString()
      );



    res.cookie(
      "token",
      token,
      cookieOptions
    );



    return res.status(201).json({

      message:
        "Account created successfully",


      user: {

        id:
          user._id,

        name:
          user.name,

        email:
          user.email,

        currency:
          user.currency,

      },

    });



  } catch (error) {

    console.error(
      "Registration error:",
      error
    );


    return res.status(500).json({

      message:
        "Registration failed",

    });

  }

};







// Login User
export const login = async (
  req: Request,
  res: Response
) => {

  try {


    const {
      email,
      password,
    } = req.body;



    if (
      !email ||
      !password
    ) {

      return res.status(400).json({

        message:
          "Email and password are required",

      });

    }



    const user =
      await User.findOne({

        email,

      });



    if (!user) {

      return res.status(400).json({

        message:
          "Invalid credentials",

      });

    }



    const passwordMatch =
      await comparePassword(

        password,

        user.password

      );



    if (!passwordMatch) {

      return res.status(400).json({

        message:
          "Invalid credentials",

      });

    }



    const token =
      generateToken(
        user._id.toString()
      );



    res.cookie(

      "token",

      token,

      cookieOptions

    );



    return res.status(200).json({

      message:
        "Login successful",


      user: {

        id:
          user._id,

        name:
          user.name,

        email:
          user.email,

        currency:
          user.currency,

      },

    });



  } catch (error) {


    console.error(
      "Login error:",
      error
    );



    return res.status(500).json({

      message:
        "Login failed",

    });

  }

};







// Logout User
export const logout = async (
  _req: Request,
  res: Response
) => {

  res.clearCookie(
    "token",
    cookieOptions
  );


  return res.status(200).json({

    message:
      "Logout successful",

  });

};