import { Router } from "express";


import authRoutes from "./authRoutes";

import transactionRoutes from "./transactionRoutes";

import categoryRoutes from "./categoryRoutes";

import budgetRoutes from "./budgetRoutes";

import analyticsRoutes from "./analyticsRoutes";

import reportRoutes from "./reportRoutes";

import currencyRoutes from "./currencyRoutes";

import recurringRoutes from "./recurringRoutes";

import savingsGoalRoutes from "./savingsGoalRoutes";

import notificationRoutes from "./notificationRoutes";

import userRoutes from "./userRoutes";



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


router.use(
"/recurring",
recurringRoutes
);


router.use(
"/goals",
savingsGoalRoutes
);


router.use(
"/notifications",
notificationRoutes
);


router.use(
"/users",
userRoutes
);



export default router;