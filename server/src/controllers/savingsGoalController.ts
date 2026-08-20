import {Request, Response} from "express";

import SavingsGoal from "../models/SavingsGoal";

import {
  createNotification
} from "../services/notificationService";





export const getGoals = async(

req:Request,

res:Response

)=>{


try{


const userId =

(req as any).user.id;



const goals = await SavingsGoal.find({

userId

});



return res.json(goals);



}

catch(error){


return res.status(500).json({

message:"Failed loading goals"

});


}


};









export const createGoal = async(

req:Request,

res:Response

)=>{


try{


const userId =

(req as any).user.id;



const goal = await SavingsGoal.create({

userId,

name:req.body.name,

targetAmount:req.body.targetAmount,

deadline:req.body.deadline

});



return res.status(201).json(goal);



}

catch(error){


return res.status(500).json({

message:"Failed creating goal"

});


}


};









export const deleteGoal = async(

req:Request,

res:Response

)=>{


try{


await SavingsGoal.findOneAndDelete({

_id:req.params.id,

userId:(req as any).user.id

});



return res.json({

message:"Goal deleted"

});


}

catch(error){


return res.status(500).json({

message:"Failed deleting goal"

});


}


};









export const addMoney = async(

req:Request,

res:Response

)=>{


try{


const userId =

(req as any).user.id;



const goal = await SavingsGoal.findOne({

_id:req.params.id,

userId

});



if(!goal){

return res.status(404).json({

message:"Goal not found"

});

}



goal.savedAmount +=

Number(req.body.amount);



await goal.save();







const percentage =

(goal.savedAmount /

goal.targetAmount) * 100;







if(percentage >= 100){


await createNotification(

userId,

"Goal Completed",

`You completed your ${goal.name} savings goal.`,

"goal"

);


}

else if(percentage >= 75){


await createNotification(

userId,

"Savings Goal Progress",

`You reached 75% of your ${goal.name} goal.`,

"goal"

);


}

else if(percentage >= 50){


await createNotification(

userId,

"Savings Goal Progress",

`You reached 50% of your ${goal.name} goal.`,

"goal"

);


}







return res.json(goal);



}

catch(error){


return res.status(500).json({

message:"Failed adding money"

});


}


};