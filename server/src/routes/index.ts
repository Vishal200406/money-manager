import { Router } from "express";


import authRoutes from "./authRoutes";

import transactionRoutes from "./transactionRoutes";

import categoryRoutes from "./categoryRoutes";

import budgetRoutes from "./budgetRoutes";

import analyticsRoutes from "./analyticsRoutes";

import reportRoutes from "./reportRoutes";

import currencyRoutes from "./currencyRoutes";



const router =
Router();



router.get(

"/health",

(_req,res)=>{

res.json({

status:"OK",

service:
"Money Manager API"

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



router.use(
"/budgets",
budgetRoutes
);



router.use(
"/analytics",
analyticsRoutes
);



router.use(
"/reports",
reportRoutes
);



router.use(
"/currency",
currencyRoutes
);



export default router;