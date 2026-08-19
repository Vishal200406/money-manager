import { Response } from "express";


import {

AuthRequest

}

from "../middleware/authMiddleware";


import {

getExchangeRates

}

from "../services/currencyService";



export const getCurrencies =
async(

req:AuthRequest,

res:Response

)=>{


try{


const base =

(req.query.base as string)

||

"USD";



const rates =

await getExchangeRates(
base
);



return res.json({

base,

rates

});



}catch(error){


return res.status(500).json({

message:
"Unable to load currencies"

});


}


};