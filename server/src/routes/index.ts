import { Router } from "express";

import authRoutes from "./authRoutes";

import transactionRoutes from "./transactionRoutes";


const router =
Router();



router.get(

"/health",

(_req,res)=>{

res.json({

status:"OK",

service:
"Money Manager API",

});

}

);



router.use(

"/auth",

authRoutes

);



router.use(

"/transactions",

transactionRoutes

);



export default router;