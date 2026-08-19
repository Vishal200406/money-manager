import { Response } from "express";

import {
  AuthRequest
} from "../middleware/authMiddleware";

import Transaction from "../models/Transaction";



export const getMonthlyReport = async (

req: AuthRequest,

res: Response

) => {


try {


const userId =
req.user?.id;



if(!userId){

return res.status(401).json({

message:
"Not authenticated"

});

}



const month =
Number(req.query.month)
||
new Date().getMonth()+1;



const year =
Number(req.query.year)
||
new Date().getFullYear();



const startDate =
new Date(
year,
month - 1,
1
);



const endDate =
new Date(
year,
month,
1
);



const transactions =
await Transaction.find({

userId,

date:{

$gte:startDate,

$lt:endDate

}

});



let income = 0;

let expenses = 0;



const categories:any = {};



transactions.forEach(
(transaction)=>{


if(transaction.type==="income"){

income += transaction.amount;

}



if(transaction.type==="expense"){

expenses += transaction.amount;



const category =
transaction.categoryId.toString();



if(!categories[category]){

categories[category]=0;

}


categories[category]
+= transaction.amount;


}


});



return res.json({

month,

year,

income,

expenses,

savings:
income-expenses,

categories

});



}catch(error){


console.error(error);


return res.status(500).json({

message:
"Failed to generate report"

});


}


};