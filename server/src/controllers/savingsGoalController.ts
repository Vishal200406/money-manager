import { Response } from "express";


import {

AuthRequest

}

from "../middleware/authMiddleware";


import SavingsGoal

from "../models/SavingsGoal";



// Create goal
export const createGoal =
async(

req:AuthRequest,

res:Response

)=>{


try{


const userId =
req.user?.id;



if(!userId){

return res.status(401).json({

message:
"Not authenticated"

});

}



const goal =
await SavingsGoal.create({

userId,

...req.body,

});



return res.status(201).json({

message:
"Savings goal created",

goal

});



}catch(error){


console.error(error);


return res.status(500).json({

message:
"Failed to create goal"

});


}

};







// Get goals
export const getGoals =
async(

req:AuthRequest,

res:Response

)=>{


try{


const userId =
req.user?.id;



const goals =
await SavingsGoal.find({

userId

})

.sort({

createdAt:-1

});



return res.json(goals);



}catch(error){


return res.status(500).json({

message:
"Failed to fetch goals"

});


}

};







// Update contribution
export const updateGoalAmount =
async(

req:AuthRequest,

res:Response

)=>{


try{


const userId =
req.user?.id;


const {

amount

}

=req.body;



const goal =
await SavingsGoal.findOneAndUpdate(

{

_id:req.params.id,

userId

},

{

$inc:{

currentAmount:
amount

}

},

{

new:true

}

);



if(!goal){

return res.status(404).json({

message:
"Goal not found"

});

}



return res.json(goal);



}catch(error){


return res.status(500).json({

message:
"Failed to update goal"

});


}

};







// Delete goal
export const deleteGoal =
async(

req:AuthRequest,

res:Response

)=>{


try{


const userId =
req.user?.id;



await SavingsGoal.findOneAndDelete({

_id:req.params.id,

userId

});



return res.json({

message:
"Goal deleted"

});



}catch(error){


return res.status(500).json({

message:
"Failed to delete goal"

});


}

};