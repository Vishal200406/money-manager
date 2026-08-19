import { Router } from "express";


import {

createGoal,

getGoals,

updateGoalAmount,

deleteGoal

}

from "../controllers/savingsGoalController";


import {

protect

}

from "../middleware/authMiddleware";



const router =
Router();



router.post(

"/",

protect,

createGoal

);



router.get(

"/",

protect,

getGoals

);



router.patch(

"/:id",

protect,

updateGoalAmount

);



router.delete(

"/:id",

protect,

deleteGoal

);



export default router;