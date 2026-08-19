import { Router } from "express";


import {

createBudget,

getBudgets,

deleteBudget,

} from "../controllers/budgetController";


import {
protect
} from "../middleware/authMiddleware";



const router =
Router();



router.post(

"/",

protect,

createBudget

);



router.get(

"/",

protect,

getBudgets

);



router.delete(

"/:id",

protect,

deleteBudget

);



export default router;