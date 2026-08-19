import { Request, Response } from "express";

import User from "../models/User";

import {
  hashPassword,
  comparePassword,
} from "../utils/password";

import {
  generateToken,
} from "../utils/token";



export const register = async (
  req:Request,
  res:Response
)=>{

  try {

    const {
      name,
      email,
      password,
      currency,
    } = req.body;



    const existingUser =
      await User.findOne({
        email,
      });


    if(existingUser){

      return res.status(400).json({
        message:
        "User already exists",
      });

    }



    const hashedPassword =
      await hashPassword(password);



    const user =
      await User.create({

        name,

        email,

        password:
        hashedPassword,

        currency:
        currency || "USD",

      });



    const token =
      generateToken(
        user._id.toString()
      );



    res.cookie(
      "token",
      token,
      {
        httpOnly:true,
        secure:false,
        sameSite:"lax",
      }
    );



    res.status(201).json({

      message:
      "Account created successfully",

      user:{
        id:user._id,
        name:user.name,
        email:user.email,
        currency:user.currency,
      },

    });



  }catch(error){

    res.status(500).json({

      message:
      "Registration failed",

    });

  }

};





export const login = async (
req:Request,
res:Response
)=>{


try{


const {
email,
password,
}=req.body;



const user =
await User.findOne({
email,
});



if(!user){

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



if(!passwordMatch){

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
httpOnly:true,
secure:false,
sameSite:"lax",
}
);



res.json({

message:
"Login successful",

user:{
id:user._id,
name:user.name,
email:user.email,
currency:user.currency,
},

});



}catch(error){

res.status(500).json({

message:
"Login failed",

});

}

};