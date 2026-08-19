import {Request, Response} from "express";

import SavingsGoal from "../models/SavingsGoal";





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



res.json(goals);



}

catch(error){


res.status(500).json({

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



res.status(201).json(goal);



}

catch(error){


res.status(500).json({

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



res.json({

message:"Goal deleted"

});


}

catch(error){


res.status(500).json({

message:"Failed deleting goal"

});


}


};









export const addMoney = async(

req:Request,

res:Response

)=>{


try{


const goal = await SavingsGoal.findOne({

_id:req.params.id,

userId:(req as any).user.id

});



if(!goal){

return res.status(404).json({

message:"Goal not found"

});

}



goal.savedAmount +=

Number(req.body.amount);



await goal.save();



res.json(goal);



}

catch(error){


res.status(500).json({

message:"Failed adding money"

});


}


};