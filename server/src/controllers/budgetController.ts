import { Response } from "express";

import Budget from "../models/Budget";

import {
AuthRequest
} from "../middleware/authMiddleware";



export const createBudget = async(

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



const budget =
await Budget.create({

userId,

...req.body,

});



return res.status(201).json({

message:
"Budget created successfully",

budget,

});



}catch(error){

console.error(error);


return res.status(500).json({

message:
"Failed to create budget",

});

}

};







export const getBudgets = async(

req:AuthRequest,

res:Response

)=>{


try{


const userId =
req.user?.id;



const budgets =
await Budget.find({

userId,

})

.populate(

"categoryId",

"name icon"

);



return res.json(
budgets
);



}catch(error){


return res.status(500).json({

message:
"Failed to fetch budgets",

});

}

};






export const deleteBudget = async(

req:AuthRequest,

res:Response

)=>{


try{


const userId =
req.user?.id;



await Budget.findOneAndDelete({

_id:req.params.id,

userId,

});



return res.json({

message:
"Budget deleted",

});



}catch(error){


return res.status(500).json({

message:
"Failed to delete budget",

});

}

};