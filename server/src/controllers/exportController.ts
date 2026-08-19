import {
Response
}
from "express";


import {

AuthRequest

}

from "../middleware/authMiddleware";


import Transaction from "../models/Transaction";


import {

generatePDF,

generateExcel

}

from "../services/exportService";





export const exportPDF =
async(

req:AuthRequest,

res:Response

)=>{


try{


const userId =
req.user?.id;



const transactions =
await Transaction.find({

userId

});



let income=0;

let expenses=0;



transactions.forEach(

(transaction)=>{


if(transaction.type==="income"){

income+=transaction.amount;

}

else{

expenses+=transaction.amount;

}


}

);



const pdf =
generatePDF({

income,

expenses,

savings:
income-expenses

});



res.setHeader(

"Content-Type",

"application/pdf"

);



res.setHeader(

"Content-Disposition",

"attachment; filename=report.pdf"

);



pdf.pipe(res);



pdf.end();



}catch(error){


return res.status(500).json({

message:
"PDF export failed"

});


}

};







export const exportExcel =
async(

req:AuthRequest,

res:Response

)=>{


try{


const userId =
req.user?.id;



const transactions =
await Transaction.find({

userId

});



let income=0;

let expenses=0;



transactions.forEach(

(transaction)=>{


if(transaction.type==="income"){

income+=transaction.amount;

}

else{

expenses+=transaction.amount;

}


}

);



const buffer =
await generateExcel({

income,

expenses,

savings:
income-expenses

});



res.setHeader(

"Content-Type",

"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"

);



res.setHeader(

"Content-Disposition",

"attachment; filename=report.xlsx"

);



res.send(buffer);



}catch(error){


return res.status(500).json({

message:
"Excel export failed"

});


}

};