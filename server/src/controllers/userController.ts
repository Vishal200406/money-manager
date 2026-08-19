import { Response } from "express";

import {
AuthRequest
} from "../middleware/authMiddleware";

import User from "../models/User";

import {
hashPassword,
comparePassword
} from "../utils/password";



export const getProfile =
async(

req:AuthRequest,

res:Response

)=>{


try{


const userId =
req.user?.id;



const user =
await User.findById(

userId

)
.select(
"-password"
);



return res.json(user);



}catch(error){


console.error(error);


return res.status(500).json({

message:
"Failed to load profile"

});


}

};






export const updateProfile =
async(

req:AuthRequest,

res:Response

)=>{


try{


const userId =
req.user?.id;



const {

name,

currency

}

=req.body;



const user =
await User.findByIdAndUpdate(

userId,

{

name,

currency

},

{

new:true

}

)
.select(
"-password"
);



return res.json(user);



}catch(error){


return res.status(500).json({

message:
"Failed to update profile"

});


}

};








export const changePassword =
async(

req:AuthRequest,

res:Response

)=>{


try{


const userId =
req.user?.id;



const {

currentPassword,

newPassword

}

=req.body;



const user =
await User.findById(

userId

);



if(!user){

return res.status(404).json({

message:
"User not found"

});

}




const valid =
await comparePassword(

currentPassword,

user.password

);



if(!valid){

return res.status(400).json({

message:
"Current password incorrect"

});

}



user.password =
await hashPassword(

newPassword

);



await user.save();



return res.json({

message:
"Password updated successfully"

});



}catch(error){


return res.status(500).json({

message:
"Password update failed"

});


}

};