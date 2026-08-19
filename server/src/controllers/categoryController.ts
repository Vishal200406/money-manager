import { Response } from "express";

import Category from "../models/Category";

import {
AuthRequest
} from "../middleware/authMiddleware";



export const createCategory = async(

req:AuthRequest,

res:Response

)=>{


try{


const userId =
req.user?.id;


if(!userId){

return res.status(401).json({

message:
"Not authenticated",

});

}



const category =
await Category.create({

userId,

...req.body,

});



return res.status(201).json({

message:
"Category created",

category,

});



}catch(error){

console.error(error);


return res.status(500).json({

message:
"Failed to create category",

});


}

};





export const getCategories = async(

req:AuthRequest,

res:Response

)=>{


try{


const userId =
req.user?.id;



const categories =
await Category.find({

userId,

})

.sort({

type:1,

name:1,

});



return res.json(categories);



}catch(error){


return res.status(500).json({

message:
"Failed to fetch categories",

});


}

};





export const deleteCategory = async(

req:AuthRequest,

res:Response

)=>{


try{


const userId =
req.user?.id;



await Category.findOneAndDelete({

_id:req.params.id,

userId,

});



return res.json({

message:
"Category deleted",

});



}catch(error){


return res.status(500).json({

message:
"Failed to delete category",

});


}

};