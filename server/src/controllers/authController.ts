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
          "Please provide name, email and password",

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



    // Create default income and expense categories
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

      {
        httpOnly: true,

        secure:
          process.env.NODE_ENV === "production",

        sameSite: "lax",

        maxAge:
          7 * 24 * 60 * 60 * 1000,

      }

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


    console.error(error);



    return res.status(500).json({

      message:
        "Registration failed",

    });


  }

};







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

      {

        httpOnly: true,

        secure:
          process.env.NODE_ENV === "production",

        sameSite: "lax",

        maxAge:
          7 * 24 * 60 * 60 * 1000,

      }

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


    console.error(error);



    return res.status(500).json({

      message:
        "Login failed",

    });


  }

};