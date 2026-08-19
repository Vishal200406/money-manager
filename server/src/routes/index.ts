import { Router } from "express";


import authRoutes from "./authRoutes";

import transactionRoutes from "./transactionRoutes";

import categoryRoutes from "./categoryRoutes";



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



router.use(

"/categories",

categoryRoutes

);



export default router;