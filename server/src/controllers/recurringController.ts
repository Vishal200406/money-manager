import { Response } from "express";

import {
  AuthRequest
} from "../middleware/authMiddleware";

import RecurringTransaction
from "../models/RecurringTransaction";

import {
  createNotification
} from "../services/notificationService";



// Create recurring payment
export const createRecurring =
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




const recurring =

await RecurringTransaction.create({

userId,

...req.body,

});







// Payment reminder notification

const nextDate =

new Date(

recurring.nextDate

);



const today =

new Date();



const difference =

Math.ceil(

(nextDate.getTime() -

today.getTime())

/

(1000 * 60 * 60 * 24)

);





if(

difference <= 7 &&

difference >= 0

){



await createNotification(

userId,

"Upcoming Payment",

`Your recurring payment of ${recurring.amount} is due soon.`,

"payment"

);



}







return res.status(201).json({

message:

"Recurring transaction created",

recurring

});



}catch(error){


console.error(error);


return res.status(500).json({

message:

"Failed to create recurring transaction"

});


}

};









// Get recurring payments
export const getRecurring =

async(

req:AuthRequest,

res:Response

)=>{


try{


const userId =

req.user?.id;



const recurring =

await RecurringTransaction.find({

userId

})

.populate(

"categoryId",

"name icon"

);



return res.json(recurring);



}catch(error){


return res.status(500).json({

message:

"Failed to fetch recurring transactions"

});


}

};









// Delete recurring payment
export const deleteRecurring =

async(

req:AuthRequest,

res:Response

)=>{


try{


const userId =

req.user?.id;



await RecurringTransaction.findOneAndDelete({

_id:req.params.id,

userId

});



return res.json({

message:

"Recurring transaction deleted"

});



}catch(error){


return res.status(500).json({

message:

"Failed to delete recurring transaction"

});


}

};